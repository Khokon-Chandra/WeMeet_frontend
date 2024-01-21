import axiosClient from "@/axios";
// Admin Login
export function adminLogin({commit}, data) {
    return axiosClient.post('/admin/login', data)
      .then(({data}) => {
        commit('setAdmin', data.user);
        commit('setAdminToken', data.token)
        return data;
      })
  }