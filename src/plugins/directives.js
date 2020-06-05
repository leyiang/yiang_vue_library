export default {
    install(Vue) {
        Vue.directive("focus-if", {
            update: function(el, info, vnode) {
                if( vnode.context["expanded"] ) { el.focus(); }
            }
        });
    }
}