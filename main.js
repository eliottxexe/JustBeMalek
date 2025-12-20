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
    'image.webp',
    'attachment3A1efc8963-63e3-4036-8d2d-e7733244b42e3Aimage_4.webp',
    'gun.jpg',
    'sniper.jpg',
    'train.png'
]

images.forEach(src => {
    const img = document.createElement('img')
    img.src = src
    gallery.appendChild(img)

})
