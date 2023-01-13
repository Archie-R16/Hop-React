import {
    Button,
    Card,
    CardActions,
    CardContent,
    TextField,
} from '@mui/material'
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
                </div>
                <div className="product-features">
                    <span>Capasity:</span> {capasiti}Gb
                </div>
                <div className="product-price">
                    <span>Praice:</span>
                    {prais}$
                </div>
                <div className="product-quantity">
                    <Button variant="outlined">-</Button>
                    <TextField value="1" size="small" />
                    <Button variant="outlined">+</Button>
                </div>
            </CardContent>
            <CardActions className="btns-wrap">
                <Button variant="outlined">Add to cart</Button>
            </CardActions>
        </Card>
    )
}

export default ProductsListItems
