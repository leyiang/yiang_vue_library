<template>
    <div class="button-menu" @mouseover="hoveringButtonMenu=true" @mouseout="hoveringButtonMenu=false">

        <!--  Use Blur Event to Collapse the Menu -->
        <input v-focus-if:expanded @blur="inputBlur">

        <div class="button-menu-button mb-h" @click="toggle">
            <slot name="button"></slot>
        </div>
        <!-- /.button-menu-button -->

        <div v-show="expanded" class="button-menu-menu" @click="collapse">
            <slot name="menu"></slot>
        </div>
        <!-- /.button-menu-menu -->

    </div>
    <!-- /.button-menu -->
</template>

<script>
    export default {
        data: () => ({
            expanded: false,
            hoveringButtonMenu: false,
        }),

        created() {

        },

        methods: {
            toggle() {
                this.expanded = ! this.expanded;
            },

            expand() {
                this.expanded = true;
            },

            collapse() {
                this.expanded = false;
            },

            inputBlur() {
                if( ! this.hoveringButtonMenu ) {
                    this.collapse();
                }
            }
        },
    }
</script>

<style scoped>

    input {
        opacity: 0;
        position: fixed;
        left: 100%;
    }

    input:focus {
        background-color: red;
    }

    .button-menu {
        position: relative;
    }

    .button-menu-menu {
        bottom: 0;
        transform: translateY(100%);

        position: absolute;
    }
</style>