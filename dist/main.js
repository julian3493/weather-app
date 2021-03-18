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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_apiData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/apiData */ \"./src/modules/apiData.js\");\n/* harmony import */ var _modules_set_values__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/set_values */ \"./src/modules/set_values.js\");\n\n\n\nconst change = () => {\n  const city = document.querySelector('h2');\n  (0,_modules_apiData__WEBPACK_IMPORTED_MODULE_0__.default)(city.textContent);\n  (0,_modules_set_values__WEBPACK_IMPORTED_MODULE_1__.setUnits)();\n};\n\nconst addEvents = () => {\n  const search = document.querySelector('.search');\n  const celsius = document.querySelector('#celsius');\n  const farenheit = document.querySelector('#farenheit');\n  const btn = document.querySelector('#searchBtn');\n\n  search.addEventListener('keyup', (e) => {\n    if (e.keyCode === 13) {\n      (0,_modules_apiData__WEBPACK_IMPORTED_MODULE_0__.default)(search.value);\n      (0,_modules_set_values__WEBPACK_IMPORTED_MODULE_1__.setUnits)();\n    }\n  });\n\n  celsius.addEventListener('click', change);\n  farenheit.addEventListener('click', change);\n  btn.addEventListener('click', () => {\n    (0,_modules_apiData__WEBPACK_IMPORTED_MODULE_0__.default)(search.value);\n    (0,_modules_set_values__WEBPACK_IMPORTED_MODULE_1__.setUnits)();\n  });\n};\n\n(0,_modules_apiData__WEBPACK_IMPORTED_MODULE_0__.default)('bogota');\naddEvents();\n(0,_modules_set_values__WEBPACK_IMPORTED_MODULE_1__.setUnits)();\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/modules/addImg.js":
/*!*******************************!*\
  !*** ./src/modules/addImg.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst setImg = async () => {\n  const weather = document.querySelector('.weatherDesc');\n  const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=y9P7QsV48ORtj9edb96XJsOGRA8n9Is8&s=${weather.textContent}`, { mode: 'cors' });\n  const catData = await response.json();\n  const div = document.querySelector('.img');\n  const img = document.querySelector('img');\n  img.src = catData.data.images.original.url;\n  div.appendChild(img);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setImg);\n\n//# sourceURL=webpack://weather-app/./src/modules/addImg.js?");

/***/ }),

/***/ "./src/modules/apiData.js":
/*!********************************!*\
  !*** ./src/modules/apiData.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _set_values__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./set_values */ \"./src/modules/set_values.js\");\n/* harmony import */ var _addImg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addImg */ \"./src/modules/addImg.js\");\n\n\n\nconst getData = async (city) => {\n  try {\n    const unit = (0,_set_values__WEBPACK_IMPORTED_MODULE_0__.getUnits)();\n    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=70c8ad9d3ce4e9eba23caf221443c534`, { mode: 'cors' });\n    const data = await response.json();\n    (0,_set_values__WEBPACK_IMPORTED_MODULE_0__.setValues)(data);\n    (0,_addImg__WEBPACK_IMPORTED_MODULE_1__.default)();\n  } catch (error) {\n    console.log(error);\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData);\n\n//# sourceURL=webpack://weather-app/./src/modules/apiData.js?");

/***/ }),

/***/ "./src/modules/set_values.js":
/*!***********************************!*\
  !*** ./src/modules/set_values.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setValues\": () => (/* binding */ setValues),\n/* harmony export */   \"getUnits\": () => (/* binding */ getUnits),\n/* harmony export */   \"setUnits\": () => (/* binding */ setUnits)\n/* harmony export */ });\nconst setValues = (data) => {\n  const city = document.querySelector('h2');\n  const weatherCond = document.querySelector('.weatherCond');\n  const weatherDesc = document.querySelector('.weatherDesc');\n  const temp = document.querySelector('.temp');\n  const feelsLike = document.querySelector('.feelsLike');\n  const humidity = document.querySelector('.humidity');\n\n  city.textContent = data.name;\n  weatherCond.textContent = data.weather[0].main;\n  weatherDesc.textContent = data.weather[0].description;\n  temp.textContent = data.main.temp;\n  feelsLike.textContent = data.main.feels_like;\n  humidity.textContent = data.main.humidity;\n};\n\nconst getUnits = () => {\n  const opt = document.getElementsByName('radioBtn');\n  let uni = '';\n  for (let i = 0; i < opt.length; i += 1) {\n    if (opt[i].checked) {\n      uni = opt[i].value;\n    }\n  }\n  return uni;\n};\n\nconst setUnits = () => {\n  const unit = getUnits();\n  const spans = document.getElementsByClassName('unit');\n  if (unit === 'metric') {\n    for (let i = 0; i < spans.length; i += 1) {\n      spans[i].textContent = '°C';\n    }\n  }\n  if (unit === 'imperial') {\n    for (let i = 0; i < spans.length; i += 1) {\n      spans[i].textContent = '°F';\n    }\n  }\n};\n\n\n\n//# sourceURL=webpack://weather-app/./src/modules/set_values.js?");

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