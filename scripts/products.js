// Contenedor de productos
let contenedorProductos = document.getElementById("contenedorProductos")

// Hacer la solicitud utilizando fetch para obtener el archivo JSON de productos
fetch("./products/products.json")
   .then(function (response) {
      return response.json()
   })
   .then(function (data) {
      // Recorrer el array de productos y mostrar los detalles
      data.forEach(function (producto) {
         // Crear el HTML para los detalles del producto
         let productoHTML = `
         <section class="container-cards">
            <div class="card">
               <div class="image">
                  <img src="${producto.img1}" alt="producto" />
               </div>
               <h2>${producto.nombre}</h2>
               <p>${producto.descripcion}</p>
               <p>$${producto.precio}</p>
               <div>
                  <i class="bi bi-arrow-right btn-right"></i>
               </div>
            </div>
            <div class="card">
               <div class="image">
                  <img src="${producto.img2}" alt="producto" />
               </div>
               <h2 class="description">${producto.descripcion2}</h2>
               <div>
                  <i class="bi bi-arrow-left btn-left"></i>
                  <i class="bi bi-arrow-right btn-right"></i>
               </div>
            </div>
            <div class="card">
               <div class="image">
                  <img src="${producto.img3}" alt="producto" />
               </div>
               <h2 class="description">${producto.descripcion3}</h2>
               <div>
                  <i class="bi bi-arrow-left btn-left"></i>
               </div>
            </div>
         </section>
         `

         // Agregar el HTML al contenedor de productos utilizando innerHTML
         contenedorProductos.innerHTML += productoHTML
      })

      // Agregar eventos de click a los botones
      let btnLeft = document.querySelectorAll(".btn-left")
      let btnRight = document.querySelectorAll(".btn-right")

      const scrollAmount = 392 // Cantidad de desplazamiento personalizado

      btnLeft.forEach(function (btn) {
         btn.addEventListener("click", function () {
            let containerCards = this.closest(".container-cards")
            containerCards.scrollTo({
               left: containerCards.scrollLeft - scrollAmount,
               behavior: "smooth",
            })
         })
      })

      btnRight.forEach(function (btn) {
         btn.addEventListener("click", function () {
            let containerCards = this.closest(".container-cards")
            containerCards.scrollTo({
               left: containerCards.scrollLeft + scrollAmount,
               behavior: "smooth",
            })
         })
      })
   })
   .catch(function (error) {
      console.log("Error al obtener los datos de productos:", error)
   })

// Mismo código pero para el slider

let slider = document.getElementById("slider")

fetch("./products/products.json")
   .then(function (response) {
      return response.json()
   })
   .then(function (data) {
      data.forEach(function (producto) {
         let productoHTML = `
               <img src="${producto.img1}" alt="Producto">
               <img src="${producto.img2}" alt="Producto">
               <img src="${producto.img3}" alt="Producto">
         `
         slider.innerHTML += productoHTML
      })
   })
   .catch(function (error) {
      console.log("Error al obtener los datos de productos:", error)
   })
