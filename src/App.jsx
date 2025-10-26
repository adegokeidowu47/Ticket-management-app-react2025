import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import MainLayout from './Layout/MainLayout';
import HomePage from './pages/Homepage';
import NotFoundPage from './pages/NotFoundPage';
import LoginPage from './pages/loginPage';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route path='/' element={<HomePage />} />
        <Route path='/*' element={<NotFoundPage />} />
        <Route path='/login' element={<LoginPage />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
