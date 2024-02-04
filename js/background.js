const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg"];

const bgImage = document.createElement("img");
const changeBtn = document.querySelector("#nextImg");

function imgChange() {
  const rnImg = () => Math.floor(Math.random() * images.length);
  const chosenImage = images[rnImg()];
  bgImage.src = `img/${chosenImage}`;
  bgImage.classList.add("bgimage");
  document.body.prepend(bgImage);
}
imgChange();
changeBtn.addEventListener("click", imgChange);
