let trashcan = document.querySelector('#trashcan img');
let trash = document.getElementById('trash');

// Lets throw our trash about!!
for (let i = 0; i < 7; i++) {
    trash.appendChild(document.createElement('img'));
    trash.children[i].setAttribute('src', './images/trash.png');
    trash.children[i].style = `left: ${Math.floor(Math.random() * 900)}px ; top: ${Math.floor(Math.random() * 500)}px`;
};

for (let trashItem of trash.children) {

    trashItem.addEventListener('click', (eClick) => {

        window.addEventListener('mousemove', (eMove) => {
            trashItem.style.left = (eMove.pageX) + 'px';
            trashItem.style.top = (eMove.pageY) + 'px';
        });

        // Opening trashcan
        trashcan.addEventListener('mouseover', e => {
            trashcan.classList.add('opened');
            trashcan.src = './images/opened.png';
            trashItem.remove();
        });

        // Closing trashcan
        trashcan.addEventListener('mouseout', e => {
            trashcan.classList.remove('opened');
            trashcan.src = './images/closed.png';
            trashItem.remove();
        })
    })
}