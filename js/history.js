
const clickTrailer = document.querySelector('.link-trailer');
const clickSong = document.querySelectorAll('.link-song')
//const urlTrapler = document.getElementById("url")
//const dataSrc = urlTrapler.dataset.src;

clickSong.forEach(item => {
  item.addEventListener('click', ()=> {
    console.log('Hello');
    let dataUrl = item.dataset.src
    
    Fancybox.show([
      {
        src: dataUrl,
        type: "iframe",
        width: 640,
        height: 360,
      },
    ])
    
  })
})