import { Button, Typography } from '@mui/material';
import { Logout } from '@mui/icons-material';
import { useSelector, useDispatch } from 'react-redux';
import { authOperations, authSelectors } from '../redux/auth';

export default function UserMenu() {
  const dispatch = useDispatch();
  const userEmail = useSelector(authSelectors.getUserEmail);
  return (
    <>
      <Typography variant="body1" component="span" sx={{ mr: 1 }}>
        {userEmail}
      </Typography>

      <Button
        size="small"
        variant="contained"
        color="secondary"
        endIcon={<Logout />}
        onClick={() => dispatch(authOperations.logOut())}
      >
        Logout
      </Button>
    </>
  );
}
