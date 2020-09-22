var swiper = new Swiper(".swiper-container", {
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    clickable: true,
  },
});

var swiper = new Swiper(".contenedor-testimonios", {
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    clickable: true,
  },
});

var swiper = new Swiper(".trabajos", {
  spaceBetween: 30,
  effect: "fade",
  autoplay: true,
  speed: 1500,
});

gsap.from(".titulo-principal", {
  duration: 0.5,
  bottom: "-50px",
  opacity: 0,
});

gsap.from(".descripcion-principal", {
  delay: 0.5,
  bottom: "-25px",
  opacity: 0,
});

gsap.from(".btn-principal", {
  delay: 1,
  left: "-20px",
  opacity: 0,
});

gsap.from(".titulos-secciones", {
  duration: 0.5,
  delay: 5,
  left: "-20px",
  opacity: 0,
});

gsap.from(".texto-comun", {
  duration: 0.5,
  delay: 5,
  bottom: "-20px",
  opacity: 0,
});

gsap.from(".descripcion-segunda-seccion", {
  duration: 0.5,
  delay: 5,
  bottom: "-20px",
  opacity: 0,
});

gsap.from(".contenedor-testimonios", {
  duration: 0.5,
  delay: 5,
  bottom: "-20px",
  opacity: 0,
});

gsap.from(".trabajos", {
  duration: 0.5,
  delay: 5,
  left: "-20px",
  opacity: 0,
});

gsap.from(".company-desc", {
  duration: 0.5,
  delay: 5,
  bottom: "-20px",
  opacity: 0,
});

gsap.from(".ubicaciones", {
  duration: 0.5,
  delay: 5,
  bottom: "-20px",
  opacity: 0,
});

gsap.from(".nav-sec", {
  duration: 0.5,
  delay: 5,
  bottom: "-20px",
  opacity: 0,
});
