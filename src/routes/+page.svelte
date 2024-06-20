<script>
  import ArmourSelect from "$lib/ArmourSelect.svelte";
  import CharStats from "$lib/CharStats.svelte";
  import ClassSelect from "$lib/ClassSelect.svelte";
  import RaceSelect from "$lib/RaceSelect.svelte";
  import LoadPopUp from "../lib/LoadPopUp.svelte";
  import { races } from "../lib/playableRaces.mjs";

  export let item;
  console.log(item);
</script>


<main id="HomeMain">
  <section id="CreationContainer">
    <input type="text" id="CharacterName" placeholder="Character Name" />
    <div id="CharCreation">
      <ArmourSelect />
      <RaceSelect />
      <div>
        <CharStats />
        <ClassSelect />
      </div>
    </div>
  </section>
</main>

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

#HomeMain {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 95vh;
}

#CharCreation {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

#CharacterName {
  margin: 10px;
  padding: 10px;
  border: 2px solid var(--secondary-color);
  font-weight: bold;
  font-size: 18px;
  max-width: 300px;
  text-align: center;
}

#CreationContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  max-width: 800px;
  margin-top: -80px;
}

@media screen and (max-width: 768px) {
  #CharCreation {
    flex-direction: column;
    gap: 10px;
  }

  #CharacterName {
    max-width: 100%;
  }

  #CreationContainer {
    margin-top: -40px;
  }
}
</style>
