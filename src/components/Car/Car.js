import React from "react";
import './Car.css';
function Car(props) {
    // console.log(props);
    const { model_name, year, maker_name, car_color, description } = props.car;
    return (
        <div className='car'>
            <h4>Model: {model_name}</h4>
            <h4>Year: {year}</h4>
            <h4>Manufacturer: {maker_name}</h4>
            <h4>Color: {car_color}</h4>
            <h4>description: {description}</h4>
            <button onClick={() => props.handleAddTo(props.car)} className='btn btn-success'>Add in company</button>
        </div>
    );
}
export default Car;