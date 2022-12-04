import { ModalnewOrder } from "../components/ModalnewOrder"
import { ProductList } from "../components/ProductList"
import { ResumenPedido } from "../components/ResumenPedido"
import { useState } from 'react'
import { pedido } from "../components/MenuCard"


export const MeseroOrdenes = () => {
  const [ counter, setCounter ] = useState(0);
  const  handleAdd = () => { 
      setCounter(counter+1)
  }

  return (
    <>
      <h1>Nuevo Pedido</h1>
      <div class="row justify-content-between">
        <div class="col-5">
          <h2>Menu</h2>
        
          <hr />

          <h2 className="btn">Desayuno</h2>
          <hr />
          <div>
            <button onClick={handleAdd}></button>
          <ProductList type='Desayuno'/>
          </div>
          <br />

          <h3 className="btn">Almuerzo</h3>
          <hr />


          <ProductList type='almuerzo' />
        </div>

        <div className="col-7">
          <h2>Resumen de la orden</h2>

          <div className='card'>
    <h5 className="card-header">
      Orden:
    </h5>
    <ul className="list-group list-group-flush">
      <li className="list-group-item ">{counter}</li>
      <li className="list-group-item"></li>
      <li className="list-group-item">{pedido}</li>
    </ul>
    <div className="card-footer">
      <p> Nombre del Mesero: <span>fulanito</span></p>
      <a>hora de salida: </a>
      <div className="text-end">
        <button href="#" className="btn btn-primary">Entregar</button>
      </div>
    </div>
  </div>

        <ResumenPedido/>
          

        </div>
      </div>
    </>

  )
}