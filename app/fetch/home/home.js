import {get} from '../get'

export function getAdData(){
    const result = get('/api/homead')
    return result
}

export function getGuesslist(){
    const result = get('/api/guess')
    return result
}