<script lang="ts">
	import Section from "./Section.svelte";
	import Topbar from "./Topbar.svelte";
	import { mobile } from "../stores";
	import Card from "./Card.svelte";
	import Competence from "./Competence.svelte";

	export let link: string;
	export let name: string;
</script>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
	/>
</svelte:head>

<!-- svelte-ignore a11y-missing-content -->
<a href={link} class={"fa fa-" + name} />

<style>
	.fa {
		padding: 10px;
		font-size: 30px;
		width: 30px;
		text-align: center;
		text-decoration: none;
		border-radius: 50%;
		background: transparent;
		color: white;
	}
</style>
