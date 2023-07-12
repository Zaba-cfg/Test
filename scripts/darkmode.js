// check for saved 'darkMode' in localStorage
let darkMode = localStorage.getItem("darkMode")

const darkModeToggle = document.querySelector("#dark-mode-toggle")
const iconElement = document.getElementById("dark-mode-icon")

const enableDarkMode = () => {
   // 1. Add the class to the body
   document.body.classList.add("darkmode")
   // 2. Update darkMode in localStorage
   localStorage.setItem("darkMode", "enabled")
   // 3. Update the icon
   iconElement.classList.remove("bi-sun")
   iconElement.classList.add("bi-moon-stars")
}

const disableDarkMode = () => {
   // 1. Remove the class from the body
   document.body.classList.remove("darkmode")
   // 2. Update darkMode in localStorage
   localStorage.setItem("darkMode", null)
   // 3. Update the icon
   iconElement.classList.remove("bi-moon-stars")
   iconElement.classList.add("bi-sun")
}

// If the user already visited and enabled darkMode
// start things off with it on
if (darkMode === "enabled") {
   enableDarkMode()
}

// When someone clicks the button
darkModeToggle.addEventListener("click", () => {
   // get their darkMode setting
   darkMode = localStorage.getItem("darkMode")

   // if it's not currently enabled, enable it
   if (darkMode !== "enabled") {
      enableDarkMode()
   } else {
      // if it has been enabled, turn it off
      disableDarkMode()
   }
})
