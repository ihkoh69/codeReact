import { lazy, Suspense } from "react"
import LoadingSpinner from "../components/LoadingSpinner"
import { Navigate } from "react-router-dom"

const TodoList = lazy(() => import("../pages/todo/ListPage"))
const TodoRead = lazy(() => import("../pages/todo/ReadPage"))
const TodoAdd = lazy(() => import("../pages/todo/AddPage"))
const TodoModify = lazy(() => import("../pages/todo/ModifyPage"))

const todoRouter = () => {
    return [
        {
            path: "list",
            element: <Suspense fallback={<LoadingSpinner />}><TodoList /></Suspense>
        },
        {
            path: "",
            element: <Navigate replace to="list"></Navigate>
        },
        {
            path: "read/:tno",
            element: <Suspense fallback={<LoadingSpinner />}><TodoRead /></Suspense>
        },
        {
            path: 'add',
            element: <Suspense fallback={<LoadingSpinner />}><TodoAdd /></Suspense>
        },
        {
            path: 'modify/:tno',
            element: <Suspense fallback={<LoadingSpinner />}><TodoModify /></Suspense>
        }
    ]
}

export default todoRouter;