<script lang="ts">
	import Navigation from '$lib/components/Navigation.svelte';
</script>

<Navigation />

<slot />

<style>
	:global(html) {
		background: #f7f2ea;
	}
	:global(body) {
		/* max-width: 56em;
		margin: 0 auto; */
		padding: 0 0.5rem;
		font-family: 'Josefin Sans', sans-serif;
	}
	/* :global(h1, h2, h3, h4, h5, h6, p, span) {
	} */
	:global(a) {
		color: inherit;
		text-decoration: none;
	}

	:global(a:hover) {
		text-decoration: underline;
	}
	:global(a:visited) {
		color: #807f7f;
	}
</style>
