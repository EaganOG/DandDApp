<script>
  import ArmourSelect from "$lib/ArmourSelect.svelte";
  import RaceSelect from "$lib/RaceSelect.svelte";
  import LoadPopUp from "../lib/LoadPopUp.svelte";
  import { races } from "../lib/playableRaces.mjs";
</script>

<link rel="stylesheet" href="src\routes\styles.css" />

<main>
  <section id="CreationContainer">
    <div id="CharCreation">
      <input type="text" id="CharacterName" placeholder="Character Name" />
      <ArmourSelect />
      <RaceSelect />
    </div>
  </section>
</main>
