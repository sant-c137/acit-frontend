import React, { Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { Loading } from './screens/Loading';

const Courses = React.lazy(() => import('./screens/Courses'));
const Articles = React.lazy(() => import('./screens/Articles'));
const AccreditationsAndPartners = React.lazy(() => import('./screens/AccreditationsAndPartners'));
const CallUs = React.lazy(() => import('./screens/CallUs'));
const Home = React.lazy(() => import('./screens/Home'));
const Login = React.lazy(() => import('./screens/Login'));
const NotFoundPage = React.lazy(() => import('./screens/NotFoundPage'));
const CreateAccount = React.lazy(() => import('./screens/CreateAccount'));
const StudentDashboard = React.lazy(() => import('./screens/StudentDashboard'));
const EditAccount = React.lazy(() => import('./screens/EditAccount'));
const ProtectedRoute = React.lazy(() => import('./components/ProtectedRoute'));

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<Loading />}>
        <Home />
      </Suspense>
    ),
    errorElement: <NotFoundPage />,
  },
  {
    path: '/sign-in',
    element: (
      <Suspense fallback={<Loading />}>
        <Login />
      </Suspense>
    ),
    errorElement: <NotFoundPage />,
  },
  {
    path: '/create-account',
    element: (
      <Suspense fallback={<Loading />}>
        <CreateAccount />
      </Suspense>
    ),
    errorElement: <NotFoundPage />,
  },
  {
    path: 'courses',
    element: (
      <Suspense fallback={<Loading />}>
        <Courses />
      </Suspense>
    ),
    errorElement: <NotFoundPage />,
  },
  {
    path: 'articles',
    element: (
      <Suspense fallback={<Loading />}>
        <Articles />
      </Suspense>
    ),
    errorElement: <NotFoundPage />,
  },
  {
    path: 'accreditations-and-partners',
    element: (
      <Suspense fallback={<Loading />}>
        <AccreditationsAndPartners />
      </Suspense>
    ),
    errorElement: <NotFoundPage />,
  },
  {
    path: 'call-us',
    element: (
      <Suspense fallback={<Loading />}>
        <CallUs />
      </Suspense>
    ),
    errorElement: <NotFoundPage />,
  },
  {
    path: '*',
    element: (
      <Suspense fallback={<Loading />}>
        <NotFoundPage />
      </Suspense>
    ),
  },
  {
    path: '/',
    element: (
      <Suspense fallback={<Loading />}>
        <ProtectedRoute />
      </Suspense>
    ),
    errorElement: <NotFoundPage />,
    children: [
      {
        path: 'dashboard',
        element: (
          <Suspense fallback={<Loading />}>
            <StudentDashboard />
          </Suspense>
        ),
        errorElement: <NotFoundPage />,
      },
      {
        path: 'dashboard/edit-account',
        element: (
          <Suspense fallback={<Loading />}>
            <EditAccount />
          </Suspense>
        ),
        errorElement: <NotFoundPage />,
      },
    ],
  },
]);

function App() {
  return <></>;
}

export default App;
