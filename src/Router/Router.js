import { createBrowserRouter } from "react-router-dom";
import Maine from "../share/Maine/Maine";
import Home from "../Components/Pages/Home/Home/Home";
import Abouts from "../Components/Pages/Abouts/Abouts";
import Register from "../Components/Register/Register";
import Login from "../Components/Login/Login";
import PrivetRouter from "../Components/PrivetRout/PrivetRouter";
import ProductsPages from "../Components/ProductsPages/ProductsPages";
import MyOrders from "../Components/MyOrder/MyOrder";
import AddProducts from "../Components/AddProducts/AddProducts";
import YourProducts from "../Components/YourProducts/YourProducts";
import UpdateProduct from "../Components/UpdateProduct/UpdateProduct";
import SingleProduct from "../Components/SingleProduct/SingleProduct";
import OrderSuccess from "../Components/OrderSuccess/OrderSuccess";
import OrderError from "../Components/OrderError/OrderError";

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
            },
            {
                path : '/order',
                element : <PrivetRouter><MyOrders/></PrivetRouter>
            },{
                path : '/addProducts',
                element : <PrivetRouter><AddProducts/></PrivetRouter>
            },{
                path : '/yourProducts',
                element : <PrivetRouter><YourProducts/></PrivetRouter>
            },{
                path : '/product/:id',
                element : <UpdateProduct/>,
                loader : ({params}) => fetch(`https://car-shops-server-bd-arfat.vercel.app/products/${params.id}`)
            },{
                path : '/products/:id',
                element : <SingleProduct/>,
                loader : ({params}) => fetch(`https://car-shops-server-bd-arfat.vercel.app/products/${params.id}`)
            },{
                path : '/order/success',
                element : <OrderSuccess/>
            },{
                path : '/order/fail',
                element : <OrderError/>
            }
        ]
    }
])