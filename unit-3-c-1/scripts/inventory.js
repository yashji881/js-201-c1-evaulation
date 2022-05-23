var data=JSON.parse(localStorage.getItem("products"));

data.map(function(elem,index){

var box=document.createElement("div");
box.setAttribute("id","box");

var type=document.createElement("h3");
type.innerText=elem.type;

var desc=document.createElement("p");
desc.innerText=elem.desc;

var price=document.createElement("h4");
price.innerText=elem.price;

var image=document.createElement("img");
image.src=elem.image;
image.setAttribute("id","image");

var btn=document.createElement("button");
btn.innerHTML="Remove";
btn.setAttribute("id","remove_product");
btn.addEventListener("click",function(){
    removeitem(elem,index);
})

box.append(image,type,price,desc,btn);

document.getElementById("all_products").append(box);

});

function removeitem(elem,index){

data.splice(index,1)
localStorage.setItem("products",JSON.stringify(data));
window.location.reload();

}