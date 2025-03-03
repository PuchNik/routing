import {useParams} from "react-router-dom";

const fetchProducts = (id) => ({
    1: {id: 1, name: 'Телевизор', price: 2900, amount: 69},
    2: {id: 2, name: 'Смартфон', price: 3200, amount: 19},
    3: {id: 3, name: 'Планшет', price: 6500, amount: 89},
})[id]

export default function Product() {
    const params = useParams()
    const {name, price, amount} = fetchProducts(params.productID)
    return (
        <div>
            <h3>Товар: - {name}</h3>
            <div>Цена: - {price}</div>
            <div>Количество: - {amount}</div>
        </div>
    )
}
