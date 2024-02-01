import { BrowserRouter } from "react-router-dom";

import { Layout } from "../layout";
import { AppRoutes } from "./app.routes";

export function Routes () {
    return (
        <BrowserRouter>
            <Layout>
                <AppRoutes />
            </Layout>
        </BrowserRouter>
    )
}