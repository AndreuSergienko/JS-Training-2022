'use strict'


const inputs = document.querySelectorAll('.ingredient-input')
const labels = document.querySelectorAll('label')

labels.forEach(label => {
    label.addEventListener('click', event => {
        label.classList.toggle('active')
        if (label.classList.contains('active')) {
            label.firstElementChild.checked = true
        }else {
            label.firstElementChild.checked = false
        }
    })
})