// On clicking remove button the item should be removed from DOM as well as localstorage.

let getData = JSON.parse(localStorage.getItem("coffee"))
// console.log(getData)

let total = 0;

getData.map(function (el, index) {
    let contain = document.getElementById("bucket")

    let box = document.createElement("div")

    let image = document.createElement("img")
    image.src = el.image

    let title = document.createElement("p")
    title.innerText = el.title

    let price = document.createElement("p")
    price.innerText = el.price

    total += el.price;

    let btn = document.createElement("button")
    btn.innerText = "remove"
    btn.setAttribute("id", "remove_coffee")
    btn.addEventListener("click", function () {
        remove(el, index)
    })

    box.append(image, title, price, btn)
    contain.append(box)
})

document.getElementById("total_amount").innerText = `total_amount : ${total}`
// console.log(total)

function remove(el, ind) {
    getData.splice(ind, 1)
    localStorage.setItem("coffee", JSON.stringify(getData))
    window.location.reload();
}


