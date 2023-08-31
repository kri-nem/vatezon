import { useState, useEffect } from "react"
import ProductList from "../components/ProductsList"

const Products = () => {
    const [products, setProducts] = useState([])
    const [filter, setFilter] = useState()
    //const [name, setName] = useState('') miert nem up-to-date a set-em? async tudom de hogy lehetne megoldani

    useEffect(() => {
        fetch(`/api/products/`)
        .then(res => res.json())
        .then((data) => {
            setProducts(data)
            console.log(data);
            //console.log(products);
        })
        .catch(err => console.error(err))
    }, [])

    const chooseFilter = (e) => {
        setFilter(e.target.value);
        console.log(e.target.value);
    }

    const chooseCategory = (e) => {
        //setName(e.target.value)
        if (filter !== '' && e.target.value !== '') {
            let path = `api/products/${filter + e.target.value}`
            fetch(path)
                .then(res => res.json())
                .then((data) => {
                    setProducts(data)
                    console.log(path);
                })
                .catch(err => console.error(err))
        } else {
            fetch(`/api/products/`)
            .then(res => res.json())
            .then((data) => {
                setProducts(data)
                console.log(data);
                //console.log(products);
            })
            .catch(err => console.error(err))
        }
    }

    return (
        <ProductList products={products} chooseFilter={chooseFilter} filter={filter} chooseCategory={chooseCategory} />
    )
}

export default Products;