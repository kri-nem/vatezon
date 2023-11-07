import { useState, useEffect } from 'react'
import ProductList from '../components/ProductsList'
//import { getProducts, getTags, getProductsByName, getProductsByCategory } from '../fetches.js'
import { getProducts, getTags, getProductsBy } from '../fetches.js'

const Products = () => {
  const [products, setProducts] = useState([])
  const [filter, setFilter] = useState('')
  const [category, setCategory] = useState('')
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
    setFilter(e.target.value)
  }

  const chooseCategory = (e) => {
    if (filter !== '' && e.target.value !== '') {
      setCategory(e.target.value)
      getProductsBy(filter + e.target.value)
        .then(res => res.json())
        .then((data) => {
          setProducts(data)
        })
        .catch(err => console.error(err))
    } else {
      getProducts()
        .then(res => res.json())
        .then((data) => {
          setProducts(data)
        })
        .catch(err => console.error(err))
    }
  }

  return (<ProductList category={category} products={products} chooseFilter={chooseFilter} filter={filter}
                       chooseCategory={chooseCategory} tagsName={tags}/>)
}

export default Products