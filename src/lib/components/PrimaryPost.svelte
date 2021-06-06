<script lang="ts">
	import dayjs from 'dayjs';
	export let post;
	export let isLast: boolean;
	import { fade } from 'svelte/transition';
	import PostLink from './PostLink.svelte';

	const now = dayjs();
	const postedAt = dayjs(post.created_at).get('hour');
	const hoursAgo = now.subtract(postedAt, 'hour').get('hour');
	const hoursAgoText =
		hoursAgo > 0 ? `${hoursAgo} hour${hoursAgo !== 1 ? 's' : ''} ago` : 'Less than an hour ago';
</script>

<article class:last={isLast} in:fade>
	<p>{hoursAgoText}</p>
	<PostLink {post}><h3 class="title">{post.title}</h3></PostLink>
</article>

<style>
	p {
		margin: 0;
	}
	h3 {
		margin: 0.5rem 0rem;
	}

	article {
		margin: 1rem 0rem;
		border-bottom: 1px solid #c4c0ba;
	}

	.last {
		border-bottom: none;
	}
</style>
