<script>
  import { chest, helmet, boots, gloves } from "../lib/gameItems.mjs";

  let selectedHelmet = "6567567567556756756756765765757756756765756756767"; // Default selected helmet ID
  let selectChest = ""; // Default selected chest ID
  let selectBoots = ""; // Default selected boots ID
  let selectGloves = ""; // Default selected gloves ID
  let chestDisplay = {}; // Object to store the selected chest item
  let helmetDisplay = {}; // Object to store the selected helmet item
  let bootsDisplay = {}; // Object to store the selected boots item
  let glovesDisplay = {}; // Object to store the selected gloves item

  function selectedHelm(event) {
    selectedHelmet = event.target.value;
    console.log(selectedHelmet);
    helmetDisplay = helmet.find((item) => item.Name === selectedHelmet);
    console.log(helmetDisplay?.Image);
  }

  function selectedChest(event) {
    selectChest = event.target.value;
    console.log(selectChest);
    chestDisplay = chest.find((item) => item.Name === selectChest);
    console.log(chestDisplay?.Image);
  }

  function selectedBoots(event) {
    selectBoots = event.target.value;
    console.log(selectBoots);
    bootsDisplay = boots.find((item) => item.Name === selectBoots);
    console.log(bootsDisplay?.Image);
  }

  function selectedGloves(event) {
    selectGloves = event.target.value;
    console.log(selectGloves);
    glovesDisplay = gloves.find((item) => item.Name === selectGloves);
    console.log(glovesDisplay?.Image);
  }
</script>

<link rel="stylesheet" href="src/routes/styles.css" />

<main id="ArmourMain">
  <div class="armour">
    <section id="ArmourDisplay">
      <div id="HelmetDisplay">
        {#if helmetDisplay}
          <img src={helmetDisplay.Image} alt={helmetDisplay.Name} />
        {:else}
          <p>No helmet selected</p>
        {/if}
      </div>
      <div id="ChestDisplay">
        {#if chestDisplay}
          <img src={chestDisplay.Image} alt={chestDisplay.Name} />
        {:else}
          <p>No chest selected</p>
        {/if}
      </div>
      <div id="GlovesDisplay">
        {#if glovesDisplay}
          <img src={glovesDisplay.Image} alt={glovesDisplay.Name} />
        {:else}
          <p>No gloves selected</p>
        {/if}
      </div>
      <div id="BootsDisplay">
        {#if bootsDisplay}
          <img src={bootsDisplay.Image} alt={bootsDisplay.Name} />
        {:else}
          <p>No boots selected</p>
        {/if}
      </div>
    </section>

    <section id="ArmourPicker">
      <select id="Helm" bind:value={selectedHelmet} on:change={selectedHelm}>
        {#each helmet as item}
          <option value={item.Name}>{item.Name}</option>
        {/each}
      </select>
      <select id="Chest" bind:value={selectChest} on:change={selectedChest}>
        {#each chest as item}
          <option value={item.Name}>{item.Name}</option>
        {/each}
      </select>
      <select id="Hands" bind:value={selectGloves} on:change={selectedGloves}>
        {#each gloves as item}
          <option value={item.Name}>{item.Name}</option>
        {/each}
      </select>
      <select id="Boots" bind:value={selectBoots} on:change={selectedBoots}>
        {#each boots as item}
          <option value={item.Name}>{item.Name}</option>
        {/each}
      </select>
    </section>
  </div>
</main>
