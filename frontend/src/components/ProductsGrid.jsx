
import { Link } from "react-router-dom"

export default function ProductsGrid({products}) {
    return (
        <div>
            {products.map((product) => (
                <Link key={product.id} to={`/product/${product.id}`}>
                <div>
                    <h4>{product.name}</h4>
                    <h4>{product.price}</h4>
                    <h4>{product.pictureURL}</h4>
                </div>
                </Link>
                
            ))}
        </div>
    )
}