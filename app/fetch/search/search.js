import {get} from '../get'

export function getSearchList(city, type, keyword,page){
    const keywordStr = keyword?'/'+keyword: ''
    const result = get('/api/search/'+city+'/'+type+keywordStr+'/'+page)
    return result
}