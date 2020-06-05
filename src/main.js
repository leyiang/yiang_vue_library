import Vue from 'vue'
import App from './App.vue'

/* ========        ALL THE PLUGINS      ======== */

/*------ Import Global Components ------*/
import components from "./plugins/components";
Vue.use( components );
/*------ Import Global Components ------*/

/*------ Register Global Directives ------*/
import directives from "./plugins/directives";
Vue.use( directives );
/*------ Register Global Directives ------*/

/*------ Install Alert Plugin ------*/
import alert from "./plugins/alert";
Vue.use( alert );
/*------ Install Alert Plugin ------*/

/* ========        ALL THE PLUGINS      ======== */


new Vue({
  render: function (h) { return h(App) },
}).$mount('#app');