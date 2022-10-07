import { getCartFromDb } from "../../utilities/fakedb"

export const productsAndCartLoader = async () => {

    const productsData = await fetch('products.json')
    const products = await productsData.json()

    // console.log(products)

    const savedCart = getCartFromDb();
    const previousCart = [];
    for (const id in savedCart) {
        const addedProducts = products.find(product => product.id === id);
        if (addedProducts) {
            const quantity = savedCart[id];
            addedProducts.quantity = quantity;
            previousCart.push(addedProducts);
            // console.log(id, quantity)
        } else {

        }
        // console.log(addedProducts)
        // console.log(id)
    }

    return {products,previousCart};

}