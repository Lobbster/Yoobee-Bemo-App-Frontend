/** store/index.js **/
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
export default new Vuex.Store({
  modules: {
    user: require("./modules/user"),
    chats: require("./modules/chats"),
    chat: require("./modules/chat")
  }
});