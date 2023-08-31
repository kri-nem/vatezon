import { useState } from "react";

const NewProductForm = ({productTypes, addNewProduct}) => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [productType, setProductType] = useState("");
    const [pictureURL, setPictureURL] = useState("");

    
    const onSubmit = (e) => {
        e.preventDefault();
        const product = {
            name: name,
            description: description,
            price: price,
            productType: productType,
            pictureURL: pictureURL,
        }
        console.log(product);
        return addNewProduct(product);
    }

    return (
        <form className="NewProductForm" onSubmit={onSubmit}>
            <div className="control">
                <label htmlFor="name">Name:</label>
                <input name="name" id="name" defaultValue={name} onChange={(e) => setName(e.target.value)}/>
            </div>

            <div className="control">
                <label htmlFor="description">Description:</label>
                <input name="description" id="description" defaultValue={description} onChange={(e) => setDescription(e.target.value)}/>
            </div>

            <div className="control">
                <label htmlFor="price">Price:</label>
                <input name="price" id="price" defaultValue={price} onChange={(e) => setPrice(e.target.value)}/>
            </div>

            <div>
                <label htmlFor="productType">Product type:</label>
                <select onChange={(e) => setProductType(e.target.value)}>
                    <option disabled selected>Select a type!</option>
                    {productTypes.map((o,i) => <option key={i} value={o}>{o}</option>)}
                </select>
            </div>

            <div className="control">
                <label htmlFor="pictureURL">Picture URL:</label>
                <input name="pictureURL" id="pictureURL" defaultValue={pictureURL} onChange={(e) => setPictureURL(e.target.value)}/>
            </div>

            <div className="button">
                <button type="submit">Submit</button>
            </div>
        </form>
    )
}

export default NewProductForm