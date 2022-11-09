import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectorIsLoggedIn } from 'redux/selectors';

export default function PublicRoute({
  children,
  restricted = false,
  redirectTo = '/',
}) {
  const isLoggedIn = useSelector(selectorIsLoggedIn);

  const shouldRedirect = isLoggedIn && restricted;

  return (
    <>
      {shouldRedirect ? <Navigate to={redirectTo} replace /> : children}
    </>
  );
}