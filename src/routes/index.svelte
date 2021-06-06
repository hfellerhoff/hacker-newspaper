<script lang="ts">
	import { onMount } from 'svelte';
	import HN from '$lib/api/HN';
	import SidebarPost from '$lib/components/SidebarPost.svelte';
	import PrimaryPost from '$lib/components/PrimaryPost.svelte';

	let postsFrontpage: any;
	let postsShowcase: any;
	let postsAsk: any;
	let page = 0;

	onMount(async () => {
		postsFrontpage = await HN.getFrontpageStories();
		postsShowcase = await HN.getShowcaseStories();
		postsAsk = await HN.getAskStories();
		console.log(postsAsk);
	});
</script>

<main>
	{#if postsFrontpage}
		<div class="main">
			<h2>Top Stories</h2>
			{#each postsFrontpage.hits as post, i}
				<PrimaryPost {post} isLast={i === 19} />
			{/each}
		</div>
	{/if}
	<aside>
		{#if postsShowcase}
			<h2>Show HN</h2>
			{#each postsShowcase.hits as post, i}
				<SidebarPost {post} isLast={i === 4} />
			{/each}
		{/if}
		{#if postsAsk}
			<h2>Ask HN</h2>
			{#each postsAsk.hits as post, i}
				<SidebarPost {post} isLast={i === 4} />
			{/each}
		{/if}
	</aside>
</main>

<style>
	main {
		display: grid;
		/* grid-template-areas:
			'hero hero hero'
			'main main sidebar'
			'main main sidebar'
			'footer footer footer'; */
		grid-template-columns: 2fr 1fr;
		column-gap: 2rem;
	}

	/* .main {
		grid-area: main;
	}

	aside {
		grid-area: sidebar;
	} */
	aside h2 {
		margin-top: 3rem;
	}
	h2:first-child {
		margin-top: 0;
	}
</style>
