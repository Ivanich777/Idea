import React, { useState } from 'react';

import { AppBar, Box, Toolbar, Typography, Button, IconButton, Menu, Container, MenuItem, Badge } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Outlet, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import './header.css';
import RegistrationDesktop from '../Auth/Registration/RegistrationDesktop';
import LoginDesktop from '../Auth/Login/LoginDesktop';

export default function Header({ count }: { count: number }): JSX.Element {
  const [open, setOpen] = useState(false);
  const [logopen, setLogopen] = useState(false);

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>): void => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (): void => {
    setAnchorElNav(null);
  };

  const handleLogOpen = (): void => {
    setLogopen(true);
  };

  const handleLogClose = (): void => {
    setLogopen(false);
  };

  const regToLog = (): void => {
    setOpen(false);
    setLogopen(true);
  };
  const logToReg = (): void => {
    setLogopen(false);
    setOpen(true);
  };

  const { user } = useSelector((state: RootState) => state.users);

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
            <NavLink to="/" style={{ textDecoration: 'none', color: 'var(--color-active)' }}>
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
              <>
                {user && (
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
                  </Menu>
                )}
                {!user && (
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
                  </Menu>
                )}
              </>
            </Box>

            <NavLink to="/" style={{ textDecoration: 'none', color: 'var(--color-active)' }}>
              <Typography
                variant="h5"
                noWrap
                component="a"
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
            </NavLink>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
              {user && (
                <>
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                    style={{ marginRight: '25px', marginTop: '0px', marginBottom: '0px' }}
                  >
                    <Badge
                      color="success"
                      anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      badgeContent={count}
                    >
                      <NavLink to="/basket" style={{ textDecoration: 'none', color: 'white' }}>
                        <ShoppingCartIcon sx={{ fontSize: 30 }} />
                      </NavLink>
                    </Badge>
                  </Button>
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                    style={{ marginRight: '25px', marginTop: '0px', marginBottom: '0px' }}
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
                    onClick={() => setOpen(true)}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                    <p style={{ textDecoration: 'none', color: 'white', marginRight: '25px', marginTop: '0px', marginBottom: '0px' }}>Регистрация</p>
                  </Button>
                  <Button
                    onClick={handleLogOpen}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                    <p style={{ textDecoration: 'none', color: 'white' }}>Логин</p>
                  </Button>
                </>
              )}

            </Box>
            <IconButton color="inherit" sx={{ display: { xs: 'flex', md: 'none' } }}>
              <ShoppingCartIcon />
            </IconButton>
            <RegistrationDesktop
              handleRegClose={() => setOpen(false)}
              open={open}
              regToLog={regToLog}
              logopen={logopen}
            />
            <LoginDesktop
              handleLogClose={handleLogClose}
              logopen={logopen}
              open={open}
              logToReg={logToReg}
            />
          </Toolbar>
        </Container>
      </AppBar>
      <Outlet />
    </>
  );
}
