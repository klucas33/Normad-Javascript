const div = document.querySelector('.full')
const but = document.querySelector('.full button')
const picArr = ['img/01.jpg','img/02.jpg','img/03.jpg','img/04.jpg','img/05.jpg']

function addPic(){
    const img = document.querySelector('img')
    const imgArr = picArr[Math.floor(Math.random() * picArr.length)]
    img.setAttribute('src',imgArr)
}

but.addEventListener('click',addPic)