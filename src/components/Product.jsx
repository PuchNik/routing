import { useNavigate, useParams } from "react-router-dom";
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
    const [isLoadingTimeOut, setIsLoadingTimeOut] = useState(false)
    const [isProductLoaded, setIsProductLoaded] = useState(false)

    const {productID} = useParams();
    const navigate = useNavigate()

    useEffect(() => {

        setTimeout(() => {
            setIsLoadingTimeOut(true)
            navigate('/product-load-error')
        }, 5000)
        fetchProducts(productID).then((loadedProduct) => {
            setIsProductLoaded(true)
            setProduct(loadedProduct)
        })
        .finally(() => {
            setIsLoadingTimeOut(false)
            setIsProductLoaded(false)
        })
    }, [productID, navigate]);

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
