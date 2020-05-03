<script context="module">
  import client from "../../sanityClient";
  export function preload({ params, query }) {
    return client
      .fetch(
        `*[
          _type == "post" &&
          defined(slug.current) &&
          publishedAt < now() &&
          category._ref in *[_type=="category" && title=="Sharing"]._id
        ]|order(publishedAt desc)`
      )
      .then(posts => {
        return { posts };
      })
      .catch(err => this.error(500, err));
  }
</script>

<script>
  export let posts;

  function formatDate(date) {
    return new Date(date).toLocaleDateString();
  }
</script>

<style>
  ul {
    margin: 0 0 1em 0;
    line-height: 1.5;
  }
</style>

<svelte:head>
  <title>Everything</title>
</svelte:head>

<h1 class="h2">Shares</h1>
<p>
  Things I like, stuff I've read, and anything else. I'm not using social media
  much these days, and I'd prefer to have more control over how I'm sharing
  things.
</p>

<ul>
  {#each posts as post}
    <!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
    <li>
      <a rel="prefetch" href="post/{post.slug.current}">{post.title}</a>
      ({formatDate(post.publishedAt)})
    </li>
  {/each}
</ul>
