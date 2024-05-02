<script lang="ts">
	import { enhance } from "$app/forms";
	import Bounded from "$lib/components/Bounded.svelte";
	import StarGrid from "$lib/components/StarGrid.svelte";
	
	
	import { PrismicRichText } from "@prismicio/svelte";
	import type { SubmitFunction } from "@sveltejs/kit";
	import { Result } from "postcss";
	
	
	
		/** @type {import("@prismicio/client").Content.FeatureExtractionSlice} */
		export let slice;
	import {onMount} from "svelte";


	let mediaRecorderSupported = false;
	let media: Blob[] = [];
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
		let stream = await window.navigator.mediaDevices.getUserMedia(ConstraintObj);


		// Recorder Instance
		mediaRecorder = new MediaRecorder(stream)

		// when data is available Store it 
		mediaRecorder.ondataavailable = (e) => media.push(e.data)

		// When the recorder is stopped perform this action 
		mediaRecorder.onstop = async function(){
			try{

				const blob = new Blob(media , {
					type: "audio/wav; codecs-opus"
				});
				const formData = new FormData();
				formData.append('audio', blob, 'recorded-voice.wav');
				audioSrc = window.URL.createObjectURL(blob);
				const response = await fetch('/upload-audio', {
					method: 'POST',
					body: formData,
				});
				if (response.ok) {
					console.log('Audio uploaded successfully');
				} else {
					console.error('Error uploading audio:', response.statusText);
				}
			
			}	 catch (error) {
			console.error('Error uploading audio:', error);
			} finally {
			media = []; // Clear chunks after upload
			}



			// let file = new File([blob] , 'recorded_audio.wav' , {
			// 	type:"audio/wav", 
			// 	lastModified : new Date().getTime()
			// });

			// let container = new DataTransfer();
			// container.items.add(file);
			// const newFileList = container.files;
			// fileInput.files = newFileList;


		};
		
	})



	$: getStatus = ()=> mediaRecorder?.state;

	function Record(){
			media = [];
			mediaRecorder?.start();
			recording = true;
		}
	function Stop(){
			media = [];
			mediaRecorder?.stop();
			recording = false;

			
		}
	
	// let contentResult :string
	// const submit : SubmitFunction=()=>{
	// 	thinking = true
	// 	return async ({update , result}) =>{
	// 		thinking = false;
	// 		await update();

	// 		// @ts-expect-error
	// 		contentResult = result.data.result;
	// 	}
	// }
	
		
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
					
			<button id="Record" on:click={Record} class="m-4 p-4 px-8 border-2 rounded-full max-w-3xl text-balance text-black bg-green-500 font-medium scale-1 hover:scale-[1.15] transition duration-300 ease-in-out"
			disabled = {recording}
			> 
			{#if recording } Recording .... {:else} Record	{/if}
				
			</button>
			
			<button id="Stop" on:click={Stop} class="m-4 p-4 px-8 border-2 rounded-full max-w-3xl text-balance text-white bg-red-600 font-medium scale-1 hover:scale-[1.15] transition duration-300 ease-in-out"> 
				Stop
			</button>

			
			
		</div>

		<form method="post" action="/recorder_endpoint" enctype="multipart/form-data" >
				<input type="file" name="audio-upload" id="audio-upload" class="invisible"/>
				
				<div class="grid grid-rows-2">
					
					{#if audioSrc}
				
						<audio controls src={audioSrc} />
			
						<div class="">
							<button type="submit" class="btn m-4 p-4 px-8 border-2 rounded-full max-w-3xl text-balance text-black bg-yellow-400 font-medium scale-1 hover:scale-[1.15] transition duration-300 ease-in-out "
							disabled= {!audioSrc||thinking}>
							
							{#if thinking}
							thinking .....
							
							{:else} Analyse	
							{/if}
							
							</button>
						</div>
					
					{/if}
				
				</div>
			
		</form>
		
</Bounded>
