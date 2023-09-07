<script setup>
defineProps({
    type: {
        type: String,
        default: 'primary',
    },
    size: {
        type: String,
        default: 'normal'
    }
})


</script>


<template>
    <button class="aft-button" :class="`aft-button--${type} aft-button--${size}`">
        <slot></slot>
    </button>
</template>

<style lang="scss">
@import "src/styles/mixins";
    .aft-button {
        display: inline-block;
        border: none;
        padding: var(--aft-space-3) var(--aft-space-5);
        border-radius: 6px;
        margin: 0;
        text-decoration: none;
        background: #0069ed;
        color: #ffffff;
        font-family: sans-serif;
        font-size: 1rem;
        line-height: 1;
        cursor: pointer;
        text-align: center;
        transition: background, box-shadow 250ms ease-in-out;
        font: var(--font-btn-1);
        min-width: 200px;

        @include devices(desktop-max) {
            font: var(--font-btn-1-desktop);
            min-width: 150px;
        }

        @include devices(tablet-max) {
            min-width: 130px;
            font: var(--font-btn-1-mobile);
        }

        &--primary {
            background: #023E8A;
        }

        &--secondary {
            background: #58C4A9;
        }

        &:hover {
            box-shadow: 4px 4px 4px 0px #00000040;
        }

        &--full {
            width: 100%;
        }
    }
</style>