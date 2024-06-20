<script>
  import { characterStatistics } from "../lib/characterstatistics.mjs";
</script>

<link rel="stylesheet" href="src\lib\styles.css" />

<main>
  <section id="CharStats">
    {#each characterStatistics as stat}
      <div id="StatInput">
        <a href="/{stat.Name}" style="text-decoration: none;">
          <label
            on:mouseover={() => (event.target.style.color = "white")}
            on:mouseout={() =>
              (event.target.style.color = "var(--secondary-color)")}
            >{stat.Name}
          </label>
        </a>
        <input type="number" min="8" max="15" bind:value={stat.Value} />
      </div>
    {/each}
  </section>
</main>
