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

const navbar = document.querySelector("#navbar")
const abrir = document.querySelector("#abrir")
const cerrar = document.querySelector("#cerrar")

abrir.addEventListener("click", () => {
   navbar.classList.add("visible")
})

cerrar.addEventListener("click", () => {
   navbar.classList.remove("visible")
})
