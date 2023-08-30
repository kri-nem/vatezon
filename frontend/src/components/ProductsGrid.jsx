
export default function ProductsGrid({products}) {
    return (
        <div>
            {products.map((product) => (
                <>
                    <h4>{product.name}</h4>
                    <h4>{product.price}</h4>
                    <h4>{product.pictureURL}</h4>
                </>
            ))}
        </div>
    )
}