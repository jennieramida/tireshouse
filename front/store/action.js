import axios  from 'axios'
import config from '../pages/config'

const actions = {
	async GETTIRESINFO ({ commit }) {
    let { data } = await axios.get(config.PATH+'/common/tires/info')
		commit('TIRESINFO', data)
	},
  async GETTIRESEARCH({commit},queryString) {
		let getString = "?frontWidth="+queryString.front.width;
	  	getString += "&frontSeries=" +queryString.front.series;
	  	getString += "&frontSize=" + queryString.front.size;
	  	getString += "&frontWidth=" + queryString.back.width;
	  	getString += "&backSeries" + queryString.back.series;
	  	getString += "&backSize=" + queryString.back.size;
	  	let { data } = await axios.get(config.PATH+'/common/tires/search'+getString)
      commit('TIRESELECTED', data)

	},
	async FINDPLACEGEOCODE({ commit }, queryString) {
		let { data } = await axios.get(config.PATH+'/common/test/map?location='+queryString.lat()+","+queryString.lng());
		return parseJsonToLatLong(data);
  },
  async FINDLOCATION({ commit }, queryString) {
    let stringUrl = "https://maps.googleapis.com/maps/api/geocode/json?address="
    let keyUrl = "&key=AIzaSyBPhWQjyLqgDZkctg0AzewEhJgVPeLCiyU"
    console.log(stringUrl + queryString+ keyUrl)
    let { data } = await axios.get(stringUrl + queryString+ keyUrl);
    return parseJsonToLatLong(data);
	},
	async LOGIN({ commit }, queryString) {
		console.log(queryString)
		let { data } = await axios.post(config.PATH + '/auth/login', queryString)
		return data;
	},
	async SMSCHECK({ commit } ,queryString) {
		let { data } = await axios.get(config.PATH + '/common/test/sms')
		return data.data
	},
	// staff partition please write above this
	async GETLISTORDER({ commit } ) {
		let { data } = await axios.get(config.PATH + '/staff/order/getorder')
		commit('LISTORDER', data)
	},
	async GETLISTORDERDETAIL({ commit },queryString) {
		let { data } = await axios.post(config.PATH + '/staff/order/getorderdetail' , queryString)
		commit('LISTORDERDETAIL', data)
	},
	async GETLISTTIRE({commit}){
		let { data } = await axios.get(config.PATH + '/staff/store/tire')
		commit('LISTTIRE', data)
	},
	async GETLISTTIREDETAIL({ commit }, queryString) {
		let { data } = await axios.post(config.PATH + '/staff/store/tiredetail', queryString)
		commit('LISTTIREDETAIL', data)
	},
	async GETLISTZONE({ commit }) {
		let { data } = await axios.get(config.PATH + '/staff/store/tire')
		commit('LISTZONE', data)
	},
	async GETLISTZONEDETAIL({ commit }, queryString) {
		let { data } = await axios.post(config.PATH + '/staff/store/tiredetail', queryString)
		commit('LISTZONEDETAIL', data)
	},
	async GETLISTSTORE({ commit }) {
		let { data } = await axios.get(config.PATH + '/staff/store/staff')
		commit('LISTSTORE', data)
	},
	async GETLISTSTOREDETAIL({ commit }, queryString) {
		let { data } = await axios.post(config.PATH + '/staff/store/staffdetail', queryString)
		commit('LISTSTOREDETAIL', data)
	},
}
export default actions

const parseJsonToLatLong = (data) => {
	let lat,long,address
	let output = {}

	if(data.status==="OK"){
		let result = data.results[0]
		lat = result.geometry.location.lat
		long = result.geometry.location.lng
		address = result.address_components
		output = {"markers": [{position: {"lat":lat,"lng":long}}],"address":address};
	} else {
		output = {"error": "Wrong Format"}
	}
	return output;
}

