let h1 = document.querySelector(".titol__one");
function h1Color() {
  if (h1.style.color === "aqua") {
    h1.style.color = "blueviolet";
  } else {
    h1.style.color = "aqua";
  }
}

h1.onmousedown = h1Color;
