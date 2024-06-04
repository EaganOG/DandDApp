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

  async function fetchData() {
    const response = await fetch("127.0.0.1:5000/api/armour");
    const data = await response.json();
    console.log(data);
  }

  function handleSelection(event) {
    selectedVersion = event.target.value;
  }

  onMount(() => {
    fetchData();
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

  <!-- Test -->
</main>

<style>
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
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
