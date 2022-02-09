// 2 number task 
const title = document.getElementsByTagName('h2')
for (h2 of title) {
    h2.style.color = 'lightblue'
}

// 3 number task 

document.getElementById('backpack').style.backgroundColor = 'tomato'

// 4 number task 

const cardClass = document.getElementsByClassName('card')

for (card of cardClass) {
    card.style.borderRadius = '30px'
}

// 5 number task
function fButton() {
    console.log('finally masud valo hoye gese!!')
}

// 6 number task 

const button = document.getElementsByClassName('buttons')

for (const buttons of button) {
    buttons.addEventListener('click', function (e) {
        e.target.parentNode.removeChild(e.target)

    })
}

// 7 number task

document.getElementById('input').addEventListener('keyup', function (event) {
    const emailInput = document.getElementById('email')
    if (event.target.value == 'email') {
        emailInput.removeAttribute('disabled')
    }
    else {
        emailInput.setAttribute('disabled', true)
    }
})

// 8 number task

let img = document.getElementById('bag')
img.addEventListener('mouseover', function () {
    if (img.src == 'images/bags/bag-3.png') {
        img.src = 'images/bags/bag-3.png'
    }
    else {
        img.src = 'images/bags/bag-2.png'
    }
})

// 9 number task

let subscribe = document.getElementById('subscribe').addEventListener('dblclick', function (e) {
    e.target.style.backgroundColor = 'goldenrod'
})