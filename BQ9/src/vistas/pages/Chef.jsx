import React from 'react'

export const Chef = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-4 ">
                        <br />
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Orden:
                                    <p className='text-end'>#</p>
                                </h5>

                                <p className="card-text">Hora de entrada: 00:00 hrs.</p>
                                <span>Timer: 00:00 hrs </span>
                                <div className='text-end'>
                                    <a href="#" className="btn btn-primary">Preparar</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-8">
                        <br />
                        <div className="container px-4 text-center">
                        <div class="row gx-5">
                        <div class="col">
                        <div className="card p-3 border bg-light">
                            <h5 className="card-header"> Orden: # </h5>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <input className="form-check-input" type="checkbox" />
                                    An item</li>
                                <li className="list-group-item">
                                    <input className="form-check-input" type="checkbox" />
                                    A second item</li>
                                <li className="list-group-item">
                                    <input className="form-check-input" type="checkbox" />
                                    A third item</li>
                            </ul>
                            <div class="card-footer">
                                <p> Nombre del Mesero: <span>fulanito</span></p>
                                <a>hora de salida: </a>
                                <div className="text-end">
                                    <button href="#" className="btn btn-primary">Entregar</button>
                                </div>
                            </div>
                        </div>
                        </div>
                        <br/>
                        <div class="col">
                        <div className="card p-3 border bg-light">
                            <h5 className="card-header"> Orden: # </h5>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <input className="form-check-input" type="checkbox" />
                                    An item</li>
                                <li className="list-group-item">
                                    <input className="form-check-input" type="checkbox" />
                                    A second item</li>
                                <li className="list-group-item">
                                    <input className="form-check-input" type="checkbox" />
                                    A third item</li>
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
                </div>
                    </div>
                    </div>
                    </div>

                    
                      
                        
           
        </>

    )
}
