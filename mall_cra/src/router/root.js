import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
// import About from "../pages/About";

import LoadingSpinner from "../components/LoadingSpinner";
import todoRouter from "./todoRouter";
import productsRouter from "./productsRouter";
import memberRouter from "./memberRouter";

// const Loading = <div>Loading....</div>

const Main = lazy(() => import("../pages/MainPage"));
const About = lazy(() => import("../pages/AboutPage"));
const TodoIndex = lazy(() => import("../pages/todo/IndexPage"));
const ProductsIndex = lazy(() => import("../pages/products/IndexPage"));

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
    },
    {
        path: "products",
        element: <Suspense fallback = {<LoadingSpinner />}><ProductsIndex /></Suspense>,
        children: productsRouter()
    },
    {
        path: "member",
        children: memberRouter()
    }
])

export default root;