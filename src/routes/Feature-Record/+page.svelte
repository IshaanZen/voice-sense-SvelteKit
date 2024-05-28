<script lang="ts">
	import { enhance } from "$app/forms";
	import Bounded from "$lib/components/Bounded.svelte";
	import StarGrid from "$lib/components/StarGrid.svelte";
	
	import type { SubmitFunction } from "@sveltejs/kit";
	
	
	import {onMount} from "svelte";


	let mediaRecorderSupported = false;
	let  chunks : Blob[] = [];
	let mediaRecorder : MediaRecorder;
	let audioSrc : string | null=null ; 
	let fileInput:HTMLInputElement;

	$: recording = false;
	let thinking = false;

	onMount(async ()=>{
		//Check if recorder is supported
		mediaRecorderSupported = !!window.navigator.mediaDevices.getUserMedia;

		// Get the Recorder Access
		let ConstraintObj={
			audio:true,
			video:false
		}
		let stream = await navigator.mediaDevices.getUserMedia(ConstraintObj);


		// Recorder Instance
		mediaRecorder = new MediaRecorder(stream)

		// when data is available Store it 
		mediaRecorder.ondataavailable = (e) => chunks.push(e.data)

		// When the recorder is stopped perform this action 
		mediaRecorder.onstop = function(){
			    const blob = new Blob(chunks , { type: "audio/wav; codecs=opus"});
                chunks = []
				
				// Send Data file to the backend 
				audioSrc = window.URL.createObjectURL(blob);
				
                // let file = new File([blob] , `recorded_audio${new Date().getTime().toString()}.wav` , {
                let file = new File([blob] , `recorded_audio.wav` , {
                    type:"audio/wav", 
                    lastModified : new Date().getTime()
                });

                let container = new DataTransfer();
                container.items.add(file);
                const newFileList = container.files;
                fileInput.files = newFileList;

				
			
			
			}
		
			
})



	$: getStatus = ()=> mediaRecorder?.state;

	function Record(){
			chunks = [];
			mediaRecorder?.start();
			recording = true;
		}
	function Stop(){
			chunks = [];
			mediaRecorder?.stop();
			recording = false;
		}

	let contentResult :string
	const submit : SubmitFunction= ()=>{
		thinking = true
		
		return async ({update , result}) =>{
			thinking = false;
			await update();
			// @ts-expect-error
			contentResult = result.data.result;
			
		}
	}
	
		
</script>
<svelte:head>
	<title>Feature Extraction</title>

</svelte:head>

<Bounded >
	
	<div class="mt-16 p-10 relative text-center">

		

		<h3 class="max-w-6xl text-center text-balance text-5xl font-medium md:text-7xl">
			EMOTION DETECTION
		</h3>
		<div class="text-balance mx-auto mt-6 max-w-md text-center text-black text-xl">
			<p >
                Our Most Advanced Emotion Detection System 
                Predict your emotions in a few simple Steps 
            </p>
		</div>
		
	
		<div class="glass-container bg-gray-200/50 rounded-3xl m-6 p-10">		
			<button id="Record" on:click={Record} class="m-4 p-4 px-10 border-2 rounded-full max-w-3xl text-balance text-black bg-green-500 font-medium scale-1 hover:scale-[1.15] transition duration-300 ease-in-out"
			disabled = {recording}
			> 
			{#if recording } RECORDING.... {:else} RECORD {/if}
				
			</button>
			
			<button id="Stop" on:click={Stop} class="m-4 p-4 px-8 border-2 rounded-full max-w-3xl text-balance text-white bg-red-600 font-medium scale-1 hover:scale-[1.15] transition duration-300 ease-in-out"> 
				STOP
			</button>
		</div>

		<form method="post" use:enhance={submit} enctype="multipart/form-data" >
				<input type="file" bind:this={fileInput} name="fileToUpload" class="invisible"/>
				
				<div class="grid grid-rows-2">
					
					{#if audioSrc} 
				
						<audio controls src={audioSrc} />
			
						
							<button class="btn m-4 p-4 px-8 border-2 rounded-full max-w-3xl text-balance text-black bg-yellow-400 font-medium scale-1 hover:scale-[1.15] transition duration-300 ease-in-out "
							disabled= {!audioSrc||thinking}>
							
							{#if thinking}
							thinking .....
							
							{:else} Analyse	
							{/if}
							
							</button>

					
					{/if}
				
				</div>
			
		</form>
	</div>

		
</Bounded>
