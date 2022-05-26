<script lang="ts">
    export let name: string;
    export let level;
</script>

<div class="competence">
    <h3>{name}</h3>
    <progress value={level} />
</div>

<style>
    .competence {
        display: grid;
        grid-template-columns: 1fr 4fr;
        column-gap: 30px;
        max-width: 400px;
    }
</style>
