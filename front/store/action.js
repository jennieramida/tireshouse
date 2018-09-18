import axios  from 'axios'
import config from '../pages/config'
var cookieparser = require('cookieparser')
var FileSaver = require('file-saver');

const actions = {
	nuxtServerInit({ commit }, { req }) {
		let accessToken = null
		if (req.headers.cookie) {
			var parsed = cookieparser.parse(req.headers.cookie)
			if(parsed.LoginDetail){
				commit('UPDATETOKEN', accessToken)
			} 
			if (parsed.StaffDetail){
				accessToken = JSON.parse(parsed.StaffDetail)
				commit('TOKENSTAFF', accessToken)
			}
			// console.log(parsed)
		}
	},
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
  async CREATEORDER({ commit }, detail) {
    //let config
    let orderList = []
    if(detail.orderList.front != null){
      orderList.push({
        "tireId":detail.orderList.front.id,
        "amount":detail.orderList.front.amount
      })
    }
    if(detail.orderList.back != null){
      orderList.push({
        "tireId":detail.orderList.back.id,
        "amount":detail.orderList.back.amount
      })
    }
		let { data } = await axios.post(config.PATH+'/custoomer/order/create',{
      "location": detail.address.detail,
      "latitude":19,
      "longtitude":101,
      "orderDateTime":"2018-08-08",
      "orederDetail":orderList
    });
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
		console.log(data)
		commit('UPDATETOKEN', data.data)
		return data.data;
	},
	async SMSVERIFY({ commit }, queryString) {
		let { data } = await axios.post(config.PATH + '/common/sms/smssend', queryString)
		return data
	},
	async SMSCHECK({ commit } ,queryString) {
		let { data } = await axios.post(config.PATH + '/common/sms/otpcheck', queryString)
		return data.data
	},
	async FETCHORDERHISTORY({ commit , state} ) {
		const head = { 'headers': { 'Authorization': 'Bearer ' + state.auth.token}}
		let { data } = await axios.get(config.PATH + '/customer/order/', head)
		commit('UPDATEHISTORY', data)
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
	async UPLOADXLSX ({commit}, files) {
		const head = { 'headers': { 'Authorization': 'Bearer ' + state.AUTHSTAFF.token, 'Content-Type': 'multipart/form-data'} }
		let formData = new FormData();
		formData.append("excelImport", files[0])
		let { data } = await axios.post(config.PATH + '/staff/store/staffdetail', formData,head)
	},
	async EXPORTXLSX ({commit}) {
		const head = { 'headers': { 'responseType': 'blob' } }
		// console.log(blob)
		let { data } = await axios.get(config.PATH + '/staff/file/', head)
		// .then(response => {
		// 	console.log(response.data.Blob())
		// 		// response.blob()
		// 	// var blob = new Blob(response.data, response.headers);
		// 	// console.log(blob)
		// 	var url = URL.createObjectURL(response);
		// 	console.log(url)
		// 		FileSaver.saveAs(response.data, "hello world.xlsx");
		// 	})
			// console.log(data)
		return data;
	}
	
}
export default actions

const parseJsonToLatLong = (data) => {
	let lat,long,address
	let output = {}
  console.log(data)
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

function blobToFile(theBlob, fileName) {
	//A Blob() is almost a File() - it's just missing the two properties below which we will add
	theBlob.lastModifiedDate = new Date();
	theBlob.name = fileName;
	return theBlob;
}

