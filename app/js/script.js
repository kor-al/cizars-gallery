const gallery = document.querySelector(".container");
const images = document.querySelectorAll(".img");
const modal = document.querySelector(".modal");
// const containermModal = modal.querySelector(".container--modal");
const imgSelected = modal.querySelector(".img-selected");
const imgWrapper = modal.querySelector(".wrapper");
const imgDescr = modal.querySelector(".img-description");
const aboutDescr = modal.querySelector(".about-description");

const about = document.querySelector(".about");

function handleClick(e) {
  const src = e.target.src;

  if (!modal.classList.contains("visible")) {
    modal.classList.add("visible");
    //;.src;
  }
  imgSelected.src = src;
  // imgDescr.textContent = "Example text"
  if (e.target.classList.contains("threejs")) {
    imgDescr.innerHTML = `
    Interactive 3D project about mental scissors 
    <a href="https://kor-al.github.io/scissors/" target="_blank" >available online</a>`;
  }
}

const intervalRandom = (min, max) => {
  return Math.random() * (max - min) + min;
};

for (const img of images) {
  img.style.transform = `translate(${intervalRandom(
    -30,
    30
  )}px, ${intervalRandom(-30, 30)}px)`;
  img.parentElement.style.width = `${intervalRandom(10, 15)}rem`;
  img.parentElement.style.maxHeight = `${intervalRandom(10, 15)}rem`;

  img.addEventListener("click", handleClick);
}

modal.addEventListener("click", (e) => {
  const clicked = e.target;
  if (clicked != imgSelected && modal.classList.contains("visible")) {
    imgSelected.src = "";
    modal.classList.remove("visible");
  }
  aboutDescr.innerHTML = ``;
  imgDescr.innerHTML = ``;
});

about.addEventListener("click", (e) => {
  if (!modal.classList.contains("visible")) {
    modal.classList.add("visible");
    //;.src;
  }
  aboutDescr.innerHTML = `<p>
  Hi! I'm an artist and data scientist from Moscow.</p>
  <p>
  I created this project being mesmerized by different types of scissors. 
  The weight and material of scissors, strong distinctive sounds of cutting, the satisfaction of clear cuts — those are main senses that inspired me.
  </p>
  <p>
  My resume can be found <a hre="https://kor-al.github.io/resume/" target="_blank">here</a>
  </p>`;
});
