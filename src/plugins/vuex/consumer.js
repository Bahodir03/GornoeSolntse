import axios from "axios";

export default {
    actions: {
        fetchConsumer(context, data) {
            return new Promise((resolve, reject) => {
                axios
                    .post('http://localhost:8754/api/consumers', data)
                    .then((response) => {
                        context.commit('updateConsumer', response.data.addConsumer)
                        resolve()
                    })
                    .catch(()=>{
                        console.log('consumer post da xato')
                        reject()
                    })
            })
        }
    },
    mutations: {
        updateConsumer(state, data) {
            state.addConsumer = data
        }
    },
    state: {
        addConsumer:{
            givenName: "",
            phoneNumber: "",
        }
    },
    getters: {
        getConsumer(state){
            return state.addConsumer
        }
    },
}