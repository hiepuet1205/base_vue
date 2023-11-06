import router from '@/router';

const auth = {
  state: {
    apiUrl: 'http://localhost:3000/',
    user: null,
    token: null,
    isAuthenticated: false,
  },
  getters: {
    getApiUrl(state) {
      return state.apiUrl
    },
    getUser(state) {
      return state.user
    },
    getToken(state) {
      return state.token
    },
    getIsAuthenticated(state) {
      return state.user !== null && state.user !== undefined;
    },
  },
  mutations: {
    setApiUrl(state, payload) {
      state.apiUrl = payload
    },
    setUser(state, payload) {
      state.user = payload
    },
    setToken(state, payload) {
      state.token = payload
    },
    setIsAuthenticated(state, payload) {
      state.isAuthenticated = payload
    },
  },
  actions: {
    setApiUrl(context, payload) {
      context.commit('setApiUrl', payload)
    },
    setUser(context, payload) {
      context.commit('setUser', payload)
    },
    setIsAuthenticated(context, payload) {
      context.commit('setIsAuthenticated', payload)
    },
    async login({ commit, getters }, { username, password }) {
      const apiUrl = getters.getApiUrl;
      const res = await fetch(`${apiUrl}auth/login`, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({ username, password })
      });
      const data = await res.json();
      if (data.access_token) {
        commit('setUser', data.user);
        commit('setToken', data.access_token);
        commit('setIsAuthenticated', true);
        router.push('/')
      } else {
        commit('setUser', null);
        commit('setToken', null);
        commit('setIsAuthenticated', false);
      }
    },
    async register({ commit, getters }, { username, password }) {
      const apiUrl = getters.getApiUrl;
      const res = await fetch(`${apiUrl}auth/register`, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({ username, password })
      });
      const data = await res.json();
      if (data.access_token) {
        commit('setUser', data.user);
        commit('setToken', data.access_token);
        commit('setIsAuthenticated', true);
        router.push('/')
      } else {
        commit('setUser', null);
        commit('setToken', null);
        commit('setIsAuthenticated', false);
      }
    },
    logout({ commit }) {
      commit('setUser', null);
      commit('setToken', null);
      commit('setIsAuthenticated', false);
      router.push('/login')
    }
  }
}

export default auth;