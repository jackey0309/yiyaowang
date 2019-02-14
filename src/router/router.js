import App from '../App'
// webpack中利用require.ensure()实现按需加载
const home = r => require.ensure([], () => r(require('../page/home/home')), 'home')
const city = r => require.ensure([], () => r(require('../page/city/city')), 'city')
const cart = r => require.ensure([], () => r(require('../page/cart/cart')), 'city')


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
            component: home
        },
        //城市列表页
        {
            path: '/city',
            component: city
        },
        //购物车列表页
        {
            path: '/cart',
            component: cart
        },
       ]
    }]
