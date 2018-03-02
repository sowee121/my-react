/**
 * @ 公用方法
 */
let utils = {
	// 取storage
	getCookie(key) {
		if (window.sessionStorage) {
			let item = sessionStorage.getItem(key);
			return JSON.parse(item);
		}
		return null;
	},
	// 设置storage
	setCookie(key, value) {
		if (window.sessionStorage) {
			sessionStorage.setItem(key, JSON.stringify(value));
		}
	},
	// 删除storage
	removeCookie(key) {
		if (window.sessionStorage) {
			sessionStorage.removeItem(key);
		}
	}

}

export default utils;