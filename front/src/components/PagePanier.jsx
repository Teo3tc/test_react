import React, { useEffect, useState } from 'react'
import {useStore} from '../store/store'
import {ItemPanier} from './ItemPanier'

export const PagePanier =()=>{
    const panier = useStore(state => state.panier)
    const panierPage = useStore(state => state.panierPage)
    const [total, setTotal] = useState(0)
    useEffect(()=>{
        makeTotal()
    },[panierPage])
    const makeTotal = ()=>{
        let t = 0
        panier.forEach(el => {
            t += el.price
        });
        return setTotal(t / 100)
    }
    const listItemPanier = panier.map((el)=>
        <ItemPanier key={Math.random()} props={el}/>
    ) 
    const styles={
        display:panierPage? 'grid': 'none'
    }
    
    return(
        <div className='cl1 rw2 grid-full-fluid w100 w50_md xctr rgp-20' style={styles}>
            <div className=' grid-full-fluid xctr w90 '>
                <div className="grid-full-fluid xstrt cgp-10 ">
                    <div className='cl1 rw1'>
                        <svg className="svg__pannier"  viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 16C14.89 16 14 16.89 14 18C14 18.5304 14.2107 19.0391 14.5858 19.4142C14.9609 19.7893 15.4696 20 16 20C16.5304 20 17.0391 19.7893 17.4142 19.4142C17.7893 19.0391 18 18.5304 18 18C18 16.89 17.1 16 16 16ZM0 0V2H2L5.6 9.59L4.24 12.04C4.09 12.32 4 12.65 4 13C4 13.5304 4.21071 14.0391 4.58579 14.4142C4.96086 14.7893 5.46957 15 6 15H18V13H6.42C6.3537 13 6.29011 12.9737 6.24322 12.9268C6.19634 12.8799 6.17 12.8163 6.17 12.75C6.17 12.7 6.18 12.66 6.2 12.63L7.1 11H14.55C15.3 11 15.96 10.58 16.3 9.97L19.88 3.5C19.95 3.34 20 3.17 20 3C20 2.73478 19.8946 2.48043 19.7071 2.29289C19.5196 2.10536 19.2652 2 19 2H4.21L3.27 0H0ZM6 16C4.89 16 4 16.89 4 18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20C6.53043 20 7.03914 19.7893 7.41421 19.4142C7.78929 19.0391 8 18.5304 8 18C8 16.89 7.1 16 6 16Z" fill="#343434"/>
                        </svg>
                    </div>
                    <div className='cl2 rw1'>
                        <h3 className="fs-20">Votre panier</h3>
                    </div>
                </div>
            </div>
            {panierPage === true && 
            <div className="grid-full-fluid w90 xctr rgp-10">
                {listItemPanier}
            </div>}
            <div className="grid-full-fluid w95 xctr" id="total">
                <div className='cl1 rw1 xstrt'>
                    <h3 className="fs-20 fw-600 t-upper">Total</h3>
                </div>
                <div className='cl2 rw1 xend' >
                    <span className="fs-20 fw-600">{total}€</span>
                </div>
            </div>
            <div className=" w95 grid-full-fluid">
                <button className=" xend t-upper">Accéder au paiment</button>
            </div>
        </div>
    )
}
