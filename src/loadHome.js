// loadHome.js
import geralt from './assets/geralt.webp';

export const loadHome = () => {
  const homeContainer = document.createElement("div");
  homeContainer.id = "homeContent";

  const title = "Geralt of Rivia";

  const heading = document.createElement("h1");
  heading.textContent = "Home Page";

  const paragraph = document.createElement("p");
  paragraph.textContent = "Welcome to the Witcher Page.";

  const img = document.createElement("img");
  img.src = geralt;
  img.alt = title;
  img.loading = "lazy";
  img.style.maxWidth = "100%";
  img.style.height = "auto";
  img.style.opacity = "0.99";

  homeContainer.appendChild(heading);
  homeContainer.appendChild(paragraph);
  homeContainer.appendChild(img);

  return homeContainer;
};
