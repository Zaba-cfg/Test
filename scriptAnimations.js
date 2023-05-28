// Menú hamburguesa

const navbar = document.querySelector("#navbar")
const abrir = document.querySelector("#abrir")
const cerrar = document.querySelector("#cerrar")

abrir.addEventListener("click", () => {
   navbar.classList.add("visible")
})

cerrar.addEventListener("click", () => {
   navbar.classList.remove("visible")
})

// Scroll del slider con la rueda

let scrollableWrapper = document.getElementById("slider")
let scrollableContent = document.getElementById("slider-content")
let isScrolling = false
let scrollOffset = 0
let requestId

scrollableWrapper.addEventListener("mouseenter", function () {
   isScrolling = true
   requestAnimationFrame(scrollContent)
})

scrollableWrapper.addEventListener("mouseleave", function () {
   isScrolling = false
})

scrollableWrapper.addEventListener("wheel", function (event) {
   if (isScrolling) {
      event.preventDefault()
      scrollOffset += event.deltaY
   }
})

function scrollContent() {
   // Ajusta la velocidad de desplazamiento

   scrollableWrapper.scrollLeft += scrollOffset * 0.1
   // Ajusta el factor de atenuación

   scrollOffset *= 0.9

   if (Math.abs(scrollOffset) < 0.1) {
      scrollOffset = 0
   }

   if (isScrolling || Math.abs(scrollOffset) > 0) {
      requestId = requestAnimationFrame(scrollContent)
   }
}

// Detener la animación cuando el usuario cambia de pestaña o ventana

document.addEventListener("visibilitychange", function () {
   if (document.visibilityState === "hidden") {
      cancelAnimationFrame(requestId)
   } else if (isScrolling) {
      requestAnimationFrame(scrollContent)
   }
})
