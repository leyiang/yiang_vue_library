<template>
    <transition name="jump">
        <slot></slot>
    </transition>
</template>

<style>
    .jump-enter, .jump-leave-to {
        opacity: 0;
        transform: translateY(-20px);
    }

    .jump-enter-active,
    .jump-leave-active {
        transition: all .3s;
    }
</style>