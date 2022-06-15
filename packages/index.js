import VTreeSelect from "./src/main.vue";

VTreeSelect.install = function (Vue) {
  Vue.component(VTreeSelect.name, VTreeSelect);
};

if (typeof window !== "undefined" && window.Vue) {
  VTreeSelect.install(window.Vue);
}

export default VTreeSelect;
