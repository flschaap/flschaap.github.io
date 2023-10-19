const flower = document.querySelector('.flowerWrapper')
const dropArea = document.querySelector('.dropArea')
const infoDisplay = document.querySelector('#flowerWrapper')
const soil = document.querySelector('.soilDropBack')

flower.addEventListener('dragging', dragging)
flower.addEventListener('dragstart', dragStart)

dropArea.addEventListener('dragover',dragOver)
dropArea.addEventListener('drop',dragDrop)

soil.addEventListener('dragover',dragOver)
soil.addEventListener('drop',dragDrop)

let beingDragged
flower.style.width = "25%";
flower.style.height = "25%";

function dragging(e) {
    infoDisplay.textContent = 'You have picked a ' + beingDragged.id
}

// To indicate where the user can drag the flowers to, the border of the drop area will be highlighted once the dragging starts. 
function dragStart(e) {
    beingDragged = e.target
    dropArea.classList.add('highlight')
}

function dragOver(e) {
    e.preventDefault()
}

function dragDrop(e) {
    e.target.append(beingDragged)
    dropArea.classList.remove('highlight')
}