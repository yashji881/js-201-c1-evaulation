//store the products array in localstorage as "products"


// document.getElementById("add_products").addEventListener("click",myfn);

var dataarr=JSON.parse(localStorage.getItem("products")) ||[];

function myfn(){

    event.preventDefault();

    var type=document.querySelector("#type").value;
    var desc=document.querySelector("#desc").value;
    var price=document.querySelector("#price").value;
    var image=document.querySelector("#image").value;

    var dataobj={

type:type,
desc:desc,
price:price,
image:image,

 }

 dataarr.push(dataobj);

 localStorage.setItem("products",JSON.stringify(dataarr));

 document.querySelector("#type").value=null;
 document.querySelector("#desc").value=null;
 document.querySelector("#price").value=null;
 document.querySelector("#image").value=null;
}