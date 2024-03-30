import React  from 'react'

const Basket = ({ details }) => {
return(
<>

    {   details.length===0 ? <h3 className='basket__empty'>Basket is empty!</h3> : 
   <div className='basket'>
        <h2 className='basket__title'>Basket</h2>
        <div className='basket__wrapper'>
          <div className='basket__card'>
            <div className='basket__image'>
              <img src={details?.images} />
            </div>
            <p className='basket__subtitle'>Product:{details?.title}</p>
            <p className='basket__category'>Category:{details?.category?.name}</p>
            <p className='basket__price'> Price:{details?.price * 2} $</p>
          </div>
        </div>
      </div>    } 

      </>


);

}

export default Basket