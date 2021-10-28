
export default  {
    namespaced : true,
    state : {
        contactName : "pureSol",
        address : "canada"
    },

    mutations : {
        setItem(state, name) {
            state.contactName = name;
        }
    },

    getters : {
        _contactName : state => state.contactName
    }

}