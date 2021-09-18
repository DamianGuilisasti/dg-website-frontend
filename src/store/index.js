import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    snackbar: { showing: false, text: "", color: "" },
    loadingOverlay: false,
  },
  mutations: {
    SET_SNACKBAR(state, snackbar) {
      state.snackbar = snackbar;
    },
    SET_LOADINGOVERLAY(state, loadingOverlay) {
      state.loadingOverlay = loadingOverlay;
    },
    REMOVE_LOADINGOVERLAY(state, loadingOverlay) {
      state.loadingOverlay = loadingOverlay;
    },
  },
  actions: {
    setSnackbar({ commit }, snackbar) {
      snackbar.showing = true;
      snackbar.color = snackbar.color || "success";
      commit("SET_SNACKBAR", snackbar);
    },
    setLoadingOverlay({ commit }, loadingOverlay) {
      loadingOverlay = true;
      commit("SET_LOADINGOVERLAY", loadingOverlay);
    },
    removeLoadingOverlay({ commit }, loadingOverlay) {
      loadingOverlay = false;
      commit("REMOVE_LOADINGOVERLAY", loadingOverlay);
    },
  },
  modules: {},
});
