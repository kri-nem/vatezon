import { useState, useEffect } from "react"
import ProductsGrid from "../components/ProductsGrid"

const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('/api/products/all-grid')
            .then(res => res.json())
            .then((data) => {
                setProducts(data)
                console.log(data)
            })
            .catch(err => console.error(err))
    }, [])

    return (
        <ProductsGrid products={products}/>
    )
}

export default Products;