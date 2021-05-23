let c=0;let d=0;
const block=document.querySelector('.cube');

window.addEventListener('keydown',(e)=>{
    const {style}=block;
    switch(e.key){
      case 'ArrowUp': style.transform=`translateZ(-150px) rotateX(${c+=10}deg) rotateY(0deg)`; break;
      case 'ArrowDown': style.transform=`translateZ(-150px) rotateX(${c-=10}deg) rotateY(0deg)`; break;
      case 'ArrowLeft': style.transform=`translateZ(-150px) rotateX(30deg) rotateY(${d+=10}deg)`; break;
      case 'ArrowRight': style.transform=`translateZ(-150px) rotateX(30deg) rotateY(${d-=10}deg)`; break;
    }
  });