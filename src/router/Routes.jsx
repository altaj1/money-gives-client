import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Components/Home/Home";
import RegistrationForm from "../Components/RegistrationForm/RegistrationForm";
import Login from "../Components/RegistrationForm/Login";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../layout/DashboardLayout";
import ManageUsers from "../Components/pages/Admin/ManageUsers";
import AdminRoute from "./AdminRoute";
import ManageAgent from "../Components/pages/Admin/ManageAgent";
import RegistrationAgent from "../Components/RegistrationForm/RegistrationAgent";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
           {
            path:'/',
            element: <Home></Home>
           },
           {
            path:'/registration',
            element: <RegistrationForm></RegistrationForm>
           },
           {
            path:'/login',
            element: <Login></Login>
           },
        ]
    },
    {
        path: '/dashboard',
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
        {
            path: 'manage-users',
            element: (
              <PrivateRoute>
               <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
              </PrivateRoute>
            ),
          },
        {
            path: 'ManageAgent',
            element: (
              <PrivateRoute>
               <AdminRoute><ManageAgent></ManageAgent></AdminRoute>
              </PrivateRoute>
            ),
          },
        {
            path: 'agent-registration',
            element: (
              <PrivateRoute>
               <RegistrationAgent></RegistrationAgent>
              </PrivateRoute>
            ),
          },
    ]
    }
])