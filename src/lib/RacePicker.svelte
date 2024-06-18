<script>
    import {races} from "../lib/playableRaces.mjs";
</script>

<main>
    <section id="raceSelect">
        <select>
          {#each races as item}
            <option>{item.name}</option>
          {/each}
        </select>
    </section>
</main>

<style>
    #raceSelect {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    #raceSelect select {
        padding: 10px;
        font-size: 16px;
        margin-bottom: 20px;
    }
</style>