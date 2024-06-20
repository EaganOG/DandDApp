<script>
  let email = "";
  let password = "";
  let emailError = "";
  let passwordError = "";

  function handleSubmit() {
    // Handle form submission here
    console.log("Email:", email);
    console.log("Password:", password);
  }

  function validateEmail() {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
      emailError = "Invalid email address";
    } else {
      emailError = "";
    }
  }

  function validatePassword() {
    const regex =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{8,}$/;
    if (!regex.test(password)) {
      passwordError =
        "Password must have at least 1 capital letter, 1 number, and 1 symbol";
    } else {
      passwordError = "";
    }
  }
</script>

<form id="loginForm" on:submit|preventDefault={handleSubmit}>
  <label for="email">Email:</label>
  <input
    type="email"
    id="email"
    bind:value={email}
    required
    on:input={validateEmail}
  />
  {#if emailError}
    <p>{emailError}</p>
  {/if}

  <label for="password">Password:</label>
  <input
    type="password"
    id="password"
    bind:value={password}
    required
    on:input={validatePassword}
  />
  {#if passwordError}
    <p>{passwordError}</p>
  {/if}

  <button type="submit">Login</button>
</form>

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

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 300px;
    margin: 0 auto;
  }

  form p {
    margin: 0;
    color: var(--error-color);
  }
</style>
