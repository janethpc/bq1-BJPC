import React from 'react'

export const MenuCard = ({name, price, image}) => {

  return (
    <div className='col'>
      <div className='card btn'>
        <div className='row no-gutters'>
         
            <img src={image} className='card-img-top' alt={name}/>
          
          

          <div className='col'>
            <div className='card-body'>
              <p className=''>{name}</p>
              <p>${price}</p>
             
            </div>
          </div>

          
        </div>
      </div>
    </div>
  )
}
