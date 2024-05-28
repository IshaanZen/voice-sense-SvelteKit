<script>
	import Bounded from "$lib/components/Bounded.svelte";
	import { PrismicImage, PrismicRichText } from "@prismicio/svelte";
	import clsx from "clsx";

	/** @type {import("@prismicio/client").Content.ResultsSlice} */
	export let slice;
</script>

<Bounded data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	<div class="mt-6 relative text-center ">
		<h1  class="text-center text-balance text-5xl font-medium text-black md:text-7xl">
			<PrismicRichText field={slice.primary.emotion} />
		</h1>

		<div class="mt-36 grid max-w-4xl gap-8 grid-rows-[auto_auto_auto] md:grid-cols-6 md:gap-10 bg-red-500">

			{#each slice.items as item }
				<div class={clsx("glass-container row-span-3 grid grid-rows-subgrid gap-4 rounded-lg bg-gray-950/40 p-4 before:bg-gray-100/10W md:col-span-2")}>
					<PrismicImage field={item.emo_img} />

					<h3 class="text-md text-white">
						<PrismicRichText field={item.emot_name} />
					</h3>
				</div>
			{/each}
		</div>
	</div>
</Bounded>
