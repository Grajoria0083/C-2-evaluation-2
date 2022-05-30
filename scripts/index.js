// Add the coffee to local storage with key "coffee"

let arr = JSON.parse(localStorage.getItem("coffee")) || [];

const url = "https://masai-mock-api.herokuapp.com/coffee/menu"

search()
async function search() {
    try {
        let res = await fetch(url)
        let data = await res.json()
        // console.log(data.menu.data)
        appends(data.menu.data)

    } catch (err) {
        console.log(data)
    }
}

function appends(item) {
    item.map(function (el) {
        let contain = document.getElementById("menu")

        let box = document.createElement("div")

        let image = document.createElement("img")
        image.src = el.image

        let title = document.createElement("p")
        title.innerText = el.title

        let price = document.createElement("p")
        price.innerText = el.price

        let btn = document.createElement("button")
        btn.innerText = "Add to Bucket"
        btn.setAttribute("id", "add_to_bucket")
        btn.addEventListener("click", function () {
            add(el)
        })

        box.append(image, title, price, btn)
        contain.append(box)
    })
}

function add(el) {
    arr.push(el)
    localStorage.setItem("coffee", JSON.stringify(arr))

    let get_arr = JSON.parse(localStorage.getItem("coffee"))
    let count = document.getElementById("coffee_count")
    count.innerText = get_arr.length

}


