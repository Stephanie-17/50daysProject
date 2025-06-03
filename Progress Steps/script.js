let count = 0

document.querySelector('.next').addEventListener('click',()=>{
    
     count+=1
    moveToNext(count)
   
})

document.querySelector('.prev').addEventListener('click',()=>{
    count-=1
    console.log(count)
    moveToPrevious(count)
    
})

function progress(count) {
    
}


function moveToNext(count) {
    console.log(count)
   
    if (count >= 0 && count <= 3) {
       document.querySelector('.next').style.backgroundColor = 'blue'
        document.querySelector('.next').style.cursor ='pointer'


        document.querySelectorAll('hr').forEach((hr,i)=>{
            if (count === i+1) {
                hr.classList.remove('non-active-hr')

                hr.classList.add('active-hr')

            }
        })

        const btnElements = document.querySelectorAll('.btn')

        for (let i = 0; i < btnElements.length; i++) {
            const element = btnElements[i];
            if (count === i) {
                element.classList.add('active-btn')
                element.classList.remove('non-active-btn')

            }
            
        }
    } if (count === 3) {
        document.querySelector('.next').style.backgroundColor = 'grey'
        document.querySelector('.next').style.cursor ='not-allowed'

        return
    }
    
}

function moveToPrevious(count) {
     if (count >=0) {
        document.querySelector('.prev').style.backgroundColor = 'blue'
        document.querySelector('.prev').style.cursor ='pointer'

        document.querySelectorAll('hr').forEach((hr,i)=>{
            if (count === i) {
                hr.classList.remove('active-hr')
                hr.classList.add('non-active-hr')

            }
        }) 


        const btnElements = document.querySelectorAll('.btn')

        for (let i = 0; i < btnElements.length; i++) {
            const element = btnElements[i+1];
            if (count === i) {
                element.classList.remove('active-btn')
                element.classList.add('non-active-btn')

            }
            
        }
     }
   
    if (count === 0) {
        document.querySelector('.prev').style.backgroundColor = 'grey'
        document.querySelector('.prev').style.cursor ='not-allowed'
        
        return
    }
}