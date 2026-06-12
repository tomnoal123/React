function ProductForm({
    name,
    setName,
    price,
    setPrice,
    addProduct
}){
    return(
        <div>
            <input 
            type="text"
            placeholder="nazwa produktu"
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
            <input
                type="number"
                placeholder="cena"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />
            <button onClick={addProduct}>Add product</button>
        </div>
    )
}
export default ProductForm;