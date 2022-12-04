import React from 'react';

import { AppBar, Box, Toolbar, Typography, Button, IconButton, Menu, Container, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Outlet, NavLink } from 'react-router-dom';

export default function Header(): JSX.Element {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>): void => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (): void => {
    setAnchorElNav(null);
  };

  // const { user } = useSelector((state: RootState) => state.user);
  const user = {
    id: 0,
  };

  return (
    <>
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
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
              {user.id !== 0 && (
                <>
                  <MenuItem>
                    <Typography textAlign="center">
                      <NavLink to="/profile">
                        Профиль
                      </NavLink>
                    </Typography>
                  </MenuItem>
                  <MenuItem>
                    <Typography textAlign="center">
                      <NavLink to="/basket">
                        Корзина
                      </NavLink>
                    </Typography>
                  </MenuItem>
                  <MenuItem>
                    <Typography textAlign="center">
                      <NavLink to="/logout">
                        Выход
                      </NavLink>
                    </Typography>
                  </MenuItem>
                </>
              )}
              {user.id === 0 && (
                <>
                  <MenuItem>
                    <Typography textAlign="center">
                      <NavLink to="/registration">
                        Регистрация
                      </NavLink>
                    </Typography>
                  </MenuItem>
                  <MenuItem>
                    <Typography textAlign="center">
                      <NavLink to="/login">
                        Войти
                      </NavLink>
                    </Typography>
                  </MenuItem>
                  <MenuItem>
                    <Typography textAlign="center">
                      <NavLink to="/basket">
                        Корзина
                      </NavLink>
                    </Typography>
                  </MenuItem>
                </>
              )}
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
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
            {user.id !== 0 && (
              <>
                <Button
                  variant="outlined"
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  <NavLink to="/basket">
                    Корзина
                  </NavLink>
                </Button>
                <Button
                  variant="outlined"
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  <NavLink to="/profile">
                    Профиль
                  </NavLink>
                </Button>
                <Button
                  variant="outlined"
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  <NavLink to="/logout">
                    Выход
                  </NavLink>
                </Button>
              </>
            )}
            {user.id === 0 && (
              <>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  <NavLink to="/registration">
                    Регистрация
                  </NavLink>
                </Button>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  <NavLink to="/login">
                    Войти
                  </NavLink>
                </Button>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  <NavLink to="/basket">
                    Корзина
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
