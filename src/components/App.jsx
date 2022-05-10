import { Routes, Route, Navigate } from 'react-router-dom';
import AppBar from './AppBar';
import { authOperations, authSelectors } from 'redux/auth';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, Suspense, lazy } from 'react';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const HomePage = lazy(() => import('pages/HomePage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));

export const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(
    authSelectors.getIsFetchingCurrentUser
  );
  console.log(isFetchingCurrentUser);

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);
  return (
    <>
      {isFetchingCurrentUser ? (
        <div>Skeleton</div>
      ) : (
        <>
          <Suspense fallback={<p>Loading...</p>}>
            <Routes>
              <Route path="/" element={<AppBar />}>
                <Route
                  index
                  element={
                    <PublicRoute>
                      <HomePage />
                    </PublicRoute>
                  }
                />
                <Route
                  path="register"
                  element={
                    <PublicRoute restricted>
                      <RegisterPage />
                    </PublicRoute>
                  }
                />
                <Route
                  path="login"
                  element={
                    <PublicRoute restricted>
                      <LoginPage />
                    </PublicRoute>
                  }
                />
                <Route
                  path="contacts"
                  element={
                    <PrivateRoute>
                      <ContactsPage />
                    </PrivateRoute>
                  }
                />
              </Route>

              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </Suspense>
        </>
      )}
    </>
  );
};
