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
		let stringUrl = "https://maps.googleapis.com/maps/api/geocode/json?address="
		let keyUrl = "&key=AIzaSyBPhWQjyLqgDZkctg0AzewEhJgVPeLCiyU"
		 
		let { data } = await axios.get(stringUrl + queryString+ keyUrl);
		let output = parseJsonToLatLong(data)
		commit('LATLONGFROMGEOCODE', output);
		return output;
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