<template>
    <div class="circle-loading">
        <svg class="circle-outer">
            <circle class="circle" fill="none" cx=25 cy=25 r=20></circle>
            <!-- /.circle -->
        </svg>
        <!-- /.circle-outer -->
    </div>
    <!-- /.circle-loading -->
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
    .circle-outer {
        width: 50px;
        height: 50px;
        animation: circle-outer-animation 2s linear infinite;
    }

    @keyframes circle-outer-animation {
        100% {
            transform: rotate(360deg);
        }
    }

    .circle {
        stroke-width: 5px;
        stroke: #0091ff;

        animation: circle-animation 1.4s ease infinite;
    }

    @keyframes circle-animation {
        0% {
            stroke-dashoffset: 0;
            stroke-dasharray: 1,200;
        }

        50% {
            stroke-dashoffset: -45;
            stroke-dasharray: 89, 200;
        }

        100% {
            stroke-dashoffset: -125;
            stroke-dasharray: 89, 200;
        }
    }
</style>