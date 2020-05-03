<script>
  export let links;
</script>

<style>

</style>

<nav>
  <ul>
    {#each links as link}
      <li>
        <a href={link.url}>{link.name}</a>
      </li>
    {/each}
  </ul>
</nav>
