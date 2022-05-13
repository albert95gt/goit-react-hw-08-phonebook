import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import UserMenu from '../UserMenu';
import Navigation from '../Navigation';
import AuthNav from '../AuthNav';
import {
  AppBar,
  Container,
  Toolbar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Avatar,
} from '@mui/material';
import { MenuSharp } from '@mui/icons-material';
import { useState } from 'react';

export default function Header() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const userName = useSelector(authSelectors.getUserName);

  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <AppBar
        position="static"
        color="secondary"
        sx={{ borderRadius: 2, mb: 2 }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Navigation />

            {isLoggedIn ? (
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    {userName && (
                      <Avatar variant="string">
                        {userName.split(' ')[0][0].toUpperCase()}
                      </Avatar>
                    )}
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem onClick={handleCloseUserMenu}>
                    <UserMenu />
                  </MenuItem>
                </Menu>
              </Box>
            ) : (
              <>
                <Box
                  sx={{
                    display: { xs: 'flex', md: 'none', alignItems: 'center' },
                  }}
                >
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
                      display: { xs: 'flex', md: 'none' },
                    }}
                  >
                    <MenuItem
                      onClick={handleCloseNavMenu}
                      sx={{
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        bgcolor: 'primary',
                      }}
                    >
                      <AuthNav />
                    </MenuItem>
                  </Menu>

                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                  >
                    <MenuSharp />
                  </IconButton>
                </Box>

                <Box
                  sx={{
                    display: { xs: 'none', md: 'flex', alignItems: 'center' },
                  }}
                >
                  <AuthNav />
                </Box>
              </>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      <Outlet />
    </>
  );
}
