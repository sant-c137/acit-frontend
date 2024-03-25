import { StudentDashboard } from './screens/StudentDashboard';
import { Login } from './screens/Login';

function parseJwt(token) {
  if (!token || typeof token !== 'string') {
    return null;
  }

  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(
    window.atob(base64)
      .split('')
      .map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join('')
  );
  return JSON.parse(jsonPayload);
}

export const Main2 = () => {
  let tokenExistAndStillValid = false;
  const token = localStorage.getItem('token');
  if (token) {
    const parsedToken = parseJwt(token);
    tokenExistAndStillValid = parsedToken && parsedToken.exp * 1000 > Date.now();
  }

  console.log(tokenExistAndStillValid);
  return <>{tokenExistAndStillValid ? <StudentDashboard /> : <Login />}</>;
};