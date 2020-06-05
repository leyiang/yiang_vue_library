<template>
    <button
        class="menu-item clear-button-style focusable"
        :class="{hasIcon: icon}"
        v-on="$listeners"
    >
        <i v-if="icon" :class="iconClass" class="mr-1"></i>

        <div class="menu-title">
            <slot></slot>
        </div>
        <!-- /.title -->
    </button>
</template>

<script>
    export default {
        props: {
            icon: {
                type: String,
                default: "",
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
    .menu-item {
        cursor: pointer;
        height: 3rem;
        padding: 0 1rem;

        font-size: 1rem;
        font-weight: 100;

        max-width: 100%;
        transition: background-color .2s;
        margin-bottom: .2rem;
    }


    /*------ Dark Settings ------*/
    .menu.dark .menu-item.active {
        color: #fdcc0a;
    }
    .menu.dark .menu-item:hover {
        background-color: #25394b;
    }
    /*------ Dark Settings ------*/




    /*------ Light Settings ------*/
    .menu.light .menu-item.active {
        color: #0082e2;
    }
    .menu.light .menu-item:hover {
        background-color: rgba(0, 145, 255, 0.1);
    }
    /*------ Light Settings ------*/

    .menu-title {
        word-break: break-word;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .hasIcon {
        display: flex;
        align-items: center;
    }

    .hasIcon i {
        font-size: 1rem;
        width: 20px;
    }

</style>