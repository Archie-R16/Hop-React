import './CartHeader.scss'

type Props = {
    cartData: {
        totolCount: number
        totolPrise: number
    }
}

const CartHeader = ({ cartData }: Props) => {
    return (
        <div>
            <div>{cartData.totolCount}</div>
            <div>$ {cartData.totolPrise}</div>
        </div>
    )
}

export default CartHeader
