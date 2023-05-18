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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;1,100&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n  font-family: \\\"Segoe UI\\\", Tahoma, Geneva, Verdana, sans-serif;\\r\\n  background: linear-gradient(-45deg, #ffae00, #7e03aa, #00fffb);\\r\\n}\\r\\n\\r\\n.title {\\r\\n  margin-left: 4.8%;\\r\\n  font-size: 3em;\\r\\n}\\r\\n\\r\\nul {\\r\\n  list-style: none;\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\nmain {\\r\\n  display: flex;\\r\\n  gap: 70px;\\r\\n  margin-left: 40px;\\r\\n  width: 90vw;\\r\\n  height: 87vh;\\r\\n}\\r\\n\\r\\n.recent-scores {\\r\\n  margin-left: 2.3%;\\r\\n}\\r\\n\\r\\n.recent-scores h2 {\\r\\n  margin: 0;\\r\\n  font-family: \\\"Segoe UI\\\", Tahoma, Geneva, Verdana, sans-serif;\\r\\n  font-weight: bold;\\r\\n}\\r\\n\\r\\n.score-title {\\r\\n  display: flex;\\r\\n  gap: 20px;\\r\\n  margin-bottom: 20px;\\r\\n}\\r\\n\\r\\nform button {\\r\\n  margin-left: -10%;\\r\\n}\\r\\n\\r\\n.scores ul {\\r\\n  border: 3px solid black;\\r\\n}\\r\\n\\r\\n.scores li {\\r\\n  font-family: \\\"Segoe UI\\\", Tahoma, Geneva, Verdana, sans-serif;\\r\\n  font-weight: bold;\\r\\n  padding: 1px;\\r\\n}\\r\\n\\r\\n.scores li:nth-child(even) {\\r\\n  background-color: #a54ac7;\\r\\n}\\r\\n\\r\\n.btn {\\r\\n  --border-color: linear-gradient(-45deg, #ffae00, #7e03aa, #00fffb);\\r\\n  --border-width: 0.125em;\\r\\n  --curve-size: 0.5em;\\r\\n  --blur: 30px;\\r\\n  --bg: #080312;\\r\\n  --color: #afffff;\\r\\n\\r\\n  color: var(--color);\\r\\n  position: relative;\\r\\n  isolation: isolate;\\r\\n  display: inline-grid;\\r\\n  place-content: center;\\r\\n  padding: 0.5em 1.5em;\\r\\n  font-size: 17px;\\r\\n  border: 0;\\r\\n  text-transform: uppercase;\\r\\n  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.6);\\r\\n  clip-path:\\r\\n    polygon(\\r\\n      0%          -si            si            1            alc(\\r\\n        100%       e-s\\r\\n        -size\\r\\n      )\\r\\n    ) 10\\r\\n    0 100%;\\r\\n  transition: color 250ms;\\r\\n}\\r\\n\\r\\n.btn::after,\\r\\n.btn::before {\\r\\n  content: '';\\r\\n  position: absolute;\\r\\n  inset: 0;\\r\\n}\\r\\n\\r\\n.btn::before {\\r\\n  background: var(--border-color);\\r\\n  background-size: 300% 300%;\\r\\n  animation: move-bg7234 5s ease infinite;\\r\\n  z-index: -2;\\r\\n}\\r\\n\\r\\n@keyframes move-bg7234 {\\r\\n  0% {\\r\\n    background-position: 31% 0%;\\r\\n  }\\r\\n\\r\\n  50% {\\r\\n    background-position: 70% 100%;\\r\\n  }\\r\\n\\r\\n  100% {\\r\\n    background-position: 31% 0%;\\r\\n  }\\r\\n}\\r\\n\\r\\n.btn::after {\\r\\n  background: var(--bg);\\r\\n  z-index: -1;\\r\\n  clip-path:\\r\\n    polygon(\\r\\n      var(--border-width)\\r\\n      calc(var(--curve-size) + var(--border-width) * 0.5),\\r\\n      calc(var(--curve-size) + var(--border-width) * 0.5) var(--border-width),\\r\\n      calc(100% - var(--border-width))\\r\\n      var(--border-width),\\r\\n      calc(100% - var(--border-width))\\r\\n      calc(100% - calc(var(--curve-size) + var(--border-width) * 0.5)),\\r\\n      calc(100% - calc(var(--curve-size) + var(--border-width) * 0.5)) calc(100% - var(--border-width)),\\r\\n      var(--border-width) calc(100% - var(--border-width))\\r\\n    );\\r\\n  transition: clip-path 500ms;\\r\\n}\\r\\n\\r\\n.btn:where(:hover, :focus)::after {\\r\\n  clip-path:\\r\\n    polygon(\\r\\n      calc(100% - var(--border-width))\\r\\n      calc(100% - calc(var(--curve-size) + var(--border-width) * 0.5)),\\r\\n      calc(100% - var(--border-width))\\r\\n      var(--border-width),\\r\\n      calc(100% - var(--border-width))\\r\\n      var(--border-width),\\r\\n      calc(100% - var(--border-width))\\r\\n      calc(100% - calc(var(--curve-size) + var(--border-width) * 0.5)),\\r\\n      calc(100% - calc(var(--curve-size) + var(--border-width) * 0.5))\\r\\n      calc(100% - var(--border-width)),\\r\\n      calc(100% - calc(var(--curve-size) + var(--border-width) * 0.5))\\r\\n      calc(100% - var(--border-width))\\r\\n    );\\r\\n  transition: 200ms;\\r\\n}\\r\\n\\r\\n.btn:where(:hover, :focus) {\\r\\n  color: #fff;\\r\\n}\\r\\n\\r\\n.container {\\r\\n  font-family: \\\"Segoe UI\\\", Tahoma, Geneva, Verdana, sans-serif;\\r\\n  font-weight: bold;\\r\\n  margin: auto;\\r\\n  margin-top: -2%;\\r\\n  gap: 1em;\\r\\n}\\r\\n\\r\\n.input-container {\\r\\n  filter: drop-shadow(46px 36px 24px #4090b5) drop-shadow(-55px -40px 25px #9e30a9);\\r\\n  animation: blinkShadowsFilter 8s ease-in infinite;\\r\\n}\\r\\n\\r\\n.input-content {\\r\\n  display: grid;\\r\\n  align-content: center;\\r\\n  justify-items: center;\\r\\n  align-items: center;\\r\\n  text-align: center;\\r\\n  padding-inline: 1em;\\r\\n}\\r\\n\\r\\n.input-content::before {\\r\\n  content: \\\"\\\";\\r\\n  position: absolute;\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  filter: blur(40px);\\r\\n  -webkit-clip-path: polygon(26% 0, 66% 0, 92% 0, 100% 8%, 100% 89%, 91% 100%, 7% 100%, 0 92%, 0 0);\\r\\n  clip-path: polygon(26% 0, 66% 0, 92% 0, 100% 8%, 100% 89%, 91% 100%, 7% 100%, 0 92%, 0 0);\\r\\n  background: rgba(122, 251, 255, 0.5568627451);\\r\\n}\\r\\n\\r\\n.input-content::after {\\r\\n  content: \\\"\\\";\\r\\n  position: absolute;\\r\\n  width: 98%;\\r\\n  height: 98%;\\r\\n  box-shadow: inset 0 0 20px 20px #212121;\\r\\n  background: repeating-linear-gradient(to bottom, transparent 0%, rgba(64, 144, 181, 0.6) 1px, rgb(0, 0, 0) 3px, hsl(295, 60%, 12%) 5px, #153544 4px, transparent 0.5%), repeating-linear-gradient(to left, hsl(295, 60%, 12%) 100%, hsla(295, 60%, 12%, 0.99) 100%);\\r\\n  -webkit-clip-path: polygon(26% 0, 31% 5%, 61% 5%, 66% 0, 92% 0, 100% 8%, 100% 89%, 91% 100%, 7% 100%, 0 92%, 0 0);\\r\\n  clip-path: polygon(26% 0, 31% 5%, 61% 5%, 66% 0, 92% 0, 100% 8%, 100% 89%, 91% 100%, 7% 100%, 0 92%, 0 0);\\r\\n}\\r\\n\\r\\n.input-dist {\\r\\n  z-index: 80;\\r\\n  display: grid;\\r\\n  align-items: center;\\r\\n  text-align: center;\\r\\n  width: 100%;\\r\\n  padding-inline: 1em;\\r\\n  padding-block: 1.2em;\\r\\n  grid-template-columns: 1fr;\\r\\n}\\r\\n\\r\\n.input-type {\\r\\n  display: flex;\\r\\n  flex-wrap: wrap;\\r\\n  flex-direction: column;\\r\\n  gap: 1em;\\r\\n  font-size: 1.1rem;\\r\\n  background-color: transparent;\\r\\n  width: 100%;\\r\\n  border: none;\\r\\n}\\r\\n\\r\\n.input-is {\\r\\n  color: #fff;\\r\\n  font-size: 0.9rem;\\r\\n  background-color: transparent;\\r\\n  width: 100%;\\r\\n  box-sizing: border-box;\\r\\n  padding-inline: 0.5em;\\r\\n  padding-block: 0.7em;\\r\\n  border: none;\\r\\n  transition: all 1s ease-in-out;\\r\\n  border-bottom: 1px solid hsl(221, 26%, 43%);\\r\\n}\\r\\n\\r\\n.input-is::-moz-placeholder {\\r\\n  color: hsla(192, 100%, 88%, 0.806);\\r\\n}\\r\\n\\r\\n.input-is::placeholder {\\r\\n  color: hsla(192, 100%, 88%, 0.806);\\r\\n}\\r\\n\\r\\n.input-is:hover {\\r\\n  transition: all 1s ease-in-out;\\r\\n  background: linear-gradient(90deg, transparent 0%, rgba(102, 224, 255, 0.2) 27%, rgba(102, 224, 255, 0.2) 63%, transparent 100%);\\r\\n}\\r\\n\\r\\n.input-content:focus-within::before {\\r\\n  transition: all 1s ease-in-out;\\r\\n  background: hsla(0, 0%, 100%, 0.814);\\r\\n}\\r\\n\\r\\n.input-is:focus {\\r\\n  outline: none;\\r\\n  border-bottom: 1px solid hsl(192, 100%, 100%);\\r\\n  color: hsl(192, 100%, 88%);\\r\\n  background: linear-gradient(90deg, transparent 0%, rgba(102, 224, 255, 0.2) 27%, rgba(102, 224, 255, 0.2) 63%, transparent 100%);\\r\\n}\\r\\n\\r\\n@keyframes backglitch {\\r\\n  0% {\\r\\n    box-shadow: inset 0 20px 20px 30px #212121;\\r\\n  }\\r\\n\\r\\n  50% {\\r\\n    box-shadow: inset 0 -20px 20px 30px hsl(297, 42%, 10%);\\r\\n  }\\r\\n\\r\\n  to {\\r\\n    box-shadow: inset 0 20px 20px 30px #212121;\\r\\n  }\\r\\n}\\r\\n\\r\\n@keyframes rotate {\\r\\n  0% {\\r\\n    transform: rotate(0deg) translate(-50%, 20%);\\r\\n  }\\r\\n\\r\\n  50% {\\r\\n    transform: rotate(180deg) translate(40%, 10%);\\r\\n  }\\r\\n\\r\\n  to {\\r\\n    transform: rotate(360deg) translate(-50%, 20%);\\r\\n  }\\r\\n}\\r\\n\\r\\n@keyframes blinkShadowsFilter {\\r\\n  0% {\\r\\n    filter: drop-shadow(46px 36px 28px rgba(64, 144, 181, 0.3411764706)) drop-shadow(-55px -40px 28px #9e30a9);\\r\\n  }\\r\\n\\r\\n  25% {\\r\\n    filter: drop-shadow(46px -36px 24px rgba(64, 144, 181, 0.8980392157)) drop-shadow(-55px 40px 24px #9e30a9);\\r\\n  }\\r\\n\\r\\n  50% {\\r\\n    filter: drop-shadow(46px 36px 30px rgba(64, 144, 181, 0.8980392157)) drop-shadow(-55px 40px 30px rgba(159, 48, 169, 0.2941176471));\\r\\n  }\\r\\n\\r\\n  75% {\\r\\n    filter: drop-shadow(20px -18px 25px rgba(64, 144, 181, 0.8980392157)) drop-shadow(-20px 20px 25px rgba(159, 48, 169, 0.2941176471));\\r\\n  }\\r\\n\\r\\n  to {\\r\\n    filter: drop-shadow(46px 36px 28px rgba(64, 144, 181, 0.3411764706)) drop-shadow(-55px -40px 28px #9e30a9);\\r\\n  }\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://webpack/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_game_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/game.js */ \"./src/modules/game.js\");\n/* harmony import */ var _modules_player_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/player.js */ \"./src/modules/player.js\");\n/* harmony import */ var _modules_api_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/api.js */ \"./src/modules/api.js\");\n\n\n\n\n\nif (!_modules_api_js__WEBPACK_IMPORTED_MODULE_3__.gameId) { (0,_modules_game_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(); }\n\n_modules_api_js__WEBPACK_IMPORTED_MODULE_3__.form.addEventListener('submit', (e) => {\n  e.preventDefault();\n  (0,_modules_player_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_modules_api_js__WEBPACK_IMPORTED_MODULE_3__.gameId);\n  _modules_api_js__WEBPACK_IMPORTED_MODULE_3__.userName.value = '';\n  _modules_api_js__WEBPACK_IMPORTED_MODULE_3__.score.value = '';\n});\n\nconst refresh = document.querySelector('#refresh');\nlet result;\n\nconst getScores = async () => {\n  const response = await fetch(`${_modules_api_js__WEBPACK_IMPORTED_MODULE_3__.apiUrl}/${_modules_api_js__WEBPACK_IMPORTED_MODULE_3__.gameId}/scores/`, {\n    method: 'GET',\n    headers: {\n      'Content-Type': 'application/json',\n    },\n  });\n\n  const data = await response.json();\n  result = await data.result;\n\n  result.forEach((element) => { _modules_api_js__WEBPACK_IMPORTED_MODULE_3__.scoresList.innerHTML += `<li>${element.user}: ${element.score}</li>`; });\n};\n\n_modules_api_js__WEBPACK_IMPORTED_MODULE_3__.scoresList.classList.add('score');\nrefresh.addEventListener('click', () => {\n  _modules_api_js__WEBPACK_IMPORTED_MODULE_3__.scoresList.innerHTML = '';\n  getScores();\n});\n\n_modules_api_js__WEBPACK_IMPORTED_MODULE_3__.scores.appendChild(_modules_api_js__WEBPACK_IMPORTED_MODULE_3__.scoresList);\n\n\n//# sourceURL=webpack://webpack/./src/index.js?");

/***/ }),

/***/ "./src/modules/api.js":
/*!****************************!*\
  !*** ./src/modules/api.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   apiUrl: () => (/* binding */ apiUrl),\n/* harmony export */   form: () => (/* binding */ form),\n/* harmony export */   gameId: () => (/* binding */ gameId),\n/* harmony export */   score: () => (/* binding */ score),\n/* harmony export */   scores: () => (/* binding */ scores),\n/* harmony export */   scoresList: () => (/* binding */ scoresList),\n/* harmony export */   userName: () => (/* binding */ userName)\n/* harmony export */ });\n// Decrlaration of variables\n\nconst apiUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games';\nconst gameId = localStorage.getItem('gameId');\nconst userName = document.getElementById('name');\nconst score = document.getElementById('score');\nconst form = document.getElementById('add');\nconst scores = document.querySelector('.scores');\nconst scoresList = document.createElement('ul');\n\n\n\n//# sourceURL=webpack://webpack/./src/modules/api.js?");

/***/ }),

/***/ "./src/modules/game.js":
/*!*****************************!*\
  !*** ./src/modules/game.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ \"./src/modules/api.js\");\n\n\n/* asynchronous function game() that performs a POST request\n to create a new game on the API and stores the generated game ID in the local storage. */\n\nconst game = async () => {\n  const response = await fetch(_api_js__WEBPACK_IMPORTED_MODULE_0__.apiUrl, {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json',\n    },\n    body: JSON.stringify({\n      name: 'God of War',\n    }),\n  });\n\n  const data = await response.text();\n  localStorage.setItem('gameId', _api_js__WEBPACK_IMPORTED_MODULE_0__.gameId, data.slice(25, 45));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (game);\n\n//# sourceURL=webpack://webpack/./src/modules/game.js?");

/***/ }),

/***/ "./src/modules/player.js":
/*!*******************************!*\
  !*** ./src/modules/player.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ \"./src/modules/api.js\");\n\n\n/* asynchronous function player() that performs a POST request\nto submit player scores to the game API. */\n\nconst player = async () => {\n  const response = await fetch(`${_api_js__WEBPACK_IMPORTED_MODULE_0__.apiUrl}/${_api_js__WEBPACK_IMPORTED_MODULE_0__.gameId}/scores/`, {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json',\n    },\n    body: JSON.stringify({\n      user: _api_js__WEBPACK_IMPORTED_MODULE_0__.userName.value,\n      score: _api_js__WEBPACK_IMPORTED_MODULE_0__.score.value,\n    }),\n  });\n  const data = await response.text();\n  return data;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (player);\n\n//# sourceURL=webpack://webpack/./src/modules/player.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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