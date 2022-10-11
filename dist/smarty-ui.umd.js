(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? factory(exports, require("vue")) : typeof define === "function" && define.amd ? define(["exports", "vue"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global.SmartyUI = {}, global.Vue));
})(this, function(exports2, vue) {
  "use strict";
  const MyButton = vue.defineComponent({
    name: "SButton",
    render() {
      return vue.h("button", { ab: "ab11" }, "MyButton");
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
    return vue.openBlock(), vue.createElementBlock("button", null, "SFC Button");
  }
  const SFCButton = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
  const JSXButton = vue.defineComponent({
    name: "JSXButton",
    render() {
      return vue.createVNode("button", null, [vue.createTextVNode("JSX Button")]);
    }
  });
  const unoButton = vue.defineComponent({
    name: "unoButton",
    setup(props, {
      slots
    }) {
      return () => vue.createVNode("button", {
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
  exports2.JSXButton = JSXButton;
  exports2.MyButton = MyButton;
  exports2.SFCButton = SFCButton;
  exports2.default = entry;
  exports2.unoButton = unoButton;
  Object.defineProperties(exports2, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
});
