import React from 'react'

export const MenuCard = ({name, price, image}) => {
  const evento = () => { console.log('cafe')}
  return (
    <div className='col'>
      <div className='card btn' onClick={evento}>
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
