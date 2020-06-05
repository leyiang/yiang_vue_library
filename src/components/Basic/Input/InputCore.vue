<template>
    <input
        class="input focusable"
        @focus="$emit('inputFocus')"
        @blur="$emit('inputBlur')"
        v-on="InputEvent"
    >
</template>

<script>
    export default {
        data: () => ({}),

        computed: {
            InputEvent() {
                let vm = this;
                return Object.assign({},
                    this.$listeners,
                    {
                        input: function(e) {
                            vm.$emit("input", e.target.value);
                        }
                    }
                );
            }
        },

        created() {
        },

        methods: {},
    }
</script>

<style scoped>
    .input {
        display: flex;
        width: 100%;

        font-size: 1rem;
        color: #323232;

        padding: .75rem 1rem;
        font-family: inherit;
        border: 1px solid #DDD;
        transition: border-color .3s ease, box-shadow .2s ease;
    }
</style>