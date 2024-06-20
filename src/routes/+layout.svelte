<script>
  let showDropdown = false;
  let loggedIn = false;

  function toggleDropdown() {
    showDropdown = !showDropdown;
  }
</script>

<div class="dropdown-menu">
  <div id="checkbox-container">
    <input type="checkbox" id="dropdown" on:click={toggleDropdown} />
    <label for="dropdown" class="toggle">
      <div id="menu-bar-1" class="menu-bar">-</div>
      <div id="menu-bar-2" class="menu-bar">-</div>
      <div id="menu-bar-3" class="menu-bar">-</div>
    </label>
  </div>

  <div id="logo">
    <a href="/">
      <img src="src\lib\logo\logo-trans-text.PNG" alt="Logo" />
    </a>
  </div>

  <div id="dungeonslogo">
    <a href="https://www.dndbeyond.com/" target="_blank">
      <img src="src\lib\logo\DnD-Logo.png" alt="Dungeons and Dragons Logo" />
    </a>
  </div>
</div>

{#if showDropdown}
  <nav>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/stats">Stats</a></li>
      <li><a href="/Spells">Spells</a></li>
    </ul>
    <br />
    <ul>
      <li><a href="/login">Login</a></li>
    </ul>
  </nav>
{/if}

<slot></slot>

<style>
</style>
