// AuthProvider.js
import { PropTypes } from 'prop-types';
import { useContext, createContext, useState, useEffect, useRef } from 'react';

function parseJwt(token) {
  if (!token || typeof token !== 'string') {
    return null;
  }

  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(
    window
      .atob(base64)
      .split('')
      .map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join('')
  );

  return JSON.parse(jsonPayload);
}

function isTokenValid(token) {
  if (!token) {
    return false;
  }

  const parsedToken = parseJwt(token);
  return parsedToken && parsedToken.exp * 1000 > Date.now();
}

const AuthContext = createContext({ isAuthenticated: false });

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const token = sessionStorage.getItem('token');
    return isTokenValid(token);
  });

  const updateAuthStatus = (newStatus) => {
    setIsAuthenticated(newStatus);
  };

  const isAuthenticatedRef = useRef(isAuthenticated);

  useEffect(() => {
    isAuthenticatedRef.current = isAuthenticated;
  }, [isAuthenticated]);

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    const isTokenStillValid = isTokenValid(token);

    if (!isTokenStillValid && !isAuthenticatedRef.current) {
      setIsAuthenticated(false);
      sessionStorage.removeItem('token');
    }
  }, [isAuthenticated]);

  if (isAuthenticated === false) {
    sessionStorage.clear();
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, updateAuthStatus }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

AuthProvider.propTypes = {
  children: PropTypes.node,
};
