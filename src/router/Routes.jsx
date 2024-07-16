import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Components/Home/Home";
import RegistrationForm from "../Components/RegistrationForm/RegistrationForm";
import Login from "../Components/RegistrationForm/Login";

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
    }
])