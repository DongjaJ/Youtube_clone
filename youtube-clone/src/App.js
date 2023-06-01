import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './pages/Root';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Watch from './pages/Watch';
import Videos from './pages/Videos';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: 'videos', element: <Home /> },
      { path: 'videos/:keyword', element: <Videos /> },
      { path: 'videos/watch/:videoId', element: <Watch /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
