function check(e) {
    e.preventDefault()
    // let form = document.getElementById("order-form");
    let names = document.getElementById("name").value;
    let number = document.getElementById("number").value;
    let address = document.getElementById("address").value;
    console.log(names, number, address)

    setTimeout(function () {
        alert('Your order is accepted')
    }, 0)
    setTimeout(function () {
        alert('Your order is being Prepared ')
    }, 3000)
    setTimeout(function () {
        alert('Your order is being packed')
    }, 8000)
    setTimeout(function () {
        alert('Your order is out for delivery ')
    }, 10000)
    setTimeout(function () {
        alert('Order delivered')
    }, 12000)
}
// 3 seconds : Your order is being Prepared
// 8 seconds : Your order is being packed
// 10 seconds : Your order is out for delivery
// 12 seconds : Order delivered