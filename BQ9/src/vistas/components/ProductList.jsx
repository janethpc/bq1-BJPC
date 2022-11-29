import React from 'react'
import { getProductosBytype } from '../herlpers/getProductosBytype'
import { MenuCard } from './MenuCard';

export const ProductList = ({type}) => {
   
    const productos = getProductosBytype(type);

  return (

    <div className='row rows-cols-1 row-cols-md-3 g-3'>
        {
            productos.map(producto => (
                <MenuCard key={producto.type}{...producto}/>
                
            ))
        }
    </div>

  )
}
