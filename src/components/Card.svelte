<script lang="ts">
    export let title: string;
    export let description: string;
    export let link: string;
    export let contribution: string;
    export let color: string;
</script>

<svelte:head>
    <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
</svelte:head>

<div class="box" style="--top-color: {color}">
    <div class="top">
        <h2 class="title">{title}</h2>
        <div class="repo">
            <a href={link} class="button">Repo <i class="fa fa-github" /></a>
        </div>
    </div>
    <p class="description">{@html description}</p>
    <hr class="separator" />
    <p class="contribution">{@html contribution}</p>
</div>

<style>
    .box {
        color: #004d40;
        border-radius: 5px;
        box-shadow: 0px 30px 40px -20px hsl(229, 6%, 66%);
        padding: 30px;
        margin: 20px;
        border-top: 3px solid var(--top-color);
        max-width: 500px;
    }

    .top {
        display: grid;
        grid-template-columns: 3fr 1fr;
        grid-template-areas: "title repo";
    }

    h2 {
        grid-area: title;
    }

    .repo {
        grid-area: repo;
    }
    .repo a {
        float: right;
    }

    .separator {
        border: 1px solid black;
        border-radius: 1px;
    }

    .button {
        display: inline-block;
        padding: 0.35em 1.2em;
        border: 0.1em solid black;
        margin: 0 0.3em 0.3em 0;
        border-radius: 0.12em;
        box-sizing: border-box;
        text-decoration: none;
        font-family: "Roboto", sans-serif;
        font-weight: 300;
        color: #000000;
        text-align: center;
        transition: all 0.2s;
    }
    .button:hover {
        color: #000000;
        background-color: #d3d3d3;
    }
    @media all and (max-width: 30em) {
        .button {
            display: block;
            margin: 0.4em auto;
        }
    }
</style>
