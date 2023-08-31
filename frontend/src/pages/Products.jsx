import { useState, useEffect } from "react"
import ProductList from "../components/ProductsList"

const Products = () => {
    const [products, setProducts] = useState([])
    const [name, setName] = useState('')

    useEffect(() => {
        fetch(`/api/products/${name}`)
            .then(res => res.json())
            .then((data) => {
                setProducts(data)
            })
            .catch(err => console.error(err))
        }, [name])

    return (
        <ProductList products={products} onNameFilterChange={setName}/>
    )
}

export default Products;