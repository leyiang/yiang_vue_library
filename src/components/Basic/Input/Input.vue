<template>

    <div class="input-group" :class="{'label-input': label}">
        <y-input-core
            required
            v-bind="$attrs"
            v-on="$listeners"

            @inputFocus="inputFocus"
            @inputBlur="inputBlur"
            @input="$emit('input', $event)"
        ></y-input-core>

        <span class="label" v-if="label">
            <slot></slot>
        </span>
        <!-- /.label -->
    </div>

    <!-- /.input-group -->
</template>

<script>
    import InputCore from "./InputCore";

    export default {
        inheritAttrs: false,

        components: {
            "y-input-core": InputCore,
        },

        props: {
            label: {
                type: Boolean,
                default: false,
            },
        },

        data: () => ({
            inputFocusStatus: false,
            localValue: "",
        }),

        computed: {
            inputExpandStatus() {
                this.inputFocusStatus;
                // return (this.$attrs.value) || this.inputFocusStatus;
            },
        },

        methods: {
            inputFocus() {
                this.isInputFocused = true;
            },

            inputBlur() {
                this.isInputFocused = false;
            },
        },
    }
</script>

<style scoped>

    .input-group {
        position: relative;
    }

    .label-input {
        position: relative;
        padding-top: 2rem;
    }

    .label-input .input {
        border: none;
        border-bottom: 1px solid #DDD;
    }

    .label-input .label {
        position: absolute;
        left: 1rem;
        bottom: .75rem;
        font-size: 1.5rem;

        transition: all .2s ease;
        color: var(--primary-color);
    }

    /*------ Focus Input ------*/

    .label-input .input:focus ~ .label,
    .label-input .input:valid ~ .label{
        bottom: 3.3rem;
        left: 0;
        font-size: 1rem;
    }
    /*------ Focus Input ------*/

    .fa {
        position: absolute;
        left: 1rem;
        bottom: .8rem;
    }

    .has-icon input {
        padding-left: 2.3rem;
    }
</style>