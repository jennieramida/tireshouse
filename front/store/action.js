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
}
export default actions
