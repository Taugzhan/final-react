import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Categories = () => {

    const [categories, setCategories] = useState([])
    useEffect(() => {
        axios("https://api.escuelajs.co/api/v1/categories")
            .then(({ data }) => setCategories(data))
    }, [])


    return (
        <>
            <div className='categories'>
                {
                    categories.map((el) => (
                        <div className='categories__card'>
                            <>
                            <p className='categories__name'>
                                {el.name}
                            </p>
                            <div className='categories__image'>
                            <img src={el.image}/>
                            </div>
                            </>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Categories