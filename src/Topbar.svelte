<script lang="ts">
    import Hamburger from "./Hamburger.svelte";
    import { fly } from "svelte/transition";
    import { mobile, openModal } from "./stores";

    let x: number;
    let open: boolean;
    let onClick = (): void => {
        open = !open;
    };

    let mobileValue: boolean;

    mobile.subscribe((value) => {
        mobileValue = value;
    });
    openModal.subscribe((value) => {
        open = value;
    });
    $: openModal.set(open);
</script>

<nav>
    <div class="bar">
        <slot class="home" name="left" />
        {#if mobileValue}
            <div class="right"><Hamburger {open} {onClick} width="30" /></div>
        {:else}
            <div class="horizontal">
                <slot name="center" />
            </div>
        {/if}
    </div>
    {#if open}
        <div class="vertical" transition:fly={{ y: -100, duration: 400 }}>
            <slot name="center" />
        </div>
    {/if}
</nav>

<style>
    nav {
        position: fixed;
        width: 100%;
    }
    .bar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: rgba(221, 247, 255, 0.89);
    }

    .right {
        float: right;
    }
    .vertical {
        background-color: rgba(221, 247, 255, 0.89);
    }
</style>
