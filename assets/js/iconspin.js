const targetElement = document.getElementById("bx");
const elementParents = document.getElementsByClassName("skill-pill");

function createDivider() {
  const divider = document.createElement("div");
  divider.style.borderLeft = "1px solid rgb(35, 176, 176)";
  divider.style.display = "inline";
  return divider;
}

function onMouseOver() {
  this.children[0].classList.add("bx-tada");
  this.children[1].style.display = "none";
  this.style.margin = "0 4px";
}
function onMouseOut() {
  this.children[1].style.display = "";
  this.style.margin = "";
  setTimeout(() => {
    this.children[0].classList.remove("bx-tada");
  }, 3000);
}

for (let i = 0; i < elementParents.length; i++) {
  const divider = createDivider();
  elementParents[i].insertBefore(divider, elementParents[i].children[1]);
  elementParents[i].addEventListener("mouseover", onMouseOver);
  elementParents[i].addEventListener("mouseout", onMouseOut);
}
