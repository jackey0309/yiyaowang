import App from '../App'
// webpack中利用require.ensure()实现按需加载
const home = r => require.ensure([], () => r(require('../page/home/home')), 'home')
const city = r => require.ensure([], () => r(require('../page/city/city')), 'city')
const cart = r => require.ensure([], () => r(require('../page/cart/cart')), 'cart')
const category = r => require.ensure([], () => r(require('../page/category/category')), 'category')
const personalcenter = r => require.ensure([], () => r(require('../page/personalcenter/personalcenter')), 'personalcenter')
const item = r => require.ensure([], () => r(require('../page/item/item')), 'item')
const login = r => require.ensure([], () => r(require('../page/login/login')), 'login')
export default [{
    path: '/',
    component: App, //顶层路由，对应index.html
    children: [ //二级路由。对应App.vue
        //地址为空时跳转home页面
        {
            path: '',
            redirect: '/home'
        },
        //首页城市列表页
        {
            path: '/home',
            name: 'home',
            component: home
        },
        //城市列表页
        {
            path: '/city',
            name: 'city',
            component: city
        },
        //购物车列表页
        {
            path: '/cart',
            name: 'cart',
            component: cart
        },
        //找药列表页
        {
            path: '/category',
            name: 'category',
            component: category
        },
        //我的列表页
        {
            path: '/personalcenter',
            name: 'personalcenter',
            component: personalcenter
        },
        //产品列表页
        {
            path: '/item',
            name: 'item',
            component: item    
        },
         //登录/注册页
         {
            path: '/login',
            name: 'login',
            component: login
        },
       ]
    }]
