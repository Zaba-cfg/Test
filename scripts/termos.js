// Contenedor de TERMOS 1LT
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
         let termosHTML = `
         <section class="container-cards">
            <div class="card">
               <div class="image">
                  <img src="${producto.img1}" alt="producto" />
               </div>
               <h2>${producto.nombre}</h2>
               <p class="precio">$${producto.precio}</p>
               <p>${producto.descripcion}</p>
               <div>
                  <i class="bi bi-arrow-right btn-right"></i>
               </div>
            </div>
            <div class="card">
               <div class="image">
                  <img src="${producto.img2}" alt="producto" />
               </div>
               <p class="description">${producto.descripcion1}</p>
               <p class="description">${producto.descripcion2}</p>
               <p class="description">${producto.descripcion3}</p>
               <p class="description">${producto.descripcion4}</p>
               <p class="description">${producto.descripcion5}</p>
               <p class="description">${producto.descripcion6}</p>
               <div>
                  <i class="bi bi-arrow-left btn-left"></i>
               </div>
            </div>
         </section>
         `

         // Agregar el HTML al contenedor de productos utilizando innerHTML
         contenedorTermos.innerHTML += termosHTML
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

// Contenedor de TERMOS 1.3LT
let contenedorTermos13 = document.getElementById("contenedorTermos13")

// Hacer la solicitud utilizando fetch para obtener el archivo JSON de productos
fetch("./products/termos13.json")
   .then(function (response) {
      return response.json()
   })
   .then(function (data) {
      // Recorrer el array de productos y mostrar los detalles
      data.forEach(function (producto) {
         // Crear el HTML para los detalles del producto
         let termos13HTML = `
         <section class="container-cards">
            <div class="card">
               <div class="image">
                  <img src="${producto.img1}" alt="producto" />
               </div>
               <h2>${producto.nombre}</h2>
               <p class="precio">$${producto.precio}</p>
               <p>${producto.descripcion}</p>
               <div>
                  <i class="bi bi-arrow-right btn-right"></i>
               </div>
            </div>
            <div class="card">
               <div class="image">
                  <img src="${producto.img2}" alt="producto" />
               </div>
               <p class="description">${producto.descripcion1}</p>
               <p class="description">${producto.descripcion2}</p>
               <p class="description">${producto.descripcion3}</p>
               <p class="description">${producto.descripcion4}</p>
               <p class="description">${producto.descripcion5}</p>
               <p class="description">${producto.descripcion6}</p>
               <div>
                  <i class="bi bi-arrow-left btn-left"></i>
               </div>
            </div>
         </section>
         `

         // Agregar el HTML al contenedor de productos utilizando innerHTML
         contenedorTermos13.innerHTML += termos13HTML
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
