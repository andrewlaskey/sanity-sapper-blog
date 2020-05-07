<script>
  export let post;

  function formatDate(date) {
    return new Date(date).toLocaleDateString();
  }

  function urlDomain(url) {
    return new URL(url).hostname;
  }
</script>

<style>
  .post-link {
    padding-bottom: 1em;
  }

  a {
    display: block;
    margin-bottom: 0.2em;
    line-height: 1.25;
  }

  .post-link-details,
  .date,
  .tags {
    display: flex;
    align-items: center;
    font-size: 0.6rem;
    line-height: 1.5;
    color: #998f96;
  }

  .date,
  .domain {
    margin-right: 1rem;
    font-family: "Libre Franklin", sans-serif;
  }

  .tag {
    display: block;
    margin-right: 0.5em;
    padding: 0.2em;
    background-color: #f0f0f0;
    border-radius: 2px;
    font-family: "Libre Franklin", sans-serif;
    color: #777075;
  }
</style>

<div class="post-link">
  {#if post.externalLink}
    <a href={post.externalLink} target="_blank">
      <span>{post.title}</span>
      <svg class="icon icon-open_in_new">
        <use xlink:href="#icon-open_in_new" />
      </svg>
    </a>
  {:else}
    <a rel="prefetch" href="post/{post.slug.current}">
      <span>{post.title}</span>
    </a>
  {/if}
  <div class="post-link-details">
    <span class="date">{formatDate(post.publishedAt)}</span>
    {#if post.externalLink}
      <span class="domain">{urlDomain(post.externalLink)}</span>
    {/if}
    {#if Array.isArray(post.tags) && post.tags.length > 0}
      <div class="tags">
        {#each post.tags as tag}
          <span class="tag">{tag}</span>
        {/each}
      </div>
    {/if}
  </div>
</div>
