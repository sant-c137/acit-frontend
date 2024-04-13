import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../auth/AuthProvider';

export const ProtectedRoute = () => {
  const auth = useAuth();

  return auth.isAuthenticated ? <Outlet /> : <Navigate to="/sign-in" />;
};
