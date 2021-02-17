import React from 'react';
import { Container, Grid, Typography, Button } from '@material-ui/core';
import CartItem from './CartItem/CartItem';
import useStyles from './styles';
import { Link } from 'react-router-dom';
const Cart = ({ cart, handleUpdateQty,handleEmptyCart,handleRemoveFromCart }) => {
  const classes = useStyles();
  
  const EmptyCart = () => (
    <Typography variant="subtitle1"> You have no item in your shopping cart.</Typography>
  );

  const NotEmptyCart = () => (
    <>
      <Grid container spacing={3}>
        {cart.line_items.map((item) => (
          <Grid item xs={12} sm={4} key={item.id}>
            <CartItem item={item}
              handleUpdateQty={handleUpdateQty}
              handleRemoveFromCart={handleRemoveFromCart}
            />
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography variant="h5">Subtotal: {cart.subtotal.formatted_with_symbol}</Typography>
        <div>
          <Button className={classes.emptyButton} size="large" type="button" color="secondary" variant="contained" onClick={handleEmptyCart}>Empty Cart</Button>
          <Button className={classes.checkoutButton} size="large" type="button" color="primary" variant="contained" component={Link} to="/checkout" >Check Out</Button>
        </div>
      </div>
    </>
  );

  if (!cart.line_items) return 'Loading';

  return (
    <Container>
      <div className={classes.toolbar} />
        <Typography className={classes.title} variant="h6" gutterBottom>Your Shopping Cart</Typography>
        {!cart.line_items.length ? <EmptyCart /> : <NotEmptyCart />}
    </Container>
  )
}

export default Cart;
