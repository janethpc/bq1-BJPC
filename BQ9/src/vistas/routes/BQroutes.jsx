import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "../../ui/NavBar";
import {MeseroOrdenes} from '../pages/meseroOrdenes';
import { MeseroPedidos } from "../pages/meseroPedidos";

export const BQroutes = () => {
  return (
    <>
        <Navbar/>

        <div className="container">
        
        <Routes>
                <Route path="Pedidos" element={<MeseroPedidos />} />
                <Route path="Ordenes" element={<MeseroOrdenes />} />
                
                <Route path="/" element={<Navigate to="/Login"/>} />

        </Routes>
        
        </div>
    </>
  )
}
