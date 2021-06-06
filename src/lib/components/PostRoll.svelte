<script lang="ts">
	import SidebarPost from './SidebarPost.svelte';

	export let posts;

	console.log(posts);
</script>

{#each posts as post}
	<SidebarPost {post} />
	<!-- <article>
		<div class="points">{post.points}</div>
		<div class="body">
			<a href={post.url} target="_blank" rel="noopener noreferrer"
				><h3 class="title">{post.title}</h3></a
			>

			<div class="tags">
				{#each post._tags as tag}
					<span class="tag">{tag}</span>
				{/each}
			</div>
		</div>
	</article> -->
{/each}

<style>
	article {
		/* background: #fff;
		padding: 0.25rem 1rem;
		margin-bottom: 1rem;
		box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.18); */
		margin: 1rem 0rem;
		display: flex;
	}

	.points {
		color: #ff6600;
		height: 2rem;
		width: 2rem;
		display: flex;
		align-items: center;
		justify-content: center;
		font-weight: 700;
	}

	.body {
		margin-left: 1rem;
		flex: 1;
	}

	.title {
		margin: 0;
	}

	.tag {
		background: #ddd;
		padding: 0.25rem 0.5rem;
		border-radius: 20px;
		margin-right: 0.25rem;
	}
</style>
