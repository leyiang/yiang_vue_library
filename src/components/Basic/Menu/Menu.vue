<template>
    <div class="menu">
        <button class="role-button menu-item clear-button-style focusable">Trash</button>
        <button class="role-button menu-item clear-button-style focusable">Check</button>
    </div>
    <!-- /.menu -->
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
    .menu {
        background-color: pink;
        display: flex;
        flex-flow: column wrap;
    }

    .menu.dark {
        color: #EEE;
        background-color: #535353;
    }
    
    .menu.light {
        color: #535353;
        background-color: #EEEEEE;
    }

    .menu-item {
        padding: .75rem 1rem;
    }
</style>