// Typewriter

const typedStock = new Typed(".typedStock", {
   strings: ["¡ÚLTIMA OFERTA!"],

   typeSpeed: 75,
   startDelay: 300,
   backSpeed: 40,
   smartBackspace: true,
   shuffle: false,
   backDelay: 1500,
   loop: true,
   loopCount: false,
   showCursor: true,
   cursorChar: "|",
   contentType: "html",
})

const typedPrueba = new Typed(".typedPrueba", {
   stringsElement: "#typewriter-textos",
   typeSpeed: 60,
   startDelay: 200,
   backSpeed: 45,
   smartBackspace: true,
   shuffle: false,
   backDelay: 1300,
   loop: true,
   loopCount: false,
   showCursor: false,
   cursorChar: "|",
   contentType: "html",
})
