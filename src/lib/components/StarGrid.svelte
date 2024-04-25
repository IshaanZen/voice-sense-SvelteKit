<!-- src/lib/components/starGrid.svelte -->

<script>
	import gsap from "gsap"
	import {onMount} from "svelte"

	const grid = [14, 30];
	
	onMount(()=>{
		gsap.set(".star-grid-item " , {opacity:0 ,
		transformOrigin:"center" , 
		color:"#fff"
	});




		gsap.set("#star-grid" , {
			opacity:1
		})


		const tl = gsap.timeline()
	});





</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	fill="none"
	viewBox="0 0 935 425"
	class="absolute -left-2 -top-14 -z-10"
	id="star-grid"
	opacity={1}
	style="mask-image: linear-gradient(black, transparent);"
>
	<g class="star-grid-group">
		{#each Array(grid[0]) as _, i}
			{#each Array(grid[1]) as __, j}
				<path
					fill="currentColor"
					opacity=".2"
					class="star-grid-item"
					d={`M${j * 32},${i * 32 + 10}a0.14,0.14,0,0,1,0.26,0l0.14,0.36a2.132,2.132,0,0,0,1.27,1.27l0.37,0.14a0.14,0.14,0,0,1,0,0.26l-0.37,0.14a2.132,2.132,0,0,0,-1.27,1.27l-0.14,0.37a0.14,0.14,0,0,1,-0.26,0l-0.14,-0.37a2.132,2.132,0,0,0,-1.27,-1.27l-0.36,-0.14a0.14,0.14,0,0,1,0,-0.26l0.37,-0.14a2.132,2.132,0,0,0,1.26,-1.27l0.14,-0.36z`}
				/>
			{/each}
		{/each}
	</g>
</svg>