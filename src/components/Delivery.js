import React from 'react'
import cargo from "../assets/images/mono__cargo.png"
import rail from "../assets/images/mono__rai.webp"
import pickup from "../assets/images/mono__pick.jpeg"
import courier from "../assets/images/mono__corie.webp"

const Delivery = () => {
  return (
    <>
      <div className='delivery'>
        <h2 className='delivery__title'>
          We have some types of deliveries for your comfort!
        </h2>
        <div className='delivery__wrapper'>
          <div className='delivery__card'>
            <h4 className='delivery__subtitle'>
              Courier delivery
            </h4>
            <div className='delivery__image'>
              <img src={courier} alt='courier'/>
            </div>
            <p className='delivery__desc'>
              A courier is a person or company that provides a premium, all-inclusive delivery service that transports parcels or consignments from one place to another in the shortest time possible. While both individuals and companies alike can use this service, courier services are particularly useful for businesses that
              sell products online and need a fast, affordable, and trusted solution for sending packages
            </p>
          </div>
          <div className='delivery__card'>
            <h4 className='delivery__subtitle'>
              Rail delivery
            </h4>
            <div className='delivery__image'>
              <img src={rail} alt='courier'/>
            </div>
            <p className='delivery__desc'>
            The Rail Delivery Group Limited (RDG), previously the Association of Train Operating Companies, is the British rail industry membership body that brings together passenger and freight rail companies, Network Rail and High Speed 2.[2][3][4] The RDG is approximately half-funded by Network Rail,
              the remainder of its funding being provided by the various transport groups it represents.[2]
            </p>
          </div>
          <div className='delivery__card'>
            <h4 className='delivery__subtitle'>
             Pickup
            </h4>
            <div className='delivery__image'>
              <img src={pickup} alt='courier'/>
            </div>
            <p className='delivery__desc'>
            PICKUP’s fully vetted Delivery Pros are standing by––ready to move furniture or move mountains. To meet and exceed customer expectations. Every PICKUP
              Delivery Pro is ready to deliver real-time problem solving and first-rate customer service.
            </p>
          </div>

          <div className='delivery__card'>
            <h4 className='delivery__subtitle'>
              Cargo delivery
            </h4>
            <div className='delivery__image'>
              <img src={cargo} alt='courier'/>
            </div>
            <p className='delivery__desc'>
            We are committed to provide a challenging environment and opportunities to learn and growth. Creativity and innovation are promoted for improving the business efficiency. By improving our efficiency we expand the
              business day by day for delivering more to our customers. Cargo Delivery believes you need this!
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Delivery