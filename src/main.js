import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';


/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faBarsStaggered, faMagnifyingGlass,faHeart, faBell, faMicrophone, faPencil, faComment, faVideoCamera, faPaperPlane} from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faBarsStaggered, faMagnifyingGlass, faHeart, faBell, faMicrophone,faPencil, faComment, faVideoCamera)

const app = createApp(App);
app.use(router);
app.mount('#app');

/* add font awesome icon component */
app.component('font-awesome-icon', FontAwesomeIcon)