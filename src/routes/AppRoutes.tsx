import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { appRoutes } from './routesConfig';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {appRoutes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
