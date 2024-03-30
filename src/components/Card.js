import React from 'react'
import { NavLink } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import {  Pagination } from 'swiper/modules';


const Card = ({ product, setDetails, search}) => {
  return (
    <>
       {  product.title.toLowerCase().includes(search.toLowerCase())   &&   <NavLink to="/details" className="link">
          <div onClick={() => setDetails(product)} className='card'>
            <div className='card__image'>
            <Swiper
      direction={'vertical'}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
      >
        {
             product.images.map((el)=>(
              <SwiperSlide key={el}>
                <img src={el}/>
                 </SwiperSlide>
             ))
        }
              </Swiper>
            </div>
            <p className='card__title'>
              {product.title}
            </p>
            <p className='card__price'>
              {product.price * 2}$
            </p>
          </div>
        </NavLink> }
    </>
  )
}

export default Card