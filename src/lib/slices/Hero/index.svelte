<script>
	import Bounded from "$lib/components/Bounded.svelte";
	import ButtonLinks from "$lib/components/ButtonLinks.svelte";
	import StarGrid from "$lib/components/StarGrid.svelte";

	import { PrismicLink, PrismicRichText , PrismicImage, PrismicText } from "@prismicio/svelte";

	/** @type {import("@prismicio/client").Content.HeroSlice} */
	export let slice;

	






</script>

<Bounded data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>

	<div class="relative text-center ">
		<StarGrid/>

		{#if slice.primary.heading}
			<h1 class=" mx-auto max-w-3xl text-balance text-5xl font-medium md:text-7xl ">
				<PrismicText field={slice.primary.heading} />
			</h1>
		{/if}

		{#if slice.primary.body}
			<p class="mx-auto mt-6 max-w-xl text-balance text-gray-400/80  md:4xl">
				<PrismicRichText field={slice.primary.body} />
			</p>
		{/if}

		{#if slice.primary.button_link}

			<ButtonLinks class="mt-8 mb-8" field={slice.primary.button_link}>{slice.primary.button_lable}</ButtonLinks>
		{/if}

		{#if slice.primary.hero_image}
			<div class="mt-10 w-fit glass-container">
				<!-- Glow DIV purple -->
				<div class="absolute left-0 top-1/3 -z-10 h-2/3 w-2/3 bg-orange-700/50 mix-blend-screen blur-[120px] filter"/>  
				<div class="absolute left-1/3 top-0 -z-10 h-2/3 w-2/3 bg-violet-700/50 mix-blend-screen blur-[120px] filter"/>  

				<PrismicImage class="rounded-lg" field={slice.primary.hero_image} />
			</div>
		{/if}
	
	</div>
</Bounded>
