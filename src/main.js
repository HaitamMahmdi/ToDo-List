import { createApp } from "vue";
import App from "./App.vue";

// Import FontAwesome's core and icons
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCamera,
  faHeart,
  faSun,
  faMoon,
  faPlus,
  faGear,
  faXmark,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// Add the icons to the library
library.add(faCamera, faHeart, faSun, faMoon, faPlus, faGear, faXmark, faCheck);

import "./style.css";

// Create Vue app and register Font Awesome as a component
const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
