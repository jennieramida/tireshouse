
const mutations = {
  TIRESINFO (state, payload) {
    state.TIRESINFO = payload.data
  },
  SELECTTIRES (state, payload) {
    state.selected = payload
  },
  TIRESELECTED (state, payload) {
    state.TIRESELECTED = payload.data
    //state.TIRESELECTED = JSON.parse('{ "status": 200, "data": [ { "front":{ "id": 1010, "brand": "BRIDGESTONE", "model": "ECOPIA 150", "name": "175/70R13", "width": 175, "price": "1800.00", "size": "13", "series": "70", "createdTime": "2018-08-17T15:52:32.461Z", "updatedTime": null }, "back":{ "id": 1010, "brand": "BRIDGESTONE", "model": "ECOPIA 150", "name": "175/70R13", "width": 175, "price": "1800.00", "size": "13", "series": "70", "createdTime": "2018-08-17T15:52:32.461Z", "updatedTime": null } }, { "front": { "id": 1194, "brand": "FIRESTONE", "model": "TZ700", "name": "175/70R13", "width": 175, "price": "1550.00", "size": "13", "series": "70", "createdTime": "2018-08-17T15:52:32.461Z", "updatedTime": null }, "back": null }, { "front": { "id": 1295, "brand": "MICHELIN", "model": "XM 2", "name": "175/70R13", "width": 175, "price": "1850.00", "size": "13", "series": "70", "createdTime": "2018-08-17T15:52:32.461Z", "updatedTime": null }, "back": null }, { "front": { "id": 1433, "brand": "BF Goodrich", "model": "Advantage T/A", "name": "175/70R13", "width": 175, "price": "1650.00", "size": "13", "series": "70", "createdTime": "2018-08-17T15:52:32.461Z", "updatedTime": null }, "back": null }, { "front": { "id": 1470, "brand": "DUNLOP", "model": "SP Sport LM704", "name": "175/70R13", "width": 175, "price": "1500.00", "size": "13", "series": "70", "createdTime": "2018-08-17T15:52:32.461Z", "updatedTime": null }, "back": null }, { "front": { "id": 1680, "brand": "YOKOHAMA", "model": "BluEarth-A ES32", "name": "175/70R13", "width": 175, "price": "1800.00", "size": "13", "series": "70", "createdTime": "2018-08-17T15:52:32.461Z", "updatedTime": null }, "back": null }, { "front": { "id": 1879, "brand": "Continental", "model": "ComfortContact CC6", "name": "175/70R13", "width": 175, "price": "1590.00", "size": "13", "series": "70", "createdTime": "2018-08-17T15:52:32.461Z", "updatedTime": null }, "back": { "id": 1879, "brand": "Continental", "model": "ComfortContact CC6", "name": "175/70R13", "width": 175, "price": "1590.00", "size": "13", "series": "70", "createdTime": "2018-08-17T15:52:32.461Z", "updatedTime": null } } ] } ').data
    console.log(state.TIRESELECTED)
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
}

export default mutations
