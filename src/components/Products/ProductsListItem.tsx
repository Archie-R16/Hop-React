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
    title: string
    desc: string
    type: string
    capasiti: string
    prais: number
    image: string
}

const ProductsListItems = ({
    title,
    desc,
    type,
    capasiti,
    prais,
    image,
}: Props) => {
    const [count, setCount] = useState<number>(1)
    const [color, setColor] = useState<string>('green')
    const noIncrementClick = () => {
        setCount((prevState: number) => prevState + 1)
    }
    const noDecrementClick = () => {
        setCount((prevState: number) => prevState - 1)
    }
    const changeColor = () => {
        // setColor((prevState: string) =>
        //     prevState === 'green'? 'blak' : 'green'
        // )
        setColor((prevState: string) => {
            if (prevState === 'green') {
                return 'blac'
            } else {
                return 'green'
            }
        })
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
                    <span>Praice:</span>
                    {prais}$
                </div>
                <p>Color: {color}</p>
                <button onClick={changeColor}>Change color</button>
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
                <Button variant="outlined">Add to cart</Button>
            </CardActions>
        </Card>
    )
}

export default ProductsListItems
