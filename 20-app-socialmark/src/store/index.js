import {createStore} from "vuex";
import createPersistedState from "vuex-persistedstate";
import SecureLS from "secure-ls";
var ls = new SecureLS({ isCompression: false });



export default createStore({
    state : {
        user : null,
        mykey : "hello!mykey."
    },

    mutations : {
        setUser(state, user) {
            state.user = user;
        },

        logoutUser(state) {
            state.user = null;
        }
    },

    getters : {
        _isUserAuthenticated : state => state.user !== null,
        _getCurrentUser(state) {
            const myuser = state.user; //burda userin passwordunu her yerde dolaştırmamak için kopyasını buraya atadık sonra ondan şifreyi sildk.
            delete myuser?.password;
            return myuser
        },
        _mykey : state => state.mykey   // bütün her yerden kullan diye bu şekilde yaptık.
    },

    plugins: [
        createPersistedState({
            storage: {
                getItem: (key) => ls.get(key),
                setItem: (key, value) => ls.set(key, value),
                removeItem: (key) => ls.remove(key),
            },
        }),
    ],

})

