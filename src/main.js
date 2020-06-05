import Vue from 'vue'
import App from './App.vue'

/*------ Import Global Components ------*/
import components from "./plugins/components";
Vue.use( components );
/*------ Import Global Components ------*/


new Vue({
  render: function (h) { return h(App) },
}).$mount('#app');