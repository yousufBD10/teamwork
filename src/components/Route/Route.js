import Main from "../Main/Main";
import Navbar from "../Navbar/Navbar";
import Home from "./Home/Home";

const { createBrowserRouter } = require("react-router-dom");





const router = createBrowserRouter([
   
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path: '/navbar',
        
                element:<Navbar></Navbar>,
            },
            {
                path: '/',
        
                element:<Home></Home>,
            }
        ]
    }
])

export default router;