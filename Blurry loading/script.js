let counter = document.querySelector('.counter')

let i=0;
const timer = setInterval(() => {
    counter.textContent =`${i}%`
    if (i >= 100) {
        clearInterval(timer)
    }
    i++
}, 40);