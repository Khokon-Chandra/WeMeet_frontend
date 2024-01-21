// Admin
export function setAdmin(state, admin) {
    state.admin.data = admin;
  }
  
  export function setAdminToken(state, token) {
    state.admin.token = token;
    if (token) {
      localStorage.setItem('ADMIN_TOKEN', token);
    } else {
      localStorage.removeItem('ADMIN_TOKEN')
    }
  }