const activeScroll = function(){
   if(window.screen.width<=768){
      if(window.scrollY >= 90){
         document.querySelector('.button__scroll').classList.add('button_active');
      }
      else{
         document.querySelector('.button__scroll').classList.remove('button_active');
      }
   }
   else{
      document.querySelector('.button__scroll').classList.remove('button_active');
   }
}


document.querySelector('.burger').addEventListener('click', ()=>{
   document.querySelector('.header__menu').style.transition = 'transform 0.2s ease-in';
   document.querySelector('.burger').classList.toggle('_active');
   document.querySelector('.header__menu').classList.toggle('header__menu_active');
   document.querySelector('body').classList.toggle('body_active');

});

window.addEventListener('resize', ()=>{
   document.querySelector('.header__menu').style.transition = 'none';
   activeScroll();
});

document.querySelector('.button__scroll').addEventListener('click', ()=>{
   document.querySelector('body').scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
});

window.addEventListener('scroll',()=>{
  activeScroll();
})