<script>
    let showDropdown = false;
    let loggedIn = false;

    function toggleDropdown() {
        showDropdown = !showDropdown;
    }
</script>

<nav>
    <div class="dropdown">
        <button on:click={toggleDropdown}>Account</button>
        {#if showDropdown}
            {#if loggedIn}
                <ul>
                    <li><a href="/profile">Profile</a></li>
                    <li><a href="/logout">Logout</a></li>
                </ul>
            {:else}
                <ul>
                    <li><a href="/login">Login</a></li>
                    <li><a href="/create-account">Create Account</a></li>
                </ul>
            {/if}
        {/if}
    </div>
</nav>

<slot></slot>



<style>

    *{
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
    }

    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
        background-color: #f0f0f0;
    }

    ul {
        list-style-type: none;
        display: flex;
        gap: 1rem;
    }

    .dropdown {
        position: relative;
    }

    .dropdown ul {
        position: absolute;
        top: 100%;
        right: 0;
        background-color: #f0f0f0;
        padding: 0.5rem;
        list-style-type: none;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }
</style>
