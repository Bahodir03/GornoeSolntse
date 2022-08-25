import axios from "axios";


export default {
    actions: {
        fetchRooms(context) {
            return new Promise((resolve, reject) => {
                axios
                    .get('http://localhost:8754/api/rooms')
                    .then((response) => {
                        let rooms = {
                            models: response.data['hydra:member'],
                            totalItems: response.data['hydra:totalItems'],
                        }
                        context.commit('updateRooms', rooms)
                        resolve()
                    })
                    .catch(() => {
                        console.log('Rooms olishda eror')
                        reject()
                    })
            })
        },
        fetchRoom(context,roomEntranceId) {
            let roomUrl = ''
            if(roomEntranceId){
                roomUrl = roomEntranceId
            }
            return new Promise((resolve, reject) => {
                axios
                    .get('http://localhost:8754/api/rooms' + roomUrl)
                    .then((response) => {
                        let room = {
                            models: response.data['hydra:member'],
                            totalItems: response.data['hydra:totalItems'],
                        }
                        context.commit('updateRoom', room)
                        resolve()
                    })
                    .catch(() => {
                        console.log('Rooms olishda eror')
                        reject()
                    })
            })
        },
        fetchRoomsPlan(context,roomsPlanId) {
            let roomsPlanUrl = ''
            if(roomsPlanId){
                roomsPlanUrl = roomsPlanId
            }
            return new Promise((resolve, reject) => {
                axios
                    .get('http://localhost:8754/api/rooms' + roomsPlanUrl)
                    .then((response) => {
                        let roomsPlan = {
                            models: response.data['hydra:member'],
                            totalItems: response.data['hydra:totalItems'],
                        }
                        context.commit('updateRoomsPlan', roomsPlan)
                        resolve()
                    })
                    .catch(() => {
                        console.log('Rooms olishda eror')
                        reject()
                    })
            })
        }
    },
    mutations: {
        updateRooms(state,data){
            state.rooms = data
        },
        updateRoom(state, data){
            state.room = data
        },
        updateRoomsPlan(state, data){
            state.roomsPlan = data
        }
    },
    state: {
        rooms:{
            models:[],
            totalItems: 0
        },
        room:{
            models:[],
            totalItems: 0
        },
        roomsPlan:{
            models: [],
            totalItems: 0,
        },
    },
    getters: {
        getRooms(state){
            return state.rooms.models
        },
        getRoom(state){
          return state.room.models
        },
        getRoomsPlan(state){
            return state.roomsPlan.models
        },
    },
}