function ProductItem({
    product,
    deleteProduct
}){
    return (
        <div>
            <p>
                {product.name} - {product.price} zł
            </p>
            <button onClick={() => deleteProduct(product._id)}>Delete</button>
        </div>
    )
}
export default ProductItem;