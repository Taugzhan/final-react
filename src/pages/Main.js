import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const Main = ({ products, setDetails }) => {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    axios("https://api.escuelajs.co/api/v1/categories")
      .then(({ data }) => setCategories(data))
  }, [])

  return (
    <>
    <div className='main__products'>
      <h2 className='main__title'>
        Products
      </h2>
      <Swiper
        spaceBetween={30}
        slidesPerView={4}
        loop={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {products.map(card => (
          <SwiperSlide key={card.id}>
            <div className="main__card">
            <div className='main__image'>
              <Swiper
             paceBetween={30}
             pagination={{
               clickable: true,
             }}
             modules={[Pagination]}
             className="mySwiper"
              >    
                  {
                    card.images.map((el) => (
                      <SwiperSlide key={el}>
                        <img src={el} />
                      </SwiperSlide>
                    ))
                  }
                
              </Swiper>
            </div>
            <p className='main__name'>{card.title}</p>
            <NavLink to="/details" className="link">
              <button onClick={() => setDetails(card)} className='main__button' >
                show more
              </button>
            </NavLink> 
            </div>
  </SwiperSlide>
))}
      </Swiper >
      </div>
      <div className='main__advertisement'>
        <h1 className='main__sale'> Autumn SALES </h1>
      </div>
<div className='main__categories'>
      <h2 className='main__title'>
        Categories
      </h2>
      <Swiper
    spaceBetween={30}
    slidesPerView={4} 
    loop={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"

  >
                {
                    categories.map((el) => (
                      <SwiperSlide key={el.id}>
                         <div className="main__card">
                            <div className='main__categories-image'>
                            <img src={el.image}/>
                            </div>
                            <p className='main__name'>
                                {el.name}
                            </p>
                            <NavLink className="link" to="/cards">
                            <button  className='main__button' >
                              Go to store
                            </button>

                            </NavLink>
                            </div>
                            </SwiperSlide>
                    ))
                }
            </Swiper>
            </div>
   </>
  )
}

export default Main