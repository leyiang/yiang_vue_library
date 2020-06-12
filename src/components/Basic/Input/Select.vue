<template>
    <div class="select-container" @mouseover="hoverSelect = true" @mouseout="hoverSelect = false">

<!--        <y-input class="select-search"></y-input>-->
        <!-- /.select-search -->

        <!--  Use Blur Event to Collapse the Menu -->
        <input
            v-focus-if:expanded
            @blur="inputBlur"
            class="visually-hidden"
            v-bind="$attrs"
            v-model="value"
            readonly
        >

        <div class="select-button" @click="toggleExpand">
            {{ currentDisplay }}
        </div>
        <!-- /.select -->

        <div class="option-list" v-show="expanded">
            <y-option v-for="item in list" @click="select(item.id)">{{ item.title }}</y-option>
        </div>
        <!-- /.option-list -->
    </div>
    <!-- /.select-container -->

</template>

<script>
    export default {
        inheritAttrs: false,

        props: {
            titleIndex: {
                type: String,
                default: "title",
            },

            value: {
                type: Number,
                default: -1,
            }
        },

        data: () => ({
            expanded: false,
            hoverSelect: false,

            list: [
                {id: 1, title: "Hello"},
                {id: 2, title: "Hohoho"},
                {id: 3, title: "Hahah"},
                {id: 4, title: "Xixix"},
            ]
        }),

        computed: {
            currentDisplay() {
                if( this.value ) {
                    return this.getTitle( this.value );
                }

                return "Please Select";
            },
        },

        methods: {
            getTitle() {
                if( ! this.value ) return;

                let res;
                for( let item of this.list ) {
                    if( item.id === this.value ) {
                        return item[ this.titleIndex ];
                    }
                }
            },

            toggleExpand() {
                this.expanded = ! this.expanded;
            },

            collapse() {
                this.expanded = false;
            },

            select(id) {
                this.$emit("input", id);
                this.collapse();
            },

            inputBlur() {
                if( ! this.hoverSelect ) {
                    this.collapse();
                }
            }
        },
    }
</script>

<style scoped>
    .select-container {
        position: relative;
    }

    .select-search {
        margin-bottom: .2rem;
    }

    .select-button {
        display: flex;
        width: 100%;
        height: 42px;

        font-size: 1rem;
        color: #323232;

        padding: .75rem 1rem;
        font-family: inherit;
        border: 1px solid #DDD;

        cursor: pointer;
    }

    .option-list {
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
        position: absolute;

        bottom: 0;
        transform: translateY(100%);
        width: 100%;
        z-index: 10;
        background-color: #FFF;
    }
</style>