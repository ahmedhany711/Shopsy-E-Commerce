import React from 'react';
import Swal from 'sweetalert2';

const OrderPlaced = () => {
    const generateOrderNumber = () => {
        // Generate a random order number (you can use any method here)
        return Math.floor(Math.random() * 1000000);
    };
    const orderNumber = generateOrderNumber();
    const correctlyPlaced = () => {
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Order Placed Successfully",
            showConfirmButton: false,
            timer: 1500,
        });
    }

    return (
        <div>
            {correctlyPlaced}
        </div>
    );
}

export default OrderPlaced;
