const tabs = document.querySelectorAll('.tabs button')
const contents = document.querySelectorAll('.tab-content')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'))
        contents.forEach(c => c.classList.remove('active'))
        tab.classList.add('active')
        document.getElementById(tab.dataset.tab).classList.add('active')
    })
})

const gallery = document.querySelector('.gallery')

const images = [
    'car.png',
    'micro.jpg',
    'jsp.jpg',
    'gun.jpg',
    'sniper.jpg',
    'train.png'
]

images.forEach(src => {
    const img = document.createElement('img')
    img.src = src
    gallery.appendChild(img)
})