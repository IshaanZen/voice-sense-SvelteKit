<script>
	import { PrismicLink } from "@prismicio/svelte";
	import Initials from "./Initials.svelte";
    import {onMount} from "svelte"
    import gsap from "gsap";


/** @type {import ("@prismicio/client").Content.SettingsDocument}*/  
    export let settings;


    onMount(()=>{
		gsap.fromTo(".footer__Class" , 
			{y: 300} , {
				y:0,
				duration:0.6,
				opacity:1
			}
	)
	})

</script>

<header class="footer__Class opacity-0">
    <nav class="flex flex-col items-center justify-between gap-6 border-t border-x-grey-600 px-8 py-7 md:flex-row " aria-label="Header">
        <a href="/">
            <Initials/>
            <!-- <img src="../static/assets/voice-sense.png" alt="Logo " class="w-[70px]"> -->
            <span class="sr-only">{settings.data.site_title} Home page</span>
        </a>
        <ul class="flex gap-6">
            {#each settings.data.navigation as item (item.label)}
                <li>
                    <PrismicLink field = {item.link} class="inline-flex min-h-11 items-center">{item.label}
                    </PrismicLink>
                </li>
            {/each}
        </ul>
    </nav>
</header>