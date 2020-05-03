<script>
  export let links;
</script>

<style>
  ul {
    display: flex;
    align-items: center;
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  li {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  a {
    display: inline-block;
    padding: 0 0.25em;
    font-size: 1.25em;
    text-decoration: none;
  }
</style>

<nav>
  <ul>
    {#each links as link}
      <li>
        <a href={link.url}>
          <svg class="icon icon-{link.icon}">
            <use xlink:href="#icon-{link.icon}" />
          </svg>
          <span class="sr-only">{link.name}</span>
        </a>
      </li>
    {/each}
  </ul>
</nav>
