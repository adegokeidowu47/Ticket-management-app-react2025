import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import MainLayout from './Layout/MainLayout';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import LoginPage from './pages/loginPage';
// import DestinationPage from './pages/DestinationPage';
// import TechnologyPage from './pages/TechnologyPage';
// import CrewPage from './pages/CrewPage';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route path='/' element={<HomePage />} />
        <Route path='/*' element={<NotFoundPage />} />
        <Route path='/login' element={<LoginPage />} />
        {/* <Route path='/destination' element={<DestinationPage />} />
        <Route path='/technology' element={<TechnologyPage />} /> */}
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
