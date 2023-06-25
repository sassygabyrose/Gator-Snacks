let items = document.querySelectorAll('.slider .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');

let active = 3;

function loadShow(){
  let stt = 0;
    items[active].style.transform = "none";
    items[active].style.zIndex = 1;
    items[active].style.filter = 'none';
    items[active].style.opacity = 1;
  for(var i = active + 1; i < items.length; i++){
    stt++;
    let num = stt * 120;
    let scale = 1 - 0.2* stt;
    console.log(num);
    items[i].style.transform = "translateX(" + num + "px) scale(" + scale + ") perspective(16px) rotateY(-1deg)";
    items[i].style.zIndex = -stt;
    items[i].style.filter = 'blur(5px)';
    items[i].style.opacity = stt > 2 ? 0 : 0.6;
  }
  stt = 0;
  for(var i = active - 1; i < items.length; i--){
    stt++;
    let num = stt * -120;
    let scale = 1 - 0.2* stt;
    console.log(num);
    items[i].style.transform = "translateX(" + num + "px) scale(" + scale + ") perspective(16px) rotateY(1deg)";
    items[i].style.zIndex = -stt;
    items[i].style.filter = 'blur(5px)';
    items[i].style.opacity = stt > 2 ? 0 : 0.6;
  }
}
loadShow();

next.onclick = function(){
  active = active + 2;
  loadShow();
}

prev.onclick = function(){
  active = active - 2 > 0;
  loadShow();
}


window.addEventListener('scroll', function() {
  var navbar = document.querySelector('.navbar');
  navbar.classList.toggle('sticky', window.scrollY > 0);
}); 