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
    <div class="aft-ideas">
        <Section class="aft-ideas__container" container-class="large">
            <h2>Идеи для повышения производительности</h2>
            <div class="aft-ideas__content">
                <div class="aft-ideas__content-item" v-for="item in items"><div>{{item.text}}</div></div>
            </div>
            <div class="aft-ideas__button-container">
                <AftButton type="secondary">Смотреть все</AftButton>
            </div>
        </Section>
    </div>
</template>

<style lang="scss">
@import "src/styles/mixins";
    .aft-ideas {
        background-image: url("src/assets/img/banner/bannerBG.svg");
        background-size: cover;

        --aft-ideas-padding: 30px;

        @include devices(desktop-max) {
            --aft-ideas-padding: 25px;
        }

        @include devices(tablet-big-max) {
            --aft-ideas-padding: 20px;
        }

        &__container {
            //padding: 55px 110px;
        }

        h2 {
            font: var(--font-h1);
            margin-bottom: 55px;
            color: #0E3365;

            @include devices(tablet-max) {
                font: var(--font-h1-mobile);
                text-align: center;
                margin-bottom: var(--aft-space-3);
            }
        }

        &__content {
            display: grid;
            grid-template-columns: 1fr;

            @include devices(tablet-min) {
                grid-template-columns: repeat(3,1fr);
            }

            &-item {
                @include devices(tablet-max) {
                    padding: 20px 0;
                    & {
                        border-top: 1px solid #58C4A9;
                    }

                    &:last-child {
                        border-bottom: 1px solid #58C4A9;
                    }
                }
                div {
                    background: #E4E5EF;
                    font: var(--font-h3);
                    padding: var(--aft-ideas-padding);
                    text-align: center;
                    border-radius: 10px;
                    transition: background-color 0.3s;
                    cursor: pointer;

                    &:hover {
                        background: darken(#E4E5EF, 10%);
                    }
                }

                @include devices(tablet-min) {
                    &:nth-child(1), &:nth-child(2), &:nth-child(3) {
                        border-bottom: 2px solid #58C4A9;
                        padding-bottom: var(--aft-ideas-padding);
                    }

                    &:nth-child(4), &:nth-child(5), &:nth-child(6) {
                        padding-top: var(--aft-ideas-padding);
                    }

                    &:nth-child(3n - 2), &:nth-child(3n - 1) {
                        border-right: 2px solid #58C4A9;
                        padding-right: var(--aft-ideas-padding);
                    }

                    &:nth-child(3n - 1), &:nth-child(3n) {
                        padding-left: var(--aft-ideas-padding);
                    }
                }

            }
        }

        &__button-container {
            text-align: center;
            margin-top: 55px;

            @include devices(tablet-max) {
                margin-top: var(--aft-space-3);
            }
        }
    }
</style>