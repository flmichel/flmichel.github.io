<script lang="ts">
    export let title: string;
    export let description: string;
    export let link: string;
    export let contribution: string;
</script>

<svelte:head>
    <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
</svelte:head>

<div class="box red">
    <div class="top">
        <h2 class="title">{title}</h2>
        <div class="repo">
            <a href={link}><button>Repo <i class="fa fa-github" /></button></a>
        </div>
    </div>
    <p class="description">{description}</p>
    <hr class="separator" />
    <p class="contribution">{contribution}</p>
</div>

<style>
    :root {
        --red: hsl(0, 78%, 62%);
        --grayishBlue: hsl(229, 6%, 66%);
    }

    .box {
        color: #004d40;
        border-radius: 5px;
        box-shadow: 0px 30px 40px -20px var(--grayishBlue);
        padding: 30px;
        margin: 20px;
        border-top: 3px solid var(--red);
        max-width: 500px;
    }

    .top {
        display: grid;
        grid-template-columns: 2fr 1fr;
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
</style>
