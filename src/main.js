import "@fortawesome/fontawesome-free/css/all.min.css";
import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// perfect scrollbar
import PerfectScrollbar from 'vue3-perfect-scrollbar';
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css';


/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* import specific icons */
import { faBarsStaggered, faBell, faComment, faHeart, faMagnifyingGlass, faMicrophone, faPencil, faVideoCamera } from '@fortawesome/free-solid-svg-icons';

/* add icons to the library */
library.add(faBarsStaggered, faMagnifyingGlass, faHeart, faBell, faMicrophone,faPencil, faComment, faVideoCamera)
// Chat Scroll
import VueChatScroll from 'vue3-chat-scroll';

const app = createApp(App);
app.use(router);
app.use(VueChatScroll);
app.use(PerfectScrollbar);
app.mount('#app');

/* add font awesome icon component */
app.component('font-awesome-icon', FontAwesomeIcon)