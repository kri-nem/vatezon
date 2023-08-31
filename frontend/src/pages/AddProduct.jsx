import NewProductForm from "../components/NewProductForm";
import Loading from '../components/Loading';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";


const fetchProductTypes = () => {
    return fetch("/api/products/types").then((res) => res.json());
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
        return fetch(`/api/products`, {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(product),
        }).then((res) => res.json()).then(navigate("/products"));
    };
        
    if(loading){
        return <Loading/>
    }

    return (
        <NewProductForm productTypes={productTypes} addNewProduct={addNewProduct}/>
    )
}

export default AddProduct;