import {
    Button,
    Card,
    CardActions,
    CardContent,
    TextField,
} from '@mui/material'
import { useState } from 'react'
import './ProductsListItem.scss'
type Props = {
    id: number
    title: string
    desc: string
    type: string
    capasiti: string
    price: number
    image: string
    addProductToCart: (id: number, count: number) => void
}

const ProductsListItems = ({
    id,
    title,
    desc,
    type,
    capasiti,
    price,
    image,
    addProductToCart,
}: Props) => {
    const [count, setCount] = useState<number>(1)
    const noIncrementClick = () => {
        setCount((prevState: number) => prevState + 1)
    }
    const noDecrementClick = () => {
        setCount((prevState: number) => prevState - 1)
    }

    return (
        <Card className="product" variant="outlined">
            <CardContent>
                <div className="product-image">
                    <img src={image} alt="" />
                </div>
                <div className="product-title">{title}</div>
                <div className="product-dec">{desc}</div>
                <div className="product-features">
                    <span>Type:</span>
                    {type}
                </div>
                <div className="product-features">
                    <span>Capasity:</span> {capasiti}Gb
                </div>
                <div className="product-price">
                    <span>Price:</span>
                    {price}$
                </div>
                <div className="product-quantity">
                    <Button
                        variant="outlined"
                        onClick={noDecrementClick}
                        disabled={count <= 1}
                    >
                        -
                    </Button>
                    <TextField value={count} size="small" />
                    <Button
                        variant="outlined"
                        onClick={noIncrementClick}
                        disabled={count >= 10}
                    >
                        +
                    </Button>
                </div>
            </CardContent>
            <CardActions className="btns-wrap">
                <Button
                    variant="outlined"
                    onClick={() => addProductToCart(id, count)}
                >
                    Add to cart
                </Button>
            </CardActions>
        </Card>
    )
}

export default ProductsListItems
