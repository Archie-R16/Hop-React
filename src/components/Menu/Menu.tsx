import MenuItem from './MenuItem'

type Props = {}

const Menu = (props: Props) => {
    return (
        <>
            <MenuItem to="/">Home</MenuItem>
            <MenuItem to="/About">About</MenuItem>
            <MenuItem to="/shipping">Shipping</MenuItem>
            <MenuItem to="/payment">Payment</MenuItem>
            <MenuItem to="/cart">Cart</MenuItem>
        </>
    )
}

export default Menu
