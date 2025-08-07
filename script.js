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

console.log(matchMedia);


// window.localStorage.setItem()
const lightMode = document.querySelector("#themeSwitch");
const modeswitch = () => {
  document.body.classList.toggle("lightMode");
};
lightMode.addEventListener("click", modeswitch);

