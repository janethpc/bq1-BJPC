import { ModalnewOrder } from "../components/ModalnewOrder"
import { ProductList } from "../components/ProductList"

export const MeseroOrdenes = () => {

  return (
    <>
      <h1>Nuevo Pedido</h1>
      <div class="row justify-content-between">
        <div class="col-5">
          <h2>Menu</h2>
          <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            modal</button>

          <ModalnewOrder />
          <hr />

          <h2 className="btn">Desayuno</h2>
          <hr />

          <ProductList type='Desayuno' />

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
              <li className="list-group-item ">
                <input className="form-check-input" type="checkbox" id="checkboxNoLabel" />
                <lebel className="form-check-label">An item</lebel>
              </li>
              <li className="list-group-item">A second item</li>
              <li className="list-group-item">A third item</li>
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
          <div className='card'>
            <h5 className="card-header">
              Orden:
            </h5>
            <ul className="list-group list-group-flush">
              <li className="list-group-item ">
                <input className="form-check-input" type="checkbox" id="checkboxNoLabel" />
                <lebel className="form-check-label">An item</lebel>
              </li>
              <li className="list-group-item">A second item</li>
              <li className="list-group-item">A third item</li>
            </ul>
            <div className="card-footer">
              <p> Nombre del Mesero: <span>fulanito</span></p>
              <a>hora de salida: </a>
              <div className="text-end">
                <button href="#" className="btn btn-primary">Entregar</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>

  )
}