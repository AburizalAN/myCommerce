import { Container, Typography, Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';


import useStyles from './style'


const Cart = ({cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart}) => {
    const classes = useStyles();

    const EmptyCart = () => {
        return(
            <Typography variant="subtitle1">
                You have no items in your shopping cart,
                <Link to="/ ">start adding some!</Link>
            </Typography>
        )
    }

    const FilledCart = () => {
        return(
            <>
            <Grid container spacing={3}>
                {cart.line_items.map(item => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
                        <CartItem item={item} onUpdateCartQty={handleUpdateCartQty} onRemoveCart={handleRemoveFromCart}/>
                    </Grid>
                ))}
            </Grid>
            <div className={classes.cardDetails}>
                    <Typography variant="h4">
                        SubTotal : {cart.subtotal.formatted_with_symbol}
                    </Typography>
                    <div>
                        <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={handleEmptyCart}>Empty Cart</Button>
                        <Button className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary" component={Link} to="/checkout">Check Out</Button>
                    </div>
            </div>
            </>
        )
    }

    if(!cart.line_items) return 'LoaDing...'

    return (
        <Container>
            <div className={classes.toolbar} />
            <Typography variant="h3" className={classes.title} gutterBottom>Your Shopping Cart</Typography>
            { !cart.line_items.length ? <EmptyCart /> : <FilledCart /> }
        </Container>
    )
}

export default Cart;