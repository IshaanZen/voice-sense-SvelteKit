<script>

	import {onMount} from "svelte"

	import Bounded from "$lib/components/Bounded.svelte";
	import ButtonLinks from "$lib/components/ButtonLinks.svelte";
	import StarGrid from "$lib/components/StarGrid.svelte";
	import { PrismicLink, PrismicRichText , PrismicImage, PrismicText } from "@prismicio/svelte";
	import gsap from "gsap"
	import { scale } from "svelte/transition";

	/** @type {import("@prismicio/client").Content.HeroSlice} */
	export let slice;

	
	onMount(()=>{

			const tl = gsap.timeline({defaults: {ease: 'power2.easeInOut'}})
			
			tl.fromTo(".Hero__Heading" , {scale:0.5} , {scale:1 , opacity:1 , duration:1});
			tl.fromTo(".Hero__body" , {y:20} , {y:0 , opacity:1, duration:1} , "-=0.8");
			tl.fromTo(".Hero__Button" , {scale:1.5} , {scale:1 , opacity:1, duration:1} , "-=0.7");	
			tl.fromTo(".Hero__Image" , {y:100} , {y:0 , opacity:1, duration:1.2} , "+=0.2");	
			tl.fromTo(".Hero__Glow" , {scale:0.5} , {scale:1 , opacity:1, duration:1.8} , "-=1");	
			
			gsap.to(".Hero__Glow--one" , {ease:"power2.inOut" , 
						repeat:-1 , 
						repeatDelay:0 ,
						keyframes:[
							{top:"0%" , left:"33%", duration:0},
							{top:"33%" , left:"33%", duration:2},
							{top:"33%" , left:"0%", duration:3},
							{top:"0%" , left:"0%", duration:2},
							{top:"0%" , left:"33%", duration:3}
						] })

			gsap.to(".Hero__Glow--two" , {ease:"power2.inOut" , 
						repeat:-1 , 
						repeatDelay:0 ,
						keyframes:[
							
							{top:"33%" , left:"0%", duration:0},
							{top:"0%" , left:"0%", duration:2},
							{top:"0%" , left:"33%", duration:3},
							{top:"33%" , left:"33%", duration:2},
							{top:"33%" , left:"0%", duration:3}
						] })
	})




</script>

<Bounded data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>

	<div class="relative text-center ">
		<StarGrid/>

		{#if slice.primary.heading}
			<h1 class=" Hero__Heading mx-auto max-w-3xl text-balance text-5xl font-medium md:text-7xl opacity-0">
				<PrismicText field={slice.primary.heading} />
			</h1>
		{/if}

		{#if slice.primary.body}
			<p class="Hero__body mx-auto mt-6 max-w-xl text-balance text-gray-400/80  md:4xl opacity-0">
				<PrismicRichText field={slice.primary.body} />
			</p>
		{/if}

		{#if slice.primary.button_link}

			<ButtonLinks class="mt-8 mb-8 Hero__Button opacity-0" field={slice.primary.button_link}>{slice.primary.button_lable}</ButtonLinks>
		{/if}

		{#if slice.primary.hero_image}
			<div class="mt-10 w-fit glass-container Hero__Image opacity-0">
				<!-- Glow DIV purple -->
				<div class="absolute left-1/3 top-0 -z-10 h-[70%] w-[70%] bg-violet-700/50 blur-3xl mix-blend-screen md:blur-[120px] filter Hero__Glow Hero__Glow--one"/>  
				<div class="absolute left-0 top-1/3 -z-10 h-[70%] w-[70%] bg-orange-700/50 blur-3xl mix-blend-screen md:blur-[120px] filter Hero__Glow Hero__Glow--two"/>  

				<PrismicImage class="rounded-lg" field={slice.primary.hero_image} />
			</div>
		{/if}
	
	</div>
</Bounded>
