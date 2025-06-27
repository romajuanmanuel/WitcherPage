// index.js
import "./styles.css";
import { loadHome } from "./loadHome.js";
import { loadBeast } from "./loadBeast.js";
import { loadLore } from "./loadLore.js";

const content = document.createElement("div");
content.id = "content";

const header = document.createElement("div");
header.id = "header";
header.textContent = "Witcher Page"

const nav = document.createElement("nav");
nav.id = "nav";


const homeBtn = document.createElement("button");
homeBtn.id = "home";
homeBtn.textContent = "HOME";

const beastBtn = document.createElement("button");
beastBtn.id = "beast";
beastBtn.textContent = "BEAST";

const loreBtn = document.createElement("button");
loreBtn.id = "lore";
loreBtn.textContent = "LORE";


const main = document.createElement("main");
main.id = "main";

const footer = document.createElement("footer");
footer.id = "footer";
footer.textContent = "Witcher Sense On";


nav.append(homeBtn, beastBtn, loreBtn);
content.append(header, nav, main, footer);
document.body.appendChild(content);


const sections = {
  home: loadHome,
  beast: loadBeast,
  lore: loadLore,
};

function handleNavClick(e) {
  const key = e.target.id;
  const loader = sections[key];


  main.innerHTML = "";

  if (typeof loader === "function") {

    const sectionNode = loader();
    main.appendChild(sectionNode);
  } else {
    main.innerHTML = "<p>Sección no encontrada</p>";
  }


  [homeBtn, beastBtn, loreBtn].forEach(btn => {
    btn.classList.toggle("active", btn.id === key);
  });
}


[homeBtn, beastBtn, loreBtn].forEach(btn =>
  btn.addEventListener("click", handleNavClick)
);


homeBtn.click();
