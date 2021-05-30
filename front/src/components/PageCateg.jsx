import React, { useEffect} from 'react'
import {useFetcher} from '../composition/fetcher'
import {Categ} from './Categ'
import {useStore} from '../store/store'


export const PageCateg =()=>{
    const {loading,data,error,fetchData} = useFetcher()
    const panierPage = useStore(state => state.panierPage)
    const styles={
        display:panierPage? 'none': 'grid'
    }
    useEffect(()=>{
        fetchData('http://localhost:3200/categories')
    },[])
    const listCateg = data.map((el)=>
        <Categ key={el.id} props={el}/>
    )
    
    
    return(
        <main className='cl1 rw2 grid-full-fluid w90 xctr w40_md' style={styles}>
           {loading === true && <p>Loading...</p>}
           {error === true && <p>error...</p>}
           {loading === false && 
            <section className=" grid-full-fluid rgp-60 ">
               {listCateg}
            </section>}
        </main>
    )
}

