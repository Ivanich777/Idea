import React from 'react';

import { AppBar, Box, Toolbar, Typography, Button, IconButton, Menu, Container, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Outlet, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import './header.css';

export default function Header(): JSX.Element {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>): void => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (): void => {
    setAnchorElNav(null);
  };

  const { user } = useSelector((state: RootState) => state.users);

  return (
    <>
      <AppBar position="sticky" style={{ backgroundColor: 'black' }}>
        <Container
          maxWidth="xl"
        >
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'Playfair Display SC',
                fontWeight: 700,
                letterSpacing: '.5rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              IDEA
            </Typography>

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
                <>
                  {user && (
                    <>
                      <MenuItem>
                        <Typography textAlign="center">
                          <NavLink to="/profile" style={{ textDecoration: 'none', color: 'var(--color-active)' }}>
                            Профиль
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
                    </>
                  )}
                  {!user && (
                    <>
                      <MenuItem>
                        <Typography textAlign="center">
                          <NavLink to="/auth/reg" style={{ textDecoration: 'none', color: 'var(--color-active)' }}>
                            Регистрация
                          </NavLink>
                        </Typography>
                      </MenuItem>
                      <MenuItem>
                        <Typography textAlign="center" style={{ textDecoration: 'none', color: 'var(--color-active)' }}>
                          <NavLink to="/auth/login">
                            Войти
                          </NavLink>
                        </Typography>
                      </MenuItem>
                    </>
                  )}
                </>
              </Menu>
            </Box>

            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
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
              {user && (
                <>
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                    <NavLink to="/basket" style={{ textDecoration: 'none', color: 'white' }}>
                      Корзина
                    </NavLink>
                  </Button>
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                    <NavLink to="/profile" style={{ textDecoration: 'none', color: 'white' }}>
                      Профиль
                    </NavLink>
                  </Button>
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                    <NavLink to="/auth/logout" style={{ textDecoration: 'none', color: 'white' }}>
                      Выход
                    </NavLink>
                  </Button>
                </>
              )}
              {!user && (
                <>
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                    <NavLink to="/auth/reg" style={{ textDecoration: 'none', color: 'white' }}>
                      Регистрация
                    </NavLink>
                  </Button>
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                    <NavLink to="/auth/login" style={{ textDecoration: 'none', color: 'white' }}>
                      Войти
                    </NavLink>
                  </Button>
                </>
              )}

            </Box>
            <IconButton color="inherit" sx={{ display: { xs: 'flex', md: 'none' } }}>
              <ShoppingCartIcon />
            </IconButton>

          </Toolbar>
        </Container>

      </AppBar>
      <Outlet />

    </>
  );
}
