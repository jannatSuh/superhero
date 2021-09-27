import React, { useEffect, useState } from "react";
import Car from "../Car/Car";
import './Cart.css'

function Cart() {
    const [products, setProducts] = useState([]);
    const [car, setCars] = useState([]);
    useEffect(() => {
        fetch('./cardata.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    const handleAddTo = (add) => {
        const newCar = [...car, add];
        setCars(newCar);
    }

    return (
        <div className='cart-container'>
            <div className='container'>
                <h3>Total: {products.length}</h3>
                {
                    products.map(car => <Car car={car} handleAddTo={handleAddTo}></Car>)
                }
            </div>
            <div className='container'>
                <h3>Order Summery: </h3>
                <h5>Items Ordered: {car.length}</h5>
            </div>
        </div>
    );
}
export default Cart;