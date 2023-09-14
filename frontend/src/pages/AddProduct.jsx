import NewProductForm from "../components/NewProductForm";
import Loading from '../components/Loading';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";


const fetchProductTypes = () => {
    return fetch("/api/tags").then((res) => res.json());
}

async function sendData(url, formData) {
    const response = await fetch(url, {
        method: 'POST',
        body: formData
    });

    return response
}


const AddProduct = () => {
    const [loading, setLoading] = useState(true);
    const [productTypes, setProductTypes] = useState([]);
    const navigate = useNavigate();
    
    useEffect(() => {
        fetchProductTypes().then(productTypes => {
            setLoading(false);
            setProductTypes(productTypes)})
        }, [])
        
    const addNewProduct = (product) => {
        sendData('/api/products/1', product)
            .then(() => navigate('/products'))
    };
        
    if(loading){
        return <Loading/>
    }

    return (
        <NewProductForm productTypes={productTypes} addNewProduct={addNewProduct}/>
    )
}

export default AddProduct;