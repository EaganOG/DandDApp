<script>
    import {characterStatistics} from "../lib/characterstatistics.mjs";
</script>

<main>
    <section id="CharStats">
        {#each characterStatistics as stat}
            <div>
                <label>{stat.Name}</label>
                <input type="number" min="8" max="15" bind:value={stat.Value} />
            </div>
        {/each}
    </section>
</main>

<style>
    #CharStats {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    #CharStats div {
        display: flex;
        justify-content: space-between;
        width: 200px;
        margin-bottom: 10px;
    }

    #CharStats label {
        width: 100px;
    }

    #CharStats input {
        width: 50px;
    }
</style>