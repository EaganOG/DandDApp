<script>
  const BASE_URL = "https://www.dnd5eapi.co";

  let spells = [];
  let showCantripList = false;
  let showOneList = false;
  let showTwoList = false;
  let showThreeList = false;
  let showFourList = false;
  let showFiveList = false;
  let showSixList = false;
  let showSevenList = false;
  let showEightList = false;
  let showNineList = false;

  async function getSpells() {
    const res = await fetch(`${BASE_URL}/api/spells`);
    const data = await res.json();
    spells = data.results;
    spells.sort((a, b) => a.level - b.level);
  }

  getSpells();

  function toggleCantripList() {
    showCantripList = !showCantripList;
  }

  function toggleOneList() {
    showOneList = !showOneList;
  }

  function toggleTwoList() {
    showTwoList = !showTwoList;
  }

  function toggleThreeList() {
    showThreeList = !showThreeList;
  }

  function toggleFourList() {
    showFourList = !showFourList;
  }

  function toggleFiveList() {
    showFiveList = !showFiveList;
  }

  function toggleSixList() {
    showSixList = !showSixList;
  }

  function toggleSevenList() {
    showSevenList = !showSevenList;
  }

  function toggleEightList() {
    showEightList = !showEightList;
  }

  function toggleNineList() {
    showNineList = !showNineList;
  }
</script>

<link rel="stylesheet" href="src/routes/styles.css" />

<main id="SpellsMain">
  <section id="SpellsHeader">
    <h1>Spells</h1>
    <p>
      Here you can find a list of all the spells in the Dungeons and Dragons 5th
      Edition game. Click on the level of the spell to see a list of all spells
      of that level.
    </p>
  </section>
  <section id="SpellsContainer">
    <div class="spellList">
      <h2
        on:mouseover={() => (event.target.style.color = "white")}
        on:mouseout={() =>
          (event.target.style.color = "var(--secondary-color)")}
        on:click={toggleCantripList}
      >
        Cantrips
      </h2>
      <ul style="display: {showCantripList ? 'inline' : 'none'};">
        {#each spells as spell}
          {#if spell.level === 0}
            <li>{spell.name}</li>
          {/if}
        {/each}
      </ul>
    </div>

    <div class="spellList">
      <h2
        on:mouseover={() => (event.target.style.color = "white")}
        on:mouseout={() =>
          (event.target.style.color = "var(--secondary-color)")}
        on:click={toggleOneList}
      >
        Level 1 Spells
      </h2>
      <ul style="display: {showOneList ? 'inline' : 'none'};">
        {#each spells as spell}
          {#if spell.level === 1}
            <li>{spell.name}</li>
          {/if}
        {/each}
      </ul>
    </div>

    <div class="spellList">
      <h2
        on:mouseover={() => (event.target.style.color = "white")}
        on:mouseout={() =>
          (event.target.style.color = "var(--secondary-color)")}
        on:click={toggleTwoList}
      >
        Level 2 Spells
      </h2>
      <ul style="display: {showTwoList ? 'inline' : 'none'};">
        {#each spells as spell}
          {#if spell.level === 2}
            <li>{spell.name}</li>
          {/if}
        {/each}
      </ul>
    </div>

    <div class="spellList">
      <h2
        on:mouseover={() => (event.target.style.color = "white")}
        on:mouseout={() =>
          (event.target.style.color = "var(--secondary-color)")}
        on:click={toggleThreeList}
      >
        Level 3 Spells
      </h2>
      <ul style="display: {showThreeList ? 'inline' : 'none'};">
        {#each spells as spell}
          {#if spell.level === 3}
            <li>{spell.name}</li>
          {/if}
        {/each}
      </ul>
    </div>

    <div class="spellList">
      <h2
        on:mouseover={() => (event.target.style.color = "white")}
        on:mouseout={() =>
          (event.target.style.color = "var(--secondary-color)")}
        on:click={toggleFourList}
      >
        Level 4 Spells
      </h2>
      <ul style="display: {showFourList ? 'inline' : 'none'};">
        {#each spells as spell}
          {#if spell.level === 4}
            <li>{spell.name}</li>
          {/if}
        {/each}
      </ul>
    </div>

    <div class="spellList">
      <h2
        on:mouseover={() => (event.target.style.color = "white")}
        on:mouseout={() =>
          (event.target.style.color = "var(--secondary-color)")}
        on:click={toggleFiveList}
      >
        Level 5 Spells
      </h2>
      <ul style="display: {showFiveList ? 'inline' : 'none'};">
        {#each spells as spell}
          {#if spell.level === 5}
            <li>{spell.name}</li>
          {/if}
        {/each}
      </ul>
    </div>

    <div class="spellList">
      <h2
        on:mouseover={() => (event.target.style.color = "white")}
        on:mouseout={() =>
          (event.target.style.color = "var(--secondary-color)")}
        on:click={toggleSixList}
      >
        Level 6 Spells
      </h2>
      <ul style="display: {showSixList ? 'inline' : 'none'};">
        {#each spells as spell}
          {#if spell.level === 6}
            <li>{spell.name}</li>
          {/if}
        {/each}
      </ul>
    </div>

    <div class="spellList">
      <h2
        on:mouseover={() => (event.target.style.color = "white")}
        on:mouseout={() =>
          (event.target.style.color = "var(--secondary-color)")}
        on:click={toggleSevenList}
      >
        Level 7 Spells
      </h2>
      <ul style="display: {showSevenList ? 'inline' : 'none'};">
        {#each spells as spell}
          {#if spell.level === 7}
            <li>{spell.name}</li>
          {/if}
        {/each}
      </ul>
    </div>

    <div class="spellList">
      <h2
        on:mouseover={() => (event.target.style.color = "white")}
        on:mouseout={() =>
          (event.target.style.color = "var(--secondary-color)")}
        on:click={toggleEightList}
      >
        Level 8 Spells
      </h2>
      <ul style="display: {showEightList ? 'inline' : 'none'};">
        {#each spells as spell}
          {#if spell.level === 8}
            <li>{spell.name}</li>
          {/if}
        {/each}
      </ul>
    </div>

    <div class="spellList">
      <h2
        on:mouseover={() => (event.target.style.color = "white")}
        on:mouseout={() =>
          (event.target.style.color = "var(--secondary-color)")}
        on:click={toggleNineList}
      >
        Level 9 Spells
      </h2>
      <ul style="display: {showNineList ? 'inline' : 'none'};">
        {#each spells as spell}
          {#if spell.level === 9}
            <li>{spell.name}</li>
          {/if}
        {/each}
      </ul>
    </div>
  </section>
</main>
