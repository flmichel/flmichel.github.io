<script lang="ts">
    import { mobile, openModal } from "./stores";
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

    export let segment: string;
    let mobileValue: boolean;

    mobile.subscribe((value) => {
        mobileValue = value;
    });

    function handleClick({ target }) {
        const ref = target.getAttribute("href");
        dispatch("click", {
            section: document.querySelector(ref),
            ref,
        });
        if (mobileValue) {
            openModal.set(false);
        }
    }
</script>

<span>
    <a
        class={mobileValue ? "mobile" : "not-mobile"}
        href={segment}
        on:click|preventDefault={handleClick}><slot /></a
    >
</span>

<style>
    .mobile {
        display: block;
        text-align: center;
    }
    .not-mobile {
        float: left;
    }
    a {
        color: black;
        padding: 13px 32px;
        font-size: 17px;
    }

    a:hover {
        text-decoration: none;
        color: rgb(192, 61, 61);
    }
</style>
