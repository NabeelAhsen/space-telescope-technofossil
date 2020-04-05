const mutations = {
  STOP_LOADING(state) {
    state.loading = false;
  },
  SET_COMPONENT_INFORMATION(state, payload) {
    let { offsetLeft, offsetWidth, pos } = payload;
    state.componentWidths[pos] = offsetWidth;
    state.componentPositions[pos] = offsetLeft;
  }
};

const actions = {
  setWidthAndPosition({ commit }, payload) {
    commit('SET_COMPONENT_INFORMATION', payload);
  }
};

const getters = {
  homeInformation(state) {
    return {
      position: state.componentPositions[0], 
      width: state.componentWidths[0],
    }
  },
  descriptionInformation(state) {
    return {
      position: state.componentPositions[1], 
      width: state.componentWidths[1],
    }
  },
  socialContextInformation(state) {
    return {
      position: state.componentPositions[2], 
      width: state.componentWidths[2],
    }
  },
  lifeCycleInformation(state) {
    return {
      position: state.componentPositions[3], 
      width: state.componentWidths[3],
    }
  },
  imaginedFutureInformation(state) {
    return {
      position: state.componentPositions[4], 
      width: state.componentWidths[4],
    }
  },
};

const state = {
  loading: true,
  currentOffset: 0,
  // Components correspond to Home, Description, SocialContext, LifeCycle, and
  // ImaginedFuture
  componentPositions: [0, 0, 0, 0, 0],
  componentWidths: [0, 0, 0, 0, 0],
};

export default {
  state,
  mutations,
  actions,
  getters,
};
