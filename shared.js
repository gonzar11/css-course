// alert('hola')
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');
var backdrop = document.querySelector('.backdrop')

toggleButton.addEventListener('click',function() {
  console.log('sdfdf')
  mobileNav.classList.add('open');
  backdrop.classList.add('open');
})

backdrop.addEventListener('click', function(){
  mobileNav.classList.remove('open')
  backdrop.classList.remove('open')
})
