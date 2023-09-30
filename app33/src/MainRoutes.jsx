import React, { Suspense } from 'react';
import { createBrowserRouter } from "react-router-dom";
import HomePage from "./Homepage";
import Registration from "./Registration.jsx";
import PricingPage from "./PricingPage.jsx";
import Features from "./Features.jsx";
import Examples from "./Examples.jsx";
import LoginPage from './LoginPage';
import AdminPage from './AdminPage';
import UserLoginPage from './UserLoginPage';
// import ClassComponent from "./Component/ClassComponent/ClassRoute.jsx";

const ClassComponent = React.lazy(() => import('./Component/ClassComponent/ClassRoutes'))
const FunctionalComponent = React.lazy(() => import('./Component/FunctionComponent/FunctionalRoute'))
// const Product = React.lazy(() => import('./ClassComponent'))
const MainRoutes = createBrowserRouter([
    {
        
        path: "/",
        element: <HomePage />,
    },   {
        path: "/registration",
        element: <Registration />,
    },
     {
        path: "/pricing",
        element: <PricingPage />,
    }, 
    {
        path: "/features",
        element: <Features />,
    }, 
    {
        path: "/examples",
        element: <Examples />,
        children: [
            {
              path: "classcomponent/*",
              element: <Suspense fallback={<h2>Loading...</h2>}><ClassComponent /></Suspense> ,
            },
            {
              path: "functionalcomponent/*",
              element: <Suspense fallback={<h2>Loading...</h2>}><FunctionalComponent /></Suspense> ,
            },
          ],
    },
    {
        path: "/LoginPage",
        element: <LoginPage/>,
    },
    {
        path: "/AdminPage",
        element: <AdminPage/>,
    },
    {
        path: "/UserLoginPage",
        element: <UserLoginPage/>,
    }

]);
export default MainRoutes;