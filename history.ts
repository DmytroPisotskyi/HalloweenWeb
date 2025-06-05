
const clickSong = document.querySelectorAll<HTMLElement>('.link-song')

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