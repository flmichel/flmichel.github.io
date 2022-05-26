<script lang="ts">
	import Section from "./Section.svelte";
	import Topbar from "./Topbar.svelte";
	import { mobile } from "./stores";
	import Card from "./Card.svelte";
	import Competence from "./Competence.svelte";
	import IconCircle from "./IconCircle.svelte";
	import Contact from "./Contact.svelte";
	import NightSky from "../NightSky.svelte";
	import i from "../public/information.json";

	// define if the this is a mobile or a computer
	let x: number;
	let mobileValue: boolean;
	$: mobileValue = x < 800;
	$: mobile.set(mobileValue);

	function jumpToSection(event: any) {
		event.detail.section.scrollIntoView({
			behavior: "smooth",
		});
		window.history.replaceState({}, "", event.detail.ref);
	}
	let progress = 0.75;
</script>

<svelte:window bind:innerWidth={x} />

<Topbar>
	<div slot="left">
		<Section segment="#home" on:click={jumpToSection}
			>&lt;François &sol;&gt;</Section
		>
	</div>
	<div slot="center">
		<Section segment="#about" on:click={jumpToSection}
			>{i.about.title}</Section
		>
		<Section segment="#projects" on:click={jumpToSection}
			>{i.projects.title}</Section
		>
		<Section segment="#skills" on:click={jumpToSection}
			>{i.skills.title}</Section
		>
		<Section segment="#resume">{i.resume.title}</Section>
	</div>
</Topbar>

<div id="home">
	<div class="text">
		<h1>{i.home.title}</h1>
		<p class="typewriter">{i.home.text}</p>
	</div>
	<NightSky />
</div>

<section id="about">
	<h2 class="section-title">{i.about.title}</h2>
	<img src="profile.png" alt="profile" style="width:200px" />
	<p>{i.about.text}</p>
</section>

<section id="projects">
	<h2 class="section-title">{i.projects.title}</h2>
	<div class="cards">
		{#each i.projects.entries as project}
			<Card {...project} />
		{/each}
	</div>
</section>

<section id="skills">
	<h2 class="section-title">Skills</h2>
	<div class="competences">
		<div class="c1">
			{#each i.skills.techincal as skill}
				<Competence {...skill} />
			{/each}
		</div>
		<div class="c2">
			{#each i.skills.languages as skill}
				<Competence {...skill} />
			{/each}
		</div>
	</div>
</section>

<section id="footer">
	<h2 class="section-title">{i.footer.title}</h2>
	<div class="content">
		<h3 class="social-title">{i.footer.social.title}</h3>
		<div class="social-icons">
			{#each i.footer.social.websites as website}
				<IconCircle {...website} />
			{/each}
		</div>

		<h3 class="contact-title">{i.footer.information.title}</h3>
		<div class="contact-info">
			<Contact icon="envelope"
				><a href={"mailto:" + i.footer.information.email}
					>{i.footer.information.email}</a
				></Contact
			>
			<Contact icon="phone">{i.footer.information.phone}</Contact>
			<Contact icon="map-marker ">{i.footer.information.address}</Contact>
		</div>
	</div>
</section>

{#if mobileValue}
	<style>
		#about {
			grid-template-columns: 1fr;
			grid-template-areas:
				"title"
				"profile"
				"about";
			color: #004d40;
		}
		.competences {
			grid-template-columns: repeat(1, 1fr);
		}

		#footer .content {
			display: grid;
			grid-template-areas:
				"social-title"
				"social-icons"
				"contact-title"
				"contact-info";
			place-items: center;
		}
		section {
			padding-left: 10px;
			padding-right: 10px;
		}
	</style>
{:else}
	<style>
		#about {
			grid-template-columns: 1fr 2fr;
			grid-template-rows: 0.2fr 2fr;
			grid-template-areas:
				"title title"
				"profile about";
			color: #004d40;
		}
		.competences {
			grid-template-columns: repeat(2, 1fr);
		}

		#footer .content {
			display: grid;
			grid-template-columns: 1fr 1fr;
			grid-template-rows: 0.3fr 1fr;
			grid-template-areas:
				"social-title contact-title"
				"social-icons contact-info";
			place-items: center;
		}
		section {
			padding-left: 40px;
			padding-right: 40px;
		}
	</style>
{/if}

{#if x > 1200}
	<style>
		.cards {
			grid-template-columns: repeat(3, 1fr);
		}
	</style>
{:else if x > 800}
	<style>
		.cards {
			grid-template-columns: repeat(2, 1fr);
		}
	</style>
{:else if x > 800}
	<style>
		.cards {
			grid-template-columns: repeat(1, 1fr);
		}
	</style>
{/if}

<style>
	:global(body) {
		padding: 0px;
	}

	section {
		display: grid;
		padding-top: 40px;
		padding-bottom: 30px;
	}
	.section-title {
		text-align: center;
	}
	#about {
		place-items: center;
		background-color: rgb(241, 241, 241);
	}
	#about img {
		grid-area: profile;
		border-radius: 50%;
	}
	#about .section-title {
		grid-area: title;
	}
	#about p {
		grid-area: about;
		padding: 10px;
		font-size: 20px;
	}

	#home {
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		min-height: 100vh;
		background-color: transparent;
		z-index: 2;
	}

	#home .text {
		position: absolute;
	}

	#home h1 {
		font-size: 70px;
		color: white;
	}

	#projects {
		background-color: rgb(248, 248, 248);
	}

	#footer {
		color: white;
		background-color: rgb(27, 27, 27);
		padding-bottom: 50px;
	}

	.cards {
		display: grid;
		grid-auto-rows: auto;
		grid-gap: 1rem;
	}

	.competences {
		display: grid;
		grid-auto-rows: auto;
		grid-gap: 1rem;
		place-items: center;
	}

	#footer .content {
		display: grid;
		place-items: center;
	}

	.social-title {
		grid-area: social-title;
	}
	.social-icons {
		grid-area: social-icons;
	}
	.contact-title {
		grid-area: contact-title;
	}
	.contact-info {
		grid-area: contact-info;
		display: grid;
		grid-auto-rows: auto;
		grid-gap: 1rem;
	}

	.typewriter {
		color: white;
		font-size: 25px;
		overflow: hidden;
		white-space: nowrap;
		margin: 0 auto;
		animation: typing 2s steps(30, end), blink-caret 0.5s step-end infinite;
	}

	/* The typing effect */
	@keyframes typing {
		from {
			width: 0;
		}
		to {
			width: 100%;
		}
	}

	/* The typewriter cursor effect */
	@keyframes blink-caret {
		from,
		to {
			border-color: transparent;
		}
		50% {
			border-color: black;
		}
	}
</style>
