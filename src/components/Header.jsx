import React, { useState } from 'react';

import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  styled,
  Toolbar,
  Typography,
} from '@mui/material';

import { Link } from 'react-router-dom';
import { Menu, ShoppingCart } from '@mui/icons-material';
import { useSelector } from 'react-redux';

export default function Navbar() {
  const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  });

  const MenuBox = styled(Box)({
    display: 'flex',
    gap: 30,
    cursor: 'pointer',
  });
  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));
  const MenuItems = [
    { Name: 'Home', Link: '/' },
    { Name: 'About', Link: '/about' },
    { Name: 'Contact', Link: '/contact' },
  ];

  const [openMenu, setOpenMenu] = useState(false);
  const { amount } = useSelector((state) => state.cart);
  return (
    <>
      <AppBar
        sx={{ backgroundColor: '#e7e8c5' }}
        position="sticky"
        elevation={0}
      >
        <StyledToolbar>
          <Box flex={{ xs: 25, md: 1 }}>
            <Typography
              sx={{
                fontFamily: 'Rubik Moonrocks, cursive',
                fontSize: { xs: 30, md: 50 },
                textAlign: { xs: 'left', md: 'left' },
              }}
              variant="h4"
              color={'tomato'}
            >
              Cart
            </Typography>
          </Box>
          <MenuBox flex={1} sx={{ display: { xs: 'none', md: 'flex' } }}>
            {MenuItems.map((item, i) => (
              <Typography
                key={i}
                variant="h6"
                color={'tomato'}
                component={Link}
                to={item.Link}
                sx={{ textDecoration: 'none' }}
              >
                {item.Name}
              </Typography>
            ))}
          </MenuBox>
          <IconButton aria-label="cart">
            <StyledBadge badgeContent={amount} color="secondary">
              <ShoppingCart />
            </StyledBadge>
          </IconButton>
          <Menu
            sx={{
              display: { xs: 'flex', md: 'none' },
              cursor: 'pointer',
              color: 'black',
            }}
            onClick={() => setOpenMenu(!openMenu)}
          />
        </StyledToolbar>
        <Drawer
          anchor={'top'}
          open={openMenu}
          onClose={() => setOpenMenu(!openMenu)}
        >
          <List>
            {MenuItems.map((item, i) => (
              <ListItem key={i} onClick={() => setOpenMenu(!openMenu)}>
                <ListItemButton component={Link} to={item.Link} divider={true}>
                  {item.Name}
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </AppBar>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: { xs: 'column', md: 'row' },
          padding: 1,
        }}
      ></Box>
    </>
  );
}
