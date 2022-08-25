import axios from "axios";


export default {
    actions:{
        fetchPlansHome(context){
            return new Promise((resolve,reject)=>{
                axios
                    .get('http://localhost:8754/api/plans')
                    .then((response)=>{
                        let planHome = {
                            models: response.data['hydra:member'],
                            totalItems: response.data['hydra:totalItem']
                        }
                        context.commit('updatePlansHome', planHome)
                        resolve()
                    })
                    .catch(()=>{
                        console.log('planHome da xatolik')
                        reject()
                    })
            })
        }
    },
    mutations:{
        updatePlansHome(state, data){
            state.planHome = data
        },
    },
    state:{
        planHome:{
            models: [],
            totalItems: 0,
        }
    },
    getters:{
        getPlansHome(state){
            return state.planHome.models
        }
    }
}