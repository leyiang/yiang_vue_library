/* ======== IMPORT BASIC GLOBAL COMPONENTS ======== */

/*------ Inputs ------*/
import Input from "../components/Basic/Input/Input";
import Select from "../components/Basic/Input/Select";
import YOption from "../components/Basic/Input/Option";
/*------ Inputs ------*/

/*------ Buttons ------*/
import Button from "../components/Basic/Button/Button";
import IconButton from "../components/Basic/Button/IconButton";
import SwitchButton from "../components/Basic/Button/SwitchButton";
/*------ Buttons ------*/

/*------ Menus ------*/
import Menu from "../components/Basic/Menu/Menu";
import MenuItem from "../components/Basic/Menu/MenuItem";
import ButtonMenu from "../components/Basic/Menu/ButtonMenu";
/*------ Menus ------*/


/*------ Loading ------*/
import CircleLoading from "../components/Basic/Loading/CircleLoading";
import SquareLoading from "../components/Basic/Loading/SquareLoading";
/*------ Loading ------*/

/*------ Alert ------*/
import Alert from "../components/Basic/Alert/Alert";
import AlertList from "../components/Basic/Alert/AlertList";
/*------ Alert ------*/

/*------ Transition ------*/
import Jump from "../components/Transition/Jump";
/*------ Transition ------*/

/* ======== IMPORT BASIC GLOBAL COMPONENTS ======== */



/* ======== REGISTER GLOBAL COMPONENTS ======== */

let add_tag_prefix = (tag) => `y-${tag}`;
let add_transition_prefix = (tag) => `trans-${tag}`;
export default {
    install(Vue) {

        /*------ Inputs ------*/
        Vue.component( add_tag_prefix("input"), Input );
        Vue.component( add_tag_prefix("select"), Select );
        Vue.component( add_tag_prefix("option"), YOption );
        /*------ Inputs ------*/

        /*------ Buttons ------*/
        Vue.component( add_tag_prefix("button"), Button );
        Vue.component( add_tag_prefix("icon-button"), IconButton );
        Vue.component( add_tag_prefix("switch-button"), SwitchButton );
        /*------ Buttons ------*/

        /*------ Menus ------*/
        Vue.component( add_tag_prefix("menu"), Menu );
        Vue.component( add_tag_prefix("menu-item"), MenuItem );
        Vue.component( add_tag_prefix("button-menu"), ButtonMenu );
        /*------ Menus ------*/

        /*------ Loading ------*/
        Vue.component( add_tag_prefix("circle-loading"), CircleLoading );
        Vue.component( add_tag_prefix("square-loading"), SquareLoading );
        /*------ Loading ------*/
        
        /*------ Alert ------*/
        Vue.component( add_tag_prefix("alert"), Alert );
        Vue.component( add_tag_prefix("alert-list"), AlertList );
        /*------ Alert ------*/

        /*------ Transition ------*/
        Vue.component( add_transition_prefix("jump"), Jump );
        /*------ Transition ------*/
    }
}

/* ======== REGISTER GLOBAL COMPONENTS ======== */