<script setup>
import Section from '@/UI/components/Section/Section.vue'
</script>
<template>
    <div class="aft-hero">
        <div class="aft-hero__container">
            <h1>Организация бизнеса</h1>
            <p>Одностраничный блокнот, революционизирующий стратегическое планирование</p>
            <div>Попробовать</div>
        </div>
    </div>
</template>

<style lang="scss">
    .aft-hero {
        background: url('@/assets/img/HeroBG.svg');
        padding: 110px;

        @media screen and (max-width: 780px) {
            padding: 125px 16px 70px;
        }
        &__container {
            max-width: 500px;
            background-color: #fff;
            margin: 0 auto;
            padding: 0 var(--aft-space-5);
            text-align: center;

            @media screen and (max-width: 780px) {
                padding: 45px 16px;
            }
        }

        h1 {
            font: var(--font-h1);

            @media screen and (max-width: 780px) {
                font: var(--font-h1-mobile);
            }
        }

        p {
            font: var(--font-h2);
            margin: var(--aft-space-7) 0;

            @media screen and (max-width: 780px) {
                font: var(--font-h2-mobile);
            }
        }

        div {
            font: var(--font-h3-secondary);
        }
    }
</style>
