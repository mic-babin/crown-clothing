import { createContext, useState} from "react";
import PRODUCTS from '../shop-data.json'


// Value you want to access
export const ProductsContext = createContext({
    products: [],
    // setCurrentProducts: () => null,
})

export const ProductsProvider = ({children}) => {
    const [products] = useState(PRODUCTS)
    const value = {products}

    return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
}