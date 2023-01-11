import Home from "./Home/Home";
import Main from "./Main";

const { createBrowserRouter } = require("react-router-dom");
const { default: Navbar } = require("../Navbar/Navbar");




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