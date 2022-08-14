import { Button, Grid, Typography } from '@mui/material';
import CartContainer from '../components/Carts/CartContainer';
import { useSelector, useDispatch } from 'react-redux';
import { calculateTotals } from '../features/cart/cartSlice';
import { openModal } from '../features/common/modalSlice';
import { useEffect } from 'react';
const Home = () => {
  const { cartItems, total, amount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  if (amount < 1) {
    return (
      <Typography variant="h6" color={'red'}>
        No Item found
      </Typography>
    );
  }

  return (
    <>
      <Typography variant="h5" align="center">
        Shopping cart
      </Typography>

      <Grid container direction="row" spacing={2}>
        <Grid item xs={12} sm={6} lg={6} xl={6}>
          <CartContainer items={cartItems} />
        </Grid>
        <Grid item xs={12} sm={6} lg={6} xl={6} mt={15}>
          <Button variant="contained" sx={{ margin: '3px' }}>
            ${total.toFixed(2)}
          </Button>
          <Button variant="contained" onClick={() => dispatch(openModal())}>
            Clear Cart
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
