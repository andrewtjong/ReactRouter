import React from "react"
import {Link} from "react-router-dom"
import productsData from "./productsData"

function Products() {    
    const products = productsData.map(product => 
        <div key={product.id}>
            <h3><Link to={product.id}>{product.name}</Link> - ${product.price}</h3>
        </div>)

    return (
        <div>
            <h1>Products Page</h1>
            {products}
        </div>
    )
}

export default Products