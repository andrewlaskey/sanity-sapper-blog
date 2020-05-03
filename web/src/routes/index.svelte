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
  export let shares;
  export let work;
</script>

<style>

</style>

<svelte:head>
  <title>Andrew Laskey</title>
</svelte:head>

<p>This is some text</p>

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
      <a rel="prefetch" href="post/{post.slug.current}">{post.title}</a>
    </li>
  {/each}
</ul>
<a href="/work-projects">View All</a>
