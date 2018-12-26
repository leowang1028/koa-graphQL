//server.js
import Koa from 'koa'
import Router from 'koa-router'
import KoaStatic from 'koa-static'
import bodyParser from 'koa-body'

import {database} from '../model' // 引入mongodb
import {saveInfo, fetchInfo} from '../controller/info' // 引入info controller
import {saveStudent, fetchStudent, fetchStudentDetail} from '../controller/student' // 引入 student controller

database() // 链接数据库并且初始化数据模型

const app = new Koa()
const router = new Router();
const port = 4000

app.use(bodyParser());
app.use(KoaStatic(__dirname + '/public'));

router.get('/hello', (ctx, next) => {
  ctx.body="hello world"
});

// 设置每一个路由对应的相对的控制器
router.post('/saveinfo', saveInfo)
router.get('/info', fetchInfo)

router.post('/savestudent', saveStudent)
router.get('/student', fetchStudent)
router.get('/studentDetail', fetchStudentDetail)

app.use(router.routes())
   .use(router.allowedMethods());

app.listen(port);

console.log('server listen port: ' + port)
