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
    console.log(this.request.body)

    this.body = JSON.stringify(this.request.body)
})

/*------------------------------------------------------------*/

/* 响应特惠广告信息的请求 */

var homeAdData = require('./home/ad.js')
router.get('/api/homead', function *(next){
    this.body = homeAdDate
})
app.use(router.routes()).use(router.allowedMethods())

// 监听3000 端口
app.listen(3000)