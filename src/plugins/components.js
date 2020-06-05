/* ======== IMPORT BASIC GLOBAL COMPONENTS ======== */

/*------ Inputs ------*/
import Input from "../components/Basic/Input/Input.vue";
/*------ Inputs ------*/

/*------ Buttons ------*/
import Button from "../components/Basic/Button/Button";
import IconButton from "../components/Basic/Button/IconButton";
/*------ Buttons ------*/

/*------ Menus ------*/
import Menu from "../components/Basic/Menu/Menu";
import MenuItem from "../components/Basic/Menu/MenuItem";
import ButtonMenu from "../components/Basic/Menu/ButtonMenu";
/*------ Menus ------*/


/* ======== IMPORT BASIC GLOBAL COMPONENTS ======== */



/* ======== REGISTER GLOBAL COMPONENTS ======== */

let add_tag_prefix = (tag) => `y-${tag}`;

export default {
    install(Vue) {

        /*------ Inputs ------*/
        Vue.component( add_tag_prefix("input"), Input );
        /*------ Inputs ------*/

        /*------ Buttons ------*/
        Vue.component( add_tag_prefix("button"), Button );
        Vue.component( add_tag_prefix("icon-button"), IconButton );
        /*------ Buttons ------*/

        /*------ Menus ------*/
        Vue.component( add_tag_prefix("menu"), Menu );
        Vue.component( add_tag_prefix("menu-item"), MenuItem );
        Vue.component( add_tag_prefix("button-menu"), ButtonMenu );
        /*------ Menus ------*/
    }
}

/* ======== REGISTER GLOBAL COMPONENTS ======== */