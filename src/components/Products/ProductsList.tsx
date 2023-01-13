import { Grid } from '@mui/material'
import ProductsListItem from './ProductsListItem'

type Props = {}

const ProductsList = (props: Props) => {
    return (
        <>
            <Grid
                container
                direction="row"
                justifyContent="space-around"
                alignItems="center"
                spacing={4}
            >
                <Grid item xs={12} sm={6} md={4}>
                    <ProductsListItem
                        title="iPhon X"
                        desc="Thes iPhpn X"
                        type="phone"
                        capasiti="64"
                        prais={500}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ProductsListItem
                        title="iPhon 14 pro"
                        desc="Thes iPhpn 14pro"
                        type="phone"
                        capasiti="128"
                        prais={1500}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ProductsListItem
                        title="iPhon 12"
                        desc="Thes iPhpn 12"
                        type="phone"
                        capasiti="512"
                        prais={2000}
                    />
                </Grid>
            </Grid>
        </>
    )
}

export default ProductsList
