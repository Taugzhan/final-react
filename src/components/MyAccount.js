import React from 'react'

const MyAccount = () => {
  return (
   <>
   <div className='myaccount'>
    <h2 className='myaccount__title'>
      Personal data
    </h2>
    <div className='myaccount__wrapper'>
      <div className='myaccount__card'>
        <h4 className='myaccount__subtitle'>
          Information
        </h4>
        <p>  User name </p>
        <p>  Phone number  </p>
        <p>  Address   </p>
      </div>
      <div className='myaccount__card'>
        <h4 className='myaccount__subtitle'>
          Purchases
        </h4>
        <p> Amount on account </p>
        <p> Amount of purchases </p>
      </div>
      <div className='myaccount__card'>
        <h4 className='myaccount__subtitle'>
          Payment methods
        </h4>
        <p> Link a card</p>
      </div>
    </div>
   </div>
   </>
  )
}

export default MyAccount