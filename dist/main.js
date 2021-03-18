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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_api_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/api_data */ \"./src/modules/api_data.js\");\n/* harmony import */ var _modules_set_values__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/set_values */ \"./src/modules/set_values.js\");\n\r\n\r\n\r\nconst change = () => {\r\n  const city = document.querySelector('h2');\r\n  console.log(city.textContent)\r\n  ;(0,_modules_api_data__WEBPACK_IMPORTED_MODULE_0__.getData)(city.textContent);\r\n  (0,_modules_set_values__WEBPACK_IMPORTED_MODULE_1__.setUnits)();\r\n}\r\n\r\nconst addEvents = () => {\r\n  const search = document.querySelector('.search');\r\n  const celsius = document.querySelector('#celsius');\r\n  const farenheit = document.querySelector('#farenheit');\r\n  const btn = document.querySelector('#searchBtn');\r\n\r\n  search.addEventListener('keyup', (e) => {\r\n    if (e.keyCode === 13) {\r\n      (0,_modules_api_data__WEBPACK_IMPORTED_MODULE_0__.getData)(search.value);\r\n      (0,_modules_set_values__WEBPACK_IMPORTED_MODULE_1__.setUnits)();\r\n    }\r\n  })\r\n\r\n  celsius.addEventListener('click', change);\r\n  farenheit.addEventListener('click', change);\r\n  btn.addEventListener('click', () => {\r\n    (0,_modules_api_data__WEBPACK_IMPORTED_MODULE_0__.getData)(search.value);\r\n    (0,_modules_set_values__WEBPACK_IMPORTED_MODULE_1__.setUnits)();\r\n  })\r\n}\r\n\r\n;(0,_modules_api_data__WEBPACK_IMPORTED_MODULE_0__.getData)('bogota');\r\naddEvents();\r\n(0,_modules_set_values__WEBPACK_IMPORTED_MODULE_1__.setUnits)();\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/modules/add_img.js":
/*!********************************!*\
  !*** ./src/modules/add_img.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setImg\": () => (/* binding */ setImg)\n/* harmony export */ });\nconst setImg = async () => {\r\n  const weather = document.querySelector('.weatherDesc')\r\n  const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=y9P7QsV48ORtj9edb96XJsOGRA8n9Is8&s=${weather.textContent}`, {mode: 'cors'});\r\n  const catData = await response.json();\r\n  const div = document.querySelector('.img')\r\n  const img = document.querySelector('img')\r\n  img.src = catData.data.images.original.url;\r\n  div.appendChild(img);\r\n}\r\n\r\n\n\n//# sourceURL=webpack://weather-app/./src/modules/add_img.js?");

/***/ }),

/***/ "./src/modules/api_data.js":
/*!*********************************!*\
  !*** ./src/modules/api_data.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getData\": () => (/* binding */ getData)\n/* harmony export */ });\n/* harmony import */ var _set_values__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./set_values */ \"./src/modules/set_values.js\");\n/* harmony import */ var _add_img__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add_img */ \"./src/modules/add_img.js\");\n\r\n \r\n\r\nconst getData = async (city) => {\r\n  const unit = (0,_set_values__WEBPACK_IMPORTED_MODULE_0__.getUnits)();\r\n  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=70c8ad9d3ce4e9eba23caf221443c534`, { mode: 'cors' });\r\n  const data = await response.json();\r\n  const values = {};\r\n  values['city'] = data.name;\r\n  values['weather'] = data.weather[0].main;\r\n  values['weatherDesc'] = data.weather[0].description;\r\n  values['temp'] = data.main.temp;\r\n  values['feelsLike'] = data.main.feels_like;\r\n  values['humidity'] = data.main.humidity;\r\n  (0,_set_values__WEBPACK_IMPORTED_MODULE_0__.setValues)(values);\r\n  (0,_add_img__WEBPACK_IMPORTED_MODULE_1__.setImg)();\r\n}\r\n\r\n\n\n//# sourceURL=webpack://weather-app/./src/modules/api_data.js?");

/***/ }),

/***/ "./src/modules/set_values.js":
/*!***********************************!*\
  !*** ./src/modules/set_values.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setValues\": () => (/* binding */ setValues),\n/* harmony export */   \"getUnits\": () => (/* binding */ getUnits),\n/* harmony export */   \"setUnits\": () => (/* binding */ setUnits)\n/* harmony export */ });\nconst setValues = (valObj) => {\r\n  const city = document.querySelector('h2');\r\n  const weatherCond = document.querySelector('.weatherCond');\r\n  const weatherDesc = document.querySelector('.weatherDesc');\r\n  const temp = document.querySelector('.temp');\r\n  const feelsLike = document.querySelector('.feelsLike');\r\n  const humidity = document.querySelector('.humidity');\r\n\r\n  city.textContent = valObj.city;\r\n  weatherCond.textContent = valObj.weather;\r\n  weatherDesc.textContent = valObj.weatherDesc;\r\n  temp.textContent = valObj.temp;\r\n  feelsLike.textContent = valObj.feelsLike;\r\n  humidity.textContent = valObj.humidity;\r\n}\r\n\r\nconst getUnits = () => {\r\n  const opt = document.getElementsByName('radioBtn'); \r\n              \r\n  for(let i = 0; i < opt.length; i++) { \r\n    if(opt[i].checked) {\r\n      return opt[i].value\r\n    }\r\n  } \r\n}\r\n\r\nconst setUnits = () => {\r\n  const unit = getUnits();\r\n  const spans = document.getElementsByClassName('unit');\r\n  if (unit === 'metric') {\r\n    for (let i=0; i < spans.length; i++) {\r\n      spans[i].textContent = '°C'\r\n    }\r\n  }\r\n  if (unit === 'imperial') {\r\n    for (let i=0; i < spans.length; i++) {\r\n      spans[i].textContent = '°F'\r\n    }\r\n  }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://weather-app/./src/modules/set_values.js?");

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