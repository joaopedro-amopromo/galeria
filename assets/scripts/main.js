import "./setHeight.js";

import { getImages } from "./images.js";

const container = document.querySelector("#image-container");
const loader = document.querySelector("#loader");
const search = document.querySelector(".search");
const form = document.querySelector("#form");

const images = await getImages();

form.addEventListener("submit", event => {
  event.preventDefault();
});

search.addEventListener("input", event => {
  const value = event.target.value;

  const filteredImages = images.filter(image =>
    image.author.toLowerCase().includes(value.trim().toLowerCase())
  );

  container.innerHTML = "";
  renderImages(filteredImages);
});

const openModal = event => {
  const modal = document.createElement("div");
  modal.id = "modal";

  const imgContent = event.currentTarget.querySelector("img");

  const img = document.createElement("img");
  img.src = imgContent.src;
  img.alt = imgContent.alt;

  modal.appendChild(img);
  document.body.appendChild(modal);

  modal.addEventListener("click", () => {
    document.body.removeChild(modal);
  });
};

const imageCard = image => {
  const card = document.createElement("div");
  card.className = "image-card";

  const imageWrapper = document.createElement("div");
  imageWrapper.className = "image-wrapper";
  const img = document.createElement("img");
  img.src = image.download_url;
  img.alt = image.author;
  img.title = image.author;
  imageWrapper.appendChild(img);

  const title = document.createElement("p");
  title.classList.add("image-title");
  title.textContent = image.author;

  card.appendChild(imageWrapper);
  card.appendChild(title);

  card.addEventListener("click", openModal);

  return card;
};

const renderImages = images => {
  if (images.length === 0) {
    const noResults = document.createElement("p");
    noResults.id = "no-results";
    noResults.textContent = "Nenhuma foto encontrada.";
    container.appendChild(noResults);
    return;
  }

  images.forEach(image => {
    const card = imageCard(image);
    container.appendChild(card);
  });
};

renderImages(images);

setTimeout(() => {
  loader.style.display = "none";
  container.style.display = "flex";
}, 650);
