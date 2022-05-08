import { useSelector, useDispatch } from 'react-redux';
import { authOperations, authSelectors } from '../redux/auth';

export default function UserMenu() {
  const dispatch = useDispatch();
  const userName = useSelector(authSelectors.getUserName);
  return (
    <>
      <span>Welcome, {userName}</span>

      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Logout
      </button>
    </>
  );
}
