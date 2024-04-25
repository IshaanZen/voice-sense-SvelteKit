<script>
	import { PrismicRichText } from '@prismicio/svelte';
	import Label from './Label.svelte';

	/** @type {import("@prismicio/client").Content.RichTextSlice} */
	export let slice;
</script>

<section class="">
	<PrismicRichText
		field={slice.primary.content}
		components={{
			label: Label
		}}
	/>
</section>

