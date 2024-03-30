import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './Card'


const Cards = ({ setDetails,search,products }) => {


    const [categories, setCategories] = useState([])
    useEffect(() => {
        axios("https://api.escuelajs.co/api/v1/categories")
            .then(({ data }) => setCategories(data))
    }, [])

    const [showCat, setShowCat] = useState("")

    return (
        <>
            <div className='main'>
                <div className='sidebar'  >
                    <div className='categories '   >
                        <p className='categories__title'>
                            CATEGORIES
                        </p>
                        <p className='categories__name' onClick={() => setShowCat("")}  >
                            All
                        </p>
                        {categories?.map((el) => (
                            <p className='categories__name' onClick={() => setShowCat(el.name)} >
                                {el.name}

                            </p>
                        ))}
                    </div>
                </div>
             <div className='cards'>
                     {
                      products.map((el) => (
                        showCat ? el.category.name === showCat &&  <Card product={el} setDetails={setDetails} search={search} /> : <Card product={el} setDetails={setDetails} search={search} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Cards