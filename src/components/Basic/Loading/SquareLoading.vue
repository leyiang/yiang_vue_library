<template>
    <div class="square-loading">
        <div class="loading-item"></div>
        <!-- /.loading-item -->

        <div class="loading-item"></div>
        <!-- /.loading-item -->

        <div class="loading-item"></div>
        <!-- /.loading-item -->

        <div class="loading-item"></div>
        <!-- /.loading-item -->
    </div>
    <!-- /.square-loading -->
</template>

<script>
    export default {
        data: () => ({}),

        created() {

        },

        methods: {},
    }
</script>

<style scoped>
    .square-loading {
        height: 50px;

        display: flex;
        align-items: center;
    }

    .loading-item {
        width: 15px;
        height: 100%;
        background-color: #0091ff;
        margin-right: .25rem;

        animation: loading .7s ease infinite;
    }

    .loading-item:nth-of-type(2) {
        animation-delay: .3s;
    }

    .loading-item:nth-of-type(3) {
        animation-delay: .6s;
    }

    .loading-item:nth-of-type(4) {
        animation-delay: .9s;
    }

    .loading-item:last-of-type {
        margin-right: 0;
    }

    @keyframes loading {
        0% {
            height: 100%;
        }

        50% {
            height: 30%;
        }

        100% {
            height: 100%;
        }
    }
</style>