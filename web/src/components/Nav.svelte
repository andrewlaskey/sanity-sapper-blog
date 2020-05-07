<script>
  export let segment;
</script>

<style>
  nav {
    font-weight: 300;
    padding: 0 1em;
  }

  ul {
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;
  }

  li {
    display: block;
  }

  .selected {
    position: relative;
    display: inline-block;
  }

  .selected::after {
    position: absolute;
    content: "";
    width: calc(100% - 1em);
    height: 2px;
    background-color: #36c593;
    display: block;
    bottom: -1px;
  }

  a {
    text-decoration: none;
    padding: 1em 0.5em;
    display: block;
  }
</style>

<nav>
  <ul>
    <li>
      <a class={segment === undefined ? 'selected' : ''} href=".">home</a>
    </li>

    <li>
      <a
        rel="prefetch"
        class={segment === 'shares' ? 'selected' : ''}
        href="shares">
        shares
      </a>
    </li>

    <li>
      <a
        rel="prefetch"
        class={segment === 'work-projects' ? 'selected' : ''}
        href="work-projects">
        work & projects
      </a>
    </li>

    <li>
      <a
        rel="prefetch"
        class={segment === 'everything' ? 'selected' : ''}
        href="everything">
        everything
      </a>
    </li>
  </ul>
</nav>
