import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from '@mui/material';
import { UnfoldLess, Add, Remove } from '@mui/icons-material';
import { removeItem, increase, decrease } from '../../features/cart/cartSlice';
import { useDispatch } from 'react-redux';

const CartContainer = ({ items }) => {
  const dispatch = useDispatch();
  return (
    <>
      {items.map((item) => (
        <Card
          sx={{
            display: 'flex',
            maxWidth: 500,
            margin: 1,
            textDecoration: 'none',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          key={item.id}
        >
          <CardMedia
            component="img"
            sx={{ width: 151 }}
            image={item.img}
            alt="vegi"
          />
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
              <Typography component="div" variant="h5">
                {item.title}
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                £{item.price}
              </Typography>
            </CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
              <Button
                size="small"
                variant="outlined"
                onClick={() => {
                  dispatch(removeItem(item.id));
                }}
              >
                Remove
              </Button>
            </Box>
          </Box>

          <IconButton>
            <UnfoldLess></UnfoldLess>
            {item.amount}
          </IconButton>
          <IconButton
            onClick={() => {
              dispatch(increase(item.id));
            }}
          >
            <Add />
          </IconButton>
          <IconButton
            onClick={() => {
              if (item.amount === 1) {
                dispatch(removeItem(item.id));
                return;
              }
              dispatch(decrease(item.id));
            }}
          >
            <Remove />
          </IconButton>
        </Card>
      ))}
    </>
  );
};

export default CartContainer;
