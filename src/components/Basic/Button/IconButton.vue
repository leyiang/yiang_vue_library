<template>
    <button
        v-if="icon"
        class="role-button focusable icon-button"
        :class="iconClass"
        v-on="$listeners"
    ></button>
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

        width: 48px;
        height: 48px;

        font-size: 1.5rem;
        border-radius: 50%;
    }

    .icon-button:hover {
        background-color: rgba(0, 0, 0, 0.05);
    }

    .icon-button.small {
        width: 36px;
        height: 36px;

        font-size: 1.2rem;
    }


    .icon-button.large {
        width: 60px;
        height: 60px;

        font-size: 2rem;
    }
</style>