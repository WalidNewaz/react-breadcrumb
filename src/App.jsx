import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routes from './routes';
import Breadcrumbs from './components/Breadcrumbs';
import './App.css'

const flattenRoutes = (routes) => {
  const flatRoutes = [];
  routes.forEach((route) => {
    flatRoutes.push(route);
    if (route.children) {
      flatRoutes.push(...flattenRoutes(route.children));
    }
  });
  return flatRoutes;
};

const flattenedRoutes = flattenRoutes(routes);
console.log("flattenedRoutes", flattenedRoutes);

const router = createBrowserRouter(
  routes

  // routes.map((route) => {
  //   console.log("route", route);
  //   return ({
  //   ...route,
  //   handle: { breadcrumb: route.breadcrumb },
  // })})

  // flattenedRoutes.map((route) => ({
  //   ...route,
  //   handle: { breadcrumb: route.breadcrumb },
  // }))
);

function App() {
  return (
    <RouterProvider router={router}>
      {/* <Breadcrumbs /> */}
      {/* Other components */}
    </RouterProvider>
  )
}

export default App
