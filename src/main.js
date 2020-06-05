import Vue from 'vue'
import App from './App.vue'

/*------ Import Global Components ------*/
import components from "./plugins/components";
Vue.use( components );
/*------ Import Global Components ------*/

/*------ Register Global Directives ------*/
import directives from "./plugins/directives";
Vue.use( directives );
/*------ Register Global Directives ------*/

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app');