export const loadBeast = () => {
  const beastContainer = document.createElement("div");
  beastContainer.id = "beastContent";

  // Título de la sección
  const header = document.createElement("h1");
  header.textContent = "Galería Beast";
  beastContainer.appendChild(header);

  // Array de URLs (reemplazá con tus imagenes)
  const imageUrls = [
    {src:basilisk,title:"Basilisk"},
    {src:cockatrice,title:"cockatrice"},
    {src:dracolizard,title:"dracolizard"},
    {src:forktail,title:"forktail"},
    {src:royalwyvern,title:"royalwyvern"},
     {src:shrieker,title:"shrieker"},
      {src:silverBasilisk,title:"silverBasilisk"},
  ]
  ;

  // Crear el grid
  const grid = document.createElement("div");
  grid.className = "image-grid";

  imageUrls.forEach(({ src, title }, i) => {
    const cell = document.createElement("div");
    cell.className = "image-grid__item";

    const imageTitle = document.createElement("h1");
    imageTitle.textContent = title;

    const img = document.createElement("img");
    img.src = url;
    img.alt = `Bestia ${i + 1}`;
    img.loading = "lazy";

    cell.appendChild(imageTitle);
    cell.appendChild(img);
    grid.appendChild(cell);
  });

  beastContainer.appendChild(grid);
  return beastContainer;
};