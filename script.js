// Obtener el contenedor donde se mostrarán los detalles de los productos

let contenedorProductos = document.getElementById("contenedorProductos")

// Hacer la solicitud utilizando fetch para obtener el archivo JSON de productos

fetch("productos.json")
   .then(function (response) {
      return response.json()
   })
   .then(function (data) {
      // Recorrer el array de productos y mostrar los detalles

      data.forEach(function (producto) {
         // Crear el HTML para los detalles del producto

         let productoHTML = `
         <div class="productos">
            <img class="productos-img" src=${producto.img}>
            <h3 class="productos-card">${producto.nombre}</h3>
            <h4 class="productos-card">${producto.categoria}</h4>
            <h5 class="productos-card">$${producto.precio}</h5>
         </div>
         `

         // Agregar el HTML al contenedor de productos utilizando innerHTML

         contenedorProductos.innerHTML += productoHTML
      })
   })
   .catch(function (error) {
      console.log("Error al obtener los datos de productos:", error)
   })

// Menú hamburguesa

const menu = document.querySelector(".navbar-list")
const menuItems = document.querySelectorAll(".navbar-item-link")
const hamburger = document.querySelector(".hamburger")
const closeIcon = document.querySelector(".closeIcon")
const menuIcon = document.querySelector(".menuIcon")

function toggleMenu() {
   if (menu.classList.contains("showMenu")) {
      menu.classList.remove("showMenu")
      closeIcon.style.display = "none"
      menuIcon.style.display = "block"
   } else {
      menu.classList.add("showMenu")
      closeIcon.style.display = "block"
      menuIcon.style.display = "none"
   }
}

hamburger.addEventListener("click", toggleMenu)

menuItems.forEach(function (menuItem) {
   menuItem.addEventListener("click", toggleMenu)
})
