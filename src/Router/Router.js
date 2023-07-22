import { createBrowserRouter } from "react-router-dom";
import Maine from "../share/Maine/Maine";
import Home from "../Components/Pages/Home/Home/Home";
import Abouts from "../Components/Pages/Abouts/Abouts";
import Register from "../Components/Register/Register";
import Login from "../Components/Login/Login";
import PrivetRouter from "../Components/PrivetRout/PrivetRouter";
import ProductsPages from "../Components/ProductsPages/ProductsPages";

export const router = createBrowserRouter([
    {
        path : '/',
        element : <Maine/>,
        children : [
            {
                path : '/',
                element : <Home/>
            },
            {
                path : '/about',
                element : <Abouts/>
            },
            {
                path : '/products',
                element : <PrivetRouter><ProductsPages/></PrivetRouter>
            },
            {
                path : '/register',
                element : <Register/>
            },
            {
                path : '/login',
                element : <Login/>
            }
        ]
    }
])