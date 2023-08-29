import {useEffect, useState} from 'react'

export default function GetGridViewProducts() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('/api/products/all')
            .then(res => res.json())
            .then((data) => {
                setProducts(data)
                console.log(data)
            })
            .catch(err => console.error(err))
    }, [])

    // function asd () {
    // const arr = [{name: "asd", price: "12", picture: "https://www.google.com/search?sca_esv=561004444&sxsrf=AB5stBgiVPx0lHzA46-iOfN3Mos7nDT_5A:1693317794376&q=beer&tbm=isch&source=lnms&sa=X&ved=2ahUKEwj_nICthIKBAxWMDOwKHR89DbsQ0pQJegQIDBAB&biw=1280&bih=571&dpr=1.5#imgrc=uwCO7rsEKkqloM"}]
    // setProducts(arr)
    // }

    return (
        <div>
            {products.map((product) => (
                <>
                    <h4>{product.name}</h4>
                    <h4>{product.price}</h4>
                    <h4>{product.picture}</h4>
                </>
            ))}
        </div>
    )
}