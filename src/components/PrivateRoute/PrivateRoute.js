import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectorIsLoggedIn } from 'redux/selectors';

export default function PrivateRoute({
  children,
  redirectTo = '/',
}) {
  const isLoggedIn = useSelector(selectorIsLoggedIn);
  return (
      <>{isLoggedIn ? children : <Navigate to={redirectTo} replace />}</>
  );
}