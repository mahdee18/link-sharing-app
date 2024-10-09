import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import App from "../App";

export const router = createBrowserRouter([
    {

        path: "/",
        element: <Main />,
        errorElement: <>Error 404!</>,
        children: [
            {
                path: '/',
                element: <App></App>
            },
        ]

    },
]);