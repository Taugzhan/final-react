import React,{useEffect,useState} from 'react'
import axios from 'axios'

const Users = () => {

    const [users,setUsers]=useState([])

    useEffect(()=>{
        axios("https://api.escuelajs.co/api/v1/users")
        .then(({data})=>setUsers(data))
        
    },[])

  return (
    <>
<div className='users'>
  <h2 className='users__title'>
    Our users 
  </h2>
    <div className='users__wrapper'>
        <div className='users__cards'>
        {
        users.map((el)=>(
            <>
            <div className='users__card'>     
           <div className='users__image'>
           <img  src={el.avatar}/>
           </div>
         <p className='users__email'>   Email:{el.email}</p>
           <p className='users__name'>
           Name: {el.name}
           </p>
           <p className='users__role'>
           Role: {el.role}
           </p>
            </div>
           </>
        ))
    }
        </div>
    </div>
</div>
           
   
    </>
  )
}

export default Users