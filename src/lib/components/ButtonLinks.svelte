<!-- src/lib/components/ButtonLink.svelte -->

<script>
	import clsx from 'clsx';
	import { PrismicLink } from '@prismicio/svelte';

	/** @type {string | undefined} */
	let className = undefined;
	export { className as class };
</script>

<PrismicLink
	field={$$restProps.field}
	document={$$restProps.document}
	{...$$restProps}
	on:click
	class={clsx(
		'relative group inline-flex items-center h-fit w-fit overflow-hidden rounded-full border border-violet-300 bg-violet-50 px-10 py-2 text-black outline-none hover:text-white hover:bg-violet-600 hover:transition-all hover:animate-pulse duration:600 ', 
		className
	)}
>

	<slot />
</PrismicLink>
