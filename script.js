let starContainer = document.getElementById("stars");

for (let i = 0; i < 5; i++) {
  let starImg = document.createElement("img");
  starImg.src = "star.svg";
  starImg.className = "star-style";
  starContainer.appendChild(starImg);

  starImg.addEventListener("mouseover", () => onstarhover(i));
  starImg.addEventListener("mouseleave", onstarout);
  starImg.addEventListener("click", () => onstarclick(i));
}

let stars = document.querySelectorAll(".star-style");
let active = -1;

function onstarhover(i) {
  fill(i);
}

function fill(ratingVal) {
  for (let i = 0; i < 5; i++) {
    if (i <= ratingVal) {
      stars[i].src = "starColored.svg";
    } else {
      stars[i].src = "star.svg";
    }
  }
}

function onstarout() {
  fill(active);
}

function onstarclick(i) {
  active = i;
  document.getElementById("display-star-value").innerHTML = i + 1;
  fill(active);
}
