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

  .icon {
    display: inline-block;
    width: 1em;
    height: 1em;
    stroke-width: 0;
    stroke: currentColor;
    fill: currentColor;
  }

  .sr-only {
    position: absolute;
    overflow: hidden;
    clip: rect(0 0 0 0);
    height: 1px;
    width: 1px;
    margin: -1px;
    padding: 0;
    border: 0;
  }

  /* ==========================================
Single-colored icons can be modified like so:
.icon-name {
  font-size: 32px;
  color: red;
}
========================================== */

  .icon-twitter {
    width: 0.9285714285714285em;
  }

  .icon-github {
    width: 0.8571428571428571em;
  }

  .icon-linkedin {
    width: 0.8571428571428571em;
  }

  .icon-dribbble {
    width: 0.8571428571428571em;
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
