import { createBrowserRouter } from "react-router-dom";
import Maine from "../share/Maine/Maine";
import Home from "../Components/Pages/Home/Home/Home";

export const router = createBrowserRouter([
    {
        path : '/',
        element : <Maine/>,
        children : [
            {
                path : '/',
                element : <Home/>
            }
        ]
    }
])