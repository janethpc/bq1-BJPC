import { ModalnewOrder } from "../components/ModalnewOrder"
import { ProductList } from "../components/ProductList"
import { ResumenPedido } from "../components/ResumenPedido"
import { useState } from 'react'



export const MeseroOrdenes = ({value}) => {
  const [ counter, setCounter ] = useState(value);
  const  handleAdd = () => { 
      setCounter(counter+1)
  }
  const handleDelet = () => {
    setCounter(counter-1)
  }

  const handleReset= () => {
    setCounter(value)
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
          <button onClick={handleAdd}>+1</button>
          <button onClick={handleDelet}>-1</button>
          <button onClick={handleReset}>reset</button>
          <ProductList type='Desayuno'/>
          
          
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
      <li className="list-group-item">{counter}</li>
      <li className="list-group-item"></li>
    </ul>
    <div className="card-footer">
      <p> Nombre del Mesero: <span>fulanito</span></p>
      <a>hora de salida: </a>
      <div className="text-end">
        <button href="#" className="btn btn-primary">Entregar</button>
      </div>
    </div>
  </div>
  <br/>

        <ResumenPedido/>
          

        </div>
      </div>
    </>

  )
}