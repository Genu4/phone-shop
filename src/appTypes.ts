// Если есть какаой-то кусок кода который переиспользуется
// и последующие изменения должны подтягиваться во все места
// где он используется - нужно обязательно выносить такой код
// в отдельный файл. Есть такой принцип - DRY (Don't Repeat Yourself)
// и такой принцип соблюдается вот таким образом
type ProductLineItem = {
    [key: string]: {
        count: number;
        price: number;
    };
};

export type CartDataProps = {
    products: ProductLineItem;
    count: number;
    recentProductId: string;
}
