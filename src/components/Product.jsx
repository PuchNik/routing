import { useParams } from "react-router-dom";
import NotFound from "../pages/NotFound.jsx";
import {dataBase} from "../helpers/dataBase.js";
import {useEffect, useState} from "react";

const fetchProducts = (id) => new Promise((resolve) => {
    setTimeout(() => {
        resolve(dataBase.products[id])
    }, 2500)
})

export default function Product() {
    const [product, setProduct] = useState(null)
    const {productID} = useParams();

    useEffect(() => {
        let isLoadingTimeOut = false

        setTimeout(() => {
            isLoadingTimeOut = true
        }, 5000)
        fetchProducts(productID).then((loadedProduct) => {
            setProduct(loadedProduct)
        })
    }, []);

    if (!product) {
        return <NotFound/>
    }

    const { name, price, amount } = product

    return (
        <div>
            <h3>Товар - {name}</h3>
            <div>Price: {price}</div>
            <div>Amount: {amount}</div>
        </div>
    );
}
