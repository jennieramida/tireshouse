import Vuex from 'vuex'
// import createPersistedState from 'vuex-persistedstate'
import actions from './action'
import mutations from './mutation'

const createStore = () => {
  return new Vuex.Store({
    state: {
      isActive: false,
      res: '',
      TIRESINFO : null,
      TIRESELECTED : [],
      ADDRESSSELECTED: {},
      error: {
        errorCode: "",
        errorMsg: ""
      },
    },
    // plugins: [createPersistedState],
    mutations,
    actions
    // state: {
    //   menuIsActive: false,
    //   post: {},
    //   posts: []
    // },
    // plugins: [createPersistedState()],
    // mutations: {
    //   toggleMenuState (state) {
    //     state.menuIsActive = !state.menuIsActive
    //   },
    //   setPosts: (state, posts) => {
    //     state.posts = posts
    //   },
    //   setCurrentPost: (state, post) => {
    //     state.post = post
    //   }
    // },
    // actions: {
    //   async getPosts ({commit}) {
    //     let {data} = await axios.get(`posts`)
    //     commit('setPosts', data)
    //   },
    //   async getPost ({commit, store}, id) {
    //     let {data} = await axios.get(`posts/${id}`)
    //     commit('setCurrentPost', data)
    //   },
    //   async nuxtServerInit ({commit}, {store, isClient, isServer, route, params}) {
    //     if (isServer && route.name === 'postsView') {
    //       let {data} = await axios.get('posts')
    //       commit('setPosts', data)
    //     }
    //     if (isServer && params.id) {
    //       let {data} = await axios.get(`posts/${params.id}`)
    //       commit('setCurrentPost', data)
    //     }
    //   }
    // }
  })
}
export default createStore