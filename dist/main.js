/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_api_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/api_data */ \"./src/modules/api_data.js\");\n\r\n\r\n(0,_modules_api_data__WEBPACK_IMPORTED_MODULE_0__.getData)('bogota');\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/modules/api_data.js":
/*!*********************************!*\
  !*** ./src/modules/api_data.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getData\": () => (/* binding */ getData)\n/* harmony export */ });\n/* harmony import */ var _set_values__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./set_values */ \"./src/modules/set_values.js\");\n\r\nconst getData = async (city) => {\r\n  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=70c8ad9d3ce4e9eba23caf221443c534`, { mode: 'cors' });\r\n  const data = await response.json();\r\n  const values = {};\r\n  values['city'] = data.name;\r\n  values['weather'] = data.weather[0].main;\r\n  values['weatherDesc'] = data.weather[0].description;\r\n  values['temp'] = data.main.temp;\r\n  values['feelsLike'] = data.main.feels_like;\r\n  values['humidity'] = data.main.humidity\r\n  console.log(data);\r\n  console.log(values);\r\n  (0,_set_values__WEBPACK_IMPORTED_MODULE_0__.setValues)(values);\r\n}\r\n\r\n\n\n//# sourceURL=webpack://weather-app/./src/modules/api_data.js?");

/***/ }),

/***/ "./src/modules/set_values.js":
/*!***********************************!*\
  !*** ./src/modules/set_values.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setValues\": () => (/* binding */ setValues)\n/* harmony export */ });\nconst setValues = (valObj) => {\r\n  const city = document.querySelector('h2');\r\n  const weatherCond = document.querySelector('.weatherCond');\r\n  const weatherDesc = document.querySelector('.weatherDesc');\r\n  const temp = document.querySelector('.temp');\r\n  const feelsLike = document.querySelector('.feelsLike');\r\n  const humidity = document.querySelector('.humidity');\r\n\r\n  city.textContent = valObj.city;\r\n  weatherCond.textContent = valObj.weather;\r\n  weatherDesc.textContent = valObj.weatherDesc;\r\n  temp.textContent = valObj.temp;\r\n  feelsLike.textContent = valObj.feelsLike;\r\n  humidity.textContent = valObj.humidity;\r\n}\r\n\r\n\n\n//# sourceURL=webpack://weather-app/./src/modules/set_values.js?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;