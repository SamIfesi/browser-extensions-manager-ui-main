// let lightMode = localStorage.getItem('lightMode');
// const themeSwitch = document.querySelector('#themeSwitch');

// const enableLightMode = () =>

// themeSwitch.addEventListener('click', () => {
//     if(lightMode !== "active"){
//         enableLightMode()
//     }else{
//         disableLightMode()
//     }
// })

// START HERE FOR THE DARK MOOD AND STORING THE MODE IN LOCALSTORAGE

// const lightMode = document.querySelector("#themeSwitch");

// const saveMode = localStorage.getItem("mode");
// if (saveMode === "light") {
//   document.body.classList.add("lightMode");
// }

// const modeSwitch = () => {
//   document.body.classList.toggle("lightMode");
//   if (document.body.classList.contains("lightMode")) {
//     localStorage.setItem("mode", "light");
//   } else {
//     localStorage.setItem("mode", "dark");
//   }
// };
// lightMode.addEventListener("click", modeSwitch);

// END HERE!!!

// ONLY FOR SWITCHING THE MODE
const lightMode = document.querySelector("#themeSwitch");

const modeSwitch = () => {
  document.body.classList.toggle("lightMode");
};
lightMode.addEventListener("click", modeSwitch);
