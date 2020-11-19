;(function (root, factory, undef) {
	if (typeof exports === "object") {
		// CommonJS
		module.exports = exports = factory(require("./core"), require("./lib-typedarrays"), require("./enc-utf16"), require("./enc-base64"), require("./sha1"), require("./sha256"), require("./hmac"), require("./evpkdf"), require("./cipher-core"), require("./format-hex"), require("./aes"));
	}
	else if (typeof define === "function" && define.amd) {
		// AMD
		define(["./core", "./lib-typedarrays", "./enc-utf16", "./enc-base64", "./sha1", "./sha256", "./hmac", "./evpkdf", "./cipher-core", "./format-hex", "./aes"], factory);
	}
	else {
		// Global (browser)
		root.CryptoJS = factory(root.CryptoJS);
	}
}(this, function (CryptoJS) {

	return CryptoJS;

}));