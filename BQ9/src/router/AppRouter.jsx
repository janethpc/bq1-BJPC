import {Route, Routes } from "react-router-dom";
import { LoginPage } from "../auth/pages/login";
import { BQroutes } from "../vistas/routes/BQroutes";


export const AppRouter = () => {
    return (
        <>
        

            <Routes>
                <Route path="Login" element={<LoginPage />} />
                <Route path="/*" element={<BQroutes/>} />

            </Routes>
        </>
    )
}