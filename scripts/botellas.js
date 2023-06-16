// Contenedor de TERMOS 1.3LT
let contenedorBotellas = document.getElementById("contenedorBotellas")

// Hacer la solicitud utilizando fetch para obtener el archivo JSON de productos
fetch("./products/botellas.json")
   .then(function (response) {
      return response.json()
   })
   .then(function (data) {
      // Recorrer el array de productos y mostrar los detalles
      data.forEach(function (producto) {
         // Crear el HTML para los detalles del producto
         let botellasHTML = `
         <section class="container-cards">
            <div class="card">
               <div class="image">
                  <a class="comprar" href="${producto.link}" target="_blank">
                     <img src="${producto.img1}" alt="producto" />
                     <i class="bi bi-bag-check-fill carrito"></i>
                  </a>
               </div>
               <h2>${producto.nombre}</h2>
               <p class="precio">$${producto.precio}</p>
               <p>${producto.descripcion}</p>
               <i class="bi bi-circle-fill ${producto.color}"></i>
               <div>
                  <i class="bi bi-arrow-right btn-right"></i>
               </div>
            </div>
            <div class="card">
               <div class="image">
                  <img src="${producto.img2}" alt="producto" />
               </div>
               <p class="description">${producto.descripcion1}</p>
               <div>
                  <i class="bi bi-arrow-left btn-left"></i>
               </div>
            </div>
         </section>
         `

         // Agregar el HTML al contenedor de productos utilizando innerHTML
         contenedorBotellas.innerHTML += botellasHTML
      })

      // Agregar eventos de click a los botones
      let btnLeft = document.querySelectorAll(".btn-left")
      let btnRight = document.querySelectorAll(".btn-right")

      const scrollAmount = 500 // Cantidad de desplazamiento personalizado

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
