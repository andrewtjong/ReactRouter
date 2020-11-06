import React from "react"
import {useParams} from "react-router-dom"
import productsData from "./productsData"

function ProductDetail(props) {
    const {productId} = useParams()
    const thisProduct = productsData.find(product => product.id === productId)

    return (
        <div>
            <h1>Product Detail Page</h1>
            <h3>{thisProduct.name} - Price: ${thisProduct.price}</h3>
            <p>{thisProduct.description}</p>
        </div>
    )
}

export default ProductDetail