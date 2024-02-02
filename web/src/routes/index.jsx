import { BrowserRouter } from "react-router-dom";

import { Layout } from "../layout";
import { AppRoutes } from "./app.routes";

import { AuthRoutes } from "./auth.routes";
import { useAuth } from "../hooks/auth";

export function Routes () {
    const { user } = useAuth();

    return (
        <BrowserRouter>
            {
                user 

                ?

                <Layout>
                    <AppRoutes />
                </Layout>

                :

                <AuthRoutes />
            }
        </BrowserRouter>
    )
}