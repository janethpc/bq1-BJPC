import { ModalnewOrder } from "../components/ModalnewOrder"
import { ProductList } from "../components/ProductList"

export const MeseroOrdenes = () => {

    return (
        <>
        <h1>Nuevo Pedido</h1>
        <div class="row justify-content-between">
        <div class="col-8">
          <h2>Menu</h2>
          <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  modal</button>

          <ModalnewOrder />
          <hr/>

      <h2 className="btn">Desayuno</h2>
      <hr/>

      <ProductList type='Desayuno'/>
      
      <br/>

      <h3 className="btn">Almuerzo</h3>
      <hr/>
      

      <ProductList type='almuerzo'/>
        </div>
        <div class="col-4">
          <h2>Resumen de la orden</h2>
        </div>
      </div>
        </>
        
    )
}