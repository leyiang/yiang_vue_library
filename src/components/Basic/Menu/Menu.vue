<template>
    <div class="menu">
        <slot></slot>
    </div>
    <!-- /.menu -->
</template>

<script>
    export default {
        data: () => ({
        }),

        created() {

        },

        methods: {},
    }
</script>

<style scoped>
    .menu {
        background-color: #EEE;
        display: flex;
        flex-flow: column wrap;

        width: 230px;
    }

    .menu.dark {
        color: #EEE;
        background-color: #4b5f6b;
    }

    .menu.light {
        color: #909399;
        background-color: #FFFFFF;

        box-shadow: 0 0 5px rgba(0, 0, 0, .1);
    }
</style>