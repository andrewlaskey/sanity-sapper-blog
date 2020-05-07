<script context="module">
  import BlockContent from "@movingbrands/svelte-portable-text";
  import serializers from "../../components/serializers";
  import client from "../../sanityClient";
  export function preload({ params, query }) {
    return client
      .fetch(
        `*[
          _type == "post" &&
          defined(slug.current) &&
          publishedAt < now() &&
          category._ref in *[_type=="category" && title=="Sharing"]._id
        ]|order(publishedAt desc){
          ...,
          'category': catgory->title
        }`
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
    margin: 0;
    padding: 0;
    line-height: 1.5;
    list-style-type: none;
  }

  li {
    margin-bottom: 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid #e4dee2;
  }

  .share-post-title a {
    text-decoration: none;
  }

  .link {
    padding-bottom: 0.5em;
    font-size: 0.8em;
  }

  .share-post-details,
  .date,
  .tags {
    display: flex;
    align-items: center;
    font-size: 0.6rem;
    line-height: 1.5;
    color: #998f96;
  }

  .date {
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
      <div class="share-post">
        <h3 class="h4 share-post-title">
          {#if post.externalLink}
            <a href={post.externalLink} target="_blank">{post.title}</a>
          {:else}{post.title}{/if}
        </h3>
        <BlockContent blocks={post.body} {serializers} />
        {#if post.externalLink}
          <div class="link">
            <a href={post.externalLink} target="_blank">
              <span>{post.externalLink}</span>
            </a>
          </div>
        {/if}
        <div class="share-post-details">
          <span class="date">{formatDate(post.publishedAt)}</span>
          {#if Array.isArray(post.tags) && post.tags.length > 0}
            <div class="tags">
              {#each post.tags as tag}
                <span class="tag">{tag}</span>
              {/each}
            </div>
          {/if}
        </div>
      </div>
    </li>
  {/each}
</ul>
