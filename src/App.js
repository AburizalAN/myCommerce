import { useState, useEffect } from 'react';
import { Products, Navbar, Cart, Checkout} from './components';
import { commerce } from './lib/commerce';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState('');

  const fetchProducts = async () => {
    try {
      const { data } = await commerce.products.list();
      setProducts(data);
    } catch (e) {
      console.log(e)
    }
  }

  const fetchCart = async () => {
    try {
      setCart(await commerce.cart.retrieve())
    } catch (e) {
      console.log(e)
    }
  }

  const handleAddToCart = async (productId, quantity) => {
    const {cart} = await commerce.cart.add(productId, quantity);
    setCart(cart)
  }

  const handleUpdateCartQty = async (productId, quantity) => {
    const {cart} = await commerce.cart.update(productId, {quantity});
    setCart(cart)
  }

  const handleRemoveFromCart = async (productId) => {
    const {cart} = await commerce.cart.remove(productId);
    setCart(cart)
  }

  const handleEmptyCart = async () => {
    const {cart} =  await commerce.cart.empty();
    setCart(cart)
  }

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();
    setCart(newCart);
  }

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) =>{
    try {
      //const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);
      //setOrder(incomingOrder);
      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message);
    }
  }

  useEffect(() => {
    fetchProducts();
    fetchCart();
  },[]);

  console.log(cart);

  console.log(products);

  return (
    <Router>
      <div className="App">
        <Navbar length={cart.total_items}/>
        <Switch>
          <Route path="/cart">
            <Cart 
            cart={cart} 
            handleUpdateCartQty={handleUpdateCartQty}
            handleRemoveFromCart={handleRemoveFromCart}
            handleEmptyCart={handleEmptyCart}
            />
          </Route>
          <Route path="/checkout">
            <Checkout
              cart={cart}
              order={order}
              onCaptureCheckout={handleCaptureCheckout}
              error={errorMessage} 
            /> 
          </Route>
          <Route path="/">
            <Products products={products} addToCart={handleAddToCart}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
