type ProductsProps = {
    title: string
    desc: string
    type: string
    capacity: string
    price: number
    image: string
}


const productsArray:ProductsProps[] = [
    {
        title:"iPhone X",
        desc:"This is iPhone X",
        type:"phone",
        capacity:"64",
        price:500,
        image:"/images/iphone-black.jpg"
    },

    {
        title:"iPhone 12",
        desc:"This is iPhone 12",
        type:"phone",
        capacity:"128",
        price:1000,
        image:"/images/iphone-blue.jpg"
    },

    {
        title:"iPhone 13",
        desc:"This is iPhone 13",
        type:"phone",
        capacity:"256",
        price:1500,
        image:"/images/iphone-red.jpg"
    },

    {
        title:"iPhone 14",
        desc:"This is iPhone 14",
        type:"phone",
        capacity:"512",
        price:2000,
        image:"/images/iphone-purple.jpg"
    },

    {
        title:"iPhone 14+",
        desc:"This is iPhone 14",
        type:"phone",
        capacity:"512",
        price:2500,
        image:"/images/iphone-white.jpg"
    },

    {
        title:"iPhone 14 Pro",
        desc:"This is iPhone 14",
        type:"phone",
        capacity:"512",
        price:3000,
        image:"/images/iphone-green.jpg"
    }
]

export default productsArray