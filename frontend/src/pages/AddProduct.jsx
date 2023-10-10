import NewProductForm from '../components/NewProductForm'
import Loading from '../components/Loading'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { postNewProductForm } from '../fetches.js'
import { getTags } from '../fetches.js'

const AddProduct = () => {
  const [loading, setLoading] = useState(true)
  const [productTypes, setProductTypes] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    getTags()
      .then(res => res.json())
      .then(productTypes => {
        setLoading(false)
        setProductTypes(productTypes)
      })
  }, [])

  const addNewProduct = (product) => postNewProductForm(product)
    .then(() => navigate('/products'))

  if (loading) {
    return <Loading/>
  }

  return (<NewProductForm productTypes={productTypes} addNewProduct={addNewProduct}/>)
}

export default AddProduct