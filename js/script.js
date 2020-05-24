//---------------------------------------DOM EVENTS-------------------------------------------------------
const p3 = document.querySelector(".p3");
const p2 = document.querySelector(".p2");

function ubahWarna() {
  p2.style.background = "lightcyan";
}

p2.onclick = ubahWarna; //element method

const p4 = document.querySelector("section#b p");
p4.addEventListener("click", function () {
  //   alert("Oke. ");
  const ul = document.querySelector("section#b ul");
  const li = document.createElement("li");
  const teksLi = document.createTextNode("Item Baru dari AddEventListener.");
  li.appendChild(teksLi);
  ul.appendChild(li);
});
