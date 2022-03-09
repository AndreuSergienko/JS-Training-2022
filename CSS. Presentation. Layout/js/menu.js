document.addEventListener('DOMContentLoaded', function (e) {
    const menu = document.querySelector('.menu')
    window.addEventListener('scroll', function (e) {
        let windowScroll = window.pageYOffset;
        console.log(windowScroll);
        if (windowScroll > 35) {
            menu.classList.add('scrolled')
        } else {
            menu.classList.remove('scrolled')
        }
    })
})