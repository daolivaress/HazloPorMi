import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import SignUpLoginPage from "./pages/SignUpLoginPage/SignUpLoginPage";
import CreateTaskPage from "./pages/CreateTaskPage/CreateTaskPage";
import SelectWorkerPage from "./pages/SelectWorkerPage/SelectWorkerPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <SignUpLoginPage/>,
  },
  {
    path: "/signup/password",
    element: <SignUpLoginPage/>,
  },
  {
    path: "/login/email",
    element: <SignUpLoginPage/>,
  },
  {
    path: "/create-task/details",
    element: <CreateTaskPage/>,
  },
  {
    path: "/create-task/select-worker",
    element: <SelectWorkerPage/>,
  }
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
