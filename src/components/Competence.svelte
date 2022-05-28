<script lang="ts">
    export let name: string;
    export let level: string;
    export let color: string;
</script>

<div class="competence">
    <h3>{name}</h3>
    <div id="progressbar">
        <div id="level" style="width: {level}; background-color: {color}" />
    </div>
</div>

<style>
    .competence {
        display: grid;
        grid-template-columns: 1fr 4fr;
        column-gap: 30px;
        max-width: 400px;
        align-items: center;
    }

    #progressbar {
        background-color: black;
        border-radius: 5px;
        padding: 1px;
        height: 6px;
        width: 250px;
        max-width: 250px;
        display: inline-block;
    }

    #progressbar > #level {
        height: 6px;
        border-radius: 10px;
    }

    h3 {
        width: 80px;
        max-width: 80px;
        text-align: right;
    }
</style>
