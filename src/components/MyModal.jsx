import { Box, Button, Modal, Typography } from '@mui/material';
import { closeModal } from '../features/common/modalSlice';
import { useDispatch } from 'react-redux';
import { clearCart } from '../features/cart/cartSlice';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const MyModal = ({ open }) => {
  const dispatch = useDispatch();
  return (
    <>
      <Modal
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        open={open}
      >
        <Box sx={style}>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Remove all item from cart
          </Typography>
          <Button
            variant="outlined"
            onClick={() => {
              dispatch(clearCart());
              dispatch(closeModal());
            }}
          >
            Confirm
          </Button>
          <Button
            variant="outlined"
            onClick={() => {
              dispatch(closeModal());
            }}
          >
            Close
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default MyModal;
