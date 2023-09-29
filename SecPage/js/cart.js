// localStorage.clear()

let actsize = document.querySelectorAll(".dropdown-content a");
console.log(actsize);

actsize.forEach((element) => {
  element.onclick = (_) => {
    clear();
    element.classList.add("active");
  };
});

function clear() {
  actsize.forEach((element) => {
    element.classList.remove("active");
  });
}

const cartEl = document.querySelector(".cart_list .modal-body");
let productList = JSON.parse(localStorage.getItem("product List")) || [],
  totalCart = document.querySelector(".modal-footer .totalprice"),
  deleteAll = document.querySelector("#deleteall");
console.log(deleteAll);

function addToCartList(proBtn) {
  let productObject = {};

  let product = proBtn.parentElement.parentElement.parentElement.parentElement,
    pro_price = +product.querySelector(".price").innerText,
    pro_name = product.querySelector("h5").innerText,
    id_num = product.querySelector(".id_num").innerText,
    pro_Quantity = +product.querySelector(".count").innerText,
    pro_pic = product.querySelector(".main .big img").src,
    size = document.querySelector(".dropdown-content .active"),
    selectvalue = size.innerHTML,
    pro_total = +(pro_price * pro_Quantity);

  let possitionPro = productList.findIndex((item) => {
    let x =
      item.name == pro_name && item.src == pro_pic && item.size == selectvalue;
    return x;
  });

if(possitionPro>=0){
  console.log(productList[possitionPro].count);
  productList[possitionPro].count += pro_Quantity;
  storeEnd(productList);


}else{
  productObject.price = pro_price;
  productObject.name = pro_name;
  productObject.id = id_num;
  productObject.count = pro_Quantity;
  productObject.src = pro_pic;
  productObject.size = selectvalue;
  productObject.total = pro_total;

  productList.push(productObject);
  storeEnd(productList);

}

}

showProduct(); // عرض المنتجات المخزنة في السلة عند تحميل الصفحة

function showProduct() {
  let totalsum = 0;
  cartEl.innerHTML = ""; // قم بمسح محتوى العرض الحالي للسلة

  productList.forEach((product, ind) => {
    sumone = product.price * product.count;

    let content = `
    <div class="row my-4">
    <div class="col col-2">
      <img src="${
        product.src
      }"  alt="" class="img-fluid" style="border-radius: 50%;">
    </div>
  
    <div class="col" style="font-size: 14px;">
      ${product.name}   
    </div>
    
    <div class="col pt-2">
      ${product.size}   
    </div>
  
    <div class="col pt-2">
    ${product.id}   
    </div>
    
  <div class="col pt-2">
  ${product.price}   
  </div>
  
  <div class="col pt-2">
  ${product.count}   
  </div>
  
  <div class="col pt-2">
  ${(product.price * product.count).toFixed(2)}   
  </div>
  
  <div class="col ">
    <button class="btn close  pb-4" id="delete" data-id=${ind}>
    <i class="fa-solid fa-trash"  id="delete_icon" data-id=${ind}></i></button>
  </div>
  
  </div> 

  `;
    cartEl.innerHTML += content;
    // console.log(product); // إضافة المحتوى الجديد إلى عرض السلة

    totalsum += sumone;
  });
  totalCart.innerText = totalsum.toFixed(2);
}

// delete all product

function deleteAllProduct() {
  productList = [];
  storeEnd(productList);
}

// delete one
addEventListener("click", (event) => {
  if (event.target.id == "delete" || event.target.id == "delete_icon") {
    let idd = event.target.getAttribute("data-id");
    productList.splice(idd, 1);
    storeEnd(productList);
  }
});

function storeEnd(arr) {
  localStorage.setItem("product List", JSON.stringify(arr));
  showProduct();
}
