import axios from "axios";


export default {
    actions: {
        fetchEntrance(context) {
            return new Promise((resolve, reject) => {
                axios
                    .get('http://localhost:8754/api/entrances')
                    .then((response) => {
                        let entranceHome = {
                            models: response.data['hydra:member'],
                            totalItems: response.data['hydra:totalItem']
                        }
                        context.commit('updateEntrance', entranceHome)
                        resolve()
                    })
                    .catch(() => {
                        console.log('entrance get da xato')
                        reject()
                    })
            })
        },
    },
    mutations: {
        updateEntrance(state, data) {
            state.entranceHome = data
        },
    },
    state: {
        entranceHome: {
            models: [],
            totalItems: 0
        },
    },
    getters: {
        getEntrance(state) {
            return state.entranceHome.models
        },
    }
}