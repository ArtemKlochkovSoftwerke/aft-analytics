
<script setup>
import Section from '@/UI/components/Section/Section.vue';
import AftButton from '@/UI/ui-library/Button.vue'



defineProps({
    items: {
        type: Array,
        default: [],
    }
})
</script>
<template>
    <div class="aft-banner">
        <Section class="aft-banner__container" container-class="large">
            <div class="aft-banner__row" v-for="(item, idx) in items" :key="idx" :class="{'-reversed': (idx % 2) === 1}">
                <div class="aft-banner__img-container">
                    <img :src="item.img"/>
                </div>
                <div class="aft-banner__content">
                    <h2 class="aft-banner__title">Продуктовый Бенчмаркинг</h2>
                    <p class="aft-banner__text">Как правило, этот инструмент используют, чтобы сравнить свой бизнес с лучшими компаниями на рынке, то есть с эталонами.</p>
                    <div class="aft-banner__btn-group">
                        <AftButton>Начать</AftButton>
                        <AftButton type="secondary">Подробнее</AftButton>
                    </div>

                </div>
            </div>
        </Section>
    </div>
</template>

<style lang="scss">
@import "src/styles/mixins";
    .aft-banner {
        background-color: var(--aft-bg-light-blue);

        &__container {
            display: flex;
            flex-direction: column;
            gap: 55px;

            @include devices(tablet-max) {
                gap: var(--aft-space-3);
            }
        }

        img {
            width: 100%;
            height: 100%;
            max-width: 100%;
            object-fit: cover;
        }

        &__row {
            display: grid;
            grid-template-columns: 5fr 6fr;
            gap: 100px;
            align-items: center;

            @include devices(desktop-max) {
                gap: 50px;
            }

            @include devices(tablet-max) {
                grid-template-columns: 1fr;
                gap: var(--aft-space-4);
            }

            &.-reversed {
                grid-template-columns: 6fr 5fr;
                @include devices(tablet-max) {
                    grid-template-columns: 1fr;
                }
                .aft-banner__content {
                    order: -1;

                    @include devices(tablet-max) {
                        order: 1;
                    }
                }
            }
        }

        &__title {
            font: var(--font-h1);

            @include devices(desktop-max) {
                font: var(--font-h1-desktop);
                text-align: center;
            }

            @include devices(tablet-max) {
                font: var(--font-h1-mobile);
                text-align: center;
            }
        }

        &__text {
            font: var(--font-h3);
            margin: 20px 0;

            @include devices(desktop-max) {
                font: var(--font-h3-desktop);
                text-align: center;
            }

            @include devices(tablet-max) {
                font: var(--font-h3-mobile);
                text-align: center;
            }
        }

        &__btn-group {
            display: flex;
            align-items: center;
            gap: var(--aft-space-5);

            @include devices(tablet-max) {
                justify-content: center;
            }
        }
    }
</style>