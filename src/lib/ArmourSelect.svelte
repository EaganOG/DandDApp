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
        <option value="">Select a helmet...</option>
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
  .armour {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

#ArmourDisplay {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px solid var(--secondary-color);
  padding: 10px;
}
#ArmourDisplay img {
  width: 125px;
  height: 125px;
  margin: auto;
}

#ArmourPicker {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px;
}

#ArmourPicker select {
  font-size: 20px;
  font-weight: bolder;
  margin-bottom: 70px;
  width: 300px;
  height: 60px;
  border: 1px solid var(--secondary-color);
}

#ArmourMain {
  margin-left: -240px;
}

#ArmourPicker select option {
  font-size: 20px;
  font-weight: bolder;
  margin-bottom: 20px;
  height: 60px;
  width: 100px;
  background-color: var(--primary-color);
  color: var(--secondary-color);
  text-align: top;
}

@media only screen and (max-width: 768px) {
  #ArmourPicker select {
    width: 100%;
  }
  
  #ArmourMain {
    margin-left: 0;
  }
}

@media only screen and (max-width: 480px) {
  #ArmourDisplay img {
    width: 100px;
    height: 100px;
  }
  
  #ArmourPicker select {
    font-size: 16px;
    margin-bottom: 40px;
    width: 250px;
    height: 50px;
  }
  
  #ArmourPicker select option {
    font-size: 16px;
    margin-bottom: 10px;
    height: 50px;
    width: 80px;
  }
}
</style>