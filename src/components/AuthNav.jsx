import { Button, ButtonBase, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

export default function AuthNav() {
  return (
    <>
      <ButtonBase
        color="secondary"
        size="small"
        component={NavLink}
        to="/register"
        sx={{ mr: { xs: 0, md: 2 } }}
      >
        <Typography variant="h6" component="h2">
          Register
        </Typography>
      </ButtonBase>
      <ButtonBase
        color="secondary"
        size="small"
        component={NavLink}
        to="/login"
      >
        <Typography variant="h6" component="h2">
          Login
        </Typography>
      </ButtonBase>
      {/* <NavLink to="/register">Register</NavLink> */}
      {/* <NavLink to="/login">Login</NavLink> */}
    </>
  );
}
