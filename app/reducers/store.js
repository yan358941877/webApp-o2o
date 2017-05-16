import * as actionTypes from '../constants/store.js'

const initialState = []

export default function store(state=initialState, action){
    switch(action.type){
        case actionTypes.STORE_UPTATE:
            return action.data
        case actionTypes.STORE_ADD:
            // 放在数组的最前面
            state.unshife(action.data)
            return state
        case actionTypes.STORE_REMOVE:
            // 删除给定的item
            return state.filter(item=>{
                if(item.id !== action.data.id){
                    return item
                }
            })
        default:
            return state
    }
}