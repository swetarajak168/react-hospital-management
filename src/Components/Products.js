import React, { useEffect, useState } from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Products = () => {
    //for animation
    useEffect(() => {
        AOS.init();
      }, []);
    //set products fro here
    const [products, setProducts] = useState([])
    //api fetch
    const fetchUserData = () => {
        fetch("https://fakestoreapi.com/products")
            .then(response => {
                return response.json()
            })
            .then(data => {
                //console.log(data)
                setProducts(data)
            })
    }
    useEffect(() => {
        fetchUserData()
    }, [])
    return (
        <div  >
            {products.length > 0 && (
                <div className='lg:grid grid-cols-4 gap-1 justify-evenly' >
                    {products.map(product => (
                        <React.Fragment key={product.id}>
                            <div className='lg:rounded-full bg-amber-200 m-5 relative 'data-aos="zoom-in" data-aos-duration="2000">
                                <img src={product.image} alt='' key={product.id} className='object-cover  z-2 px-10 m-10 h-20' />
                                <div className=' transition duration-500 ease-in-out absolute bottom-0 pl-20 hover:-translate-y-1 z-10'>
                                    <SearchOutlinedIcon />
                                    <ShoppingCartOutlinedIcon />
                                    <FavoriteBorderOutlinedIcon />
                                </div>
                            </div>
                        </React.Fragment>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Products
