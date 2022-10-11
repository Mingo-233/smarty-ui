import { createApp } from "vue";
import entry from "./entry";
import SButton from "./button";

import SFCButton from "./button/SFCButton.vue";
import unoButton from "./button/unoButton";
// app.use(entry);

// const app = createApp(SButton);
// app.mount("#app");

createApp(unoButton)
  //     {
  //   template: `
  //             <div>
  //                 <uno-Button>普通按钮</uno-Button>
  //             </div>
  //         `,
  // }
  .mount("#app");
