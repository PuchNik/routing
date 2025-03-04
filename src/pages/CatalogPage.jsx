import {Link, Outlet} from "react-router-dom";
import {dataBase} from "../helpers/dataBase.js";

export default function CatalogPage() {
    const fetchProductsList = () => dataBase.productList

    return (
        <div>
            <h3>Каталог товаров</h3>
            <ul>
                {fetchProductsList().map(({id, name}) => (
                    <li key={id}>
                        <Link to={`product/${id}`}>{name}</Link>
                    </li>
                ))}
            </ul>
            <Outlet/>
        </div>
    )
}