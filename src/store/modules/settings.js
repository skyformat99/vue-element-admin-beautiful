import defaultSettings from "@/settings";

const { tagsView, logo, layout, header } = defaultSettings;
const state = {
  tagsView: tagsView,
  logo: logo,
  collapse: false,
  layout: localStorage.getItem("BYUI-VUE-LAYOUT") || layout,
  header: localStorage.getItem("BYUI-VUE-HEADER") || header,
};
const mutations = {
  CHANGE_LAYOUT: (state, layout) => {
    if (layout) {
      state.layout = layout;
    }
  },
  CHANGE_HEADER: (state, header) => {
    if (header) {
      state.header = header;
    }
  },
  CHANGE_COLLAPSE: (state) => {
    state.collapse = !state.collapse;
  },
  FOLD_SIDE_BAR: (state) => {
    state.collapse = true;
  },
  OPEN_SIDE_BAR: (state) => {
    state.collapse = false;
  },
};
const actions = {
  changeLayout({ commit }, layout) {
    commit("CHANGE_LAYOUT", layout);
  },
  changeHeader({ commit }, header) {
    commit("CHANGE_HEADER", header);
  },
  changeCollapse({ commit }) {
    commit("CHANGE_COLLAPSE");
  },
  foldSideBar({ commit }) {
    commit("FOLD_SIDE_BAR");
  },
  openSideBar({ commit }) {
    commit("OPEN_SIDE_BAR");
  },
};
export default { namespaced: true, state, mutations, actions };
