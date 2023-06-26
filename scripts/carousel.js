const carousel = document.querySelector(".carousel")
const firstImg = carousel.querySelector("img")
const arrowIcons = document.querySelectorAll(".wrapper i")

let isDragStart = false
let isDragging = false
let prevPageX
let prevScrollLeft
let positionDiff
let autoSlideInterval
let autoSlideDelay = 2000

const showHideIcons = () => {
   const scrollWidth = carousel.scrollWidth - carousel.clientWidth
   arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block"
   arrowIcons[1].style.display =
      carousel.scrollLeft == scrollWidth ? "none" : "block"
}

arrowIcons.forEach((icon) => {
   icon.addEventListener("click", () => {
      const firstImgWidth = firstImg.clientWidth + 14
      carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth
      setTimeout(showHideIcons, 60)
   })
})

const autoSlide = () => {
   const firstImgWidth = firstImg.clientWidth + 14
   const scrollWidth = carousel.scrollWidth - carousel.clientWidth

   if (carousel.scrollLeft >= scrollWidth) {
      carousel.scrollLeft = 0
   } else {
      carousel.scrollLeft += firstImgWidth
   }

   autoSlideInterval = setTimeout(autoSlide, autoSlideDelay)
}

const startAutoSlide = () => {
   clearTimeout(autoSlideInterval)
   autoSlideInterval = setTimeout(autoSlide, autoSlideDelay)
}

const stopAutoSlide = () => {
   clearTimeout(autoSlideInterval)
}

const dragStart = (e) => {
   isDragStart = true
   prevPageX = e.pageX || e.touches[0].pageX
   prevScrollLeft = carousel.scrollLeft
   stopAutoSlide()
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
   startAutoSlide()
}

carousel.addEventListener("mouseenter", stopAutoSlide)
carousel.addEventListener("mouseleave", startAutoSlide)

carousel.addEventListener("mousedown", dragStart)
carousel.addEventListener("touchstart", dragStart)

document.addEventListener("mousemove", dragging)
carousel.addEventListener("touchmove", dragging)

document.addEventListener("mouseup", dragStop)
carousel.addEventListener("touchend", dragStop)

startAutoSlide()
