const smallCircle = document.getElementById("small-circle");
const mediumCircle = document.getElementById("medium-circle");
const largeCircle = document.getElementById("large-circle");

window.addEventListener("mousemove", (e) => {
  smallCircle.style.left = e.pageX + "px";
  smallCircle.style.top = e.pageY + "px";
  mediumCircle.style.left = e.pageX + "px";
  mediumCircle.style.top = e.pageY + "px";
  largeCircle.style.left = e.pageX + "px";
  largeCircle.style.top = e.pageY + "px";
});
