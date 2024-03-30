import React from 'react'
import { NavLink } from 'react-router-dom';

const Details = ({ details,setProducts }) => {

    return (
        <>
            <div className='details'>
                <div className='details__image'>
                    <img src={details?.images} />
                </div>
                <div className='details__box'>
                    <p className='details__title'>
                        {details?.title}
                    </p>
                    <p className='details__cat'>
                        Category: {details?.category?.name}
                    </p>
                    <p className='details__desc'>
                        {details?.description}
                    </p>
                    <div className='details__price_box'>
                        <p className='details__price' >
                            {details?.price * 2}$
                        </p>
                        <NavLink to='/basket'>
                            <button onClick={()=>setProducts(details)} className='details__button'>
                                Add to basket
                            </button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Details