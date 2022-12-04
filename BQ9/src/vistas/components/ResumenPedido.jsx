export const ResumenPedido = () => {
  return (
    <>
    <div className='card'>
    <h5 className="card-header">
      Orden:
    </h5>
    <ul className="list-group list-group-flush">
      <li className="list-group-item "></li>
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
  <br />
  <div className='card'>
    <h5 className="card-header">
      Orden:
    </h5>
    <ul className="list-group list-group-flush">
      <li className="form-check list-group-item">
        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
        <label className="form-check-label" for="flexCheckDefault">
          Default checkbox
        </label>
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
  </>
  )
}

