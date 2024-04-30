import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";
import AddArt from "../pages/AddArt/AddArt";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import ArtCraft from "../pages/Art&Craft/ArtCraft";
import Details from "../pages/Art&Craft/Details";
import MyArt from "../pages/MyArt/MyArt";
import Update from "../pages/MyArt/Update";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://ink-scape-sever.vercel.app/arts"),
      },

      {
        path: "/artCraft",
        element: <ArtCraft></ArtCraft>,
        loader: () => fetch("https://ink-scape-sever.vercel.app/arts"),
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <Details></Details>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://ink-scape-sever.vercel.app/arts/${params.id}`),
      },
      {
        path: "/addArt",
        element: (
          <PrivateRoute>
            <AddArt></AddArt>
          </PrivateRoute>
        ),
      },
      {
        path: "/myArt",
        element: (
          <PrivateRoute>
            <MyArt></MyArt>
          </PrivateRoute>
        ),
      },
      {
        path: "/update/:id",
        element: <Update></Update>,
        loader: ({ params }) =>
          fetch(`https://ink-scape-sever.vercel.app/arts/${params.id}`),
      },

      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
