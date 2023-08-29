
const NewProductForm = ({productTypes, addNewProduct}) => {
    const onSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const entries = [...formData.entries()];
    
        const product = entries.reduce((acc, entry) => {
          const [k, v] = entry;
          acc[k] = v;
          return acc;
        }, {});
    
        console.log(product);
        return addNewProduct(product);
      };

    return (
        <form className="NewProductForm" onSubmit={onSubmit}>
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
                    {productTypes.map((o,i) => <option key={i}>{o}</option>)}
                </select>
            </div>

            <div className="button">
                <button type="submit">Submit</button>
            </div>
        </form>
    )
}

export default NewProductForm