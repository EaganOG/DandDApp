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

<link rel="stylesheet" href="src/routes/styles.css" />

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
