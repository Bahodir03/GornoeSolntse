import {createStore} from "vuex";
import consumer from "@/plugins/vuex/consumer";
import entrance from "@/plugins/vuex/entrance"
import plan from "@/plugins/vuex/plan"
import room from "@/plugins/vuex/room";
import floor from "@/plugins/vuex/floor";

export default createStore({
    modules:{
        consumer,
        plan,
        entrance,
        room,
        floor,
    }
})