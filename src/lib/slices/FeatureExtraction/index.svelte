<script>
	import Bounded from "$lib/components/Bounded.svelte";
	import StarGrid from "$lib/components/StarGrid.svelte";
	import { PrismicRichText } from "@prismicio/svelte";
	import {onMount} from "svelte"

	/** @type {import("@prismicio/client").Content.FeatureExtractionSlice} */
	export let slice;

	onMount(()=>{

		const Record_button = document.querySelector("#Record")
		const Pause_button = document.querySelector("#Pause")
		const sause_button = document.querySelector("#Stop")
		
		
		
		
	})
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

			<button id="Record" class="m-4 p-4 px-8 border-2 rounded-full max-w-3xl text-balance text-black bg-green-500 font-medium scale-1 hover:scale-[1.15] transition duration-300 ease-in-out"> 
				<PrismicRichText field={slice.items[0].button_label} />	
			</button>
			
			<button id="Pause" class="m-4 p-4 px-8 border-2 rounded-full max-w-3xl text-balance text-black bg-yellow-500 font-medium scale-1 hover:scale-[1.15] transition duration-300 ease-in-out "> 
				<PrismicRichText field={slice.items[1].button_label} />	
			</button>
			
			<button id="Stop" class="m-4 p-4 px-8 border-2 rounded-full max-w-3xl text-balance text-white bg-red-600 font-medium scale-1 hover:scale-[1.15] transition duration-300 ease-in-out"> 
				<PrismicRichText field={slice.items[2].button_label} />	
			</button>
			
		</div>
</Bounded>
