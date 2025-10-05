function MyFunction(){

 var div = document.createElement("div");

div.classList.add("myDiv");
document.body.appendChild(div);
document.body.style.textAlign = "center";

//div.addEventListener("click",function(){
   // div.style.backgroundColor = "black";
    //div.style.color = "white";
//if(div.style.backgroundColor == "black"){
  //  div.style.backgroundColor = "white";
    //div.style.color = "black";
//}else{

  //  div.style.backgroundColor = "black";
    //div.style.color = "white";

//}


//});

var btn = document.createElement("button");
btn.classList.add("myBtn");
btn.innerText = "toggle";
div.appendChild(btn);
btn.addEventListener("click",function
    (){

if(div.style.backgroundColor == "black"){
    div.style.backgroundColor = "white";
    div.style.color = "black";
p.innerHTML = "NAMASTE TO THE PRACTISE SESSION";
}else{
div.style.backgroundColor = "black";
div.style.color = "white";
p.innerHTML = "SEE THE REAL PROGRESS THROUGH THE DARKNESS";
//div.innerText = "SEE THE REAL PROGRESS THROUGH THE DARKNESS";



    }
//div.appendChild(btn);
}
)


var p = document.createElement("p");
p.innerText = "NAMASTE TO THE PRACTISE SESSION";
p.classList.add("myP");
div.appendChild(p);


}
MyFunction();