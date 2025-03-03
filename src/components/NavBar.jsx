import {Link} from "react-router-dom";

export default function NavBar() {
    return (
        <div>
            <h2>Меню</h2>
            <ul>
                <li><Link to="/">Главная</Link></li>
                <li><Link to="/catalog">Каталог</Link></li>
                <li><Link to="/contacts">Контакты</Link></li>
            </ul>
        </div>
    )
}