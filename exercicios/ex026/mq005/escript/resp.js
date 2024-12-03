let but = window.document.getElementById('burger')


but.addEventListener("click", function() {
    menu = window.document.getElementById('menus')

    if (menu.style.display == 'block') {
        menu.style.display = 'none'
    } else {
        menu.style.display = 'block'
    }
})