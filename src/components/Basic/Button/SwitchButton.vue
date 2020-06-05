<template>
    <button
            class="switch-button focusable clear-button-style"
            :class="{on: value, off: !value}"
            role="button"
            @click="toggleSwitch"
    >
        <input
            tabindex="-1"
            type="checkbox"
            v-model="value"
            v-bind="$attrs"
            class="visually-hidden"
        />
    </button>
    <!-- /.switch-button -->
</template>

<script>
    export default {
        inheritAttrs: false,

        props: {
            value: {
                type: Boolean,
                default: false,
            }
        },

        data: () => ({
        }),

        created() {
        },

        methods: {
            toggleSwitch() {
                this.value = !this.value;
                this.$emit("input", this.value );
            }
        },
    }
</script>

<style scoped>
    input {
        position: fixed;
        left: 100px;
        top: 100px;
    }

    .switch-button {
        height: 42px;
        width: 96px;
        border-radius: 10rem;

        background-color: #EEE;
        position: relative;

        box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.1);
        transition: background-color .2s ease;
        cursor: pointer;
    }

    .switch-button:focus {
        border-color: var(--primary-color);
        box-shadow: 0 0 0 .2rem rgba(0, 145, 255, .25);
    }

    .switch-button::after{
        content: "";
        display: block;

        width: 32px;
        height: 32px;
        background-color: #FFF;
        box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);

        border-radius: 50%;

        position: absolute;
        top: 50%;
        left: 5px;
        transform: translateY(-50%);
        transition: left .3s ease;
    }

    .switch-button.on {
        background-color: #0091ff;
    }

    .switch-button.on::after {
        left: 59px;
    }

</style>