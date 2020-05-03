<script context="module">
  import client from "../sanityClient";
  export async function preload({ params, query }) {
    const shares = await client
      .fetch(
        `*[
          _type == "post" &&
          defined(slug.current) &&
          publishedAt < now() &&
          category._ref in *[_type == "category" && title == "Sharing"]._id
        ][0...5] | order(publishedAt desc)
        `
      )
      .then(posts => {
        return posts;
      })
      .catch(err => {
        return [];
      });

    const work = await client
      .fetch(
        `*[
          _type == "post" &&
          defined(slug.current) &&
          publishedAt < now() &&
          category._ref in *[_type=="category" && title=="Work and Projects"]._id
        ][0...5] | order(publishedAt desc)
        `
      )
      .then(posts => {
        return posts;
      })
      .catch(err => {
        return [];
      });

    return {
      shares,
      work
    };
  }
</script>

<script>
  import PostLink from "../components/PostLink.svelte";
  export let shares;
  export let work;
</script>

<style>
  h3 {
    padding-top: 0.5em;
  }

  ul {
    margin-bottom: 0.5em;
    padding-left: 0;
    list-style-type: none;
  }

  li {
    padding-bottom: 0.25em;
  }
</style>

<svelte:head>
  <title>Andrew Laskey</title>
</svelte:head>

<h1 class="h2">Andrew Laskey</h1>
<p>
  Hi, I've been building and coding things for the web and devices for almost a
  decade now. Currently I'm working at
  <a href="https://getnacelle.com/" target="_blank">Nacelle</a>
  where we're revolutionizing e-commerce.
  <br />
  <br />
  This is my little corner of the internet.
</p>

<h3>Shares</h3>
<ul>
  {#each shares as post}
    <li>
      <a rel="prefetch" href="post/{post.slug.current}">{post.title}</a>
    </li>
  {/each}
</ul>
<a href="/shares">View All</a>

<h3>Work and Projects</h3>
<ul>
  {#each work as post}
    <li>
      <PostLink {post} />
    </li>
  {/each}
</ul>
<a href="/work-projects">View All</a>
