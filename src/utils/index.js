/**
 * @ 公用方法
 */
let utils = {

	getCookie(key) {
		if (window.sessionStorage) {
			let item = sessionStorage.getItem(key);
			return JSON.parse(item);
		}
		return null;
	},
	setCookie(key, value) {
		if (window.sessionStorage) {
			sessionStorage.setItem(key, JSON.stringify(value));
		}
	},
	removeCookie(key) {
		if (window.sessionStorage) {
			sessionStorage.removeItem(key);
		}
	}

}

export default utils;