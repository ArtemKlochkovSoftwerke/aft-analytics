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
            <h2>Идеи для повышения производительности 2</h2>
            <div class="aft-ideas__content">
                <div class="aft-ideas__content-item"><div>Создайте лучший стратегический план ИТ</div></div>
                <div class="aft-ideas__content-item"><div>Создайте лучший стратегический план ИТ</div></div>
                <div class="aft-ideas__content-item"><div>Создайте лучший стратегический план ИТ</div></div>
                <div class="aft-ideas__content-item"><div>Создайте лучший стратегический план ИТ</div></div>
                <div class="aft-ideas__content-item"><div>Создайте лучший стратегический план ИТ</div></div>
                <div class="aft-ideas__content-item"><div>Создайте лучший стратегический план ИТ</div></div>
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

    &__container {
        //padding: 55px 110px;
    }

    h2 {
        font: var(--font-h1);
        margin-bottom: 55px;
        color: #0E3365;
    }

    &__content {
        display: grid;
        grid-template-columns: repeat(3,1fr);

        &-item {
            --aft-history-padding: 30px;

            @include devices(desktop-max) {
                --aft-history-padding: 25px;
            }

            div {
                background: #E4E5EF;
                font: var(--font-h3);
                padding: var( --aft-history-padding);
                text-align: center;
            }

            &:nth-child(1), &:nth-child(2), &:nth-child(3) {
                border-bottom: 2px solid #58C4A9;
                padding-bottom: var( --aft-history-padding);
            }

            &:nth-child(4), &:nth-child(5), &:nth-child(6) {
                padding-top: var( --aft-history-padding);
            }

            &:nth-child(3n - 2), &:nth-child(3n - 1) {
                border-right: 2px solid #58C4A9;
                padding-right: var( --aft-history-padding);
            }

            &:nth-child(3n - 1), &:nth-child(3n) {
                padding-left: var( --aft-history-padding);
            }
        }
    }

    &__button-container {
        text-align: center;
        margin-top: 55px;
    }
}
</style>