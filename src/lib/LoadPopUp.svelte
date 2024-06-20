<script>
  import { onMount } from "svelte";

  let selectedVersion = "";
  let showPopup = false;

  const versions = [
    "Dungeons & Dragons 5th Edition",
    "Dungeons & Dragons 4th Edition",
    "Dungeons & Dragons 3.5 Edition",
    "Dungeons & Dragons 3rd Edition",
    "Dungeons & Dragons 2nd Edition",
    "Advanced Dungeons & Dragons 1st Edition",
    "Baldur's Gate 3",
    "Baldur's Gate 2",
    "Baldur's Gate 1",
  ];

  function handleSelection(event) {
    selectedVersion = event.target.value;
  }

  onMount(() => {
    showPopup = true;
  });
</script>


<main>
    {#if showPopup}
    <div class="popup">
      <h1>Version Select</h1>
      <select on:change={handleSelection}>
        {#each versions as version}
          <option value={version}>{version}</option>
        {/each}
      </select>
      <img
        class="DragonsLogo"
        src="./DnD-Logo.png"
        alt="Dungeons and Dragons"
      />
      <p>Selected Version: {selectedVersion}</p>
      <button on:click={() => (showPopup = false)}>Get Started</button>
    </div>
  {/if}
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
  main {
    display: flex;
    flex-direction: column;
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

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
</style>
