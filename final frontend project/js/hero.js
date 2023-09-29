// nav
let btn = document.querySelector("#navbtn");
let navel = document.querySelector(".nav_div");

console.log(btn, navel);

btn.onclick = (_) => {
  navel.classList.toggle("show");
};

// offer

const allDiv = document.querySelectorAll(".offer .box ");
console.log(allDiv);

allDiv.forEach((element) => {
    element.onclick = (_) => {
      clear();
      element.classList.add("active");
  };
});

function clear() {
  allDiv.forEach((element) => {
    element.classList.remove("active");
  });
}



let tophead = document.querySelector(".main .navbar");
console.log(tophead);

addEventListener("scroll", (_) => {
  if (scrollY > 100) {
    tophead.classList.add("shadow", "border-bottom");
    tophead.classList.add("bg-secondary");
  } else {
    tophead.classList.remove("shadow", "border-bottom");
    tophead.classList.remove("bg-secondary");
  }
});


// const inp = document.querySelector("#phone");
// console.log(inp);
// window.intlTelInput(inp, {
//   initialCountry: "auto",
//   geoIpLookup: callback => {
//     fetch("https://ipapi.co/json")
//       .then(res => res.json())
//       .then(data => callback(data.country_code))
//       .catch(() => callback("us"));
//   },
//   utilsScript: "/intl-tel-input/js/utils.js?1690975972744" // just for formatting/placeholders etc
// });