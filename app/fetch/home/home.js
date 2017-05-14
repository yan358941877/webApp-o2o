import { get } from '../get'

export function getAdData() {
    const result = get('/api/homead')
    return result
}

export function getGuesslist(city, page) {
    const result = get('/api/guess/' + encodeURIComponent(city) + '/' + page)
    return result
}