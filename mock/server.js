var app = require('koa')()
var router = require('koa-router')()
var koaBody = require('koa-body')

console.log("please open http://localhost:3000/")

// 处理get请求
router.get('/',function *(next){
    this.body = 'hello koa!'
})

router.get('/api', function *(next){
    this.body = 'test data'
})

router.get('/api/1', function *(next){
    this.body = 'test data 1'
})

router.get('/api/2', function *(next){
    this.body = {
        a:1,
        b: '123'
    }
})
// 处理post请求
router.post('/api/post', koaBody, function *(next){
    // console.log(this.request.body)

    this.body = JSON.stringify(this.request.body)
})

/*------------------------------------------------------------*/

/* 响应特惠广告信息的请求 */

var homeAdData = require('./home/ad.js')
router.get('/api/homead', function *(next){
    this.body = homeAdData
})

// 首页——推荐列表(猜你喜欢)
var guesslist = require('./home/guesslist.js')
router.get('/api/guess/:city/:page', function *(next){

    const params = this.params
    const paramsCity = params.city
    const paramsPage = params.page
    // console.log(paramsCity)
    // console.log(paramsPage)
    if(paramsPage==8){
        guesslist.hasMore = false
    }else {
        guesslist.hasMore = true
    }
    this.body = guesslist
})

/*------------------------------------------------------------*/

/* 响应搜索请求 */
var searchListData = require('./search/list.js')
router.get('/api/search/:city/:type/:keyword/:page', function *(next){
    const params = this.params
    const paramsCity = params.city
    const paramsType = params.type
    const paramsKeyword = params.keyword
    const paramsPage = params.page

    // console.log(paramsCity)
    // console.log(paramsType)
    // console.log(paramsKeyword)
    // console.log(paramsPage)
    
    if(paramsPage == 8){
        searchListData.hasMore = false
    }else {
        searchListData.hasMore = true
    }
    this.body = searchListData
})

router.get('/api/search/:city/:type/:page', function *(next){
    const params = this.params
    const paramsCity = params.city
    const paramsType = params.type
    const paramsPage = params.page

    // console.log(paramsCity)
    // console.log(paramsType)
    // console.log(paramsPage)
    
    if(paramsPage == 8){
        searchListData.hasMore = false
    }else {
        searchListData.hasMore = true
    }
    this.body = searchListData
})

/*------------------------------------------------------------*/
/* 响应商家详情请求 */
var detailInfo = require('./detail/info')
router.get('/api/detail/info/:id', function *(next){
    const id = this.params.id
    // console.log(id)
    // console.log(detailInfo)
    this.body = detailInfo
})

/*------------------------------------------------------------*/
/* 加载用户评论 */
var comments = require('./detail/comment')
router.get('/api/detail/comment/:page/:id', function *(next){
    const id = this.params.id
    const page = this.params.page
    if(page>8){
        comments.hasMore = false
    }else {
        comments.hasMore = true
    }
    
    this.body = comments
})

/*------------------------------------------------------------*/
/* 加载用户订单列表 */
var orderlist = require('./orderlist/orderlist')
router.get('/api/orderlist/:username', function *(next){
    const username = this.params.username
    this.body = orderlist
})


app.use(router.routes()).use(router.allowedMethods())

// 监听3000 端口
app.listen(3000)