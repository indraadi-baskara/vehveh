import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Landing from "~/features/Landing/Landing";

const ROUTES = {
  ROOT: "/",
};

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path={ROUTES.ROOT}>
      <Route path="" element={<Landing />} />
    </Route>
  )
);

export default function MainRouterProvider() {
  return <RouterProvider router={routes} />;
}
