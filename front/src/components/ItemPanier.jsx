import React from 'react'

export const ItemPanier = ({props})=>{
    return(
        <div className="grid-full-fluid">
            <div className='cl1 rw1 xstrt'>
                <h3 className="fs-20 fw-400 ">{props.label}</h3>
            </div>
            <div className='cl2 rw1 xend'>
                <span className="fs-20 fw-600">{props.price /100}€</span>
            </div>
        </div>
    )
}