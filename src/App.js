import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cards from './components/Cards';
import Header from './components/Header';
import Users from './components/Users';
import Categories from './components/Categories';
import Delivery from './components/Delivery';
import MyAccount from './components/MyAccount';
import Basket from './components/Basket';
import Details from './components/Details';
import Main from './pages/Main';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Modal from './components/Modal';



const App = () => {

  const [details,setDetails]=useState([])
  const [dark,setDark]=useState(false)
  const [search,setSearch]=useState("")
  const [products, setProducts] = useState([])

    useEffect(() => {
        axios("https://api.escuelajs.co/api/v1/products")
            .then(({ data }) => setProducts(data))
    }, [])


    const[login,setLogin]=useState("")
   
  return (
    <>
       <BrowserRouter>
      <section style={{backgroundColor: dark ? "rgb(82, 75, 44)":'white'}}>
        <Header dark={dark} setDark={setDark} setSearch={setSearch}/>
        <div className='container'  >
        {login ?  
        <Routes>
            <Route element = {<Main products={products} setDetails={setDetails}  /> } path='/'/>  
           <Route element={<Users />} path="/users"/> , 
           <Route element={<Categories />} path='/categories' />,
           <Route element={<Delivery />} path="/delivery" />,
           <Route element={<MyAccount />} path='/myaccount' />,
           <Route element= {<Basket  details={details} />} path ="/basket"/>,
           <Route element={<Details details={details} setProducts={setProducts} />} path='/details'/>,
           <Route element={<Cards  setDetails={setDetails}  search={search} products={products}  />} path="/cards" />,
        </Routes>:
        <Modal setLogin={setLogin} path="/modal"/>
        }
        </div>
        <Footer/>
      </section>
      </BrowserRouter> 
    </>
  );
}

export default App;
