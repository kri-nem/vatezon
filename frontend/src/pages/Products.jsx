import {useState, useEffect} from "react"
import ProductList from "../components/ProductsList"
import {getProducts} from "../fetches.js";
import {getTags} from "../fetches.js";

const Products = () => {
    const [products, setProducts] = useState([])
    const [filter, setFilter] = useState('name/')
    const [category, setCategory] = useState("")
    const [tags, setTags] = useState([])

    useEffect(() => {
        getProducts()
            .then(res => res.json())
            .then((data) => {
                setProducts(data)
            })
            .catch(err => console.error(err))

        getTags()
            .then(res => res.json())
            .then((data) => {
                setTags(data)
            })
            .catch(err => console.error(err))
    }, [])

    const chooseFilter = (e) => {
        setFilter(e.target.value);
    }

    const chooseCategory = (e) => {
        if (filter !== '' && e.target.value !== '') {
            setCategory(e.target.value)
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
                })
                .catch(err => console.error(err))
        }
    }

    return (
        <ProductList category={category} products={products} chooseFilter={chooseFilter} filter={filter}
                     chooseCategory={chooseCategory} tagsName={tags}/>
    )
}

export default Products;