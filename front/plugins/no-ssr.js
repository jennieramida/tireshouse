import Vue from 'vue'
import VueScrollReveal from 'vue-scroll-reveal'
import VModal from 'vue-js-modal';
import * as VueGoogleMaps from 'vue2-google-maps';
import SuiVue from 'semantic-ui-vue';
import Datepicker from 'vuejs-datepicker';

Vue.use(Datepicker)
Vue.use(SuiVue)
Vue.use(VModal)
Vue.use( VueGoogleMaps, {
  load: {
    key: 'AIzaSyBPhWQjyLqgDZkctg0AzewEhJgVPeLCiyU',
    libraries: 'places'
  }
})

Vue.use(VueScrollReveal, {
  class: 'v-scroll-reveal',
  viewFactor: 0.2,
  easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)'
})
