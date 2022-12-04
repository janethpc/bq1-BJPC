import React from 'react'


const escuchaEvent= (memoizedProps) => {
  return console.log(memoizedProps.target)
  }

export const MenuCard = ({name, price, image,}) => {
  
  return (
    <div className='col'>
      <div className='card btn'>
        <div className='row no-gutters'>
         
            <img src={image} className='card-img-top' alt={name}/>
            
          
          

          <div className='col'>
            <div className='card-body'>
              <p className='' onClick={escuchaEvent}>{name}</p>
              <p>${price}</p>
             
            </div>
          </div>

          
        </div>
      </div>
    </div>
  )
}
