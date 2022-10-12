import { App } from "vue";
// import MyButton from "./button";
// import SFCButton from "./button/SFCButton.vue";
// import JSXButton from "./button/JSXButton";
// import unoButton from "./button/unoButton";
import { useMouse } from "./mouse/use-mouse";

// 导出单独组件
// export { MyButton, SFCButton, JSXButton, unoButton };

export { useMouse };

// 编写一个插件，实现一个install方法

// export default {
//   install(app: App): void {
//     app.component(MyButton.name, MyButton);
//     app.component(SFCButton.name, SFCButton);
//     app.component(JSXButton.name, JSXButton);
//     app.component(unoButton.name, unoButton);
//   },
// };
