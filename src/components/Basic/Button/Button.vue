<template>
    <button
        class="button role-button focusable"
        v-on="$listeners"
    >

        <i v-if="iconClass" :class="iconClass" class="mr-h"></i>
        <slot>Submit</slot>
    </button>
</template>

<script>
    export default {

        props: {
            icon: {
                type: String,
                default: "",
            },
        },

        data: () => ({}),

        computed: {
            iconClass() {
                if( this.icon === "" ) return null;
                return `fa fa-${this.icon}`;
            },

            ButtonEvent() {
                let vm = this;
            },
        },

        created() {
        },

        methods: {},
    }
</script>

<style scoped>
    .button {
        color: #323232;
        border: 1px solid #DDD;

        padding: .75rem 1.25rem;
    }

    /*------ Primary ------*/
    .button.primary {
        color: #FFF;
        border-color: var(--primary-color);
        background-color: var(--primary-color);
    }
    .button.primary:hover {
        background-color: var(--primary-darker-color);
    }
    .button.primary:active {
        background-color: var(--primary-darkest-color);
    }
    /*------ Primary ------*/


    /*------ Danger ------*/
    .button.danger {
        color: #FFF;
        border-color: var(--danger-color);
        background-color: var(--danger-color);
    }
    .button.danger:hover {
        background-color: var(--danger-darker-color);
    }
    .button.danger:active {
        background-color: var(--danger-darkest-color);
    }
    .button.danger:focus {
        border-color: var(--danger-color);
        box-shadow: 0 0 0 .2rem rgba(255, 46, 46, 0.25);
    }
    /*------ Danger ------*/
</style>