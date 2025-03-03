import {Link, Outlet} from "react-router-dom";

export default function CatalogPage() {
    const fetchProductsList = () => [
        {id: 1, name: 'Телевизор'},
        {id: 2, name: 'Смартфон'},
        {id: 3, name: 'Планшет'},
    ]

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