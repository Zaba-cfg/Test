// Contenedor de productos

let contenedorMates = document.getElementById("contenedorMates")
// Hacer la solicitud utilizando fetch para obtener el archivo JSON de productos

fetch("./products/mates.json")
   .then(function (response) {
      return response.json()
   })
   .then(function (data) {
      // Recorrer el array de productos y mostrar los detalles

      data.forEach(function (producto) {
         // Crear el HTML para los detalles del producto

         let productoHTML = `
         <div class="productos">
            <img class="productos-img" src="${producto.img}" alt="Producto">
            <h3 class="productos-card">${producto.nombre}</h3>
            <h4 class="productos-card">${producto.categoria}</h4>
            <h5 class="productos-card">$${producto.precio}</h5>
         </div>
         `

         // Agregar el HTML al contenedor de productos utilizando innerHTML

         contenedorMates.innerHTML += productoHTML
      })
   })
   .catch(function (error) {
      console.log("Error al obtener los datos de productos:", error)
   })

// Contenedor de productos

let contenedorTermos = document.getElementById("contenedorTermos")
// Hacer la solicitud utilizando fetch para obtener el archivo JSON de productos

fetch("./products/termos.json")
   .then(function (response) {
      return response.json()
   })
   .then(function (data) {
      // Recorrer el array de productos y mostrar los detalles

      data.forEach(function (producto) {
         // Crear el HTML para los detalles del producto

         let productoHTML = `
         <div class="productos">
            <img class="productos-img" src="${producto.img}" alt="Producto">
            <h3 class="productos-card">${producto.nombre}</h3>
            <h4 class="productos-card">${producto.categoria}</h4>
            <h5 class="productos-card">$${producto.precio}</h5>
         </div>
         `

         // Agregar el HTML al contenedor de productos utilizando innerHTML

         contenedorTermos.innerHTML += productoHTML
      })
   })
   .catch(function (error) {
      console.log("Error al obtener los datos de productos:", error)
   })
