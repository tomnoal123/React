import { useState, useEffect } from "react";
function Produkty(){
    const [product, setProduct] = useState("");
    const [price, setPrice] = useState("")
    const [products, setProducts] = useState([]);

    useEffect(() =>{
        getProducts()
    }, [])

    async function getProducts() {
        const res = await fetch("http://localhost:5000/products")
        const data = await res.json()
        setProducts(data)
    }
    async function addProduct(){
        await fetch("http://localhost:5000/products", {
        method: "POST",
        headers: {
          "Content-Type" : "application/json"
        }, 
        body: JSON.stringify({
            price,
            product
        })
        })
        setPrice("");
        setProduct("");
        getProducts();
    }
    async function deleteProduct(id){
        await fetch(`http://localhost:5000/products/${id}`, {
            method: "DELETE", 
        })
        getProducts()
    }
    return(
        <div>
            <h1>Lista produktów</h1>
            <div>
                <input value={product} type="text" placeholder="podaj nazwę produktu" onChange={(e) => setProduct(e.target.value)} />
                <input value={price}  type="number" placeholder="podaj cenę produktu" onChange={(e) => setPrice(e.target.value)} />
                <button onClick={addProduct}>Add product</button>
                {products.map((product) =>(
                    <div key={product._id}>
                    <p>
                    {product.product} - {product.price} zł
                    </p> 
                    <button onClick={() => deleteProduct(product._id)}>Delete product</button>
                    </div>   
                ))}
            </div>
        </div>
    )
}
export default Produkty