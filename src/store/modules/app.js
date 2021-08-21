const state = {
  sidebar: {
    opened: true,
    //opened: Cookies.get('sidebarStatus') ? !!+Cookies.get('sidebarStatus') : true,
    // withoutAnimation: false
  },
  cachedViews:["DemoTest"]
}

const mutations = {
  M_sidebar_opened: (state,data) => {
    state.sidebar.opened=data
  },
  M_toggleSideBar: (state) => {
    state.sidebar.opened=!state.sidebar.opened
  },


  M_ADD_CACHED_VIEW: (state, view) => {
    if (state.cachedViews.includes(view)) return
    state.cachedViews.push(view)
  },

  M_DEL_CACHED_VIEW: (state, view) => {
    const index = state.cachedViews.indexOf(view)
    index > -1 && state.cachedViews.splice(index, 1)
  },
  M_RESET_CACHED_VIEW: (state) => {
    state.cachedViews = []
  }
}

export default {
  namespaced: true,
  state,
  mutations
}
