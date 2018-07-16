import Vue from 'vue'
import VueLazyload from 'vue-lazyload'
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
// import brands from '@fortawesome/fontawesome-free-brands'
import {
  faSpinner,
  faSearch,
  faShoppingCart,
  faShoppingBag,
  faTimes,
  faMinus,
  faPlus
} from '@fortawesome/fontawesome-pro-solid'
import {
  faFrown,
} from '@fortawesome/fontawesome-pro-regular'
import VeeValidate from 'vee-validate'
import VueScrollTo from 'vue-scrollto'
import VModal from 'vue-js-modal/dist/ssr.index'
import Transitions from 'vue2-transitions'
import moment from 'moment'
import faFacebookF from '@fortawesome/fontawesome-free-brands/faFacebookF'
import faPhone from '@fortawesome/fontawesome-pro-solid/faPhone'
import faEnvelope from '@fortawesome/fontawesome-pro-solid/faEnvelope'
import faMapMarkerAlt from '@fortawesome/fontawesome-pro-light/faMapMarkerAlt'
import faCalendar from '@fortawesome/fontawesome-pro-light/faCalendar'
import faClock from '@fortawesome/fontawesome-pro-light/faClock'

require('moment/locale/th')

Vue.use(VueScrollTo)
Vue.use(VeeValidate)
// VueLazyLoad
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: '/images/error.png',
  loading: '/images/loading.gif',
  attempt: 1
})
Vue.use(require('vue-moment'), {
  moment
})
Vue.use(VModal)
Vue.use(Transitions)

fontawesome.library.add(
  faSpinner,
  faSearch,
  faShoppingCart,
  faShoppingBag,
  faFrown,
  faTimes,
  faMinus,
  faPlus,
  faFacebookF,
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
  faCalendar,
  faClock
)
Vue.component('fa-icon', FontAwesomeIcon)
