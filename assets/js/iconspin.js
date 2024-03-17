const targetElement = document.getElementById("bx");
const elementParents = document.getElementsByClassName("skill-pill");

function onMouseOver() {
  this.children[0].classList.add("bx-tada");
}
function onMouseOut() {
  setTimeout(() => {
    this.children[0].classList.remove("bx-tada");
  }, 3000);
}

for (let i = 0; i < elementParents.length; i++) {
  elementParents[i].addEventListener("mouseover", onMouseOver);
  elementParents[i].addEventListener("mouseout", onMouseOut);
}
