import { Typography } from '@mui/material';
import { Container } from '@mui/system';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import MyModal from './MyModal';
import { useSelector } from 'react-redux';
const Layout = () => {
  const { isOpen } = useSelector((state) => state.modal);
  return (
    <>
      <Header />

      <MyModal open={isOpen} />
      <Container maxWidth="xl">
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;
