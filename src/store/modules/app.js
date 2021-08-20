const state = {
  sidebar: {
    opened: true,
    //opened: Cookies.get('sidebarStatus') ? !!+Cookies.get('sidebarStatus') : true,
    // withoutAnimation: false
  },
}

const mutations = {
  M_sidebar_opened: (state,data) => {
    state.sidebar.opened=data
  },
  M_toggleSideBar: (state) => {
    state.sidebar.opened=!state.sidebar.opened
  },
}

export default {
  namespaced: true,
  state,
  mutations
}
