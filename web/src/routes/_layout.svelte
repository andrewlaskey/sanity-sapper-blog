<script context="module">
  import client from "../sanityClient";
  export function preload({ params, query }) {
    return client
      .fetch(
        `
			*[_type == "siteSettings"][0] {
				links[]->{name, url, icon}
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
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    max-width: 56em;
  }
  main {
    position: relative;
    max-width: 56em;
    background-color: white;
    padding: 2em;
    margin: 0 auto;
    box-sizing: border-box;
  }

  footer {
    font-size: 0.75em;
    text-align: center;
  }
</style>

<header>
  <Nav {segment} />
  <ExternalNav links={settings.links} />
</header>

<main>
  <slot />
</main>

<footer>
  <p>
    Made in San Diego with
    <a
      href="https://www.sanity.io/create?template=sanity-io%2Fsanity-template-sapper-blog"
      target="_blank">
      Sanity, Sapper, and Svelte
    </a>
    . See the code on
    <a
      href="https://github.com/andrewlaskey/sanity-sapper-blog"
      target="_blank">
      Github.
    </a>
  </p>
</footer>
