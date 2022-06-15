import Vue from "vue";
import App from "./App.vue";
import { Popover, Tree, Input, Select, Option, Tag } from "element-ui";
import VSelectTree from "../packages";

Vue.use(Popover);
Vue.use(Tree);
Vue.use(Input);
Vue.use(Select);
Vue.use(Option);
Vue.use(Tag);
Vue.use(VSelectTree);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount("#app");
