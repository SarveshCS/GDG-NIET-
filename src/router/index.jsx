import { createBrowserRouter } from 'react-router-dom';
import Landing from '../pages/landing';
import TeamPage from '../pages/team';
import EventsPage from '../pages/event';
import ExhibPro from '../pages/exhib';
import Media from '../pages/media';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />,
  },
  {
    path: '/team',
    element: <TeamPage />,
  },
  {
    path: '/events',
    element: <EventsPage />,
  },
  {
    path: '/media',
    element: <Media />,
  },
  {
    path: '/exhib',
    element: <ExhibPro />,
  },
]);

export default router; 