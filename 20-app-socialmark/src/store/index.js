import {createStore} from "vuex";


export default createStore({
    state : {
        user : null,
        mykey : "hello!mykey."
    },

    mutations : {
        setUser(state, user) {
            state.user = user;
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
    }

})

