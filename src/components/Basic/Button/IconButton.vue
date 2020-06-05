<template>
    <button
        v-if="icon"
        class="role-button focusable icon-button"
        v-on="$listeners"
    >
        <i :class="iconClass"></i>
    </button>
    <!-- /.button -->
</template>

<script>
    export default {
        props: {
            icon: {
                type: String,
                required: true,
            }
        },

        data: () => ({}),

        computed: {
            iconClass() {
                return `fa fa-${this.icon}`;
            }
        },

        created() {

        },

        methods: {},
    }
</script>

<style scoped>

    .icon-button {
        background-color: transparent;
        border: none;

        width: 42px;
        height: 42px;

        font-size: 1.2rem;
        border-radius: 50%;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .icon-button:hover {
        background-color: rgba(0, 0, 0, 0.05);
    }

    .icon-button.small {
        width: 36px;
        height: 36px;

        font-size: 1rem;
    }


    .icon-button.large {
        width: 48px;
        height: 48px;

        font-size: 2rem;
    }
</style>