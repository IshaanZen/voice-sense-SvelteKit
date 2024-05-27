<script>
	import Bounded from '$lib/components/Bounded.svelte';
	import Heading2 from '$lib/components/Heading2.svelte';
	import clsx from 'clsx';
	import HighlightedText from './HighlightedText.svelte';
	import { PrismicRichText, PrismicImage , PrismicText } from '@prismicio/svelte';

	/** @type {import("@prismicio/client").Content.BentoBoxSlice} */
	export let slice;
</script>

<Bounded data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	<!-- svelte-ignore missing-declaration -->
	<PrismicRichText
		field={slice.primary.heading}
		components={{ em: HighlightedText, heading2: Heading2 }}
	/>

	<div class="mx-auto mt-6 max-w-md text-balance text-center text-black">
		<PrismicRichText field={slice.primary.body} />
	</div>

	<div class="mt-16 grid max-w-4xl gap-8 grid-rows-[auto_auto_auto] md:grid-cols-3 md:gap-10 ">

		{#each slice.items as item}
			<div class={clsx("glass-container row-span-3 grid grid-rows-subgrid gap-4 rounded-lg bg-gray-950/40 p-4 before:bg-gray-100/10" , item.iswide ? "md:col-span-2" : "md:col-span-1")}>

				<h3 class="text-2xl">
					<PrismicText field={item.bentotitle} />
				</h3>

				<div class="max-w-md text-white text-balance">
					<PrismicRichText field={item.bentobody} />
				</div>

				<PrismicImage field={item.bentoimage} class="max-h-36 w-auto" />
			</div>
		{/each}
	</div>
</Bounded>
