document.addEventListener('DOMContentLoaded', function (e) {
    const menu = document.querySelector('.menu')
    window.addEventListener('scroll', function (e) {
        let windowScroll = window.pageYOffset;
        if (windowScroll > 30) {
            menu.classList.add('scrolled')
        } else {
            menu.classList.remove('scrolled')
        }
    })
})