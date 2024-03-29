import React from 'react';

import { AppBar, Box, Toolbar, Typography, Button, IconButton, Menu, Container, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Outlet, NavLink } from 'react-router-dom';

export default function Header(): JSX.Element {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>): void => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (): void => {
    setAnchorElNav(null);
  };

  return (
    <>
      <AppBar position="sticky" style={{ backgroundColor: 'black' }}>
        <Container
          maxWidth="xl"
          style={{ height: '96.5px' }}
        >
          <Toolbar
            disableGutters
            style={{ height: '96.5px' }}
          >
            <NavLink to="/orders" style={{ textDecoration: 'none', color: 'var(--color-active)' }}>
              <Typography
                variant="h6"
                noWrap
                component="a"
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'Playfair Display SC',
                  fontWeight: 700,
                  letterSpacing: '0.9rem',
                  color: 'inherit',
                  textDecoration: 'none',
                  fontSize: '20px'
                }}
              >
                IDEA
              </Typography>
            </NavLink>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >

                <MenuItem>
                  <Typography textAlign="center">
                    <NavLink to="/orders" style={{ textDecoration: 'none', color: 'var(--color-active)' }}>
                      Заказы
                    </NavLink>
                  </Typography>
                </MenuItem>
                <MenuItem>
                  <Typography textAlign="center">
                    <NavLink to="/product" style={{ textDecoration: 'none', color: 'var(--color-active)' }}>
                      Товары
                    </NavLink>
                  </Typography>
                </MenuItem>
                <MenuItem>
                  <Typography textAlign="center">
                    <NavLink to="/auth/logout" style={{ textDecoration: 'none', color: 'var(--color-active)' }}>
                      Выход
                    </NavLink>
                  </Typography>
                </MenuItem>

              </Menu>
            </Box>

            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/orders"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              IDEA
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block', borderStyle: 'none' }}
                style={{ marginRight: '25px', marginTop: '0px', marginBottom: '0px' }}
              >
                <NavLink to="/orders" style={{ textDecoration: 'none', color: 'white' }}>
                  Заказы
                </NavLink>
              </Button>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block', borderStyle: 'none' }}
                style={{ marginRight: '25px', marginTop: '0px', marginBottom: '0px' }}
              >
                <NavLink to="/product" style={{ textDecoration: 'none', color: 'white' }}>
                  Товары
                </NavLink>
              </Button>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block', borderStyle: 'none' }}
              >
                <NavLink to="/auth/logout" style={{ textDecoration: 'none', color: 'white' }}>
                  Выход
                </NavLink>
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Outlet />
    </>
  );
}
