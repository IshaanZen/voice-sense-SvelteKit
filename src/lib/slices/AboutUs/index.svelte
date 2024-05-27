<script>
	/** @type {import("@prismicio/client").Content.AboutUsSlice} */
	export let slice;
	import{PrismicRichText , PrismicImage } from "@prismicio/svelte"
	import HighlightedText from "../BentoBox/HighlightedText.svelte";
	import Bounded from "$lib/components/Bounded.svelte";
	import StarGrid from "$lib/components/StarGrid.svelte";
	import clsx from "clsx";
</script>


<Bounded data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	
	<div class="relative text-center mt-10">
		<StarGrid/>
		
		{#if slice.primary.heading_aboutpage}
			<h1 class="  mx-auto max-w-3xl text-balance text-5xl font-medium md:text-7xl">
				<PrismicRichText field={slice.primary.heading_aboutpage}
				components={ {em: HighlightedText }} />
			</h1>
		{/if}

		{#if slice.primary.content_aboutpage}
			<p class="mx-auto mt-6 max-w-4xl text-balance text-black md:4xl">
				<PrismicRichText field={slice.primary.content_aboutpage} />
			</p>
		{/if}

		<div class=" mt-20 grid gap-20 text-center max-w-5xl">

			{#each slice.items as item , index }
				<div class="relative group grid gap-4 transition-opacity duration-300 hover:cursor-pointer hover:opacity-100 md:gap-8 lg:gap-20 md:grid-cols-2 lg:grid-cols-3 ">
					<div class="flex col-span-1 flex-col justify-center gap-10">
						<h3 class="text-3xl max-w-6xl ">
							<u><PrismicRichText field={item.dev_name} /> </u>
						</h3>
	
						<div class="max-w-md">
							<PrismicRichText field={item.dev_description} />
						</div>
					</div>
	
					<div class="{clsx('relative lg:col-span-2' , index % 2 && "md:-order-1")}">
						<div class="image-glow bg-orange-500 -bottom-8 -left-4"></div>
						<div class="image-glow bg-violet-800 -top-8 -right-4"></div>
							<PrismicImage field={item.dev_image}
							 
							class="z-20 scale-[0.98] rounded-xl transition-transform duration-300 group-hover:scale-100 max-h-[50vh] w-auto"
							/>
					</div>
				</div>
				
			{/each}
	
			
		</div>

	</div>


	
		
</Bounded>

<style>
	.image-glow{
		@apply absolute h-1/2 w-1/2 rounded-full opacity-0 mix-blend-screen blur-3xl transition-opacity duration-500 group-hover:opacity-30
	}
</style>