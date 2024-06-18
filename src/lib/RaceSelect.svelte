<script>
  import { races } from "../lib/playableRaces.mjs";

  let selectedRace = "";
  let selectedSubrace = "";

  function handleRaceChange(event) {
    selectedRace = event.target.value;
  }

  function handleSubraceChange(event) {
    selectedSubrace = event.target.value;
  }
</script>

<link rel="stylesheet" href="src/routes/styles.css" />

<main>
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
</main>
