import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, Typography, MenuItem, Menu} from "@material-ui/core";
import { ShoppingCart } from '@material-ui/icons';
import {Link, useLocation} from 'react-router-dom';
import useStyles from './styles';

const NavBar = ({totalItems}) => {
  const classes = useStyles();
  const location = useLocation();
  return (
    <div>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
            <img className={classes.image} src="https://www.designfreelogoonline.com/wp-content/uploads/2016/07/000749-online-store-logos-design-free-online-E-commerce-cart-logo-maker-02.png" height="25px" alt="logo"/>
            E-Commerce
          </Typography>
          <div className={classes.grow} />
          {(location.pathname === '/' ) &&(
            <div className={classes.button}>
              <IconButton component={Link} to="/cart" aria-label="Show cart item" color="inherit">  
                <Badge badgeContent={totalItems} color="secondary">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default NavBar
