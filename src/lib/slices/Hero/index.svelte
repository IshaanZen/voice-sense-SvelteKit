<script>
	import { onMount } from 'svelte';

	import Bounded from '$lib/components/Bounded.svelte';
	import ButtonLinks from '$lib/components/ButtonLinks.svelte';
	import StarGrid from '$lib/components/StarGrid.svelte';
	import { PrismicLink, PrismicRichText, PrismicImage, PrismicText } from '@prismicio/svelte';
	import gsap from 'gsap';
	import { scale } from 'svelte/transition';
	import GradientBack from '$lib/components/Gradient_back.svelte';
	import Header from '$lib/components/Header.svelte';
	import { page } from '$app/stores';

	/** @type {import("@prismicio/client").Content.HeroSlice} */
	export let slice;

	onMount(() => {
		const tl = gsap.timeline({ defaults: { ease: 'power2.easeInOut' } });

		tl.fromTo('.Hero__Heading', { scale: 0.5 }, { scale: 1, opacity: 1, duration: 1 });
		tl.fromTo('.Hero__body', { y: 20 }, { y: 0, opacity: 1, duration: 1 }, '-=0.5');
		tl.fromTo('.Hero__Button', { scale: 1.5 }, { scale: 1, opacity: 1, duration: 1 }, '-=0.7');
		tl.fromTo('.Hero__Image', { y: 100 }, { y: 0, opacity: 1, duration: 1.2 }, '+=0.2');
		tl.fromTo('.Hero__Glow', { scale: 0.5 }, { scale: 1, opacity: 1, duration: 1.5 }, '-=1');

		gsap.to('.Hero__Glow--one', {
			ease: 'power2.inOut',
			repeat: -1,
			repeatDelay: 0,
			keyframes: [
				{ top: '0%', left: '33%', duration: 0 },
				{ top: '33%', left: '33%', duration: 3 },
				{ top: '33%', left: '0%', duration: 4 },
				{ top: '0%', left: '0%', duration: 3 },
				{ top: '0%', left: '33%', duration: 4 }
			]
		});

		gsap.to('.Hero__Glow--two', {
			ease: 'power2.inOut',
			repeat: -1,
			repeatDelay: 0,
			keyframes: [
				{ top: '33%', left: '0%', duration: 0 },
				{ top: '0%', left: '0%', duration: 3 },
				{ top: '0%', left: '33%', duration: 4 },
				{ top: '33%', left: '33%', duration: 3 },
				{ top: '33%', left: '0%', duration: 4 }
			]
		});
	});
</script>

<Bounded data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	<div class="text-container relative z-[100] mt-6 text-center">
		{#if slice.primary.heading}
			<h1
				class=" Hero__Heading mx-auto max-w-7xl text-balance text-5xl text-white font-medium opacity-0 md:text-6xl"
			>
				<PrismicText field={slice.primary.heading} />
			</h1>
		{/if}

		{#if slice.primary.body}
			<div class="Hero__body glass-container mx-auto mt-6 max-w-xl opacity-0">
				<!-- Glow DIV purple -->
				<div
					class="Hero__Glow Hero__Glow--one absolute left-1/3 top-0 -z-10 h-[70%] w-[70%] bg-violet-700 mix-blend-screen blur-3xl filter md:blur-[120px]"
				/>
				<div
					class="Hero__Glow Hero__Glow--two absolute left-0 top-1/3 -z-10 h-[70%] w-[70%] bg-orange-700 mix-blend-screen blur-3xl filter md:blur-[120px]"
				/>

				<PrismicRichText field={slice.primary.body} />
			</div>
		{/if}

		{#if slice.primary.button_link}
			<ButtonLinks href="Feature-Record"
				class="Hero__Button mb-8  mt-8 items-center p-10 px-11 text-2xl opacity-0"
				field={slice.primary.button_link}>{slice.primary.button_lable}
				
				
				<svg
					stroke="currentColor"
					fill="none"
					stroke-width="2"
					viewBox="0 0 24 24"
					class="a-icon--arrow-north-east400 a-icon--text a-icon--no-align f-ui-1 relative top-[0.1em] -mr-4 ml-2 "
					stroke-linecap="round"
					stroke-linejoin="round"
					height="1.2em"
					width="2em"
					xmlns="http://www.w3.org/2000/svg"
					><circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"
					></polyline><line x1="8" y1="12" x2="16" y2="12"></line>
				</svg>
			
			</ButtonLinks
			>
		{/if}

		<!-- {#if slice.primary.hero_image}
		<div class="mt-10 w-fit glass-container Hero__Image opacity-0 max-w-7xl">
			Glow DIV purple
			<div class="absolute left-1/3 top-0 -z-10 h-[70%] w-[70%] bg-violet-700/50 blur-3xl mix-blend-screen md:blur-[120px] filter Hero__Glow Hero__Glow--one"/>  
			<div class="absolute left-0 top-1/3 -z-10 h-[70%] w-[70%] bg-orange-700/50 blur-3xl mix-blend-screen md:blur-[120px] filter Hero__Glow Hero__Glow--two"/>  
			
			<PrismicImage class="rounded-lg" field={slice.primary.hero_image} />
		</div>
		{/if} -->
	</div>

	<GradientBack />
</Bounded>
