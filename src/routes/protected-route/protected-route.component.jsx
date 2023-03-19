import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ currentUser, children }) => {
  return currentUser ? children : <Navigate to="/" replace />;
}

export default ProtectedRoute;