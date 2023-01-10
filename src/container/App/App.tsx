import CssBaseline from '@mui/material/CssBaseline'
import Header from 'container/Header/Header'
import { StyledEngineProvider } from '@mui/material/styles'
import Main from 'container/Main/Main'
import { useState } from 'react'

type productsInCart = {
    [id: number]: number
}

const App = () => {
    const [productsInCart, seatProductsInCart] = useState<productsInCart>({
        1: 5,
        2: 1,
    })

    const addProductToCart = (id: number, count: number) => {
        seatProductsInCart((prevState: productsInCart) => ({
            ...prevState,
            [id]: (prevState[id] || 0) + count,
        }))
    }
    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header productsInCart={productsInCart} />

            <Main
                addProductToCart={addProductToCart}
                productsInCart={productsInCart}
            />
        </StyledEngineProvider>
    )
}
export default App
