import UseLocalStorageState from "./useLocalStorageState";
import { v4 as uuidv4 } from "uuid";

export default (initialList) => {
    const [groceries, setGroceries] = UseLocalStorageState(
        "groceries",
        initialList
    );

    return {
        groceries,
        addProduct: (newProduct) => {
            setGroceries([
                ...groceries,
                {
                    id: uuidv4(),
                    product: newProduct,
                    completed: false,
                },
            ]);
        },
        removeProduct: (productId) => {
            const updatedProduct = groceries.filter(
                (product) => product.id !== productId
            );
            setGroceries(updatedProduct);
        },
        toggleProduct: (productId) => {
            const updatedProduct = groceries.map((product) =>
                product.id === productId
                    ? { ...product, completed: !product.completed }
                    : product
            );
            setGroceries(updatedProduct);
        },
        editProduct: (productId, newProduct) => {
            const updatedProduct = groceries.map((product) =>
                product.id === productId
                    ? { ...product, product: newProduct }
                    : product
            );
            setGroceries(updatedProduct);
        },
    };
};
