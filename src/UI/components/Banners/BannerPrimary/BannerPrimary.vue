
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
    .aft-banner {
        background-color: var(--aft-bg-light-blue);

        &__container {
            display: flex;
            flex-direction: column;
            gap: 55px;

            @media screen and (max-width: 780px) {
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

            @media (max-width: 780px) {
                grid-template-columns: 1fr;
                gap: var(--aft-space-4);
            }

            &.-reversed {
                grid-template-columns: 6fr 5fr;
                @media (max-width: 780px) {
                    grid-template-columns: 1fr;
                }
                .aft-banner__content {
                    order: -1;

                    @media (max-width: 780px) {
                        order: 1;
                    }
                }
            }
        }

        &__title {
            font: var(--font-h1);

            @media screen and (max-width: 780px) {
                font: var(--font-h1-mobile);
                text-align: center;
            }
        }

        &__text {
            font: var(--font-h3);
            margin: 20px 0;

            @media screen and (max-width: 780px) {
                font: var(--font-h3-mobile);
                text-align: center;
            }
        }

        &__btn-group {
            display: flex;
            align-items: center;
            gap: var(--aft-space-5);

            @media screen and (max-width: 780px) {
                justify-content: center;
            }
        }
    }
</style>