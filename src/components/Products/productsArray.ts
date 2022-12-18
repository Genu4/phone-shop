type ProductsProps = {
    title: string
    description: string
    type: string
    capacity: string
    price: number
}


const productsArray:ProductsProps[] = [
    {
        title:"iPhone X",
        description:"This is iPhone X",
        type:"phone",
        capacity:"64",
        price:500
    },

    {
        title:"iPhone 12",
        description:"This is iPhone 12",
        type:"phone",
        capacity:"128",
        price:1000
    },

    {
        title:"iPhone 13",
        description:"This is iPhone 13",
        type:"phone",
        capacity:"256",
        price:1500
    },

    {
        title:"iPhone 14",
        description:"This is iPhone 14",
        type:"phone",
        capacity:"512",
        price:2000
    }
]

export default productsArray