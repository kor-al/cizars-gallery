
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
}

const intervalRandom = (min, max) => {
  return Math.random() * (max - min) + min;
};


for (const img of images) {
  img.style.transform = `translate(${intervalRandom(
    -60,
    60
  )}px, ${intervalRandom(-60, 60)}px)`;
  img.parentElement.style.width = `${intervalRandom(20, 30)}rem`;
  console.log(img);
  console.log(img.parentElement.style.width)

  img.addEventListener("click", handleClick);
}


modal.addEventListener("click", (e)=>{
    const clicked = e.target
    if (clicked!=imgSelected && modal.classList.contains("visible")){
        imgSelected.src=""
        modal.classList.remove("visible");
    }
    aboutDescr.innerHTML = ``;
    imgDescr.innerHTML = ``;

});

about.addEventListener("click", (e)=>{
  if (!modal.classList.contains("visible")) {
    modal.classList.add("visible");
    //;.src;
  }
  aboutDescr.innerHTML = `<p>
  Hi! I'm an artist and data scientist from Moscow.</p><p>
  I created this project being mesmerized by different types of scissors. 
  The weight and material of scissors, strong distinctive sounds of cutting, the satisfaction of clear cuts — those are main senses that inspired me.</p>`;

});