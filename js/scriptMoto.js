function ibg(){
let ibg=document.querySelectorAll(".ibg");
for (var i = 0; i < ibg.length; i++) {
if(ibg[i].querySelector('img')) {
ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
}
}
}
ibg();
(function () {
    const header = document.querySelector('.header');
    window.onscroll = () => {
        if (window.pageYOffset > 50) {
            header.classList.add('header__active');
        } else {
            header.classList.remove('header__active');
        }
    };
}());
(() => {
      window.onload = () => {
        let menu__icon = document.querySelector('.menu__icon');
        let menu__body = document.querySelector('.header__block');
        let body = document.querySelector('body');
        menu__icon.addEventListener('click', (e)=> {
          menu__icon.classList.toggle('active');
          menu__body.classList.toggle('active');
          body.classList.toggle('lock');
        })
      }
    })();