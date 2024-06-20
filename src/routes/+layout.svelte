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
      <img src="\logo\logo-trans-text.PNG" alt="Logo" />
    </a>
  </div>

  <div id="dungeonslogo">
    <a href="https://www.dndbeyond.com/" target="_blank">
      <img src="/logo/DnD-Logo.png" alt="Dungeons and Dragons Logo" />
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

  nav {
  /* Navigation Bar Container */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  border: 1px solid var(--secondary-color);
  width: 125px;
  position: fixed;
  animation-name: navSlideIn;
  animation-duration: 0.5s;
  margin-left: 10px;
}

nav br {
  /* The Break between the rest of the options and the Login option */
  display: block;
  padding-bottom: 25px;
}

nav ul {
  /* The style for the list of navigation options */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  list-style: none;
}

nav ul li {
  /* Navigation options styles */
  font-size: var(--select-element-font-size);
  font-weight: var(--select-font-weight);
  margin: 10px;
  padding-left: 20px;
}

nav ul li a {
  /* removes underline from nav options */
  text-decoration: none;
}

#checkbox-container {
  /* Navigation menu button container */
  width: fit-content;
  height: fit-content;
  padding: 10px;
  border: 1px solid var(--secondary-color);
}

.dropdown-menu {
  /* Container holding the list of navigation options */
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.dropdown-menu img {
  /* Logo for the Navigation Menu */
  width: 100px;
  height: 75px;
}

#dropdown {
  /* Disables the Navigation dropdown by default */
  display: none;
}

.toggle {
  /* Container for the overall Menu toggle button */
  position: relative;
  width: 40px;
  height: 40px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 10px;
  transition-duration: 0.5s;
}

.menu-bar {
  /* Class to set the default length of the lines in the button */
  width: 100%;
  height: 4px;
  background-color: var(--secondary-color);
  border-radius: 4px;
}

#menu-bar-2 {
  /* Bar 2 Animation Time */
  transition-duration: 0.8s;
}

#menu-bar-1 {
  width: 50%;
}

#menu-bar-2 {
  width: 75%;
}

#dropdown:checked + .toggle .menu-bar {
  position: absolute;
  transition-duration: 0.5s;
}

#dropdown:checked + .toggle #menu-bar-2 {
  transform: scaleX(0);
  transition-duration: 0.1s;
}

#dropdown:checked + .toggle #menu-bar-1 {
  width: 100%;
  transform: rotate(45deg);
  transition-duration: 0.5s;
}

#dropdown:checked + .toggle #menu-bar-3 {
  width: 100%;
  transform: rotate(-45deg);
  transition-duration: 0.5s;
}

#dropdown:checked + .toggle {
  transition-duration: 0.5s;
  transform: rotate(180deg);
}

@keyframes navSlideIn {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
