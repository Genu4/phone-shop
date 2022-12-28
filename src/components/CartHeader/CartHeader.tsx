type Props = {
    cartData: {
        id: number
        count: number
        totalPrice: number
    }
}

function CartHeader({cartData}: Props) {
    return (
        <div>
            
            <div>{cartData.id}: {cartData.count} шт.</div>
            
            <div>$ {cartData.totalPrice}</div>
        </div>
    )
}
export default CartHeader
