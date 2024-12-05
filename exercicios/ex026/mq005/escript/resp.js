let but = window.document.getElementById('burger')


but.addEventListener("click", function() {
    menu = window.document.getElementById('menus')

    if (menu.style.display == 'block') {
        menu.style.display = 'none'
    } else {
        menu.style.display = 'block'
    }
})

function tamanho() {
    if (window.innerWidth >= 768) {
        menu.style.display = 'block'
    } else {
        menu.style.display = 'none'
    }
}