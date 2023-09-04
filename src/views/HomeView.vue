<script setup>
import BannerPrimary from "@/UI/components/Banners/BannerPrimary/BannerPrimary.vue";
import BannerIdeas from "@/UI/components/Banners/BannerIdeas/BannerIdeas.vue";
import BannerInstruments from "@/UI/components/Banners/BannerInstruments/BannerInstruments.vue";
import BestPractices from "@/UI/components/Banners/BestPractices/BestPractices.vue";
import BannerHistory from "@/UI/components/Banners/BannerHistory/BannerHistory.vue";
import BannerOurTeam from "@/UI/components/Banners/BannerOurTeam/BannerOurTeam.vue";
import Hero from "@/UI/components/Hero/Hero.vue";

import AftButton from '@/UI/ui-library/Button.vue'
import IconPDF from '@/assets/icons/pdf.svg';
import IconAnalytics from '@/assets/icons/analytics.svg';
import IconExcel from '@/assets/icons/excel.svg';
import IconReport from '@/assets/icons/report.svg';
import IconMetric from '@/assets/icons/metric.svg';
import IconBenchmarking from '@/assets/icons/benchmarking.svg';
import img from '@/assets/img/banner/bannerImg.jpg'

const defaultIdeas = [
    {text: 'Создайте лучший стратегический план ИТ'},
    {text: 'Создайте лучший стратегический план ИТ'},
    {text: 'Создайте лучший стратегический план ИТ'},
    {text: 'Создайте лучший стратегический план ИТ'},
    {text: 'Создайте лучший стратегический план ИТ'},
    {text: 'Создайте лучший стратегический план ИТ'},
]

const defaultPractices = [
    {icon: IconExcel, text: 'выгрузка в Excel '},
    {icon: IconPDF, text: 'выгрузка в PDF'},
    {icon: IconReport, text: 'гибкий отчет'},
    {icon: IconBenchmarking, text: 'бенчмаркинг'},
    {icon: IconMetric, text: 'расчет метрик'},
    {icon: IconAnalytics, text: 'экспресс-аналитика'},
]

const defaultBanner = [{img: img}, {img: img}]
</script>

<template>
    <main>
        <Hero />
        <BannerPrimary :items="defaultBanner"/>
        <BannerIdeas :items="defaultIdeas"/>
        <BannerInstruments />
        <BestPractices :items="defaultPractices"/>
        <BannerHistory :items="defaultBanner"/>
        <BannerOurTeam />
    </main>
</template>
