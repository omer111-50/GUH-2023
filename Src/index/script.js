const invisibleButton = document.getElementById("invisible-button");
const flashingDiv = document.getElementById("flashing-div");
const mouseTrail = document.getElementById("mouse-trail");

invisibleButton.addEventListener("click", () => {
  alert("🥳 You found the invisible button! Level 1 Complete!");

  window.location.href = "level1/level1.html";
});

document.addEventListener("mousemove", (e) => {
  const trail = document.createElement("div");
  trail.style.left = e.clientX - 10 + "px";
  trail.style.top = e.clientY - 10 + "px";
  mouseTrail.appendChild(trail);
  setTimeout(() => {
    mouseTrail.removeChild(trail);
  }, 1000);
});

flashingDiv.addEventListener("mouseenter", () => {
  flashingDiv.style.backgroundColor = "yellow";
});

flashingDiv.addEventListener("mouseleave", () => {
  flashingDiv.style.backgroundColor = "red";
});
