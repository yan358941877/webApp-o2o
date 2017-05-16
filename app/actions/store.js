import * as actionTypes from '../constants/store'

export function update(data){
    return {
        type: actionTypes.STROE_UPTATE,
        data: data
    }
}

export function add(item){
    return {
        type: actionTypes.STORE_ADD,
        data: item
    }
}

export function remove(item){
    return {
        type: actionTypes.STORE_REMOVE,
        data: item
    }
}