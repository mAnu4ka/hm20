let top_side = document.querySelector(".top-side")
let images = document.querySelectorAll(".images div")
let counter = 0
let status = true

const NEXT_SLIDE = (isNext) => {
    // Удаляем класс у всех элементов
    for(let item of images) {
        item.classList.remove("active")
    }
    
    if(isNext) {
        counter++

        // Включаем бесконечную прокрутку
        if(counter > images.length - 1) {
            // Убрать класс у последнего
            counter = 0
        }
    } else {
        counter--

        if(counter < 0) counter = images.length - 1
    }
    
    images[counter].classList.add("active")
}

let slider = setInterval(() => {
    if(status === true) {
        NEXT_SLIDE(true)
    }
}, 300)

// Pause slider
top_side.onmouseenter = () => status = false

// Continue slider
top_side.onmouseleave = () => status = true

let prev = document.querySelector(".prev")
let next = document.querySelector(".next")

// Переключение слайдов вправо
prev.onclick = () => {
    NEXT_SLIDE(false)
}

// Переключение слайдов влево
next.onclick = () => {
    NEXT_SLIDE(true)
}

// DOTS
let dots = document.querySelector(".dots")

for(let item of images) {
    let div = document.createElement("div")

    dots.append(div)
}
