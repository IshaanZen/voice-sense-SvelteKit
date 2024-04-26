<script>

	`lang="ts"`
	import { PrismicLink } from '@prismicio/svelte';
	import ButtonLinks from './ButtonLinks.svelte';
	import Label from '$lib/slices/RichText/Label.svelte';
	import Initials from './Initials.svelte';
	import clsx from 'clsx';

	import gsap from "gsap"
	import {onMount} from "svelte"


	import CloseIcon from '~icons/ph/x-bold'
	import MenuIcon from '~icons/ph/list-bold'
	import { asLink } from '@prismicio/client';
	import { page } from "$app/stores"

	/** @type {import ("@prismicio/client").Content.SettingsDocument}*/
	export let settings;


	let isOpen = false;

	const toggleOpen = ()=>{
		isOpen = !isOpen 
	}
	const toggleClose = ()=>{
		isOpen = false
	}

	/**@param {import ('@prismicio/client').LinkField} link */
	const isActive = (link)=>{
		const path = asLink(link) ; 
		
		return path && $page.url.pathname.includes(path)	
		
	}


	onMount(()=>{
		gsap.fromTo("header" , 
			{y:-100} , {
				y:0,
				duration:0.6,
				opacity:1
			}
	)
	})

</script>

<header class="p4 md:p-6 opacity-0">
	<nav
		class="mx-auto flex max-w-6xl flex-col justify-between py-2 px-5 font-medium text-white md:flex-row md:items-center "
		aria-label="Header"
	>

	<div class="flex items-center justify-between">

		<a href="/" on:click={toggleClose} class="z-50">
			<Initials />
			<!-- <img src="/assets/voice-sense.png" alt="Logo " class="w-[70px]"> -->
			<span class="sr-only">{settings.data.site_title} Home page</span>
		</a>
		<button type="button" class="text-3xl block text-white md:hidden" on:click={toggleOpen}>
			<MenuIcon/>
		</button>
	</div>

		<!-- Mobile Nav -->

		<div class={clsx("fixed inset-0 z-40  flex flex-col bg-gray-950 pr-4  pt-6 tarnsition-transform duration-300 ease-in-out md:hidden" , isOpen ? "translate-x-0" : "translate-x-[100%]")}>
			<ul class="grid justify-items-end gap-8">
				<button aria-expanded={isOpen} type="button" class="text-3xl block py-2 text-white md:hidden" on:click={toggleClose}>
					<CloseIcon/>
				</button>
					{#each settings.data.navigation as item (item.label)}
					<li>
						{#if item.cta_button}
						<ButtonLinks field={item.link}  on:click={toggleClose} 
						aria-current={isActive(item.link) ? 'page' : undefined}  >
							{item.label}
							<svg
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 16 16"
							class="a-icon--arrow-north-east400 a-icon--text a-icon--no-align f-ui-1 relative top-[0.05em] -mr-4 ml-2"
							style="width:1em;height:1em;"
							data-new=""
							aria-hidden="true"
							data-v-e1bdab2c=""
							><polygon
							fill="currentColor"
							points="5 4.31 5 5.69 9.33 5.69 2.51 12.51 3.49 13.49 10.31 6.67 10.31 11 11.69 11 11.69 4.31 5 4.31"
							data-v-e1bdab2c=""
							></polygon></svg
							>
						</ButtonLinks>
						{:else}
						<PrismicLink field={item.link}  on:click={toggleClose} 
							class=" min-h-11 block text-3xl first:mt-8"
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
		<ul class="hidden md:flex gap-6">
			{#each settings.data.navigation as item (item.label)}
				<li>
					{#if item.cta_button}
						<ButtonLinks field={item.link}
						aria-current={isActive(item.link) ? 'page' : undefined}>
							{item.label}
							<svg
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 16 16"
								class="a-icon--arrow-north-east400 a-icon--text a-icon--no-align f-ui-1 relative top-[0.05em] -mr-4 ml-2  "
								style="width:1em;height:1em;"
								data-new=""
								aria-hidden="true"
								data-v-e1bdab2c=""
								><polygon
									fill="currentColor"
									points="5 4.31 5 5.69 9.33 5.69 2.51 12.51 3.49 13.49 10.31 6.67 10.31 11 11.69 11 11.69 4.31 5 4.31"
									data-v-e1bdab2c=""
								></polygon></svg
							>
						</ButtonLinks>
					{:else}
						<PrismicLink field={item.link} 
						aria-current={isActive(item.link) ? 'page' : undefined} 

						class=" min-h-11 items-center relative w-fit block after:block after:content-[''] after:absolute after:h-[3px]
						after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left my-2 mx-5 cursor-pointer"
							>{item.label}

						</PrismicLink>
					{/if}
				</li>
			{/each}
		</ul>
	</nav>
</header>
