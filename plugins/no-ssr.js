import Vue from 'vue'
import VueScrollReveal from 'vue-scroll-reveal'
import VueDateTimePicker from 'vuejs-datetimepicker'
Vue.use(VueScrollReveal)
// You can also pass in default options
Vue.use(VueScrollReveal, {
  class: 'v-scroll-reveal',
  viewFactor: 0.2,
  easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)'
})


Vue.use(VueDateTimePicker)
