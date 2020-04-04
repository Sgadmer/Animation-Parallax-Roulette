let menuBTN = document.querySelector('.burger_menu_btn');

menuBTN.addEventListener('click', function (event) {
    event.preventDefault();
    menuBTN.classList.toggle('menu-btn_active');

    document.querySelector('.menu').classList.toggle('menu_active');
})