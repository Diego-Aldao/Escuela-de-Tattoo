window.onload = () => {
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
    spaceBetween: 50,
    effect: "fade",
    autoplay: true,
    speed: 1500,
    loop: true,
  });
};

//API INTESERCTION OBSERVER
const crearObservador = (animacion, nuevaClase) => {
  const secciones = document.querySelectorAll(animacion);

  const options = {
    root: null, //es el default, todo el viewport
    threshold: 0.3, // 0 dispara en el momento que el elemento entra al observador, 1 dispara cuando todo el elemento ya esta dentro del observador
  };

  const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      } //si no esta en la pantalla, termina la funcion
      entry.target.classList.add(nuevaClase);

      observer.unobserve(entry.target); //para que las animaciones solo se ejecuten la primera vez que se entra en la seccion.
    });
  }, options);
  secciones.forEach((section) => {
    observer.observe(section); //al usar querySelectorAll tengo un array con las secciones, y lo que quiero lograr es observar uno por uno
  });
};

crearObservador(".animacion-uno", "final-uno");
crearObservador(".animacion-dos", "final-dos");
crearObservador(".animacion-tres", "final-tres");
