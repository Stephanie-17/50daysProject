const nav = document.querySelector('nav')
const toggle = document.querySelector('.icon')

toggle.addEventListener('click',()=>{
    nav.classList.toggle('active')
})