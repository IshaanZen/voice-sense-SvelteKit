<script>
	import Bounded from "$lib/components/Bounded.svelte";
	import StarGrid from "$lib/components/StarGrid.svelte";
	import { PrismicRichText } from "@prismicio/svelte";

	/** @type {import("@prismicio/client").Content.FeatureExtractionSlice} */
	export let slice;



</script>

<Bounded data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	

		<StarGrid/>

		<h3 class="max-w-2xl text-center text-balance text-5xl font-medium md:text-7xl">
			<PrismicRichText field={slice.primary.heading} />
		</h3>
		<div class="text-balance mx-auto mt-6 max-w-md text-center text-gray-300">
			<PrismicRichText field={slice.primary.body} />
		</div>
		
		<div class="mt-20 grid gap-16">
			<!-- LoopOver the Arrays of Case studies -->
		</div>
		
		<div class="glass-container m-6 p-10">
			{#each slice.items as item (item.button_label)}

			<button class="m-4 p-4 px-8 border-2 rounded-full max-w-3xl text-balance ">
				<PrismicRichText field={item.button_label} />
				
			</button>
			
			{/each}
		</div>
</Bounded>
