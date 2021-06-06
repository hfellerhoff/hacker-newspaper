<script lang="ts">
	export let post;

	let url: string = '';

	if (post.url) {
		url = post.url;
	} else {
		url = `https://news.ycombinator.com/item?id=${post.objectID}`;
	}
</script>

<a href={url} target="_blank" rel="noopener noreferrer"><slot /></a>
