import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/dist/dropdown";

import { faDownload, faArrowRight, faMagnifyingGlass, faAngleDown, faAngleRight, faEye } from '@fortawesome/free-solid-svg-icons';
import { faCircleUser, faFileLines, faUser, faCalendar } from '@fortawesome/free-regular-svg-icons';
library.add(faDownload, faCircleUser, faArrowRight, faFileLines, faUser, faMagnifyingGlass, faAngleDown, faAngleRight, faCalendar, faEye);

const app = createApp(App)

app.component('FontAwesomeIcon', FontAwesomeIcon);

app.mount('#app')
