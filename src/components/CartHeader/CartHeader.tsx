import { CartDataProps } from 'appTypes';

type Props = {
    cartData: CartDataProps
}

function CartHeader({cartData}: Props) {
    // В Props у нас приходит объект в котором мы храним
    // ещё один объект cartData. В этом объекте у нас находятся
    // все данные для корзины
    const recentProductId = cartData.recentProductId;
    // Для первой отрисовки у нас ещё нет продуктов в корзине
    // для этого мы присваиваем recentProduct значение по-умолчанию
    const recentProduct = cartData.products[recentProductId] || {
        count: 0,
        price: 0
    };

    return (
        <div>
            <div>{recentProductId}: {recentProduct.count} шт.</div>

            <div>$ {recentProduct.price}</div>
        </div>
    )
}
export default CartHeader
