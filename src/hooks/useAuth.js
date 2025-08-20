import { useSelector } from 'react-redux';

function useAuth() {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  return { isAuthenticated, user };
}

export default useAuth;