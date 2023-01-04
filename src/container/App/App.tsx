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
            [id]: prevState[id] + count,
        }))
    }
    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header productsInCart={productsInCart} />
            <button onClick={() => addProductToCart(1, 1)}>Add to cart</button>
            <Main addProductToCart={addProductToCart} />
        </StyledEngineProvider>
    )
}
export default App
