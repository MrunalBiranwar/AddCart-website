import React from 'react'

export default function Product(props) {
  return (
    <div className='row'>
      <div className="col-4">
        <h2>{props.product.productName}<span className="badge text-bg-secondary text-center">₹{props.product.price}</span></h2>
      </div>
      <div className="col-2">
        <div class="btn-group" role="group" aria-label="Basic mixed styles example">
        <button type="button" class="btn btn-danger" onClick={()=>{
            props.decrementQuantity(props.index)
        }}>-</button>
        <button type="button" class="btn btn-warning">{props.product.quantity}</button>
        <button type="button" class="btn btn-success" onClick={() =>{
            props.incrementQuantity(props.index)
            }}>+</button>
        </div>
      </div>
      <div className="col-2">
        {props.product.quantity*props.product.price}
      </div>
      <div className="col-4">
      <button type="button" class="btn btn-danger" onClick={()=>{
        props.removeproduct(props.index)
      }}>Remove</button>
      </div>
    </div>
  )
}
