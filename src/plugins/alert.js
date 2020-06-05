import AlertComponent from "../components/Basic/Alert/Alert";

export default {
    install(Vue) {

        const alertExtend = Vue.extend({
            data: () => ({
                render: null,
            }),

            render(h) {
                return this.render ?this.render(h) : null;
            },

            methods: {
                open(h) {
                    this.render = h;
                },

                close() {
                    this.render = null;
                }
            },
        });


        Vue.prototype.alert = function(title, content, type, duration, callback) {

            let alertInfo = { title, content, type, duration, callback };
            let AlertList = document.querySelector("#alert-list");
            let AlertItem = document.createElement("div");

            AlertList.appendChild( AlertItem );

            let alert = new alertExtend({
                el: AlertItem,
            });

            alert.open(h => h(AlertComponent, {
                props: {
                    alertInfo,
                },

                on: {
                    close() {
                        alert.close();
                    }
                }
            }));
        };


        // Handy Helpers
        Vue.prototype.success = function(title, content, duration, callback) {
            this.alert( title, content, "success", duration, callback);
        };

        Vue.prototype.fails = function(title, content, duration, callback) {
            this.alert( title, content, "fails", duration, callback);
        };

        Vue.prototype.issueStorageAlert = function() {
            let alertInfo;

            if( ! localStorage.alert ) return false;
            else alertInfo = JSON.parse(localStorage.alert);

            localStorage.removeItem("alert");
            this.alert( ...alertInfo );
        };

    }
}