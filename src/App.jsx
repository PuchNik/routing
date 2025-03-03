import './App.css'
import {Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage.jsx";
import CatalogPage from "./pages/CatalogPage.jsx";
import ContactsPage from "./pages/ContactsPage.jsx";
import NavBar from "./components/NavBar.jsx";

export default function App() {

    return (
        <>
            <NavBar/>
            <Routes>
                <Route path={'/'} element={<MainPage/>}/>
                <Route path={'/catalog'} element={<CatalogPage/>}/>
                <Route path={'/contacts'} element={<ContactsPage/>}/>
            </Routes>
        </>
    )
}