import { useEffect, useState } from "react"

const fetchProductTypes = () => {
    return fetch("/api/products/types").then((res) => res.json());
}

const addProduct = (product) => {
    return fetch(`/api/employees/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    }).then((res) => res.json());
  };

const NewProductForm = () => {
    const[loading, setLoading] = useState(true);
    const [productTypes, setProductTypes] = useState([]);

    useEffect(() => {
        fetchProductTypes().then(productTypes => {
            setLoading(false);
            setProductTypes(productTypes)})
    }, [])


    if(loading){
        return (
            <>
                <h1>Loading....</h1>
            </>
        )
    }

    return (
        <form className="NewProductForm" onSubmit={addProduct}>
            <div className="control">
                <label htmlFor="name">Name:</label>
                <input name="name" id="name"/>
            </div>

            <div className="control">
                <label htmlFor="description">Description:</label>
                <input name="description" id="description"/>
            </div>

            <div className="control">
                <label htmlFor="price">Price:</label>
                <input name="price" id="price"/>
            </div>

            <div className="control">
                <label htmlFor="username">Username:</label>
                <input name="username" id="username"/>
            </div>

            <div>
                <label htmlFor="productType">Product type:</label>
                <select>
                    {productTypes.map((o,i) => <option id={i}>{o}</option>)}
                </select>
            </div>

            <div className="button">
                <button type="submit">Submit</button>
            </div>
        </form>
    )
}

export default NewProductForm