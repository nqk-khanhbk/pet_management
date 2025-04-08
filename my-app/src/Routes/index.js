import Dashboard from "../Apps/dashboard";
import LayoutAdmin from "../Apps/Layout/layoutAdmin";
import Login from "../Apps/Login";
import Pet from "../Apps/Pet";
import Register from "../Apps/Register";
import ServiceHistory from "../Apps/service/service-history";
import ServiceList from "../Apps/service/service-list";
import ServicePrice from "../Apps/service/service-price";
export const Routes = [
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
    },
    {  
        path: "/",
        element:<LayoutAdmin />,
        children:[
            {
                path:"/",
                element:<Dashboard />
            },
            {
                path:"/pet",
                element:<Pet />
            },
            {
                path:"/service/list",
                element:<ServiceList />
            },
            {
                path:"/service/history",
                element:<ServiceHistory />
            },
            {
                path:"/service/price",
                element:<ServicePrice />
            },
        ]
    }
    
]