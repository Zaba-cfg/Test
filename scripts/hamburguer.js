//Menú hamburguesa

const navbar = document.querySelector("#navbar")
const abrir = document.querySelector("#abrir")
const cerrar = document.querySelector("#cerrar")
const navbarItemLinks = document.querySelectorAll(".navbar-item-link")
const dropdownBtn = document.querySelector(".dropbtn")
const dropdownContent = document.querySelector("#myDropdown")
const dropdownOptions = dropdownContent.querySelectorAll("a")

const toggleNavbar = () => {
   navbar.classList.toggle("visible")
}

abrir.addEventListener("click", toggleNavbar)
cerrar.addEventListener("click", toggleNavbar)

navbarItemLinks.forEach((link) => {
   link.addEventListener("click", (event) => {
      if (!event.target.classList.contains("dropbtn")) {
         toggleNavbar()
      }
   })
})

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
