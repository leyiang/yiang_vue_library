<template>

    <div class="alert-list" id="alert-list">
        <slot></slot>
    </div>
    <!-- /.alert-list -->

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
    .alert-list {
        position: fixed;
        left: 0;
        top: 0;

        width: 320px;
        height: 100%;

        background-color: transparent;

        display: flex;
        flex-flow: column-reverse nowrap;

        padding: 1rem 1rem 2rem;
    }
    
    @media all and (max-width: 400px) {
        .alert-list {
            left: 50%;
            transform: translateX(-50%);
            flex-flow: column nowrap;
        }
    }
</style>