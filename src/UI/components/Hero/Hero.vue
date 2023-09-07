<script setup>
import Section from '@/UI/components/Section/Section.vue'
</script>
<template>
    <div class="aft-hero">
        <div class="aft-hero__container">
            <h1>Организация бизнеса</h1>
            <p>Одностраничный блокнот, революционизирующий стратегическое планирование</p>
            <a class="aft-hero__link" href="#">Попробовать</a>
        </div>
    </div>
</template>

<style lang="scss">
@import "src/styles/mixins";
    .aft-hero {
        background: url('@/assets/img/HeroBG.svg');
        padding: 110px;
        background-size: cover;

        @include devices(tablet-max) {
            padding: 125px 16px 70px;
        }
        &__container {
            max-width: 500px;
            background-color: #fff;
            margin: 0 auto;
            padding: var(--aft-space-4) var(--aft-space-5);
            text-align: center;

            @include devices(tablet-max) {
                padding: 45px 16px;
            }
        }

        h1 {
            font: var(--font-h1);

            @include devices(tablet-max) {
                font: var(--font-h1-mobile);
            }
        }

        p {
            font: var(--font-h2);
            margin: var(--aft-space-7) 0;

            @include devices(tablet-max) {
                font: var(--font-h2-mobile);
            }
        }

        div {
            font: var(--font-h3-secondary);
        }
        &__link {
            font: var(--font-h3);
            text-decoration: none;
            color: #023E8A;
        }
    }
</style>
