<style>
    @import "./assets/global.css";

    section.inner {
        padding: 2rem 0;
    }

    section.inner > .flex {
        margin-bottom: 4rem;
    }
</style>

<template>
    <section class="inner">

        <div class="flex flex-column">
            <h2 class="title">Inputs</h2>
            <!-- /.title -->

            <y-input type="text" :label="true" class="mb-h">Username</y-input>
            <y-input type="password" :label="true">Password</y-input>
        </div>
        <!-- /.flex -->

        <div class="flex flex-column">
            <h2 class="title">Buttons</h2>
            <!-- /.title -->

            <div class="flex align-center">
                <y-button icon="plus" class="primary mr-h" @focus="click">The Button</y-button>
                <y-button icon="trash" class="danger mr-h">The Button</y-button>

                <y-icon-button icon="cog" class="small mr-h"></y-icon-button>
                <y-icon-button icon="cog" @click="click"></y-icon-button>
                <y-icon-button icon="cog" class="large ml-h mr-h"></y-icon-button>

                <y-switch-button name="123" v-model="value"></y-switch-button>
            </div>
            <!-- /.flex -->

        </div>
        <!-- /.flex -->


        <div class="flex flex-column">

            <h2 class="title">Menus</h2>
            <!-- /.title -->

            <div class="flex">
                <y-menu class="dark mr-1">
                    <y-menu-item icon="plus" class="active" @click="click">Add New</y-menu-item>
                    <y-menu-item icon="edit">Edit Task</y-menu-item>
                    <y-menu-item icon="trash">Delete Task</y-menu-item>
                </y-menu>

                <y-menu class="light mr-1">
                    <y-menu-item icon="plus" class="active" @click="click">Add New</y-menu-item>
                    <y-menu-item icon="edit">Edit Task</y-menu-item>
                    <y-menu-item icon="trash">Delete Task</y-menu-item>
                </y-menu>
            </div>
            <!-- /.flex -->

        </div>
        <!-- /.flex -->



        <div class="flex flex-column">
            <h2 class="title">Button With Menu</h2>
            <!-- /.title -->

            <div class="flex align-center">

                <y-button-menu class="mr-2">
                    <template #button>
                        <y-button class="primary" icon="cogs">Tools</y-button>
                    </template>

                    <template #menu>
                        <y-menu class="light mr-1">
                            <y-menu-item icon="plus" @click="click" class="active">Add New</y-menu-item>
                            <y-menu-item icon="edit">Edit Task</y-menu-item>
                            <y-menu-item icon="trash">Delete Task</y-menu-item>
                        </y-menu>
                    </template>
                </y-button-menu>


                <y-button-menu class="mr-2">
                    <template #button>
                        <y-icon-button icon="cogs">Tools</y-icon-button>
                    </template>

                    <template #menu>
                        <y-menu class="dark mr-1">
                            <y-menu-item icon="plus" @click="click" class="active">Add New</y-menu-item>
                            <y-menu-item icon="edit">Edit Task</y-menu-item>
                            <y-menu-item icon="trash">Delete Task</y-menu-item>
                        </y-menu>
                    </template>
                </y-button-menu>

                <y-button class="primary mr-1" @click="addSuccess">Success Alert</y-button>
                <y-button class="danger" @click="addFails">Fails Alert</y-button>
            </div>
            <!-- /.flex -->

        </div>
        <!-- /.flex -->


        <div class="flex flex-column">
            <h1 class="title">Loading</h1>
            <!-- /.title -->

            <div class="flex">
                <y-circle-loading class="mr-2"></y-circle-loading>
                <y-square-loading></y-square-loading>
            </div>
            <!-- /.flex -->

        </div>
        <!-- /.flex -->


        <y-alert-list>
        </y-alert-list>

        <!-- /.alert-list -->
    </section>
    <!-- /.inner -->
</template>

<script>
    export default {
        data: () => ({
            value: false,
        }),

        mounted() {
            this.issueStorageAlert();
        },

        methods: {
            focus() {
                console.log(111);
            },

            click() {
                console.log(1111);
            },

            the_form() {

            },

            addSuccess() {
                this.success("Title", "Content");
            },

            addFails() {
                this.fails("Title", "content");
            }
        },
    }
</script>