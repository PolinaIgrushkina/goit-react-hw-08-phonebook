import AppBar from './AppBar/AppBar';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';
import RegisterView from 'views/RegisterView/RegisterView';
import LoginView from 'views/LoginView/LoginView';
import { Route, Routes } from 'react-router-dom';
import ContactsView from 'views/ContactsView/ContactsView';
import HomeView from 'views/HomeView/HomeView';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCurrentUser } from 'redux/Auth/auth-operations';
import { selectorIsFetchingCurrent } from 'redux/selectors';

export function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(selectorIsFetchingCurrent);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <div>
      {!isFetchingCurrentUser && (
        <>
          <AppBar />
          <Routes>
            <Route path="/" element={<HomeView />}></Route>

            <Route
              path="/register"
              element={
                <PublicRoute
                  exact
                  path="/register"
                  redirectTo="/contacts"
                  restricted
                >
                  <RegisterView />
                </PublicRoute>
              }
            />

            <Route
              path="/login"
              element={
                <PublicRoute
                  exact
                  path="/login"
                  redirectTo="/contacts"
                  restricted
                >
                  <LoginView />
                </PublicRoute>
              }
            />

            <Route
              path="/contacts"
              element={
                <PrivateRoute path="/contacts" redirectTo="/login">
                  <ContactsView />
                </PrivateRoute>
              }
            />
          </Routes>
        </>
      )}
    </div>
  );
}
