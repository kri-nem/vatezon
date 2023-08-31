import { useState } from "react"

export default function ProductList({ products, onNameFilterChange }) {

    return (
        <div>
            <input name="filter" onChange={(e) => onNameFilterChange(e.target.value)} />
            <div>
                {products.map((product) => (
                    <>
                        <h4>{product.name}</h4>
                        <h4>{product.price}</h4>
                        <h4>{product.pictureURL}</h4>
                    </>
                ))}
            </div>
        </div>
    )
}