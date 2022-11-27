import React from 'react'
import { getProductosBytype } from '../herlpers/getProductosBytype'

export const ProductList = ({type}) => {
   
    const productos = getProductosBytype{type};

  return (
    <div>ProductList</div>
  )
}
