const chek = (images, counter) => {
    let dots = document.querySelector(".dots")
    let i
    dots.innerHTML = ' '
    counter = counter + 1
    for (i = 0; i < images.length; i++) {
        let div = document.createElement("div")
        div.classList.add('ad')
        div.setAttribute('id', i)

        if (i == counter) {
            div.classList.add('activepoint')
        }
        dots.append(div)
    }
    if (i == counter) {
        dots.children[0].classList.add('activepoint')
    }
}
export default chek