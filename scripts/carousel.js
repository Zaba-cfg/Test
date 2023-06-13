const carousel = document.querySelector(".carousel"),
   firstImg = carousel.querySelectorAll("img")[0],
   arrowIcons = document.querySelectorAll(".wrapper i")

let isDragStart = false,
   isDragging = false,
   prevPageX,
   prevScrollLeft,
   positionDiff,
   autoSlideInterval // variable para almacenar el intervalo de movimiento automático
let autoSlideDelay = 2000 // variable para almacenar el tiempo de espera entre cada movimiento automático

const showHideIcons = () => {
   let scrollWidth = carousel.scrollWidth - carousel.clientWidth
   arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block"
   arrowIcons[1].style.display =
      carousel.scrollLeft == scrollWidth ? "none" : "block"
}

arrowIcons.forEach((icon) => {
   icon.addEventListener("click", () => {
      let firstImgWidth = firstImg.clientWidth + 14
      carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth
      setTimeout(() => showHideIcons(), 60)
   })
})

const autoSlide = () => {
   let firstImgWidth = firstImg.clientWidth + 14
   let scrollWidth = carousel.scrollWidth - carousel.clientWidth

   if (carousel.scrollLeft >= scrollWidth) {
      // Si llegamos al tope derecho, regresamos al tope izquierdo
      carousel.scrollLeft = 0
   } else {
      // Movemos el carrusel hacia la siguiente imagen
      carousel.scrollLeft += firstImgWidth
   }

   autoSlideInterval = setTimeout(autoSlide, autoSlideDelay) // Llamamos a autoSlide nuevamente después de autoSlideDelay
}

const startAutoSlide = () => {
   clearTimeout(autoSlideInterval) // Limpiamos el intervalo anterior para evitar duplicados
   autoSlideInterval = setTimeout(autoSlide, autoSlideDelay) // Iniciamos el intervalo de movimiento automático después de autoSlideDelay
}

const stopAutoSlide = () => {
   clearTimeout(autoSlideInterval) // Detenemos el intervalo de movimiento automático
}

const dragStart = (e) => {
   isDragStart = true
   prevPageX = e.pageX || e.touches[0].pageX
   prevScrollLeft = carousel.scrollLeft
   stopAutoSlide() // Detenemos el movimiento automático al iniciar el arrastre
}

const dragging = (e) => {
   if (!isDragStart) return
   e.preventDefault()
   isDragging = true
   carousel.classList.add("dragging")
   positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX
   carousel.scrollLeft = prevScrollLeft - positionDiff
   showHideIcons()
}

const dragStop = () => {
   isDragStart = false
   carousel.classList.remove("dragging")

   if (!isDragging) return
   isDragging = false
   startAutoSlide() // Reanudamos el movimiento automático al finalizar el arrastre
}

carousel.addEventListener("mouseenter", stopAutoSlide) // Detenemos el movimiento automático cuando el mouse está sobre el carrusel
carousel.addEventListener("mouseleave", startAutoSlide) // Reanudamos el movimiento automático cuando el mouse sale del carrusel

carousel.addEventListener("mousedown", dragStart)
carousel.addEventListener("touchstart", dragStart)

document.addEventListener("mousemove", dragging)
carousel.addEventListener("touchmove", dragging)

document.addEventListener("mouseup", dragStop)
carousel.addEventListener("touchend", dragStop)

startAutoSlide() // Iniciamos el movimiento automático al cargar la página
