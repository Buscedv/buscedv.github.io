import Vue from 'vue'
import App from './App.vue'

// Flexbox Grid
import 'flexboxgrid/css/flexboxgrid.css'

// Font Awesome
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(fas)
Vue.component('font-awesome-icon', FontAwesomeIcon)


// Balloon.css
import 'balloon-css/balloon.min.css';

Vue.config.productionTip = false

new Vue({
	render: h => h(App),
}).$mount('#app')
