<script>
	`lang="ts"`;
	import { PrismicLink } from '@prismicio/svelte';
	import ButtonLinks from './ButtonLinks.svelte';
	import Label from '$lib/slices/RichText/Label.svelte';
	import Initials from './Initials.svelte';
	import clsx from 'clsx';

	import gsap from 'gsap';
	import { onMount } from 'svelte';

	import CloseIcon from '~icons/ph/x-bold';
	import '@fontsource-variable/oswald';
	import MenuIcon from '~icons/ph/list-bold';
	import { asLink } from '@prismicio/client';
	import { page } from '$app/stores';

	/** @type {import ("@prismicio/client").Content.SettingsDocument}*/
	export let settings;

	let isOpen = false;

	const toggleOpen = () => {
		isOpen = !isOpen;
	};
	const toggleClose = () => {
		isOpen = false;
	};

	/**@param {import ('@prismicio/client').LinkField} link */
	const isActive = (link) => {
		const path = asLink(link);

		return path && $page.url.pathname.includes(path);
	};

	onMount(() => {
		gsap.fromTo(
			'header',
			{ y: -100 },
			{
				y: 0,
				duration: 0.6,
				opacity: 1
			}
		);
	});
</script>

<header class="p4 opacity-0 md:p-0">
	<nav
		class="mx-auto flex max-w-[90rem] flex-col justify-between px-5 py-2 font-medium text-black md:flex-row md:items-center"
		aria-label="Header">
	
		<div class="flex items-center justify-start">
			<a href="/" on:click={toggleClose} class="z-50">
				<Initials />
				<!-- <img src="/assets/voice-sense.png" alt="Logo " class="w-[70px]"> -->
				<span class="sr-only">{settings.data.site_title} Home page</span>
			</a>
			<button type="button" class="block text-3xl text-white md:hidden" on:click={toggleOpen}>
				<MenuIcon />
			</button>
		</div>

		<!-- Mobile Nav -->

		<div
			class={clsx(
				'tarnsition-transform fixed inset-0  z-40 flex flex-col bg-gray-950 pr-4 pt-6 duration-300 ease-in-out md:hidden',
				isOpen ? 'translate-x-0' : 'translate-x-[100%]'
			)}
		>
			<ul class="grid justify-items-end gap-8">
				<button
					aria-expanded={isOpen}
					type="button"
					class="block py-2 text-3xl text-white md:hidden"
					on:click={toggleClose}
				>
					<CloseIcon />
				</button>
				{#each settings.data.navigation as item (item.label)}
					<li>
						{#if item.cta_button}
						

							<ButtonLinks 
							
							field={item.link}
							on:click={toggleClose}
							aria-current={isActive(item.link) ? 'page' : undefined}
							>
							{item.label	}
							
							
							<svg 
								id="arrow-svg"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 16 16"
								class="a-icon--arrow-north-east400 a-icon--text a-icon--no-align f-ui-1 relative top-[0.05em] -mr-4 ml-2 hover:translate-x-4 "
								style="width:1em;height:1em;"
								data-new=""
								aria-hidden="true"
								data-v-e1bdab2c=""
								><polygon
								fill="currentColor"
								points="5 4.31 5 5.69 9.33 5.69 2.51 12.51 3.49 13.49 10.31 6.67 10.31 11 11.69 11 11.69 4.31 5 4.31"
								data-v-e1bdab2c=""
								></polygon>
							</svg>

						</ButtonLinks>
					
						{:else}
							<PrismicLink
								field={item.link}
								on:click={toggleClose}
								class=" block min-h-11 text-3xl first:mt-8"
								aria-current={isActive(item.link) ? 'page' : undefined}
							>
								{item.label}
							</PrismicLink>
						{/if}
					</li>
				{/each}
			</ul>
		</div>

		<!-- Desktop Nav  -->
		<ul class="hidden gap-6 md:flex">
			{#each settings.data.navigation as item (item.label)}
				<li class="mt-5 text-[1rem]">
					{#if item.cta_button}
					<a href="Feature-Record" class=" ">

						<ButtonLinks 
						 field={item.link} aria-current={isActive(item.link) ? 'page' : undefined}>
							{item.label}
							<!-- <svg
							id="arrow-svg"
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
							</svg
							> -->
						</ButtonLinks>
					</a>
						{:else}
						<PrismicLink
							field={item.link}
							aria-current={isActive(item.link) ? 'page' : undefined}
							class=" relative mx-5 my-2 block min-h-11 w-fit cursor-pointer items-center after:absolute
						after:block after:h-[3px] after:w-full after:origin-left after:scale-x-0 after:bg-black after:transition after:duration-300 after:content-[''] after:hover:scale-x-100"
							>{item.label}
						</PrismicLink>
					{/if}
				</li>
			{/each}
			
		</ul>
	</nav>
</header>


<style>
:root{
	--speed: 0.5s;
    --distance: 1.3rem;
    --distance-negative: -1.3rem;
}
#arrow-svg :hover{
	animation: translate-x-right-left var(--speed) forwards;;
}
@keyframes arrow-svg {
	25%{
		transform: translate(var(--distance));
		opacity: 0;
	}

	26%{
		transform: translate(var(--distance-negative));
		opacity: 0;
	}
}

</style>