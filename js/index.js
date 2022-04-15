import chek from './chek.js'

let top_side = document.querySelector("#slider")
let counter = 0
let status = true
let images = document.querySelectorAll(".images div")

const NEXT_SLIDE = (isNext, isscroll) => {
    for (let item of images) {
        item.classList.remove("active")
    }
    chek(images, counter)
    let div = document.querySelectorAll('.ad')
    for (const item of div) {
        item.onclick = () => {
            counter = +item.id
            NEXT_SLIDE(true, true)
        }
    }
    if (isNext) {
        if (!isscroll) {
            counter++
        }

        if (counter > images.length - 1) {
            counter = 0
        }
    } else {
        counter--

        if (counter < 0) counter = images.length - 1
    }

    images[counter].classList.add("active")
}

let slider = setInterval(() => {
    if (status === true) {
        NEXT_SLIDE(true, false)
    }
}, 300)


top_side.onmouseenter = () => status = false


top_side.onmouseleave = () => status = true

let prev = document.querySelector(".prev")
let next = document.querySelector(".next")


prev.onclick = () => {
    NEXT_SLIDE(false, false)
}

next.onclick = () => {
    NEXT_SLIDE(true, false)
}