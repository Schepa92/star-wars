import ErrorMessage from '@components/ErrorMessage';
import HomePage from '@containers/HomePage';
import PeoplePage from '@containers/PeoplePage';

const routesConfig = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/people',
    element: <PeoplePage />,
  },
  {
    path: '*',
    element: <ErrorMessage />,
  },
];

export default routesConfig;
