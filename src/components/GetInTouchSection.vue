
<template>
    <section class="__shaped_bg">
        <div class="__fade">
            <div class="flex justify-between items-center px-[8%] h-full">
                <p class="text-white flex flex-col justify-center text-[2.188rem]">Let’s get in touch <span class="block text-[1.5rem] font-thin -mt-3">Contact us for assistance</span></p>
                <button class="w-full max-w-[12.563em] border text-white h-[2.625em]">Contact Us</button>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    $green2: #F1CC98;
    $green: #C89361;

    .__shaped_bg {
        background:
            conic-gradient(from -45deg at calc(100%/3) calc(100%/3), $green 90deg, #0000 0),
            conic-gradient(from -135deg at calc(100%/3) calc(2*100%/3), $green 90deg, $green2 0 135deg, #0000 0),
            conic-gradient(from 135deg at calc(2*100%/3) calc(2*100%/3), $green 90deg, $green2 0 135deg, #0000 0),
            conic-gradient(from 45deg at calc(2*100%/3) calc(100%/3), $green 90deg, $green2 0 135deg, #0000 0,$green 0 225deg,$green2 0);
        background-size: 30px 30px;
    }
    .__fade {
        max-width: 70%;
        width: 100%;
        height: 11.125em;
        padding: 1em;
        text-align: center;
        margin: auto;
        background: linear-gradient(
            to left,
            rgba(255, 255, 255, 0) 0%,
            rgba(218, 172, 116, 1) 10%,
            rgba(200, 147, 97, 1) 90%,
            rgba(255, 255, 255, 0) 100%
        );
      }
</style>