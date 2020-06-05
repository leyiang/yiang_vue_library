<template>

    <div
        class="alert-item"
        :class="alertInfo.type"
    >

        <h3>{{ alertInfo.title }}</h3>
        <p>{{ alertInfo.content }}</p>
    </div>

    <!-- /.alert-item -->
</template>

<script>
    export default {

        props: {
            alertInfo: {
                type: Object,
                default: () => ({}),
            }
        },

        data: () => ({
            timer: null,
            defaultDuration: 3000,
        }),

        created() {
            let duration = this.getDuration();
            this.show = true;

            this.timer = setTimeout(() => {

                // Add Deleting Animation
                this.$el.classList.add("fadeOut");
                this.$el.addEventListener("animationend", () => {
                    this.$el.remove();
                });

            }, duration);
        },

        beforeDestroy() {
            this.timer = null;
        },

        methods: {
            getDuration() {
                let duration = this.alertInfo.duration;
                if (!duration) return this.defaultDuration;
                else {
                    if (typeof duration === "number") return duration;
                    else if (typeof (Number(duration)) === "number") return Number(duration);
                    else return this.defaultDuration;
                }
            }
        },
    }
</script>

<style scoped>

    .alert-item {
        background-color: #FFF;
        padding: 1rem 2rem;
        margin-top: 1rem;

        animation: fadeIn .5s;
    }

    p {
        margin: 0;
    }

    h3 {
        font-size: 1.5rem;
        margin-bottom: .5rem;
    }

    .alert-item.success,
    .alert-item.fails {
        color: #FFF;
        box-shadow: 5px 4px 8px rgba(0, 0, 0, 0.3);
    }

    .alert-item.success {
        background-color: #49aa3b;
    }

    .alert-item.fails {
        background-color: #e2363f;
    }

    .alert-list .alert-item:last-of-type {
        margin-top: 0;
    }
    
    .fadeOut {
        animation: fadeOut .5s ease;
    }
    
    /*------ Animations ------*/
    @keyframes fadeIn {
        0% {
            opacity: 0;
            transform: translateY(-40px);
        }

        100%{
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes fadeOut {
        0% {
            opacity: 1;
            transform: translateY(0);
        }

        100%{
            opacity: 0;
            transform: translateY(40px);
        }
    }
    /*------ Animations ------*/

    @media all and (max-width: 400px){
        .alert-item {
            margin-bottom: 1rem;
            margin-top: 0rem;
        }

        @keyframes fadeIn {
            0% {
                opacity: 0;
                transform: translateY(40px);
            }

            100%{
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes fadeOut {
            0% {
                opacity: 1;
                transform: translateY(0);
            }

            100%{
                opacity: 0;
                transform: translateY(-40px);
            }
        }
    }
</style>