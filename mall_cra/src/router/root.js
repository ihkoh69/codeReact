import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
// import About from "../pages/About";

const Loading = <div>Loading....</div>
const Main = lazy(() => import("../pages/MainPage"));
const About = lazy(() => import("../pages/About"));

const root = createBrowserRouter([
    {
        path: "",
        element: <Suspense fallback={Loading}><Main/></Suspense>
    },
    {
        path: "about",
        element: <Suspense fallback={Loading}><About/></Suspense>
    }
])

export default root;