import "./App.css";
import "./Carousel.css";
import Carousel from "./Carousel";
import PageError from "./PageError";
import Root from "./Root";
import {
  NavLink,
  Outlet,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <PageError />,
    children: [
      {
        path: "carousel",
        element: <Carousel />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
