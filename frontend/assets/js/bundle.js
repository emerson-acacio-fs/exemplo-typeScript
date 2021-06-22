/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/A0018/form-control.ts":
/*!***********************************!*\
  !*** ./src/A0018/form-control.ts ***!
  \***********************************/
/***/ (() => {


var SHOW_ERROR_MESSAGES = 'show-error-message';
var form = document.querySelector('.form');
var username = document.querySelector('.username');
var email = document.querySelector('.email');
var password = document.querySelector('.password');
var password2 = document.querySelector('.password2');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    hideErroMessage(form);
});
function hideErroMessage(form) {
    form.querySelectorAll("." + SHOW_ERROR_MESSAGES).forEach(function (v) {
        v.classList.remove(SHOW_ERROR_MESSAGES);
    });
}
function showErroMessage(input, msg) {
    var formFilds = input.parentElement;
    var errorMessage = document.querySelector('.error-message');
    errorMessage.innerText = msg;
    formFilds.classList.add(SHOW_ERROR_MESSAGES);
}
showErroMessage(username, 'sssss');
hideErroMessage(form);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!****************************!*\
  !*** ./src/A0018/index.ts ***!
  \****************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ./form-control */ "./src/A0018/form-control.ts");

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map