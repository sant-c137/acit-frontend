import { Courses } from './screens/Courses';
import { Articles } from './screens/Articles';
import { AccreditationsAndPartners } from './screens/AccreditationsAndPartners';
import { CallUs } from './screens/CallUs';
import { Home } from './screens/Home';
import { Login } from './screens/Login';
import { NotFoundPage } from './screens/NotFoundPage';
import { CreateAccount } from './screens/CreateAccount';
import { StudentDashboard } from './screens/StudentDashboard';
import { EditAccount } from './screens/EditAccount';
import { ProtectedRoute } from './components/ProtectedRoute';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/sign-in',
    element: <Login />,
  },
  {
    path: '/create-account',
    element: <CreateAccount />,
  },
  {
    path: 'courses',
    element: <Courses />,
  },
  {
    path: 'articles',
    element: <Articles />,
  },
  {
    path: 'accreditations-and-partners',
    element: <AccreditationsAndPartners />,
  },
  {
    path: 'call-us',
    element: <CallUs />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
  {
    path: '/',
    element: <ProtectedRoute />,
    children: [
      {
        path: 'dashboard',
        element: <StudentDashboard />,
      },
      {
        path: 'dashboard/edit-account',
        element: <EditAccount />,
      },
    ],
  },
]);

function App() {
  return <></>;
}

export default App;
