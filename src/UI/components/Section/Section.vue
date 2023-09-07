<script setup>
import { reactive, computed } from 'vue'
    const props = defineProps({
        containerClass: {
            type: String,
            default: '',
        }
    })

    // a computed ref
    const sectionClasses = computed(() => {
        return props.containerClass || ''
    })
</script>

<template>
    <div class="aft-container" :class="sectionClasses">
        <slot></slot>
    </div>
</template>

<style lang="scss">
@import "src/styles/mixins";
    .aft-container {
        max-width: 1440px;
        margin: 0 auto;

        &.large {
            padding: 55px 110px;

            @include devices(desktop-max) {
                padding: 40px 32px;
            }

            @include devices(tablet-max) {
                padding: 32px 16px;
            }
        }

        &.small {
            padding: 55px;

            @include devices(desktop-max) {
                padding: 40px;
            }

            @include devices(tablet-max) {
                padding: 32px 16px;
            }
        }
    }
</style>