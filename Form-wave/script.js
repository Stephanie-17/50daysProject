document.getElementById('email-input').addEventListener('focus',()=>{
    document.querySelectorAll('.letter').forEach((letter,index)=>{
        letter.style.animation = `letterLift 0.4s ${index * 0.5}s ease`
    })
})

// document.getElementById('animated-input').addEventListener('blur', function() {
//   if (!this.value) {
//     const letters = document.querySelectorAll('.letter');
//     letters.forEach(letter => {
//       letter.style.animation = '';
//     });
//   }
// });