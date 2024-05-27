<!-- src/lib/components/starGrid.svelte -->

<script>
	import gsap from "gsap"
	import {onMount} from "svelte"

	const grid = [14 , 30];
	
	onMount(()=>{
		gsap.set(".star-grid-item " , {opacity:0 ,
		transformOrigin:"center" , 
		color:"#fff"
	});




		gsap.set("#star-grid" , {
			opacity:1
		})


		const tl = gsap.timeline()

		// Enterance Transition 
		tl.to(".star-grid-item" , {
			// ease:"inOut" , 
			delay:1,
			keyframes:[
				{
					opacity:0 , 
					duration:0
				}  ,{
					opacity:0.5,
					rotate:"+=180" , 
					color:"white",
					scale:3.5,
					duarion:1.5,

					// Stagger
					stagger: {
						grid:grid , 
						from: "center",
						amount: 2, 
						// each:1
					}
				} , {

					opacity:0.3, 
					rotate:"+=180" , 
					color:"white",
					scale:1,
					delay:-2,
					duarion:1,

					//Stagger
					stagger: {
						grid:grid , 
						from: "center",
						amount: 2 , 
						// each:1
					}
				}
			]
		})



		// Loop Animations
		tl.to(".star-grid-item" , {
			delay:5,
			repeat:-1,
			repeatDelay:7,

			keyframes:[
				  {
					opacity:0.4,
					rotate:"+=180" , 
					color:"#A78BFA",
					scale:3,
					duarion:0.6,
					ease: "power1.inOut",

					// Stagger
					stagger: {
						grid:grid , 
						from: "center",
						amount: 2 , 
						// each:1
					}
				} , {

					opacity:0.2, 
					rotate:"+=180" , 
					color:"#fff",
					scale:1,
					delay:-2,
					duarion:0.6,

					//Stagger
					stagger: {
						grid:grid , 
						from: "center",
						amount: 3 , 
						// each:1
					}
				}
			]
		})
	});





</script>

<svg

	xmlns="http://www.w3.org/2000/svg"
	fill="none"
	viewBox="0 0 935 425"
	class="absolute -left-2 -top-14 -z-10"
	id="star-grid"
	opacity={1}
	style="mask-image: linear-gradient(black);"
>
	<g class="star-grid-group">
		{#each Array(grid[0]) as _, i}
			{#each Array(grid[1]) as __, j}
				<path
					fill="#000"
					opacity=".2"
					class="star-grid-item"
					d={`M${j * 32},${i * 32 + 10}a0.14,0.14,0,0,1,0.26,0l0.14,0.36a2.132,2.132,0,0,0,1.27,1.27l0.37,0.14a0.14,0.14,0,0,1,0,0.26l-0.37,0.14a2.132,2.132,0,0,0,-1.27,1.27l-0.14,0.37a0.14,0.14,0,0,1,-0.26,0l-0.14,-0.37a2.132,2.132,0,0,0,-1.27,-1.27l-0.36,-0.14a0.14,0.14,0,0,1,0,-0.26l0.37,-0.14a2.132,2.132,0,0,0,1.26,-1.27l0.14,-0.36z`}
				/>
			{/each}
		{/each}
	</g>
</svg>