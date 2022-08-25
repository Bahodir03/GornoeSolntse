import axios from "axios";


export default {
    actions:{
        fetchFloors(context,floorEntranceId){
            let floorEntranceUrl = ''
            if(floorEntranceId){
                floorEntranceUrl = '?floorEntrance=' +floorEntranceId
            }
            return new Promise((resolve,reject) =>{
                axios
                    .get('http://localhost:8754/api/floors' + floorEntranceUrl)
                    .then((response) =>{
                        let floors = {
                            models: response.data['hydra:member'],
                            totalItems: response.data['hydra:totalItems'],
                        }
                        context.commit('updateFloors', floors)
                        resolve()
                    })
                    .catch(() =>{
                        console.log('fetchFloors da xato')
                        reject()
                    })
            })
        }
    },
    mutations:{
        updateFloors(state,data){
            state.floors = data
        }
    },
    state:{
        floors:{
            models: [],
            totalItems: 0,
        }
    },
    getters:{
        getFloors(state){
            return state.floors.models
        }
    }
}