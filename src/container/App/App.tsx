import CssBaseline from '@mui/material/CssBaseline'
import Header from 'container/Header/Header'
import { StyledEngineProvider } from '@mui/material/styles'
import Main from 'container/Main/Main'
import { useState } from 'react'
import { omit } from 'lodash'

type ProductsInCart = {
    [id: number]: number
}

const App = () => {
    const [productsInCart, seatProductsInCart] = useState<ProductsInCart>({
        1: 5,
        2: 1,
    })

    const addProductToCart = (id: number, count: number) => {
        seatProductsInCart((prevState: ProductsInCart) => ({
            ...prevState,
            [id]: (prevState[id] || 0) + count,
        }))
    }

    const removeProductFromCart = (id: number) =>
        seatProductsInCart((prevState: ProductsInCart) => omit(prevState, [id]))

    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header productsInCart={productsInCart} />
            <Main
                addProductToCart={addProductToCart}
                productsInCart={productsInCart}
                removeProductFromCart={removeProductFromCart}
            />
        </StyledEngineProvider>
    )
}
export default App
