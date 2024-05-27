<script>
	import Bounded from "$lib/components/Bounded.svelte";
	import {PrismicRichText , PrismicImage} from "@prismicio/svelte"
	import clsx from "clsx";
	/** @type {import("@prismicio/client").Content.DocumentationSlice} */
	export let slice;
</script>

<Bounded data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	
	<div class="relative text-center mt-10 bg-white">
		{#if slice.primary.docs_heading}
			<h1 class="  mx-auto max-w-3xl text-balance text-5xl font-medium md:text-7xl">
				<PrismicRichText field={slice.primary.docs_heading} />
			</h1>	
		{/if}

		{#if slice.primary.docs_content}
			<p class="mx-auto mt-6 max-w-4xl text-balance text-black md:4xl">
				<PrismicRichText field={slice.primary.docs_content} />
			</p>
		{/if}

		<div class="mt-20 grid gap-20 text-center max-w-5xl">
			
			{#each slice.items as item , index}
				<div class="relative group justify-end grid gap-6 md:gap-8 bg-amber-50 lg:gap-12 md:grid-cols-2 lg:grid-cols-3 ">

					<div class="flex col-span-1 flex-col justify-center gap-10 bg-red-400">
						<h3 class="text-3xl max-w-6xl ">
							<u><PrismicRichText field={item.title} /> </u>
						</h3>
						<div class="max-w-md text-justify pl-4">
							<PrismicRichText field={item.summary} />
						</div>
					</div>
					
					<div class="{clsx('relative lg:col-span-2' , index % 2 && "md:-order-1")} max-w-96 m-4 border-black border-2 rounded-lg ">
						
						<PrismicImage field={item.diagrams} 
						class="z-20 scale-[0.96] rounded-xl " />
					</div>	
					
				</div>

			{/each}
		
		</div>
	</div>

</Bounded>
