import { createBrowserRouter } from "react-router-dom";
import Layouts from "../Layouts/Layouts";
import Home from "../Pages/Home";
import Applied from "../Pages/Applied";
import Blogs from "../Pages/Blogs";
import Statistics from "../Pages/Statistics";
import Error from "../Pages/Error";
import JobDetails from "../Pages/JobDetails";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts></Layouts>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/applied",
        element: <Applied></Applied>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/jobDetails/:id",
        element: <JobDetails></JobDetails>,
        loader: () => fetch("jobs.json"),
      },
    ],
  },
]);
