import { Navigate, Route, Routes } from "react-router-dom";
import { MeseroPedidos } from "../vistas/pages/meseroPedidos";
import { MeseroOrdenes } from "../vistas/pages/meseroOrdenes";
import { LoginPage } from "../auth/pages/login";
import { Navbar } from "../ui/components/NavBar";

export const AppRouter = () => {
    return (
        <>
        <Navbar/>
            <Routes>
                <Route path="Pedidos" element={<MeseroPedidos />} />
                <Route path="Ordenes" element={<MeseroOrdenes />} />
                <Route path="Login" element={<LoginPage />} />
                <Route path="/" element={<Navigate to="/Pedidos"/>} />

            </Routes>
        </>
    )
}