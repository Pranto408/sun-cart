
const PopularProducts = async () => {
    const res = await fetch("https://sun-cart-two.vercel.app/products.json");
    const products = await res.json();
    const topProducts = products.slice(0, 3);
    console.log(topProducts);
    return (
        <div>
            <h2 className="text-4xl font-bold mb-4 text-center">Popular Products</h2>
            <div>
                {
                    topProducts.map(product => <div key={product.id}>
                        {product.image}
                    </div>)
                }
            </div>
        </div>
    );
};

export default PopularProducts;