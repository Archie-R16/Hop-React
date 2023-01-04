import CssBaseline from '@mui/material/CssBaseline'
import Header from 'container/Header/Header'
import { StyledEngineProvider } from '@mui/material/styles'
import Main from 'container/Main/Main'
import { useState } from 'react'

type Props = {}

type cartData = {
    totolCount: number
    totolPrise: number
}

const App = (props: Props) => {
    const [cartData, setCartData] = useState<cartData>({
        totolCount: 0,
        totolPrise: 0,
    })
    const addProductToCart = (count: number, prais: number) => {
        setCartData((prevState: cartData) => ({
            totolCount: prevState.totolCount + count,
            totolPrise: prevState.totolPrise + prais * count,
        }))
    }
    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header cartData={cartData} />
            <Main addProductToCart={addProductToCart} />
        </StyledEngineProvider>
    )
}
export default App
