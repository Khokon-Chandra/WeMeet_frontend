import axiosClient from "../axios";

export function getCurrentUser({commit}) {
  return axiosClient.get('/user')
    .then(({data}) => {
      const user = data.data;
      commit('setUser', user);
      return user;
    })
}

export function login({commit}, data) {
    return axiosClient.post('/login', data)
      .then(({data}) => {
        commit('setUser', data.user);
        commit('setToken', data.token)
        return data;
      })
  }

  
export function logout({commit}) {
  return axiosClient.post('/logout')
    .then((response) => {
      commit('setUser', null)
      commit('setToken', null)

      return response;
    })
}


export function register({commit}, data) {
  return axiosClient.post('/register', data)
    .then(({data}) => {
      commit('setUser', data.user);
      commit('setToken', data.token)
      return data;
    })
}

// Chat Page
// Get Contact List
export function contact({commit}) {
  return axiosClient.get('/contacts')
    .then(({data}) => {
      return data;
    })
}
// Get Messages
export function messages({commit}, id) {
  return axiosClient.get(`/messages/${id}`)
    .then(({data}) => {
      return data;
    })
}
// Send Message
export function sendMessages({commit}, data) {
  return axiosClient.post(`/send_message/${data.user_id}`, {message:data.message})
    .then(({data}) => {
      return data;
    })
}
