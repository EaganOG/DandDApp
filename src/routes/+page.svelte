<script>
  import ArmourPicker from "$lib/ArmourPicker.svelte";
  import CharStats from "$lib/CharStats.svelte";
  import RacePicker from "$lib/RacePicker.svelte";
  import LoadPopUp from "../lib/LoadPopUp.svelte";
</script>

<main>
  <section id="CharCreation">
    <input type="text" id="CharacterName" placeholder="Character Name" />

    <div id="CharPickers">
      <ArmourPicker />
      <RacePicker />
      <CharStats />
    </div>
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

  #CharacterName {
    padding: 10px;
    font-size: 16px;
    margin-bottom: 20px;
    width: 200px;
    margin-left: 35%;
  }

  #CharPickers {
    display: flex;
    justify-content: space-around;
    width: 100%;
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
