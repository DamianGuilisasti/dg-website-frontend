import Vue from "vue";
import Vuex from "vuex";
import Repository from "../repositories/Repository";

Vue.use(Vuex);

const sliders = {
  namespaced: true,
  state: {
    sliders: [
      {
        title: "",
        subtitle: "",
        sliderImg: {
          public_id: "",
          url: "",
        },
        buttonText: "",
        buttonURL: "",
      },
    ],
  },
  mutations: {
    setSliders(state, payload) {
      state.sliders = payload;
    },
  },
  actions: {
    async getSliders({ commit }, payload) {
      const response = await Repository.get(`/sliders`, {
        headers: { token: this.state.token },
      });
      commit("setSliders", response.data);
    },
  },
  getters: {
    sliders: (state) => {
      return state.sliders;
    },
  },
};

const settings = {
  namespaced: true,
  state: {
    settings: [
      {
        videobackground: {
          public_id: "",
          url: "",
        },
      },
    ],
  },
  mutations: {
    setSettings(state, payload) {
      state.settings = payload;
    },
  },
  actions: {
    async getSettings({ commit }, payload) {
      const response = await Repository.get(`/settings`, {
        headers: { token: this.state.token },
      });
      commit("setSettings", response.data);
    },
  },
  getters: {
    settings: (state) => {
      return state.settings;
    },
  },
};

const calltoactions = {
  namespaced: true,
  state: { calltoactions: [] },
  mutations: {
    setCallToActions(state, payload) {
      state.calltoactions = payload;
    },
  },
  actions: {
    async getCallToActions({ commit }, payload) {
      const response = await Repository.get(`/calltoactions`, {
        headers: { token: this.state.token },
      });
      commit("setCallToActions", response.data);
    },
  },
  getters: {
    calltoactions: (state) => {
      return state.calltoactions;
    },
  },
};

const menus = {
  namespaced: true,
  state: { menus: [] },
  mutations: {
    setMenus(state, payload) {
      state.menus = payload;
    },
  },
  actions: {
    async getMenus({ commit }, payload) {
      const response = await Repository.get(`/menus`, {
        headers: { token: this.state.token },
      });
      commit("setMenus", response.data);
    },
    async createMenu({ commit }, payload) {
      const response = await Repository.post(`/menus`, payload, {
        headers: { token: this.state.token },
      });
      return response;
    },
    async updateMenu({ commit }, payload) {
      const response = await Repository.put(`/menus/`, payload, {
        headers: { token: this.state.token },
      });
      return response;
    },
    async deleteMenu({ commit }, payload) {
      const response = await Repository.delete(`/menus/`, {
        params: payload,
        headers: { token: this.state.token },
      });
      return response;
    },
    async activateItem({ commit }, payload) {
      const response = await Repository.put(
        `/menus/activate`,
        { _id: payload._id },
        {
          headers: { token: this.state.token },
        }
      );
      return response;
    },
    async desactivateItem({ commit }, payload) {
      const response = await Repository.put(
        `/menus/desactivate`,
        { _id: payload._id },
        {
          headers: { token: this.state.token },
        }
      );
      return response;
    },
    async saveNewOrder({ commit }, payload) {
      const response = await Repository.post(`/menus/saveNewOrder`, payload, {
        headers: { token: this.state.token },
      });
      return response;
    },
  },
  getters: {
    menus: (state) => {
      return state.menus;
    },
  },
};

export default new Vuex.Store({
  state: {
    snackbar: { showing: false, text: "", color: "" },
    loadingOverlay: false,
  },
  mutations: {
    setSnackbar(state, snackbar) {
      state.snackbar = snackbar;
    },
    setLoadingOverlay(state, loadingOverlay) {
      state.loadingOverlay = loadingOverlay;
    },
    removeLoadingOverlay(state, loadingOverlay) {
      state.loadingOverlay = loadingOverlay;
    },
  },
  actions: {
    setSnackbar({ commit }, snackbar) {
      snackbar.showing = true;
      snackbar.color = snackbar.color || "success";
      commit("setSnackbar", snackbar);
    },
    setLoadingOverlay({ commit }, loadingOverlay) {
      loadingOverlay = true;
      commit("setLoadingOverlay", loadingOverlay);
    },
    removeLoadingOverlay({ commit }, loadingOverlay) {
      loadingOverlay = false;
      commit("removeLoadingOverlay", loadingOverlay);
    },
  },
  modules: {
    menus: menus,
    calltoactions: calltoactions,
    settings: settings,
    sliders: sliders,
  },
});
