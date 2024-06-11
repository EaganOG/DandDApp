<script>
  import LoadPopUp from "../lib/LoadPopUp.svelte";
  import {chest, helmet, boots, gloves} from "../lib/gameItems.mjs";
  import {races} from "../lib/playableRaces.mjs";
</script>

<main>
  <section id="CharCreation">
    <input type="text" id="CharacterName" placeholder="Character Name" />

    <section id="ArmourPicker">
      <select id="Helm">
        {#each helmet as item}
          <option value={item.ID}>{item.Name}</option>
        {/each}
      </select>
      <select id="Chest">
        {#each chest as item}
          <option value={item.ID}>{item.Name}</option>
        {/each}
      </select>
      <select id="Boots">
        {#each boots as item}
          <option value={item.ID}>{item.Name}</option>
        {/each}
      </select>
      <select id="Hands">
        {#each gloves as item}
          <option value={item.ID}>{item.Name}</option>
        {/each}
      </select>
    </section>

    <section id="raceSelect">
      <select>
        {#each races as item}
          <option>{item.name}</option>
        {/each}
      </select>
    </section>
  </section>
  
</main>

<style>
  :root{
    --error-color: #ff0000;
  }

  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }

  main {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    font-family: Arial, sans-serif;
  }

  select {
    padding: 10px;
    font-size: 16px;
    margin-bottom: 20px;
  }

  .popup {
    animation: fadeIn 1s;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  }

  .DragonsLogo {
    max-width: 30%;
    max-height: 50%;
    position: absolute;
    right: 0;
    padding-right: 10%;
    padding-bottom: 3%;
  }

  #ArmourPicker {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1.5rem;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
</style>
