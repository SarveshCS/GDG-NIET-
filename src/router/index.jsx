import { createBrowserRouter, createHashRouter } from 'react-router-dom';
import Landing from '../pages/landing';
import TeamPage from '../pages/team';
import EventsPage from '../pages/event';
import ExhibPro from '../pages/exhib';
import Media from '../pages/media';
import NotFound from '../components/NotFound';

// Use HashRouter for better compatibility with static hosting
const router = createHashRouter([
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
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default router; 