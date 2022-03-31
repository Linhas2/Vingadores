// char - string = 'um texto aqui'
// number 12345
// boolean = true ou false

// ABRE E FECHA O MENU QUANDO CLICA NOS ICONS
const nav = document.querySelector('header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

//QUANDO CLICAR EM UM ITEM DO MENU ESCONDELO E NAVEGAR
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

// MULDAR O HEADER DA PG QUANDO DER SCROLL
const header = document.querySelector('#header')
const navHeight = header.offsetHeight
window.addEventListener('scroll', function () {
  if (this.window.scrollY >= navHeight) {
    //SCROLL É MAIOR QUE A ALTURA DO HEADER
    header.classList.add('scroll')
  } else {
    //MENOR QUE A ALTURA DO HEADER
    header.classList.remove('scroll')
  }
})

// TESTIMONIALS CAROUSEL SLIDER SWIPER
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

// SCROLLREVEAL: MOSTRAR ELEMENTOS QUANDO DER SCROLL NA PG
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
   #services header, #services .card,
    #testimonials header, #testimonials .testimonials,
     #contact .text, #contact .links,
     footer .brand, footer .social`,
  { interval: 100 }
)

// BACK TO TOP APARECE LOGO DPS DE SROLL PRA BAIXO
const backToTopButton = document.querySelector('.back-to-top')
window.addEventListener('scroll', function () {
  if (window.scrollY >= 530) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
})
