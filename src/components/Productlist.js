import React from 'react'
import Product from './Product.js'

export default function Productlist(props) {
  return (
    props.product.length > 0 ?
    props.product.map((product, i) =>{
        return <Product product={product} key={i} incrementQuantity={props.incrementQuantity} decrementQuantity={props.decrementQuantity} removeproduct={props.removeproduct} index={i}/>
    }): <h2>No Products Exist !!!</h2>
  )
}
