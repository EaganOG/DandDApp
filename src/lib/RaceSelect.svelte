<script>
  import { races } from "../lib/playableRaces.mjs";

  let selectedRace = "";
  let selectedSubrace = "";
  let selectedRaceImage = {};
  let selectedSubraceImage = {};
  let hasSubrace = false;

  function handleRaceChange(event) {
    selectedRace = event.target.value;
    hasSubrace = false;
    selectedRaceImage = races.find((item) => item.name === selectedRace);
    console.log(selectedRaceImage?.Image);
    console.log(hasSubrace);
  }

  function handleSubraceChange(event) {
    selectedSubrace = event.target.value;
    hasSubrace = true;
    selectedSubraceImage = selectedRaceImage.subraces.find(
      (item) => item.name === selectedSubrace
    );
    console.log(selectedSubraceImage?.Image);
    console.log(hasSubrace);
  }
</script>

<link rel="stylesheet" href="src\lib\styles.css" />

<div id="RaceContainer">
  <section id="RaceDisplay">
    {#if hasSubrace === false && selectedRaceImage}
      <img src={selectedRaceImage?.Image} alt={selectedRaceImage?.name} />
    {:else if hasSubrace === true}
      <img src={selectedSubraceImage?.Image} alt={selectedSubraceImage?.name} />
    {:else}
      <img src={races[1].Image} alt="Placeholder" />
    {/if}
  </section>
  <section id="raceSelect">
    <select bind:value={selectedRace} on:change={handleRaceChange}>
      <option value="">Select a race...</option>
      {#each races as race}
        <option value={race.name}>{race.name}</option>
      {/each}
    </select>

    {#if selectedRace}
      {#each races as race}
        {#if race.name === selectedRace && race.subraces && race.subraces.length > 0}
          <select bind:value={selectedSubrace} on:change={handleSubraceChange}>
            <option value="">Select a subrace...</option>
            {#each race.subraces as subrace}
              <option value={subrace.name}>{subrace.name}</option>
            {/each}
          </select>
        {/if}
      {/each}
    {/if}
  </section>
</div>
