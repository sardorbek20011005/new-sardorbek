import React from 'react';
import './style.css';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Container, Typography } from '@mui/material';

import AppBar from '@mui/material/AppBar';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';

import ListItemIcon from '@mui/material/ListItemIcon';
import { Link } from 'react-router-dom';

const drawerWidth = '100%';
const navItems = ['Home', 'About', 'Shop', 'Donate', 'Contact'];

const IndexNavbar = (props) => {

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Divider />
      <Box sx={{ display: { xs: 'inline', sm: 'inline', md: 'flex', lg: 'flex' } }}>
        <Link to="/home_1" style={{ textDecoration: 'none ', color: '#fff' }} >
          <ListItem disablePadding>
            <ListItemButton sx={{ '&:hover': { backgroundColor: '#000' }, textAlign: 'center' }}>
              <ListItemText primary="Home " />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to="/about" style={{ textDecoration: 'none ', color: '#fff' }} >
          <ListItem disablePadding>
            <ListItemButton sx={{ '&:hover': { backgroundColor: '#000' }, textAlign: 'center' }}>
              <ListItemText primary="About " />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to="/shop" style={{ textDecoration: 'none ', color: '#fff' }} >
          <ListItem disablePadding>
            <ListItemButton sx={{ '&:hover': { backgroundColor: '#000' }, textAlign: 'center' }}>
              <ListItemText primary="Shop " />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to="/donate" style={{ textDecoration: 'none ', color: 'blue' }} >
          <ListItem disablePadding>
            <ListItemButton sx={{ '&:hover': { backgroundColor: '#000' }, textAlign: 'center' }}>
              <ListItemText primary="Donate " />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to="/contact" style={{ textDecoration: 'none ', color: 'blue' }} >
          <ListItem disablePadding>
            <ListItemButton sx={{ '&:hover': { backgroundColor: '#000' }, textAlign: 'center' }}>
              <ListItemText primary="Contact " />
            </ListItemButton>
          </ListItem>
        </Link>
      </Box>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      sx={{
        width: '100%',
        zIndex: 10,
        // border: '1px solid red'
      }}
    >
      <Box sx={{ display: 'flex' }}>
        <AppBar component="nav" sx={{ backgroundColor: '#EB5757', boxShadow: 'none' }}>
          <Container>
            <Toolbar>
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 0.9, display: { xs: 'block', sm: 'block' } }}
              >
                <img src='https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e7ff57adad44d1f072965b6_logo.svg' />
              </Typography>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: 'block', md: 'none', lg: 'none' } }}
              >
                <MenuIcon />
              </IconButton>
              <Box sx={{ display: { xs: 'none', sm: 'none', md: 'block', lg: 'block' } }}>
                <Box sx={{ display: { xs: 'inline', sm: 'inline', md: 'flex', lg: 'flex' } }}>
                  <Link to="/home_1" style={{ textDecoration: 'none ', color: '#fff' }} >
                    <ListItemButton sx={{ '&:hover': { backgroundColor: '#000' }, textAlign: 'center' }}>
                      <ListItemText primary="Home " />
                    </ListItemButton>
                  </Link>
                  <Link to="/about" style={{ textDecoration: 'none ', color: '#fff' }} >
                    <ListItemButton sx={{ '&:hover': { backgroundColor: '#000' }, textAlign: 'center' }}>
                      <ListItemText primary="About " />
                    </ListItemButton>
                  </Link>
                  <Link to="/shop" style={{ textDecoration: 'none ', color: '#fff' }} >
                    <ListItem disablePadding>
                      <ListItemButton sx={{ '&:hover': { backgroundColor: '#000' }, textAlign: 'center' }}>
                        <ListItemText primary="Shop " />
                      </ListItemButton>
                    </ListItem>
                  </Link>
                  <Link to="/donate" style={{ textDecoration: 'none ', color: 'blue' }} >
                    <ListItem disablePadding>
                      <ListItemButton sx={{ '&:hover': { backgroundColor: '#000' }, textAlign: 'center' }}>
                        <ListItemText primary="Donate " />
                      </ListItemButton>
                    </ListItem>
                  </Link>
                  <Link to="/contact" style={{ textDecoration: 'none ', color: 'blue' }} >
                    <ListItem disablePadding>
                      <ListItemButton sx={{ '&:hover': { backgroundColor: '#000' }, textAlign: 'center' }}>
                        <ListItemText primary="Contact " />
                      </ListItemButton>
                    </ListItem>
                  </Link>
                </Box>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
        <Box component="nav">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', sm: 'block' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box component="main">
          <Toolbar />
        </Box>
      </Box>
    </Box >
  );
};

export default IndexNavbar;