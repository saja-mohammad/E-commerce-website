let heroImg = document.querySelector(".big img");
// console.log(heroImg);

let heroPath = heroImg.getAttribute('src');
// console.log(heroPath);

function change(item){
    let heroImg = document.querySelector(".big img");
    let imgPath = item.getAttribute('src');
    heroImg.src = imgPath ;
}

// let boxImg = document.querySelector(".main .sm :nth-child(4)");
// console.log(boxImg);


function colorBox(num) {
    let heroImg = document.querySelector(".big img");
    let boxImg = document.querySelector(`.main .sm :nth-child(${num})`);
    console.log(boxImg);
    let imgPath = boxImg.getAttribute('src');
    heroImg.src = imgPath;
}

// 
function changeCount(n) {
    let count = +document.querySelector("#count").innerText 
    // console.log(count);
    if (n == -1) {
      if (count == 0) {
        count = 0
      }else{
        count = count + n
      }
  
    } else {
      count = count + n
    }
    document.querySelector("#count").innerText = count
  
  }


// nav secroll
let tophead = document.querySelector(".hero .navbar")

addEventListener("scroll" , _=>{
if(scrollY>100){
    tophead.classList.add("shadow" , "border-bottom")
    tophead.classList.add("bg-secondary")
}else{
    tophead.classList.remove("shadow" , "border-bottom")
    tophead.classList.remove("bg-secondary")
}
})



// nav
let btn = document.querySelector("#navbtn");
let navel = document.querySelector(".nav_div");

console.log(btn, navel);

btn.onclick = (_) => {
  navel.classList.toggle("show");
};



// Find the modal-backdrop element
var modalBackdrop = document.querySelector('div.modal-backdrop.fade.show');

// Check if the element exists before attempting to remove it
if (modalBackdrop) {
    modalBackdrop.remove(); // Remove the element
} else {
    console.log("Element not found.");
}
