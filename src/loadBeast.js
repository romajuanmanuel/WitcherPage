
import basilisk from './assets/basilisk.webp';
import cockatrice from './assets/cockatrice.webp';
import dracolizard from './assets/dracolizard.webp';
import forktail from './assets/forktail.webp';
import royalwyvern from './assets/royalwyvern.webp';
import shrieker from './assets/shrieker.webp';
import silverBasilisk from './assets/silver_basilisk.webp';

const imageUrls = [
  { src: basilisk, title: "Basilisk" },
  { src: cockatrice, title: "Cockatrice" },
  { src: dracolizard, title: "Dracolizard" },
  { src: forktail, title: "Forktail" },
  { src: royalwyvern, title: "Royal Wyvern" },
  { src: shrieker, title: "Shrieker" },
  { src: silverBasilisk, title: "Silver Basilisk" },
]
  ;

export const loadBeast = () => {
  const beastContainer = document.createElement("div");
  beastContainer.id = "beastContent";

  const header = document.createElement("h1");
  header.textContent = "Beast Gallery";
  beastContainer.appendChild(header);

  const grid = document.createElement("div");
  grid.className = "image-grid";

  imageUrls.forEach(({ src, title }, i) => {
    const cell = document.createElement("div");
    cell.className = "image-grid__item";

    const imageTitle = document.createElement("h1");
    imageTitle.textContent = title;

    const img = document.createElement("img");
    img.src = src;
    img.alt = title;
    img.loading = "lazy";

    cell.appendChild(imageTitle);
    cell.appendChild(img);
    grid.appendChild(cell);
  });

  beastContainer.appendChild(grid);
  return beastContainer;
};
