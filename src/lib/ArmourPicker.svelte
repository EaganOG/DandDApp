<script>
  import {chest, helmet, boots, gloves} from "../lib/gameItems.mjs";
</script>

<main>
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
</main>

<style>
    #ArmourPicker {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-right: 5%;
    }

    #ArmourPicker select {
        padding: 10px;
        font-size: 16px;
        margin-bottom: 5%;
        width: 200px;
    }
</style>