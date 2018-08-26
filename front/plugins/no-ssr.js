import Vue from 'vue'
import VueScrollReveal from 'vue-scroll-reveal'

import datePicker from 'vue-bootstrap-datetimepicker';
import 'pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css';
import VModal from 'vue-js-modal';
import VueTimepicker from 'vue2-timepicker';

Vue.use(VueTimepicker)
Vue.use(VModal)
Vue.use(datePicker);


Vue.use(VueScrollReveal)
// You can also pass in default options
Vue.use(VueScrollReveal, {
  class: 'v-scroll-reveal',
  viewFactor: 0.2,
  easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)'
})
