<style>
    @import "./assets/global.css";

    section.inner {
        padding: 2rem 0;
    }
</style>

<template>
    <section class="inner">
        <y-input v-model="test" type="text" :label="true" class="mb-2">Username</y-input>
<!--        <y-input v-model="test" @focus="focus" type="date"></y-input>-->

        <div class="flex align-center">
            <y-button icon="plus" class="primary mr-h" @focus="click">The Button</y-button>
            <y-button icon="trash" class="danger">The Button</y-button>

            <y-icon-button icon="plus" class="small"></y-icon-button>
            <y-icon-button icon="plus" @click="click"></y-icon-button>
            <y-icon-button icon="plus" class="large"></y-icon-button>
        </div>
        <!-- /.flex -->

        <div class="flex">
            <y-menu class="dark mr-1"></y-menu>
            <y-menu class="light"></y-menu>
        </div>
        <!-- /.flex -->
    </section>
    <!-- /.inner -->
</template>

<script>
    export default {
        data: () => ({
            test: "123",
        }),

        created() {

        },

        methods: {
            focus() {
                console.log(111);
            },

            click() {
                console.log(1111);
            }
        },
    }
</script>