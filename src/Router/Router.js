import { createBrowserRouter } from "react-router-dom";
import Maine from "../share/Maine/Maine";

export const router = createBrowserRouter([
    {
        path : '/',
        element : <Maine/>,
        children : [
            {
                
            }
        ]
    }
])