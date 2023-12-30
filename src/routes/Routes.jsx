import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Jobs from "../pages/Jobs/Jobs";
import Contact from "../pages/Contact/Contact";
import Favorite from "../pages/Favorite/Favorite";
import SignIn from "../Component/Sign In/SignIn";
import SignUp from "../Component/Sign Up/SignUp";
import NotFound from "../pages/Not Found/NotFound";

const routes = createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {
              path:'/',
              element:<Home/>
            },
            {
              path:'/about',
              element:<About/>
            },
            {
              path:'/jobs',
              element:<Jobs/>
            },
            {
              path:'/contact',
              element:<Contact/>
            },
            {
              path:'/favorite',
              element:<Favorite/>
            },
            {
              path:'/signin',
              element:<SignIn/>
            },
            {
              path:'/signup',
              element:<SignUp/>
            },
        ]
        
    },
    {
        path:'*',
        element:<NotFound/>
    }
])
export default routes ;