document.querySelectorAll('.btn').forEach(btn=>{
    btn.addEventListener('click',()=>{
        pauseAudio()
      const audioName =  btn.textContent
      document.getElementById(`${audioName}`).play()
    })
})

function pauseAudio() {
    document.querySelectorAll('audio').forEach(audio=>{
        audio.pause()
    })
}