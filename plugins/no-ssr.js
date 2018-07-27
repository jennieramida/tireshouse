import Vue from 'vue'
import VueScrollReveal from 'vue-scroll-reveal'
import * as VueGoogleMaps from '~/node_modules/vue2-google-maps/src/main'
import datePicker from 'vue-bootstrap-datetimepicker';
import 'pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css';
import VModal from 'vue-js-modal'

Vue.use(VModal)
Vue.use(datePicker);

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyC_F--kW_Fj5pkL7XgF4EgzO4ltOg6Yttw',
    libraries: 'places' // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)
  }
})

Vue.use(VueScrollReveal)
// You can also pass in default options
Vue.use(VueScrollReveal, {
  class: 'v-scroll-reveal',
  viewFactor: 0.2,
  easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)'
})
