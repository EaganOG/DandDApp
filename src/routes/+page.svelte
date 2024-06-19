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

<link rel="stylesheet" href="src\routes\styles.css" />

<main id="HomeMain">
  <section id="CreationContainer">
    <input type="text" id="CharacterName" placeholder="Character Name" />
    <div id="CharCreation">
      <ArmourSelect />
      <RaceSelect />
      <CharStats />
    </div>
  </section>
</main>
