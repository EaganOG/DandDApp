<script>
  import { characterStatistics } from "../lib/characterstatistics.mjs";
</script>


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
  #CharStats {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  max-height: var(--select-element-height);
  max-width: var(--select-element-width);
}

#CharStats div {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  align-self: flex-start;
  margin-bottom: 10px;
  margin-left: 10px;
  padding: 3%;
}

#CharStats label {
  font-weight: bolder;
  font-size: 30px;
  margin-right: 10px;
}

#CharStats input {
  font-size: 18px;
  max-width: 50px;
  right: 100%;
  height: max-content;
  width: max-content;
}

</style>