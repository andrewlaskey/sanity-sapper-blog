<script context="module">
  import client from "../../sanityClient";
  export function preload({ params, query }) {
    return client
      .fetch(
        `*[
          _type == "post" &&
          defined(slug.current) &&
          publishedAt < now() &&
          category._ref in *[_type=="category" && title=="Work and Projects"]._id
        ]|order(publishedAt desc)`
      )
      .then(posts => {
        return { posts };
      })
      .catch(err => this.error(500, err));
  }
</script>

<script>
  import PostLink from "../../components/PostLink.svelte";

  export let posts;
</script>

<style>
  ul {
    margin: 0 0 1em 0;
    padding-left: 0;
    line-height: 1.5;
    list-style-type: none;
  }
</style>

<svelte:head>
  <title>Everything</title>
</svelte:head>

<h1 class="h2">Work and Projects</h1>
<p>Side projects and summaries of past work I've done.</p>
<ul>
  {#each posts as post}
    <!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
    <li>
      <PostLink {post} />
    </li>
  {/each}
</ul>
