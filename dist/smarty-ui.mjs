import { defineComponent, h, openBlock, createElementBlock, createVNode, createTextVNode } from "vue";
const MyButton = defineComponent({
  name: "SButton",
  render() {
    return h("button", { ab: "ab11" }, "MyButton");
  }
});
const _sfc_main = {
  name: "SFCButton"
};
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("button", null, "SFC Button");
}
const SFCButton = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
const JSXButton = defineComponent({
  name: "JSXButton",
  render() {
    return createVNode("button", null, [createTextVNode("JSX Button")]);
  }
});
const unoButton = defineComponent({
  name: "unoButton",
  setup(props, {
    slots
  }) {
    return () => createVNode("button", {
      "class": `
      py-2 
      px-4 
      font-semibold 
      rounded-lg 
      shadow-md 
      text-white 
      bg-green-500 
      hover:bg-green-700 
      border-none 
      cursor-pointer 
      `
    }, [slots.default ? slots.default() : "anniu"]);
  }
});
console.log(unoButton);
const entry = {
  install(app) {
    app.component(MyButton.name, MyButton);
    app.component(SFCButton.name, SFCButton);
    app.component(JSXButton.name, JSXButton);
    app.component(unoButton.name, unoButton);
  }
};
export {
  JSXButton,
  MyButton,
  SFCButton,
  entry as default,
  unoButton
};
