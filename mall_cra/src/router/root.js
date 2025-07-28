import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
// import About from "../pages/About";

import LoadingSpinner from "../components/LoadingSpinner";

// const Loading = <div>Loading....</div>

const Main = lazy(() => import("../pages/MainPage"));
const About = lazy(() => import("../pages/AboutPage"));

const root = createBrowserRouter([
    {
        path: "",
        element: <Suspense fallback={<LoadingSpinner />}><Main/></Suspense>
    },
    {
        path: "about",
        element: <Suspense fallback={<LoadingSpinner />}><About/></Suspense>
    }
])

export default root;