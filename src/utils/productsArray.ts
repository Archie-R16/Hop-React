

export type ProductProps = {
    id:number
    title: string
    desc: string
    type: string
    capasiti: string
    price: number
    image:string
}


const productsArray:ProductProps[] = [
    {
        id:1,
        title:'iPhone 14pro',
        desc:'Thes is iPhone 14pro',
        type:'phone',
        capasiti:'256',
        price:1000,
        image:"/images/iphon-purple.jpg"
    },
    {
        id:2,
        title:'iPhone 13pro',
        desc:'Thes is iPhone 13',
        type:'phone',
        capasiti:'128',
        price:500,
        image:"/images/iphon-gold.jpg"
    },
    {
        id:3,
        title:'iPhone 13',
        desc:'Thes is iPhone 13',
        type:'phone',
        capasiti:'64',
        price:2000,
        image:"/images/iphon-green.jpg"
    },
    {
        id:4,
        title:'iPhone 11pro',
        desc:'Thes is iPhone 11pro',
        type:'phone',
        capasiti:'256',
        price:1000,
        image:"/images/iphon-whit.jpg"
    },
    {
        id:5,
        title:'iPhone 13pro Max',
        desc:'Thes is iPhone 13pro Max',
        type:'phone',
        capasiti:'512',
        price:1500,
        image:"/images/iphon-red.jpg"
    },
    {
        id:6,
        title:'iPhone X',
        desc:'Thes is iPhone X',
        type:'phone',
        capasiti:'64',
        price:500,
        image:"/images/iphon-blak.jpg"
    },
]

export const getProductsObject = (array:ProductProps[]) => array.reduce((object,product) => ({
    ...object,
    [product.id]: product
}),{})

export default productsArray
