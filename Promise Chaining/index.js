const cartData = [
    {
        item: "Logitech G402",
        price: 2304
    },
    {
        item: "hyperX Cloud Core 7.1",
        price: 6100
    },
    {
        item: "Royal Kludge RK61",
        price: 2304
    }
]

const createOrder = (cartData) => {
    return new Promise((resolve, reject) => {
        if(validateData(cartData)){
            resolve({orderId: "1232asdasd34", items: cartData, message: "Successfully generated order id"})
        } else {
            reject(new Error("Could not validate the items in the cart!"))
        }
    })
    
};

const validateData = (items) => {
    return items.every(item => item.price > 0)
}

const proceedToPayment = (orderID, items) => {
    return new Promise((resolve, reject) => {
        resolve({paymentStatus: 1, items: items, message: `Payment Successful for order id! ${orderID}`})
    })
}

const showOrderSummary = (response) => {
    return new Promise((resolve, reject) => {
        if(response.paymentStatus === 1){
            console.log(response.items)
        } else {
            reject(new Error("Order not placed successfully"))
        }
    })
}

createOrder(cartData)
.then(res => {
    console.log(res.message)
    return proceedToPayment(res.orderId, res.items);
})
.then(res=>{
    console.log(res.message);
    showOrderSummary(res);
})
.catch(err => {
    console.log(err.message)
})