
/*openTrailer, closeTrailer*/



const clickTrailer = document.querySelector('.link-trailer');
const urlTrapler = document.getElementById("url")
const dataSrc = urlTrapler?.dataset.src;


  if(clickTrailer) {
    clickTrailer.addEventListener('click', ()=> {
    Fancybox.show([
        {
          src: dataSrc,
          width: 640,
          height: 360,
        },
      ]);
    
  })
  }
