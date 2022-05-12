import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import { Box, ButtonBase, Typography } from '@mui/material';

export default function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Box sx={{ flexGrow: 2, display: 'flex' }}>
      <ButtonBase component={NavLink} to="/">
        <Typography variant="h6" component="h2" sx={{ mr: 2 }}>
          Homepage
        </Typography>
      </ButtonBase>
      {isLoggedIn && (
        <ButtonBase component={NavLink} to="/contacts">
          <Typography variant="h6" component="h2">
            Contacts
          </Typography>
        </ButtonBase>
      )}
    </Box>
  );
}
