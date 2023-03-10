import Container from '@mui/material/Container'
import AboutPage from 'pages/AboutPage/AboutPage'
import CartPage from 'pages/CartPage/CartPage'
import Home from 'pages/Home/Home'
import PaymentPage from 'pages/PaymentPage/PaymentPage'
import ShippingPage from 'pages/ShippingPage/ShippingPage'
import { Routes, Route } from 'react-router-dom'

type Props = {
    addProductToCart: (id: number, count: number) => void
    removeProductFromCart: (id: number) => void
    productsInCart: {
        [id: number]: number
    }
}

const Main = ({
    addProductToCart,
    productsInCart,
    removeProductFromCart,
}: Props) => {
    return (
        <Container maxWidth="lg" sx={{ padding: '50px 0' }} component="main">
            <Routes>
                <Route
                    path="/"
                    element={<Home addProductToCart={addProductToCart} />}
                />
                <Route
                    path="cart"
                    element={
                        <CartPage
                            productsInCart={productsInCart}
                            removeProductFromCart={removeProductFromCart}
                        />
                    }
                />
                <Route path="about" element={<AboutPage />} />
                <Route path="payment" element={<PaymentPage />} />
                <Route path="shipping" element={<ShippingPage />} />
            </Routes>
        </Container>
    )
}

export default Main
