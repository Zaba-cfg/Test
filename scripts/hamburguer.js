// Menú hamburguesa
// Defino todas las variables

const navbar = document.querySelector("#navbar")
const abrir = document.querySelector("#abrir")
const cerrar = document.querySelector("#cerrar")
const navbarItemLinks = document.querySelectorAll(".navbar-item-link")
const dropdownBtn = document.querySelector(".dropbtn")
const dropdownContent = document.querySelector("#myDropdown")
const dropdownOptions = dropdownContent.querySelectorAll("a")

// Cerrar el menú

const toggleNavbar = () => {
   navbar.classList.toggle("visible")
}

// Cerrar el menú cuando se clickea fuera del menú

const closeNavbar = (event) => {
   if (!navbar.contains(event.target) && !abrir.contains(event.target)) {
      navbar.classList.remove("visible")
   }
}

// Cerrar el menu al clickar en algún ítem excepto en el menú desplegable

navbarItemLinks.forEach((link) => {
   link.addEventListener("click", (event) => {
      if (!event.target.classList.contains("dropbtn")) {
         toggleNavbar()
      }
   })
})

// Eventos de click en el botón de cerrar y fuera del menú

abrir.addEventListener("click", toggleNavbar)
cerrar.addEventListener("click", toggleNavbar)
document.addEventListener("click", closeNavbar)

// Código para el menú desplegable

dropdownBtn.addEventListener("click", (event) => {
   event.stopPropagation()
   dropdownContent.classList.toggle("show")
})

dropdownOptions.forEach((option) => {
   option.addEventListener("click", toggleNavbar)
})

window.addEventListener("click", () => {
   if (dropdownContent.classList.contains("show")) {
      dropdownContent.classList.remove("show")
   }
})
