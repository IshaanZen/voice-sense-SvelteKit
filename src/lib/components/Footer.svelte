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
    <nav class="flex flex-col items-center justify-between gap-6 border-t border-x-grey-600 px-8 py-7 md:flex-row " aria-label="Footer">
        <a href="/">
            <Initials/>
            <!-- <img src="../static/assets/voice-sense.png" alt="Logo " class="w-[70px]"> -->
            <span class="sr-only">{settings.data.site_title} Home page</span>
        </a>
        <ul class="flex gap-6">
            {#each settings.data.navigation as item (item.label)}
                <li>
                    <PrismicLink field = {item.link} class=" min-h-11 items-center relative w-fit block after:block after:content-[''] after:absolute after:h-[3px]
						after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left my-2 mx-5 cursor-pointer">{item.label}
                    </PrismicLink>
                </li>
            {/each}
        </ul>
    </nav>
</header>