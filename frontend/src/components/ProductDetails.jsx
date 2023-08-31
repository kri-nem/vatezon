import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function ProductDetails() {
    const [product, setProduct] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        fetch('/api/products/detailed/' + id)
            .then(res => res.json())
            .then(json => setProduct(json))
    }, [id])

    return (
        <>
            {product && 
                <>
                    <span><img src={product.pictureUrl} alt="product picture" /></span><span>
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                        <div><span>Price</span><span>{product.price}</span></div>
                        <div><span>Type</span><span>{product.productType}</span></div>
                        <div><span>Seller</span><span>{product.uploader}</span></div>
                        {product.buyer && <div><button>Buy</button></div>}
                    </span>
                </>}
        </>
    )
}