// loadLore.js
export const loadLore = () => {
  const loreContainer = document.createElement("div");
  loreContainer.id = "loreContent";

  loreContainer.innerHTML = `
  <section class="lore-wrapper">
    <h1 class="lore-title">The Witcher 3: Wild Hunt – Lore Overview</h1>

    <p class="lore-intro">
      <strong>The Witcher 3: Wild Hunt</strong> is set in a vast continent inspired by Slavic folklore,
      where humans, elves, dwarves, and monsters coexist in a world shaped by war, magic, and destiny.
    </p>

    <div class="lore-section">
      <h2>General Summary</h2>
      <p>
        The story follows <strong>Geralt of Rivia</strong>, a monster hunter, on a quest to find his adopted
        daughter <strong>Ciri</strong>, who is pursued by the spectral <em>Wild Hunt</em>. Meanwhile, the
        Northern Kingdoms are at war with the <strong>Nilfgaardian Empire</strong>.
      </p>
    </div>

    <div class="lore-section">
      <h2>The World & Races</h2>
      <p>
        <strong>The Continent:</strong> Formed after the Conjunction of the Spheres, merging dimensions
        and introducing monsters and magic.
      </p>
      <p>
        <strong>Races and Cultures:</strong> Humans, elves, dwarves, and other beings coexist — often
        uneasily, facing conflict and discrimination.
      </p>
    </div>

    <div class="lore-section">
      <h2>The Witcher</h2>
      <p>
        <strong>Geralt:</strong> A mutant warrior with supernatural abilities. Feared, respected, and
        indispensable in a dangerous world.
      </p>
    </div>

    <div class="lore-section">
      <h2>The Wild Hunt</h2>
      <p>
        Specters from another realm pursuing <strong>Ciri</strong> due to her <em>Elder Blood</em>,
        which grants her world-traveling abilities.
      </p>
    </div>

    <div class="lore-section">
      <h2>Political Landscape</h2>
      <p>
        The <strong>Northern Kingdoms</strong> are engulfed in war against the expanding
        <strong>Nilfgaardian Empire</strong>, which seeks domination.
      </p>
    </div>

    <div class="lore-section">
      <h2>Key Characters</h2>
      <ul>
        <li><strong>Geralt of Rivia:</strong> Protagonist and monster hunter.</li>
        <li><strong>Ciri:</strong> Adopted daughter with Elder Blood.</li>
        <li><strong>Yennefer:</strong> Sorceress and Geralt’s lover.</li>
      </ul>
    </div>

    <div class="lore-section">
      <h2>Themes</h2>
      <p>
        Prejudice, war, moral ambiguity, political schemes, and the weight of destiny
        are central to the game’s narrative.
      </p>
    </div>

    <div class="lore-section">
      <h2>Connections to Previous Games</h2>
      <p>
        Continues threads from <strong>The Witcher 2</strong>, especially political conflicts and
        the Nilfgaardian threat. Prior choices can impact the world state.
      </p>
    </div>
  </section>
`;
  return loreContainer;
};



