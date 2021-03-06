import fetch from '../config/fetch'
import {getStore} from '../config/mUtils'

/**
 * 获取首页默认地址
 */

export const cityGuess = () => fetch('/v1/cities', {
	type: 'guess'
});


/**
 * 获取首页热门城市
 */

export const hotcity = () => fetch('/v1/cities', {
	type: 'hot'
});


/**
 * 获取首页所有城市
 */

export const groupcity = () => fetch('/v1/cities', {
	type: 'group'
});

/**
 * 获取轮播图等分类列表
 */

export const getHeadData = () => fetch('/v2/index_entry', {});
/**
 * 获取goodTopic等分类列表
 */

export const getTailData = () => fetch('/v2/index_tail', {});

/**
 * 获取图片验证码
 */

export const getcaptchas = () => fetch('/v1/captchas', {},'POST');


/**
 * 账号密码登录
 */
export const accountLogin = (username, password) => fetch('/v2/login', {username, password}, 'POST');


/**
 * 账号密码登录
 */
export const quickLogin = (username, password, captcha_code) => fetch('/v2/quickLogin', {username, password, captcha_code}, 'POST');


