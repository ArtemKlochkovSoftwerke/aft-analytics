<script setup>
import { RouterLink, RouterView } from 'vue-router'

import Header from './UI/layout/Header/Header.vue'
import Footer from "@/UI/layout/Footer/Footer.vue";



const footerItems = [
    {
        group: 'О нас',
        items: [
            {
                title: 'Об АФТ',
                nav: [
                    {title: 'Кто мы'},
                    {title: 'Корпоративная ответственность'},
                    {title: 'Взаимоотношения с членами'}
                ]
            },
            {
                title: 'Что  мы делаем',
                nav: [
                    {title: 'Business Marketing'},
                    {title: 'User Analytic'},
                    {title: 'Live Chat'},
                    {title: 'Unlimited Support'}
                ]
            },
        ]
    },
    {
        group: 'Взаимодействие',
        items: [
            {
                title: 'Контакты',
                nav: [
                    {title: 'Стать членом'},
                    {title: 'Оставить сообщение'},
                    {title: 'Оставить контакты'},
                    {title: 'Обратная связь'},
                    {title: 'Поддержка'}
                ]
            },
            {
                title: 'Для экспертов',
                nav: [
                    {title: 'Почему АФТ'},
                    {title: 'Карьера'},
                    {title: 'Наша культура'}
                ]
            },
        ]
    },

    {
        group: 'Инсайты',
        items: [
            {
                title: 'Инсайты',
                nav: [
                    {title: 'Дайджесты'},
                    {title: 'Радары'},
                    {title: 'Публикации'},
                    {title: 'Подкасты'},
                    {title: 'Записи'},
                ]
            },
        ]
    },
    {
        group: 'AFT L!VE',
        items: [
            {
                title: 'AFT L!VE',
                nav: [
                    {title: '+7 911 999 00 00'},
                    {title: '4517 Washington Ave9495'},
                    {title: 'aft@example.com'},
                ]
            }
        ]
    },

]
</script>

<template>
    <Header />
    <RouterView />
    <Footer :items="footerItems"/>
</template>
