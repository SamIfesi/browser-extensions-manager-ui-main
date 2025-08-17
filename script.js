// START HERE FOR THE DARK MOOD AND STORING THE MODE IN LOCALSTORAGE

const lightMode = document.querySelector("#themeSwitch");

const saveMode = localStorage.getItem("mode");
if (saveMode === "light") {
  document.body.classList.add("lightMode");
}

const modeSwitch = () => {
  document.body.classList.toggle("lightMode");
  if (document.body.classList.contains("lightMode")) {
    localStorage.setItem("mode", "light");
  } else {
    localStorage.setItem("mode", "dark");
  }
};
lightMode.addEventListener("click", modeSwitch);

// END HERE!!!

// ONLY FOR SWITCHING THE MODE WITHOUT STORING IN LOCALSTORAGE
// const lightMode = document.querySelector("#themeSwitch");

// const modeSwitch = () => {
//   document.body.classList.toggle("lightMode");
// };
// lightMode.addEventListener("click", modeSwitch);






// Get filter buttons
const btnAll = document.getElementById("filter-all");
const btnActive = document.getElementById("filter-active");
const btnInactive = document.getElementById("filter-inactive");

// Get all extension cards
const extensions = document.querySelectorAll(".card");

function filterExtensions(type) {
    extensions.forEach(ext => {
        const checkbox = ext.querySelector("input[type='checkbox']");
        const isActive = checkbox && checkbox.checked;

        if (type === "all") {
            ext.style.display = "";
        } 
        else if (type === "active" && isActive) {
            ext.style.display = "";
        } 
        else if (type === "inactive" && !isActive) {
            ext.style.display = "";
        } 
        else {
            ext.style.display = "none";
        }
    });
  }

// Button click events
btnAll.addEventListener("click", () => filterExtensions("all"));
btnActive.addEventListener("click", () => filterExtensions("active"));
btnInactive.addEventListener("click", () => filterExtensions("inactive"));
