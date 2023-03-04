import { getStoredCart } from "../utilities/fakedb";

export const productAndCartLoader = async () => {
    const productData = await fetch("products.json");
    const product = await productData.json();

    // get cart data
    const savedCart = getStoredCart()
    console.log(savedCart);

    const initialCart = [];

    for (const id in savedCart) {
        const addedProduct = product.find(product => product.id === id);
        //console.log(addedProduct);
        if (addedProduct) {
            const quantity = savedCart[id];
            addedProduct.quantity = quantity;
            initialCart.push(addedProduct);

        }
    }

    return {
        products: product,
        initialCart: initialCart
    }
}
