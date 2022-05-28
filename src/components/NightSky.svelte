<script lang="ts">
    import { onMount } from "svelte";

    export let width: number;
    export let height: number;

    let canvas: HTMLCanvasElement;
    const backgroundColor = "#030318";
    const secondColor = " #3f034f";
    let stars: Star[] = [];

    class Star {
        x: number;
        y: number;
        r: number;
        constructor(xi: number, yi: number, spacing: number) {
            this.x = xi + randomInt(spacing);
            this.y = yi + randomInt(spacing);
            this.r = Math.random();
        }

        evolve() {
            if (this.y === 0) {
                this.y = height;
            } else {
                this.y = this.y - 1;
            }
            this.x = this.x + (Math.random() - 0.5) / 4;
        }
    }

    onMount(() => {
        const ctx = canvas.getContext("2d");
        let frame = requestAnimationFrame(loop);

        /*stars = createStars(width, height, 50);*/

        function loop() {
            frame = requestAnimationFrame(loop);

            let grd = ctx.createLinearGradient(0, 0, 0, 2000);
            grd.addColorStop(0, backgroundColor);
            grd.addColorStop(1, secondColor);
            ctx.fillStyle = grd;
            ctx.fillRect(0, 0, width, height);
            stars.forEach(function (star) {
                const r = 1;
                ctx.beginPath();
                ctx.fillStyle = "rgb(255, 255, 255)";
                ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
                ctx.fill();
                star.evolve();
            });
        }

        return () => {
            cancelAnimationFrame(frame);
        };
    });

    $: createStars(width, height, 50);

    function createStars(w: number, h: number, spacing: number) {
        if (w && h) {
            stars = [];
            for (let x = 0; x < w; x += spacing) {
                for (let y = 0; y < h; y += spacing) {
                    stars.push(new Star(x, y, spacing));
                }
            }
        }
    }

    function randomInt(max: number) {
        return Math.floor(Math.random() * max);
    }
</script>

<canvas bind:this={canvas} {width} {height} />
