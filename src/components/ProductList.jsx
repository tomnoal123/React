import ProductItem from "./ProductItem";
function ProductList({
    products,
    deleteProduct
}){
    return(
        <div>
            {products.map((product) =>(
                <ProductItem
                key={product._id}
                product={product}
                deleteProduct={deleteProduct}
                />
            ))}
        </div>
    )
}
export default ProductList;