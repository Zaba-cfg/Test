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

// Dropdown

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
   document.getElementById("myDropdown").classList.toggle("show")
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
   if (!event.target.matches(".dropbtn")) {
      let dropdowns = document.getElementsByClassName("dropdown-content")
      let i
      for (i = 0; i < dropdowns.length; i++) {
         let openDropdown = dropdowns[i]
         if (openDropdown.classList.contains("show")) {
            openDropdown.classList.remove("show")
         }
      }
   }
}
