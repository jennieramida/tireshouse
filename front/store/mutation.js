
const mutations = {
  TIRESINFO (state, payload) {
    state.TIRESINFO = payload.data
  },
  SELECTTIRES (state, payload) {
    state.selected = payload
  },
  TIRESELECTED (state, payload) {
    state.TIRESELECTED = payload.data
  },
  ADDRESSSELECTED (state, payload) {
    state.ADDRESSSELECTED = payload
  },
  SETERROR (state, payload){
    state.error.errorCode = payload.errorcode
    state.error.errorMsg = payload.errormsg
  },
  LATLONGFROMGEOCODE (state, payload) {
    state.GEOCODE_RESULTS = payload
  }
  ,
  LISTORDER (state, payload) {
    state.ORDER_LIST = payload
  },
  LISTORDERDETAIL (state,payload) {
    state.ORDER_LIST_DETAIL = payload
  },
  LISTTIRE(state, payload) {
    state.TIRE_LIST = payload
  },
  LISTTIREDETAIL (state, payload){
    state.TIRE_LIST_DETAIL = payload
  },
  LISTZONE(state, payload) {
    state.ZONE_LIST = payload
  },
  LISTZONEDETAIL (state, payload) {
    state.ZONE_LIST_DETAIL = payload
  },
  LISTSTORE(state, payload) {
    state.STORE_LIST = payload
  },
  LISTSTOREDETAIL (state, payload) {
    state.STORE_LIST_DETAIL = payload
  },
  PAGING (state, payload) {
    state.PAGINATION = payload
  },
  UPDATETOKEN (state, payload) {
    state.auth = payload
  }

}

export default mutations
