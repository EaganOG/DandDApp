<script>
    import {classes} from "../lib/classes.mjs";

    let selectedClass = "";
    let selectedSubclass = "";

    function handleClassChange(event) {
        selectedClass = event.target.value;
        console.log(selectedClass);
    }
</script>


<select bind:value={selectedClass} on:change={handleClassChange} id="ClassSelect">
    {#each classes as dungeonClass}
        <option value={dungeonClass.Name}>{dungeonClass.Name}</option>
    {/each}
</select>

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
</style>