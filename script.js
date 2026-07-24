const imagenesCarrusel = document.querySelectorAll(".carrusel-imagen");
const botonAnterior = document.querySelector(".carrusel-boton.anterior");
const botonSiguiente = document.querySelector(".carrusel-boton.siguiente");
const contenedorIndicadores = document.querySelector(".carrusel-indicadores");

let imagenActual = 0;
let intervaloCarrusel;

function crearIndicadores() {
  imagenesCarrusel.forEach((_, indice) => {
    const punto = document.createElement("span");
    punto.classList.add("carrusel-punto");

    punto.addEventListener("click", () => {
      mostrarImagen(indice);
      reiniciarCarruselAutomatico();
    });

    contenedorIndicadores.appendChild(punto);
  });
}

function mostrarImagen(indice) {
  imagenesCarrusel.forEach((imagen) => {
    imagen.classList.remove("activa");
  });

  const puntos = document.querySelectorAll(".carrusel-punto");

  puntos.forEach((punto) => {
    punto.classList.remove("activo");
  });

  imagenActual = indice;

  if (imagenActual >= imagenesCarrusel.length) {
    imagenActual = 0;
  }

  if (imagenActual < 0) {
    imagenActual = imagenesCarrusel.length - 1;
  }

  imagenesCarrusel[imagenActual].classList.add("activa");

  if (puntos.length > 0) {
    puntos[imagenActual].classList.add("activo");
  }
}

function siguienteImagen() {
  mostrarImagen(imagenActual + 1);
}

function anteriorImagen() {
  mostrarImagen(imagenActual - 1);
}

function iniciarCarruselAutomatico() {
  intervaloCarrusel = setInterval(siguienteImagen, 5000);
}

function reiniciarCarruselAutomatico() {
  clearInterval(intervaloCarrusel);
  iniciarCarruselAutomatico();
}

if (
  imagenesCarrusel.length > 0 &&
  botonAnterior &&
  botonSiguiente &&
  contenedorIndicadores
) {
  crearIndicadores();
  mostrarImagen(0);
  iniciarCarruselAutomatico();

  botonSiguiente.addEventListener("click", () => {
    siguienteImagen();
    reiniciarCarruselAutomatico();
  });

  botonAnterior.addEventListener("click", () => {
    anteriorImagen();
    reiniciarCarruselAutomatico();
  });
}
