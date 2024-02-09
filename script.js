const rotatingImage = document.querySelector(".sphere-bg");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const rotationAngle = scrollY * 0.2;
  rotatingImage.style.transform = `rotate(${15 + rotationAngle}deg)`;
});
