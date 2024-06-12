import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import DashboardLayout from "../layouts/DashboardLayout";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import About from "../pages/About";
import Blog from "../pages/Blog";
import Products from "../pages/Products";
import PrivateRoute from "./private/PrivateRoute";
import AddProducts from "../pages/dashboard/AddProduct";
import AllProducts from "../pages/dashboard/AllProducts";
import ProductDetails from "../pages/dashboard/ProductDetails";
import EditProducts from "../pages/dashboard/EditProducts";
import EditProfile from "../pages/dashboard/EditProfile";
import Dashboard from "../pages/dashboard/Dashboard";
import AllUsers from "../pages/dashboard/AllUsers";
import Contact from "../pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/products",
        element: <Products />,
      },

      {
        path: "/products/:id",
        element: <ProductDetails />,
        loader: ({ params }) => fetch(`https://task-management-stride-server.onrender.com/products/${params.id}`),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },

  {
    path: "dashboard",
    element: <DashboardLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "home",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "profile/edit/:id",
        element: (
          <PrivateRoute>
            <EditProfile />
          </PrivateRoute>
        ),
        loader: ({ params }) => fetch(`https://task-management-stride-server.onrender.com/user/get/${params.id}`),
      },
      {
        path: "all-products",
        element: (
          <PrivateRoute>
            <AllProducts />
          </PrivateRoute>
        ),
      },
      {
        path: "all-users",
        element: (
          <PrivateRoute>
            <AllUsers />
          </PrivateRoute>
        ),
      },
      {
        path: "all-products/add-products",
        element: (
          <PrivateRoute>
            <AddProducts />
          </PrivateRoute>
        ),
      },
      {
        path: "all-products/edit/:id",
        element: (
          <PrivateRoute>
            <EditProducts />
          </PrivateRoute>
        ),
        loader: ({ params }) => fetch(`https://task-management-stride-server.onrender.com/products/${params.id}`),
      },
    ],
  },
]);
