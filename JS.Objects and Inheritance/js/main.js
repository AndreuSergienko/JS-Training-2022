'use strict'


const inputs = document.querySelectorAll('.ingredient-input')
const labels = document.querySelectorAll('label')

labels.forEach(label => {
    label.addEventListener('click', event => {
        labels.forEach(item => {
            item.classList.remove('active')
        })
        label.classList.add('active')
        if (label.classList.contains('active')) {
            label.firstElementChild.checked === true
        }
    })
})