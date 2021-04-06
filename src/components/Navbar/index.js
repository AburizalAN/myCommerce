import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';

import useStyles from './style';

const Navbar = ({length}) => {
    const classes = useStyles();
    const location = useLocation();

    return (
        <AppBar position="fixed" className={classes.appBar} color="inherit">
            <Toolbar className={classes.flex}>
                <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
                    Commerce.js
                </Typography>
                <div className={classes.button}>
                    {location.pathname == '/' && (
                        <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
                            <Badge badgeContent={length} color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    )}
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;