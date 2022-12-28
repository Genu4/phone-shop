type Props = {
    cartData: {
        id: number
        totalCount: number
        totalPrice: number
    }
}

function CartHeader({cartData}: Props) {
    return (
        <div>
            <div>{cartData.id}: {cartData.totalCount} шт.</div>
            
            <div>$ {cartData.totalPrice}</div>
        </div>
    )
}
export default CartHeader
