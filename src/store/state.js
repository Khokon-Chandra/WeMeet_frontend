export default {
    navbar: false,
    user: {
        token: localStorage.getItem('TOKEN'),
        data: JSON.parse(localStorage.getItem('USER')),
    },
    selectedUser: {},
    messages: []
}