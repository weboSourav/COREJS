function CreateNavbar() {
  const nav = document.createElement("nav");
  nav.classList.add("myNav");
  document.body.appendChild(nav);
  nav.style.transition = "background-color 0.7s, color 0.10s";

  const ul = document.createElement("ul");
  ul.classList.add("myUl");
  nav.appendChild(ul);

  ul.style.transition = "background-color 0.7s, color 0.10s";

  const li1 = document.createElement("li");
  const li2 = document.createElement("li");
  const li3 = document.createElement("li");
  const li4 = document.createElement("li");
  li1.classList.add("myLi");
  li2.classList.add("myLi");
  li3.classList.add("myLi");
  li4.classList.add("myLi");

  ul.append(li1, li2, li3, li4);

  li1.innerText = "Home";
  li2.innerText = "About";
  li3.innerText = "Services";
  li4.innerText = "Contact";

  return { nav, ul };
}

function createMainDiv() {
  var div = document.createElement("div");

  div.classList.add("myDiv");
  document.body.appendChild(div);
  //document.body.style.textAlign = "center";
  div.style.transition = "background-color 0.7s, color 0.10s";

  const h1 = document.createElement("h1");
  h1.classList.add("h1");
  div.appendChild(h1);
  h1.innerHTML = "HELLO THERE <br>SOURAV SHARMA HERE";
  h1.style.transition = "transform 0.6s";
  h1.style.transformStyle = "preserve-3d";

  h1.addEventListener("click", () => {
    const originalText = h1.innerHTML;
    h1.style.transform = "rotateX(160deg)";
    setTimeout(() => {
      h1.innerHTML = "A FRONTEND DEVELOPER";
    }, 300);

    setTimeout(() => {
      h1.style.transform = "rotateX(0deg)";
      h1.innerHTML = originalText;
    }, 3000);
  });

  var image = document.createElement("img");
  image.classList.add("Myimg");
  image.src = "src/hero-img.png";
  image.alt = "wooww its not loading";
  div.appendChild(image);

  var p = document.createElement("p");
  p.classList.add("myP");
  div.appendChild(p);
  p.innerHTML = "with a passion <br> for developing modern <br> web apps for <br> commercial businesses ";









  return { div };
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
}

function MyFunction(parentDiv, nav, ul) {
  var btn = document.createElement("button");
  btn.classList.add("myBtn");
  btn.innerText = "toggle";
  parentDiv.appendChild(btn);
  btn.addEventListener("click", function () {
    if (parentDiv.style.backgroundColor == "black") {
      parentDiv.style.backgroundColor = "white";
      parentDiv.style.color = "black";
      nav.style.backgroundColor = "white";
      ul.style.color = "black";
      btn.style.color = "white";
      btn.style.backgroundColor = "black";
    } else {
      parentDiv.style.backgroundColor = "black";
      parentDiv.style.color = "white";
      nav.style.backgroundColor = "black";
      //div.innerText = "SEE THE REAL PROGRESS THROUGH THE DARKNESS";
      ul.style.color = "white";
      btn.style.color = "black";
      btn.style.backgroundColor = "white";
    }
    //div.appendChild(btn);
  });
}















function initWebsite() {
  const { nav, ul } = CreateNavbar();
  const { div } = createMainDiv();

  MyFunction(div, nav, ul);
}
initWebsite();





 const secondDiv = document.getElementById("second");
const mainDiv = document.querySelector(".myDiv");
mainDiv.appendChild(secondDiv);