import Home from "./Home/Home";

const { createBrowserRouter } = require("react-router-dom");





const router = createBrowserRouter([
   
    {
        path: '/',

        element:<Home></Home>,
    }
])

export default router;