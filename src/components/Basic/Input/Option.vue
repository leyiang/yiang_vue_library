<template>
    <div class="option" v-on="$listeners"><slot></slot></div>
    <!-- /.option -->
</template>

<script>
    export default {
        data: () => ({}),

        created() {

        },

        methods: {},
    }
</script>

<style>
    .option {
        padding: .75rem 1rem;
        border: 1px solid #909399;
        border-bottom: 1px solid #DDD;
        border-top: none;
        cursor: pointer;
    }

    .option:hover {
        background-color: rgba(0, 0, 0, 0.05);
    }
    .option:last-of-type {
        border-bottom: 1px solid #909399;
    }

    .option:first-of-type {
        border-top: 1px solid #909399;
    }

</style>