document.getElementById('menu').addEventListener('click',()=>{
    document.getElementById('close').classList.remove('hidden')
    document.getElementById('menu').classList.add('hidden')
    document.querySelector('.container').classList.remove('remove')
    document.querySelector('.container').classList.add('active')
    document.querySelectorAll('.nav-item').forEach(item=>{
        item.classList.remove('remove-nav-item')
        item.classList.add('active-nav-item')
    })

})

document.getElementById('close').addEventListener('click',()=>{
    document.getElementById('menu').classList.remove('hidden')
    document.getElementById('close').classList.add('hidden')
    document.querySelector('.container').classList.remove('active')
    document.querySelector('.container').classList.add('remove')

    document.querySelectorAll('.nav-item').forEach(item=>{
        item.classList.add('remove-nav-item')
        item.classList.remove('active-nav-item')
    })

})