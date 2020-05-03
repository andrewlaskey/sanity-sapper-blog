<script context="module">
  import client from "../sanityClient";
  export function preload({ params, query }) {
    return client
      .fetch(
        `
			*[_type == "siteSettings"][0] {
				links[]->{name,url}
				}`
      )
      .then(settings => {
        return { settings };
      })
      .catch(err => this.error(500, err));
  }
</script>

<script>
  import Nav from "../components/Nav.svelte";
  import ExternalNav from "../components/ExternalNav.svelte";

  export let segment;
  export let settings;
</script>

<style>
  main {
    position: relative;
    max-width: 56em;
    background-color: white;
    padding: 2em;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>

<Nav {segment} />

<main>
  <slot />
</main>

<footer>
  <ExternalNav links={settings.links} />
</footer>
