import { ProductList } from "../components/ProductList"


export const MeseroPedidos = () => {
      

  return (
    <>
    
      <h1>Pedido Nuevo</h1>
      <hr/>

      <p className="btn">Desayuno</p>
      <hr/>

      <ProductList type='Desayuno'/>
      
      <br/>

      <p className="btn">Almuerzo</p>
      <hr/>
      

      <ProductList type='almuerzo'/>

       
    </>
    
  )
}
