import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import MainLayout from "../layout/MainLayout";
import Favorites from "../pages/Favorites";
import About from "../pages/About";
import PhoneDetails from "../pages/PhoneDetails";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                Component: Home,
                loader: () => fetch('phones.json'),
            },
            {
                path: "/favorites",
                Component: Favorites,
            },
            {
                path: "/about",
                Component: About,
            },
            {
                path: "/phone-details",
                Component: PhoneDetails,
            }
        ]
    },
]);

export default router;