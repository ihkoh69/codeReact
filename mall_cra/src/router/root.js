import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
// import About from "../pages/About";

import LoadingSpinner from "../components/LoadingSpinner";
import todoRouter from "./todoRouter";

// const Loading = <div>Loading....</div>

const Main = lazy(() => import("../pages/MainPage"));
const About = lazy(() => import("../pages/AboutPage"));
const TodoIndex = lazy(() => import("../pages/todo/IndexPage"));

const root = createBrowserRouter([
    {
        path: "",
        element: <Suspense fallback={<LoadingSpinner />}><Main/></Suspense>
    },
    {
        path: "about",
        element: <Suspense fallback={<LoadingSpinner />}><About/></Suspense>
    },
    {
        path: "todo",
        element: <Suspense fallback={<LoadingSpinner />}><TodoIndex /></Suspense>,
        children: todoRouter()
        // children: [
        //     {
        //         path: 'list',
        //         element: <Suspense fallback={<LoadingSpinner />}><TodoList /></Suspense>
        //     }
        // ]
    }
])

export default root;