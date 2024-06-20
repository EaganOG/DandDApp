<script>
    import {classes} from "../lib/classes.mjs";

    let selectedClass = "";
    let selectedSubclass = "";

    function handleClassChange(event) {
        selectedClass = event.target.value;
        console.log(selectedClass);
    }
</script>

<link rel="stylesheet" href="src\lib\styles.css" />

<select bind:value={selectedClass} on:change={handleClassChange} id="ClassSelect">
    {#each classes as dungeonClass}
        <option value={dungeonClass.Name}>{dungeonClass.Name}</option>
    {/each}
</select>