import { Grid } from '@material-ui/core';
import Product from './Product';

import useStyles from './style';

const Products = ({products, addToCart}) => {
    const classes = useStyles();

    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Grid container justify="center" spacing={4}>
                {products.map((product, i) => (
                    <Grid item key={i} xs={12} sm={6} md={4} lg={3} className="classes.grid">
                        <Product product={product} addToCart={addToCart} />
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}

export default Products;