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

<style>
  :root {
  /* Site Variables */
  --primary-color: #066e79;
  --secondary-color: #edd8a0;
  --error-code: #ff0000;

  --race-image-height: 700px;
  --race-image-width: 400px;
  --select-element-width: (var(--race-image-width) - 50px);
  --select-element-height: (var(var(--race-image-height)) - 100px);
  --select-element-font-size: 20px;
  --select-font-weight: bolder;

  --background-image-url: url("src/lib/logo/Site-Background.png");
}

* {
  /* Global Styles */
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: var(--primary-color);
  color: var(--secondary-color);
  font-family: "Oswald";
}

.oswald-font {
  /* Custom Site Font */
  font-family: "Oswald", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}
  select {
    font-size: 16px;
    margin-bottom: 20px;
  }

  #RaceDisplay {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: var(--race-image-width);
    height: var(--race-image-height);
  }

  #RaceDisplay img {
    max-height: var(--race-image-height);
    max-width: var(--race-image-width);
    padding: 20px;
  }

  #raceSelect {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  #raceSelect select {
    padding: 10px;
    font-size: 16px;
    margin-bottom: 20px;
    max-width: var(--select-element-width);
    max-height: var(--select-element-height);
  }

  #RaceContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--secondary-color);
  }

  /* Responsive Styles */
  @media (max-width: 768px) {
    #RaceDisplay {
      width: 100%;
      height: auto;
    }

    #RaceDisplay img {
      max-width: 100%;
      max-height: auto;
    }

    #raceSelect select {
      max-width: 100%;
      max-height: auto;
    }
  }
</style>