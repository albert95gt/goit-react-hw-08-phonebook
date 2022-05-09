import { useSelector, useDispatch } from 'react-redux';
import { authOperations, authSelectors } from '../redux/auth';

export default function UserMenu() {
  const dispatch = useDispatch();
  const userEmail = useSelector(authSelectors.getUserEmail);
  return (
    <>
      <span>Welcome, {userEmail}</span>

      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Logout
      </button>
    </>
  );
}
