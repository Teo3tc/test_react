import React, { useEffect,useState} from 'react'
import {useFetcher} from '../composition/fetcher'
import {Product} from './Product'

export const Categ = ({props})=>{
    const {loading,data,error,fetchData} = useFetcher()
    const [products, setProducts] = useState([])
    useEffect(()=>{
        fetchData('http://localhost:3200/products')
    },[])
    useEffect(()=>{
        setProducts(data.filter((el)=> el.category_id === props.id))
    },[data])

    const listProducts = products.map((el)=>
    <Product key={el.id} props={el}/>
    )
    return(
        <div className=" grid-full-fluid rgp-20">
            <h2 className='fs-20 t-white t-back__black xstrt w50 fw-400'>{props.label}</h2>
           {loading === true && <p>LOading...</p>}
           {error === true && <p>error...</p>}
           {loading === false && <div className="grid-full-fluid rgp-20">{listProducts}</div>}
        </div>
    )
}