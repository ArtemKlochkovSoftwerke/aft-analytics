
<script setup>
import Section from '@/UI/components/Section/Section.vue';
import Person from '@/assets/img/person.png';


defineProps({
    items: {
        type: Array,
        default: [],
    }
})

</script>
<template>
    <div class="aft-our-team">
        <Section class="aft-our-team_container" container-class="large">
            <h2 class="aft-our-team__title">Наша команда</h2>
            <div class="aft-our-team__cards">
                <div class="aft-our-team__card">
                    <div class="img-container">
                        <img :src="Person"/>
                    </div>
                    <div class="card-text">Марианна Данилина</div>
                    <div class="card-sub-text">Разработчик</div>
                    <div class="card-about">Формирование оперативной аналитики по основным верхнеуровневым показателям</div>
                </div>
                <div class="aft-our-team__card">
                    <div class="img-container">
                        <img :src="Person"/>
                    </div>
                    <div class="card-text">Марианна Данилина</div>
                    <div class="card-sub-text">Разработчик</div>
                    <div class="card-about">Формирование оперативной аналитики по основным верхнеуровневым показателям</div>
                </div>
                <div class="aft-our-team__card">
                    <div class="img-container">
                        <img :src="Person"/>
                    </div>
                    <div class="card-text">Марианна Данилина</div>
                    <div class="card-sub-text">Разработчик</div>
                    <div class="card-about">Формирование оперативной аналитики по основным верхнеуровневым показателям</div>
                </div>
            </div>

        </Section>
    </div>
</template>

<style lang="scss">
.aft-our-team {
    background-image: url("src/assets/img/banner/bannerBG.svg");
    background-size: cover;

    &__title {
        font: var(--font-h1);
        text-align: center;
        color: #0E3365;
        margin-bottom: 55px;

        @media screen and (max-width: 780px) {
            font: var(--font-h1-mobile);
            margin-bottom: 32px;
        }
    }

    &__cards {
        display: flex;
        gap: 50px;
        justify-content: space-between;

        @media screen and (max-width: 780px) {
            flex-direction: column;
            align-items: center;
        }
    }

    &__card {
        flex: 1;
        max-width: 350px;
        border-radius: 10px;
        background-color: #E4E5EF;
        transition: all 0.3s;
        padding: 16px 16px 35px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 16px;
        cursor: pointer;

        &:hover {
            background: darken(#E4E5EF, 10%);
        }

        .card-text {
            font: var(--font-h3);
        }

        .card-sub-text {
            font: var(--font-h3-secondary);
            margin: 16px 0 32px;
        }

        .card-about {
            font: var(--font-h3-secondary);
            text-align: center;
        }
    }
}
</style>