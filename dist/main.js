/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/main.css":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/main.css ***!
  \************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/sun.svg */ "./src/assets/sun.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/hills1.svg */ "./src/assets/hills1.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/hills2.svg */ "./src/assets/hills2.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=M+PLUS+2:wght@500;700&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* HEADER */\nheader {\n  display: flex;\n  justify-content: center;\n  width: 60%;\n  margin-top: 60px;\n}\n\nheader > h1 {\n  margin: 0;\n  color: white;\n  font-weight: 700;\n  font-size: 52px;\n  padding: 36px 0;\n}\n\n.user-input {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 80%;\n}\n\n.city-name {\n  background: #fff;\n  border-radius: 50px;\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n  padding: 5px;\n  text-align: center;\n  font-size: 35px;\n  font-weight: 700;\n  color: #4d4b4b;\n  font-family: \"Poppins\", Verdana, Geneva, Tahoma, sans-serif;\n\n  border: none;\n  width: 90%;\n}\n\n.city-name:focus {\n  outline: none;\n}\n\n::placeholder {\n  font-weight: 700;\n  color: #4d4b4b;\n  opacity: 1;\n  font-size: 35px;\n\n  font-family: \"Poppins\", Verdana, Geneva, Tahoma, sans-serif;\n}\n\n.city-name:focus::placeholder {\n  color: transparent;\n}\n\n.user-input > button {\n  cursor: pointer;\n  background-color: white;\n  font-family: \"Poppins\";\n  font-size: 35px;\n  padding: 3px 21px;\n  font-weight: 700;\n  border: none;\n  border-top-right-radius: 35px;\n  border: solid 2px white;\n  border-bottom-right-radius: 35px;\n  border-left-width: 0;\n\n  width: 10%;\n  min-width: 70px;\n}\n\n.user-input img {\n  vertical-align: middle;\n  height: 30px;\n  width: auto;\n  position: relative;\n  bottom: 2px;\n}\n\n/* DISPLAY */\n.weather-display {\n  display: flex;\n  width: 70%;\n  opacity: 1;\n  justify-content: center;\n  color: #fff;\n\n  font-size: 50px;\n  padding: 80px 20px;\n  gap: 50px;\n}\n\n.temp-info {\n  display: flex;\n  flex-direction: column;\n  font-size: 50px;\n  justify-content: center;\n}\n\n.display-city-name {\n  font-size: 45px;\n  font-weight: 500;\n}\n\n.display-condition{\n  font-size: 40px;\n  font-weight: 500;\n  letter-spacing: 0.1em;\n}\n\n.display-current-temp {\n  font-weight: 700;\n  line-height: 40px;\n}\n\n@keyframes slide-in {\n  from {\n    opacity: 0;\n    transform: translateY(-100px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n.info-display {\n  font-size: 30px;\n  font-weight: 500;\n  font-family: \"M PLUS 2\", Verdana, Geneva, Tahoma, sans-serif;\n  color: white;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  gap: 20px;\n  transition: all 0.7s ease-in-out;\n}\n\n.white-block {\n  height: 70px;\n  width: 7px;\n  background-color: #fff;\n}\n\n.info {\n  display: flex;\n  justify-content: center;\n  gap: 100px;\n}\n\n.info-holder {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 450px;\n}\n\n.max-temp-logo,\n.min-temp-logo {\n  height: 20px;\n  margin-left: 7px;\n  display: inline-block;\n}\n\n\n.cast-temp {\n  display: flex;\n  flex-direction: column;\n  text-align: left;\n  gap: 2px;\n}\n\n.min-max-temp {\n  display: flex;\n  flex-direction: column;\n}\n\n.humidity {\n  display: flex;\n  gap: 5px;\n}\n\n.humidity > img {\n  display: inline-block;\n}\n\n.cast {\n  text-align: center;\n  font-weight: 700;\n  letter-spacing: 2px;\n}\n\n.misc {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 5px;\n}\n\n.wind {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n}\n\n.wind > img {\n  display: inline-block;\n}\n\n.min-temp,\n.max-temp {\n  text-align: right;\n}\n/* LOADING */\n.loading-begin {\n  color: white;\n  font-family: \"Poppins\", Verdana, Geneva, Tahoma, sans-serif;\n  font-size: 60px;\n  font-weight: 500;\n  width: 100%;\n  text-align: center;\n\n  position: absolute;\n  height: 100vh;\n  width: 100%;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #01223aef;\n  z-index: 10;\n}\n\n/* WEATHER EFFECTs */\n.sun {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: cover;\n  height: 150px;\n  width: 150px;\n  z-index: 9;\n\n  border: none;\n  border-radius: 50%;\n  box-shadow: 0 0 60px 10px rgb(255 255 0);\n  display: block;\n  transform: scale(0);\n  animation: show-in 0.4s ease-in-out forwards;\n}\n\n@keyframes show-in {\n  0%{\n    transform: scale(0);\n  }\n  50%{\n    transform: scale(1.2);\n  }\n  100%{\n    transform: scale(1);\n  }\n}\n\n.hills-container {\n  min-height: 400px;\n  height: 45vh;\n  width: 100%;\n\n  position: relative;\n  overflow: clip;\n}\n\n.hills1,\n.hills2 {\n  background-size: cover;\n  background-repeat: no-repeat;\n  position: absolute;\n  bottom: 0;\n\n  width: 100%;\n  height: 100%;\n}\n.hills1 {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  height: 70%;\n  z-index: 9;\n}\n\n.hills2 {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  z-index: 8;\n}\n\n/* BODY */\nbody,\nhtml {\n  font-family: \"Poppins\", sans-serif, Verdana, Geneva, Tahoma;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  height: 100%;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  box-sizing: border-box;\n  background-color: #0095ff;\n}\n\n*::-webkit-scrollbar {\n  display: none;\n}\n\n* {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n\nfooter{\n  background-color: #003000;\n  width: 100%;\n  height: 100%;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  color: white;\n  font-size: 30px;\n}\n\n.credits{\n  padding: 30px;\n}\n\n/* MEDIA QUERIES */\n@media screen and (max-width: 1048px) {\n}\n", "",{"version":3,"sources":["webpack://./src/main.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=M+PLUS+2:wght@500;700&display=swap\");\n\n/* HEADER */\nheader {\n  display: flex;\n  justify-content: center;\n  width: 60%;\n  margin-top: 60px;\n}\n\nheader > h1 {\n  margin: 0;\n  color: white;\n  font-weight: 700;\n  font-size: 52px;\n  padding: 36px 0;\n}\n\n.user-input {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 80%;\n}\n\n.city-name {\n  background: #fff;\n  border-radius: 50px;\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n  padding: 5px;\n  text-align: center;\n  font-size: 35px;\n  font-weight: 700;\n  color: #4d4b4b;\n  font-family: \"Poppins\", Verdana, Geneva, Tahoma, sans-serif;\n\n  border: none;\n  width: 90%;\n}\n\n.city-name:focus {\n  outline: none;\n}\n\n::placeholder {\n  font-weight: 700;\n  color: #4d4b4b;\n  opacity: 1;\n  font-size: 35px;\n\n  font-family: \"Poppins\", Verdana, Geneva, Tahoma, sans-serif;\n}\n\n.city-name:focus::placeholder {\n  color: transparent;\n}\n\n.user-input > button {\n  cursor: pointer;\n  background-color: white;\n  font-family: \"Poppins\";\n  font-size: 35px;\n  padding: 3px 21px;\n  font-weight: 700;\n  border: none;\n  border-top-right-radius: 35px;\n  border: solid 2px white;\n  border-bottom-right-radius: 35px;\n  border-left-width: 0;\n\n  width: 10%;\n  min-width: 70px;\n}\n\n.user-input img {\n  vertical-align: middle;\n  height: 30px;\n  width: auto;\n  position: relative;\n  bottom: 2px;\n}\n\n/* DISPLAY */\n.weather-display {\n  display: flex;\n  width: 70%;\n  opacity: 1;\n  justify-content: center;\n  color: #fff;\n\n  font-size: 50px;\n  padding: 80px 20px;\n  gap: 50px;\n}\n\n.temp-info {\n  display: flex;\n  flex-direction: column;\n  font-size: 50px;\n  justify-content: center;\n}\n\n.display-city-name {\n  font-size: 45px;\n  font-weight: 500;\n}\n\n.display-condition{\n  font-size: 40px;\n  font-weight: 500;\n  letter-spacing: 0.1em;\n}\n\n.display-current-temp {\n  font-weight: 700;\n  line-height: 40px;\n}\n\n@keyframes slide-in {\n  from {\n    opacity: 0;\n    transform: translateY(-100px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n.info-display {\n  font-size: 30px;\n  font-weight: 500;\n  font-family: \"M PLUS 2\", Verdana, Geneva, Tahoma, sans-serif;\n  color: white;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  gap: 20px;\n  transition: all 0.7s ease-in-out;\n}\n\n.white-block {\n  height: 70px;\n  width: 7px;\n  background-color: #fff;\n}\n\n.info {\n  display: flex;\n  justify-content: center;\n  gap: 100px;\n}\n\n.info-holder {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 450px;\n}\n\n.max-temp-logo,\n.min-temp-logo {\n  height: 20px;\n  margin-left: 7px;\n  display: inline-block;\n}\n\n\n.cast-temp {\n  display: flex;\n  flex-direction: column;\n  text-align: left;\n  gap: 2px;\n}\n\n.min-max-temp {\n  display: flex;\n  flex-direction: column;\n}\n\n.humidity {\n  display: flex;\n  gap: 5px;\n}\n\n.humidity > img {\n  display: inline-block;\n}\n\n.cast {\n  text-align: center;\n  font-weight: 700;\n  letter-spacing: 2px;\n}\n\n.misc {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 5px;\n}\n\n.wind {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n}\n\n.wind > img {\n  display: inline-block;\n}\n\n.min-temp,\n.max-temp {\n  text-align: right;\n}\n/* LOADING */\n.loading-begin {\n  color: white;\n  font-family: \"Poppins\", Verdana, Geneva, Tahoma, sans-serif;\n  font-size: 60px;\n  font-weight: 500;\n  width: 100%;\n  text-align: center;\n\n  position: absolute;\n  height: 100vh;\n  width: 100%;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #01223aef;\n  z-index: 10;\n}\n\n/* WEATHER EFFECTs */\n.sun {\n  background-image: url(\"./assets/sun.svg\");\n  background-size: cover;\n  height: 150px;\n  width: 150px;\n  z-index: 9;\n\n  border: none;\n  border-radius: 50%;\n  box-shadow: 0 0 60px 10px rgb(255 255 0);\n  display: block;\n  transform: scale(0);\n  animation: show-in 0.4s ease-in-out forwards;\n}\n\n@keyframes show-in {\n  0%{\n    transform: scale(0);\n  }\n  50%{\n    transform: scale(1.2);\n  }\n  100%{\n    transform: scale(1);\n  }\n}\n\n.hills-container {\n  min-height: 400px;\n  height: 45vh;\n  width: 100%;\n\n  position: relative;\n  overflow: clip;\n}\n\n.hills1,\n.hills2 {\n  background-size: cover;\n  background-repeat: no-repeat;\n  position: absolute;\n  bottom: 0;\n\n  width: 100%;\n  height: 100%;\n}\n.hills1 {\n  background-image: url(\"./assets/hills1.svg\");\n  height: 70%;\n  z-index: 9;\n}\n\n.hills2 {\n  background-image: url(\"./assets/hills2.svg\");\n  z-index: 8;\n}\n\n/* BODY */\nbody,\nhtml {\n  font-family: \"Poppins\", sans-serif, Verdana, Geneva, Tahoma;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  height: 100%;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  box-sizing: border-box;\n  background-color: #0095ff;\n}\n\n*::-webkit-scrollbar {\n  display: none;\n}\n\n* {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n\nfooter{\n  background-color: #003000;\n  width: 100%;\n  height: 100%;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  color: white;\n  font-size: 30px;\n}\n\n.credits{\n  padding: 30px;\n}\n\n/* MEDIA QUERIES */\n@media screen and (max-width: 1048px) {\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/main.css":
/*!**********************!*\
  !*** ./src/main.css ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/apiLoadingHandler.js":
/*!**********************************!*\
  !*** ./src/apiLoadingHandler.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const apiHandler = (() => {
  let first = true;
  const apiLink = "https://api.openweathermap.org/data/2.5/weather?";
  const apiKey = "94a2aad4a38121e794735a95ee415a76";

  async function callApi(cityName) {
    document.body.appendChild(loadingHandler.returnLoading());
    const response = await fetch(apiLink + `q=${cityName}&appid=${apiKey}`, {
      mode: "cors",
    });
    const data = await response.json();
    return data;
  }

  return {
    callApi,
  };
})();

const loadingHandler = (() => {
  const returnLoading = () => {
    const loading = document.createElement("div");
    const fetchData = document.createElement("div");

    loading.classList.add("loading-begin");
    fetchData.classList.add("text");

    fetchData.textContent = "Fetching Data";

    loading.appendChild(fetchData);
    return loading;
  };
  return {
    returnLoading,
  };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (apiHandler);


/***/ }),

/***/ "./src/imageHandler.js":
/*!*****************************!*\
  !*** ./src/imageHandler.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_up_triangle_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/up-triangle.svg */ "./src/assets/up-triangle.svg");
/* harmony import */ var _assets_down_triangle_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/down-triangle.svg */ "./src/assets/down-triangle.svg");



const imageHandler = () => {
  async function getUpTriangle() {
    return _assets_up_triangle_svg__WEBPACK_IMPORTED_MODULE_0__;
  }
  async function getDownTriangle() {
    return _assets_down_triangle_svg__WEBPACK_IMPORTED_MODULE_1__;
  }
  return {
    getUpTriangle,
    getDownTriangle,
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (imageHandler);


/***/ }),

/***/ "./src/assets/down-triangle.svg":
/*!**************************************!*\
  !*** ./src/assets/down-triangle.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7cec79e041a3fedd1b2e.svg";

/***/ }),

/***/ "./src/assets/hills1.svg":
/*!*******************************!*\
  !*** ./src/assets/hills1.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "39b05538588d274e774c.svg";

/***/ }),

/***/ "./src/assets/hills2.svg":
/*!*******************************!*\
  !*** ./src/assets/hills2.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7f33d3ead7aa46431bfc.svg";

/***/ }),

/***/ "./src/assets/sun.svg":
/*!****************************!*\
  !*** ./src/assets/sun.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "818f59af4f556d601fba.svg";

/***/ }),

/***/ "./src/assets/up-triangle.svg":
/*!************************************!*\
  !*** ./src/assets/up-triangle.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9e5d032d941716597a91.svg";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _apiLoadingHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiLoadingHandler */ "./src/apiLoadingHandler.js");
/* harmony import */ var _imageHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imageHandler */ "./src/imageHandler.js");
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main.css */ "./src/main.css");




const displayHandler = () => {
  const weatherDisplay = document.querySelector(".weather-display");
  
  const returnCondition = (cond) => {
    const condDiv = document.createElement("div");
    condDiv.textContent = cond;
    condDiv.classList.add("display-condition");
    return condDiv;
  };

  const returnCityName = (name) => {
    const nameDiv = document.createElement("div");
    nameDiv.textContent = name;
    nameDiv.classList.add("display-city-name");
    return nameDiv;
  };

  const returnCurrentTemp = (temp) => {
    const currentTemp = document.createElement("div");
    currentTemp.classList.add("display-current-temp");
    currentTemp.textContent = `${Math.round(temp - 273)}°C`;
    return currentTemp;
  };

  const returnMaxTemp = (temp) => {
    const maxTemp = document.createElement("div");
    maxTemp.classList.add("max-temp");

    (0,_imageHandler__WEBPACK_IMPORTED_MODULE_1__["default"])()
      .getUpTriangle()
      .then((dat) => {
        const newImage = new Image();
        newImage.src = dat;
        newImage.classList.add("max-temp-logo");
        maxTemp.appendChild(newImage);
      });
    maxTemp.textContent = `${Math.round(temp - 273)}°C`;
    return maxTemp;
  };

  const returnMinTemp = (temp) => {
    const minTemp = document.createElement("div");
    minTemp.classList.add("min-temp");
    (0,_imageHandler__WEBPACK_IMPORTED_MODULE_1__["default"])()
      .getDownTriangle()
      .then((dat) => {
        const newImage = new Image();
        newImage.src = dat;
        newImage.classList.add("min-temp-logo");
        minTemp.appendChild(newImage);
      });
    minTemp.textContent = `${Math.round(temp - 273)}°C`;
    return minTemp;
  };




  const updateData = (data) => {
    weatherDisplay.innerHTML = "";
    console.log(data);

    const tempInfo = document.createElement("div");
    tempInfo.classList.add("temp-info");

    const sun = document.createElement("div");
    sun.classList.add("sun");

    tempInfo.appendChild(returnCurrentTemp(data["main"]["temp"]));
    tempInfo.appendChild(returnCondition(data["weather"][0]["main"]));
    tempInfo.appendChild(returnCityName(data["name"]));

    weatherDisplay.appendChild(sun);
    weatherDisplay.appendChild(tempInfo);

    document.body.removeChild(document.querySelector(".loading-begin"));
    return;
  };
  return {
    updateData,
  };
};

const formHandler = () => {
  const inputForm = document.forms[0];
  inputForm.onsubmit = passCityName;

  function getCityName() {
    return inputForm.elements[0].value;
  }

  function passCityName(e) {
    const cityName = getCityName();
    e.preventDefault();

    if (cityName == "") {
      console.log("Empty");
      inputForm.reset();
      return;
    }
    _apiLoadingHandler__WEBPACK_IMPORTED_MODULE_0__["default"].callApi(cityName)
      .then((data) => {
        displayHandler().updateData(data);
      })
      .catch((error) => {
        console.log(error);
      });
    inputForm.reset();
  }
};

window.addEventListener("DOMContentLoaded", () => {
  _apiLoadingHandler__WEBPACK_IMPORTED_MODULE_0__["default"].callApi("New Delhi")
    .then((data) => displayHandler().updateData(data))
    .catch((error) => {
      console.log(error);
    });
});
window.addEventListener("DOMContentLoaded", formHandler);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQSxPQUFPO0FBQ1AsNkJBQTZCLHVCQUF1QjtBQUNwRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUkseURBQVk7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLDZCQUE2Qix1QkFBdUI7QUFDcEQ7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGtFQUNVO0FBQ2Q7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUUsa0VBQ1U7QUFDWjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQztBQUNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vV2VhdGhlci1BcHAvLi9zcmMvbWFpbi5jc3MiLCJ3ZWJwYWNrOi8vV2VhdGhlci1BcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL1dlYXRoZXItQXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9XZWF0aGVyLUFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL1dlYXRoZXItQXBwLy4vc3JjL21haW4uY3NzP2RkZDMiLCJ3ZWJwYWNrOi8vV2VhdGhlci1BcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vV2VhdGhlci1BcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL1dlYXRoZXItQXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL1dlYXRoZXItQXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL1dlYXRoZXItQXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vV2VhdGhlci1BcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9XZWF0aGVyLUFwcC8uL3NyYy9hcGlMb2FkaW5nSGFuZGxlci5qcyIsIndlYnBhY2s6Ly9XZWF0aGVyLUFwcC8uL3NyYy9pbWFnZUhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vV2VhdGhlci1BcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vV2VhdGhlci1BcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vV2VhdGhlci1BcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL1dlYXRoZXItQXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vV2VhdGhlci1BcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9XZWF0aGVyLUFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL1dlYXRoZXItQXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL1dlYXRoZXItQXBwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL1dlYXRoZXItQXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9zdW4uc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvaGlsbHMxLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2hpbGxzMi5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6d2dodEA0MDA7NTAwOzcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1NK1BMVVMrMjp3Z2h0QDUwMDs3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogSEVBREVSICovXFxuaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiA2MCU7XFxuICBtYXJnaW4tdG9wOiA2MHB4O1xcbn1cXG5cXG5oZWFkZXIgPiBoMSB7XFxuICBtYXJnaW46IDA7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgZm9udC1zaXplOiA1MnB4O1xcbiAgcGFkZGluZzogMzZweCAwO1xcbn1cXG5cXG4udXNlci1pbnB1dCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDgwJTtcXG59XFxuXFxuLmNpdHktbmFtZSB7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XFxuICBwYWRkaW5nOiA1cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDM1cHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgY29sb3I6ICM0ZDRiNGI7XFxuICBmb250LWZhbWlseTogXFxcIlBvcHBpbnNcXFwiLCBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcXG5cXG4gIGJvcmRlcjogbm9uZTtcXG4gIHdpZHRoOiA5MCU7XFxufVxcblxcbi5jaXR5LW5hbWU6Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuOjpwbGFjZWhvbGRlciB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgY29sb3I6ICM0ZDRiNGI7XFxuICBvcGFjaXR5OiAxO1xcbiAgZm9udC1zaXplOiAzNXB4O1xcblxcbiAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIiwgVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5jaXR5LW5hbWU6Zm9jdXM6OnBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLnVzZXItaW5wdXQgPiBidXR0b24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBmb250LWZhbWlseTogXFxcIlBvcHBpbnNcXFwiO1xcbiAgZm9udC1zaXplOiAzNXB4O1xcbiAgcGFkZGluZzogM3B4IDIxcHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDM1cHg7XFxuICBib3JkZXI6IHNvbGlkIDJweCB3aGl0ZTtcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAzNXB4O1xcbiAgYm9yZGVyLWxlZnQtd2lkdGg6IDA7XFxuXFxuICB3aWR0aDogMTAlO1xcbiAgbWluLXdpZHRoOiA3MHB4O1xcbn1cXG5cXG4udXNlci1pbnB1dCBpbWcge1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIGhlaWdodDogMzBweDtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYm90dG9tOiAycHg7XFxufVxcblxcbi8qIERJU1BMQVkgKi9cXG4ud2VhdGhlci1kaXNwbGF5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogNzAlO1xcbiAgb3BhY2l0eTogMTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgY29sb3I6ICNmZmY7XFxuXFxuICBmb250LXNpemU6IDUwcHg7XFxuICBwYWRkaW5nOiA4MHB4IDIwcHg7XFxuICBnYXA6IDUwcHg7XFxufVxcblxcbi50ZW1wLWluZm8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmb250LXNpemU6IDUwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmRpc3BsYXktY2l0eS1uYW1lIHtcXG4gIGZvbnQtc2l6ZTogNDVweDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi5kaXNwbGF5LWNvbmRpdGlvbntcXG4gIGZvbnQtc2l6ZTogNDBweDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBsZXR0ZXItc3BhY2luZzogMC4xZW07XFxufVxcblxcbi5kaXNwbGF5LWN1cnJlbnQtdGVtcCB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XFxufVxcblxcbkBrZXlmcmFtZXMgc2xpZGUtaW4ge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwcHgpO1xcbiAgfVxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxuICB9XFxufVxcblxcbi5pbmZvLWRpc3BsYXkge1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTSBQTFVTIDJcXFwiLCBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGdhcDogMjBweDtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjdzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4ud2hpdGUtYmxvY2sge1xcbiAgaGVpZ2h0OiA3MHB4O1xcbiAgd2lkdGg6IDdweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxufVxcblxcbi5pbmZvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMTAwcHg7XFxufVxcblxcbi5pbmZvLWhvbGRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiA0NTBweDtcXG59XFxuXFxuLm1heC10ZW1wLWxvZ28sXFxuLm1pbi10ZW1wLWxvZ28ge1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgbWFyZ2luLWxlZnQ6IDdweDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXFxuXFxuLmNhc3QtdGVtcCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBnYXA6IDJweDtcXG59XFxuXFxuLm1pbi1tYXgtdGVtcCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmh1bWlkaXR5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDVweDtcXG59XFxuXFxuLmh1bWlkaXR5ID4gaW1nIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXFxuLmNhc3Qge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XFxufVxcblxcbi5taXNjIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiA1cHg7XFxufVxcblxcbi53aW5kIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAycHg7XFxufVxcblxcbi53aW5kID4gaW1nIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXFxuLm1pbi10ZW1wLFxcbi5tYXgtdGVtcCB7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuLyogTE9BRElORyAqL1xcbi5sb2FkaW5nLWJlZ2luIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGluc1xcXCIsIFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiA2MHB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcblxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDAlO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMTIyM2FlZjtcXG4gIHotaW5kZXg6IDEwO1xcbn1cXG5cXG4vKiBXRUFUSEVSIEVGRkVDVHMgKi9cXG4uc3VuIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgaGVpZ2h0OiAxNTBweDtcXG4gIHdpZHRoOiAxNTBweDtcXG4gIHotaW5kZXg6IDk7XFxuXFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBib3gtc2hhZG93OiAwIDAgNjBweCAxMHB4IHJnYigyNTUgMjU1IDApO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgYW5pbWF0aW9uOiBzaG93LWluIDAuNHMgZWFzZS1pbi1vdXQgZm9yd2FyZHM7XFxufVxcblxcbkBrZXlmcmFtZXMgc2hvdy1pbiB7XFxuICAwJXtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gIH1cXG4gIDUwJXtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbiAgfVxcbiAgMTAwJXtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gIH1cXG59XFxuXFxuLmhpbGxzLWNvbnRhaW5lciB7XFxuICBtaW4taGVpZ2h0OiA0MDBweDtcXG4gIGhlaWdodDogNDV2aDtcXG4gIHdpZHRoOiAxMDAlO1xcblxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgb3ZlcmZsb3c6IGNsaXA7XFxufVxcblxcbi5oaWxsczEsXFxuLmhpbGxzMiB7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMDtcXG5cXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4uaGlsbHMxIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuICBoZWlnaHQ6IDcwJTtcXG4gIHotaW5kZXg6IDk7XFxufVxcblxcbi5oaWxsczIge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG4gIHotaW5kZXg6IDg7XFxufVxcblxcbi8qIEJPRFkgKi9cXG5ib2R5LFxcbmh0bWwge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIiwgc2Fucy1zZXJpZiwgVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWE7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbmJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDk1ZmY7XFxufVxcblxcbio6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbioge1xcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xcbn1cXG5cXG5mb290ZXJ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAzMDAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbn1cXG5cXG4uY3JlZGl0c3tcXG4gIHBhZGRpbmc6IDMwcHg7XFxufVxcblxcbi8qIE1FRElBIFFVRVJJRVMgKi9cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDQ4cHgpIHtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL21haW4uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdBLFdBQVc7QUFDWDtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsVUFBVTtFQUNWLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IsMEJBQTBCO0VBQzFCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsMkRBQTJEOztFQUUzRCxZQUFZO0VBQ1osVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxVQUFVO0VBQ1YsZUFBZTs7RUFFZiwyREFBMkQ7QUFDN0Q7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osNkJBQTZCO0VBQzdCLHVCQUF1QjtFQUN2QixnQ0FBZ0M7RUFDaEMsb0JBQW9COztFQUVwQixVQUFVO0VBQ1YsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjtFQUNs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QTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1COztFQUVuQixzQkFBc0I7RUFDdEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsNkNBQTZDO0FBQy9DOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxZQUFZOztFQUVaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCOztFQUV2QixZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQSxrQkFBa0I7QUFDbEI7QUFDQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOndnaHRANDAwOzUwMDs3MDAmZGlzcGxheT1zd2FwXFxcIik7XFxuQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TStQTFVTKzI6d2dodEA1MDA7NzAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcblxcbi8qIEhFQURFUiAqL1xcbmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogNjAlO1xcbiAgbWFyZ2luLXRvcDogNjBweDtcXG59XFxuXFxuaGVhZGVyID4gaDEge1xcbiAgbWFyZ2luOiAwO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGZvbnQtc2l6ZTogNTJweDtcXG4gIHBhZGRpbmc6IDM2cHggMDtcXG59XFxuXFxuLnVzZXItaW5wdXQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiA4MCU7XFxufVxcblxcbi5jaXR5LW5hbWUge1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAzNXB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGNvbG9yOiAjNGQ0YjRiO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIiwgVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XFxuXFxuICBib3JkZXI6IG5vbmU7XFxuICB3aWR0aDogOTAlO1xcbn1cXG5cXG4uY2l0eS1uYW1lOmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbjo6cGxhY2Vob2xkZXIge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGNvbG9yOiAjNGQ0YjRiO1xcbiAgb3BhY2l0eTogMTtcXG4gIGZvbnQtc2l6ZTogMzVweDtcXG5cXG4gIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGluc1xcXCIsIFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uY2l0eS1uYW1lOmZvY3VzOjpwbGFjZWhvbGRlciB7XFxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi51c2VyLWlucHV0ID4gYnV0dG9uIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIjtcXG4gIGZvbnQtc2l6ZTogMzVweDtcXG4gIHBhZGRpbmc6IDNweCAyMXB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzNXB4O1xcbiAgYm9yZGVyOiBzb2xpZCAycHggd2hpdGU7XFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMzVweDtcXG4gIGJvcmRlci1sZWZ0LXdpZHRoOiAwO1xcblxcbiAgd2lkdGg6IDEwJTtcXG4gIG1pbi13aWR0aDogNzBweDtcXG59XFxuXFxuLnVzZXItaW5wdXQgaW1nIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICB3aWR0aDogYXV0bztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJvdHRvbTogMnB4O1xcbn1cXG5cXG4vKiBESVNQTEFZICovXFxuLndlYXRoZXItZGlzcGxheSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDcwJTtcXG4gIG9wYWNpdHk6IDE7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGNvbG9yOiAjZmZmO1xcblxcbiAgZm9udC1zaXplOiA1MHB4O1xcbiAgcGFkZGluZzogODBweCAyMHB4O1xcbiAgZ2FwOiA1MHB4O1xcbn1cXG5cXG4udGVtcC1pbmZvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZm9udC1zaXplOiA1MHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5kaXNwbGF5LWNpdHktbmFtZSB7XFxuICBmb250LXNpemU6IDQ1cHg7XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4uZGlzcGxheS1jb25kaXRpb257XFxuICBmb250LXNpemU6IDQwcHg7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xcbn1cXG5cXG4uZGlzcGxheS1jdXJyZW50LXRlbXAge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNsaWRlLWluIHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMHB4KTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbiAgfVxcbn1cXG5cXG4uaW5mby1kaXNwbGF5IHtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBmb250LWZhbWlseTogXFxcIk0gUExVUyAyXFxcIiwgVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBnYXA6IDIwcHg7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC43cyBlYXNlLWluLW91dDtcXG59XFxuXFxuLndoaXRlLWJsb2NrIHtcXG4gIGhlaWdodDogNzBweDtcXG4gIHdpZHRoOiA3cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uaW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDEwMHB4O1xcbn1cXG5cXG4uaW5mby1ob2xkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogNDUwcHg7XFxufVxcblxcbi5tYXgtdGVtcC1sb2dvLFxcbi5taW4tdGVtcC1sb2dvIHtcXG4gIGhlaWdodDogMjBweDtcXG4gIG1hcmdpbi1sZWZ0OiA3cHg7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcblxcbi5jYXN0LXRlbXAge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgZ2FwOiAycHg7XFxufVxcblxcbi5taW4tbWF4LXRlbXAge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5odW1pZGl0eSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiA1cHg7XFxufVxcblxcbi5odW1pZGl0eSA+IGltZyB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbi5jYXN0IHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xcbn1cXG5cXG4ubWlzYyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogNXB4O1xcbn1cXG5cXG4ud2luZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMnB4O1xcbn1cXG5cXG4ud2luZCA+IGltZyB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbi5taW4tdGVtcCxcXG4ubWF4LXRlbXAge1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxufVxcbi8qIExPQURJTkcgKi9cXG4ubG9hZGluZy1iZWdpbiB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LWZhbWlseTogXFxcIlBvcHBpbnNcXFwiLCBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogNjBweDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwJTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDEyMjNhZWY7XFxuICB6LWluZGV4OiAxMDtcXG59XFxuXFxuLyogV0VBVEhFUiBFRkZFQ1RzICovXFxuLnN1biB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4vYXNzZXRzL3N1bi5zdmdcXFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBoZWlnaHQ6IDE1MHB4O1xcbiAgd2lkdGg6IDE1MHB4O1xcbiAgei1pbmRleDogOTtcXG5cXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJveC1zaGFkb3c6IDAgMCA2MHB4IDEwcHggcmdiKDI1NSAyNTUgMCk7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICBhbmltYXRpb246IHNob3ctaW4gMC40cyBlYXNlLWluLW91dCBmb3J3YXJkcztcXG59XFxuXFxuQGtleWZyYW1lcyBzaG93LWluIHtcXG4gIDAle1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgfVxcbiAgNTAle1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxuICB9XFxuICAxMDAle1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgfVxcbn1cXG5cXG4uaGlsbHMtY29udGFpbmVyIHtcXG4gIG1pbi1oZWlnaHQ6IDQwMHB4O1xcbiAgaGVpZ2h0OiA0NXZoO1xcbiAgd2lkdGg6IDEwMCU7XFxuXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBvdmVyZmxvdzogY2xpcDtcXG59XFxuXFxuLmhpbGxzMSxcXG4uaGlsbHMyIHtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAwO1xcblxcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbi5oaWxsczEge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuL2Fzc2V0cy9oaWxsczEuc3ZnXFxcIik7XFxuICBoZWlnaHQ6IDcwJTtcXG4gIHotaW5kZXg6IDk7XFxufVxcblxcbi5oaWxsczIge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuL2Fzc2V0cy9oaWxsczIuc3ZnXFxcIik7XFxuICB6LWluZGV4OiA4O1xcbn1cXG5cXG4vKiBCT0RZICovXFxuYm9keSxcXG5odG1sIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGluc1xcXCIsIHNhbnMtc2VyaWYsIFZlcmRhbmEsIEdlbmV2YSwgVGFob21hO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5NWZmO1xcbn1cXG5cXG4qOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4qIHtcXG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcXG59XFxuXFxuZm9vdGVye1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMzAwMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG59XFxuXFxuLmNyZWRpdHN7XFxuICBwYWRkaW5nOiAzMHB4O1xcbn1cXG5cXG4vKiBNRURJQSBRVUVSSUVTICovXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTA0OHB4KSB7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgYXBpSGFuZGxlciA9ICgoKSA9PiB7XG4gIGxldCBmaXJzdCA9IHRydWU7XG4gIGNvbnN0IGFwaUxpbmsgPSBcImh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP1wiO1xuICBjb25zdCBhcGlLZXkgPSBcIjk0YTJhYWQ0YTM4MTIxZTc5NDczNWE5NWVlNDE1YTc2XCI7XG5cbiAgYXN5bmMgZnVuY3Rpb24gY2FsbEFwaShjaXR5TmFtZSkge1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobG9hZGluZ0hhbmRsZXIucmV0dXJuTG9hZGluZygpKTtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGFwaUxpbmsgKyBgcT0ke2NpdHlOYW1lfSZhcHBpZD0ke2FwaUtleX1gLCB7XG4gICAgICBtb2RlOiBcImNvcnNcIixcbiAgICB9KTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBjYWxsQXBpLFxuICB9O1xufSkoKTtcblxuY29uc3QgbG9hZGluZ0hhbmRsZXIgPSAoKCkgPT4ge1xuICBjb25zdCByZXR1cm5Mb2FkaW5nID0gKCkgPT4ge1xuICAgIGNvbnN0IGxvYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGZldGNoRGF0YSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBsb2FkaW5nLmNsYXNzTGlzdC5hZGQoXCJsb2FkaW5nLWJlZ2luXCIpO1xuICAgIGZldGNoRGF0YS5jbGFzc0xpc3QuYWRkKFwidGV4dFwiKTtcblxuICAgIGZldGNoRGF0YS50ZXh0Q29udGVudCA9IFwiRmV0Y2hpbmcgRGF0YVwiO1xuXG4gICAgbG9hZGluZy5hcHBlbmRDaGlsZChmZXRjaERhdGEpO1xuICAgIHJldHVybiBsb2FkaW5nO1xuICB9O1xuICByZXR1cm4ge1xuICAgIHJldHVybkxvYWRpbmcsXG4gIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBhcGlIYW5kbGVyO1xuIiwiaW1wb3J0IFVwVHJpYW5nbGUgZnJvbSBcIi4vYXNzZXRzL3VwLXRyaWFuZ2xlLnN2Z1wiO1xuaW1wb3J0IERvd25UcmlhbmdsZSBmcm9tIFwiLi9hc3NldHMvZG93bi10cmlhbmdsZS5zdmdcIjtcblxuY29uc3QgaW1hZ2VIYW5kbGVyID0gKCkgPT4ge1xuICBhc3luYyBmdW5jdGlvbiBnZXRVcFRyaWFuZ2xlKCkge1xuICAgIHJldHVybiBVcFRyaWFuZ2xlO1xuICB9XG4gIGFzeW5jIGZ1bmN0aW9uIGdldERvd25UcmlhbmdsZSgpIHtcbiAgICByZXR1cm4gRG93blRyaWFuZ2xlO1xuICB9XG4gIHJldHVybiB7XG4gICAgZ2V0VXBUcmlhbmdsZSxcbiAgICBnZXREb3duVHJpYW5nbGUsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBpbWFnZUhhbmRsZXI7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsImltcG9ydCBhcGlIYW5kbGVyIGZyb20gXCIuL2FwaUxvYWRpbmdIYW5kbGVyXCI7XG5pbXBvcnQgaW1hZ2VIYW5kbGVyIGZyb20gXCIuL2ltYWdlSGFuZGxlclwiO1xuaW1wb3J0IFwiLi9tYWluLmNzc1wiO1xuXG5jb25zdCBkaXNwbGF5SGFuZGxlciA9ICgpID0+IHtcbiAgY29uc3Qgd2VhdGhlckRpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndlYXRoZXItZGlzcGxheVwiKTtcbiAgXG4gIGNvbnN0IHJldHVybkNvbmRpdGlvbiA9IChjb25kKSA9PiB7XG4gICAgY29uc3QgY29uZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uZERpdi50ZXh0Q29udGVudCA9IGNvbmQ7XG4gICAgY29uZERpdi5jbGFzc0xpc3QuYWRkKFwiZGlzcGxheS1jb25kaXRpb25cIik7XG4gICAgcmV0dXJuIGNvbmREaXY7XG4gIH07XG5cbiAgY29uc3QgcmV0dXJuQ2l0eU5hbWUgPSAobmFtZSkgPT4ge1xuICAgIGNvbnN0IG5hbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5hbWVEaXYudGV4dENvbnRlbnQgPSBuYW1lO1xuICAgIG5hbWVEaXYuY2xhc3NMaXN0LmFkZChcImRpc3BsYXktY2l0eS1uYW1lXCIpO1xuICAgIHJldHVybiBuYW1lRGl2O1xuICB9O1xuXG4gIGNvbnN0IHJldHVybkN1cnJlbnRUZW1wID0gKHRlbXApID0+IHtcbiAgICBjb25zdCBjdXJyZW50VGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY3VycmVudFRlbXAuY2xhc3NMaXN0LmFkZChcImRpc3BsYXktY3VycmVudC10ZW1wXCIpO1xuICAgIGN1cnJlbnRUZW1wLnRleHRDb250ZW50ID0gYCR7TWF0aC5yb3VuZCh0ZW1wIC0gMjczKX3CsENgO1xuICAgIHJldHVybiBjdXJyZW50VGVtcDtcbiAgfTtcblxuICBjb25zdCByZXR1cm5NYXhUZW1wID0gKHRlbXApID0+IHtcbiAgICBjb25zdCBtYXhUZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtYXhUZW1wLmNsYXNzTGlzdC5hZGQoXCJtYXgtdGVtcFwiKTtcblxuICAgIGltYWdlSGFuZGxlcigpXG4gICAgICAuZ2V0VXBUcmlhbmdsZSgpXG4gICAgICAudGhlbigoZGF0KSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0ltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgIG5ld0ltYWdlLnNyYyA9IGRhdDtcbiAgICAgICAgbmV3SW1hZ2UuY2xhc3NMaXN0LmFkZChcIm1heC10ZW1wLWxvZ29cIik7XG4gICAgICAgIG1heFRlbXAuYXBwZW5kQ2hpbGQobmV3SW1hZ2UpO1xuICAgICAgfSk7XG4gICAgbWF4VGVtcC50ZXh0Q29udGVudCA9IGAke01hdGgucm91bmQodGVtcCAtIDI3Myl9wrBDYDtcbiAgICByZXR1cm4gbWF4VGVtcDtcbiAgfTtcblxuICBjb25zdCByZXR1cm5NaW5UZW1wID0gKHRlbXApID0+IHtcbiAgICBjb25zdCBtaW5UZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtaW5UZW1wLmNsYXNzTGlzdC5hZGQoXCJtaW4tdGVtcFwiKTtcbiAgICBpbWFnZUhhbmRsZXIoKVxuICAgICAgLmdldERvd25UcmlhbmdsZSgpXG4gICAgICAudGhlbigoZGF0KSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0ltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgIG5ld0ltYWdlLnNyYyA9IGRhdDtcbiAgICAgICAgbmV3SW1hZ2UuY2xhc3NMaXN0LmFkZChcIm1pbi10ZW1wLWxvZ29cIik7XG4gICAgICAgIG1pblRlbXAuYXBwZW5kQ2hpbGQobmV3SW1hZ2UpO1xuICAgICAgfSk7XG4gICAgbWluVGVtcC50ZXh0Q29udGVudCA9IGAke01hdGgucm91bmQodGVtcCAtIDI3Myl9wrBDYDtcbiAgICByZXR1cm4gbWluVGVtcDtcbiAgfTtcblxuXG5cblxuICBjb25zdCB1cGRhdGVEYXRhID0gKGRhdGEpID0+IHtcbiAgICB3ZWF0aGVyRGlzcGxheS5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuXG4gICAgY29uc3QgdGVtcEluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRlbXBJbmZvLmNsYXNzTGlzdC5hZGQoXCJ0ZW1wLWluZm9cIik7XG5cbiAgICBjb25zdCBzdW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHN1bi5jbGFzc0xpc3QuYWRkKFwic3VuXCIpO1xuXG4gICAgdGVtcEluZm8uYXBwZW5kQ2hpbGQocmV0dXJuQ3VycmVudFRlbXAoZGF0YVtcIm1haW5cIl1bXCJ0ZW1wXCJdKSk7XG4gICAgdGVtcEluZm8uYXBwZW5kQ2hpbGQocmV0dXJuQ29uZGl0aW9uKGRhdGFbXCJ3ZWF0aGVyXCJdWzBdW1wibWFpblwiXSkpO1xuICAgIHRlbXBJbmZvLmFwcGVuZENoaWxkKHJldHVybkNpdHlOYW1lKGRhdGFbXCJuYW1lXCJdKSk7XG5cbiAgICB3ZWF0aGVyRGlzcGxheS5hcHBlbmRDaGlsZChzdW4pO1xuICAgIHdlYXRoZXJEaXNwbGF5LmFwcGVuZENoaWxkKHRlbXBJbmZvKTtcblxuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2FkaW5nLWJlZ2luXCIpKTtcbiAgICByZXR1cm47XG4gIH07XG4gIHJldHVybiB7XG4gICAgdXBkYXRlRGF0YSxcbiAgfTtcbn07XG5cbmNvbnN0IGZvcm1IYW5kbGVyID0gKCkgPT4ge1xuICBjb25zdCBpbnB1dEZvcm0gPSBkb2N1bWVudC5mb3Jtc1swXTtcbiAgaW5wdXRGb3JtLm9uc3VibWl0ID0gcGFzc0NpdHlOYW1lO1xuXG4gIGZ1bmN0aW9uIGdldENpdHlOYW1lKCkge1xuICAgIHJldHVybiBpbnB1dEZvcm0uZWxlbWVudHNbMF0udmFsdWU7XG4gIH1cblxuICBmdW5jdGlvbiBwYXNzQ2l0eU5hbWUoZSkge1xuICAgIGNvbnN0IGNpdHlOYW1lID0gZ2V0Q2l0eU5hbWUoKTtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBpZiAoY2l0eU5hbWUgPT0gXCJcIikge1xuICAgICAgY29uc29sZS5sb2coXCJFbXB0eVwiKTtcbiAgICAgIGlucHV0Rm9ybS5yZXNldCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBhcGlIYW5kbGVyXG4gICAgICAuY2FsbEFwaShjaXR5TmFtZSlcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIGRpc3BsYXlIYW5kbGVyKCkudXBkYXRlRGF0YShkYXRhKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgIH0pO1xuICAgIGlucHV0Rm9ybS5yZXNldCgpO1xuICB9XG59O1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICBhcGlIYW5kbGVyXG4gICAgLmNhbGxBcGkoXCJOZXcgRGVsaGlcIilcbiAgICAudGhlbigoZGF0YSkgPT4gZGlzcGxheUhhbmRsZXIoKS51cGRhdGVEYXRhKGRhdGEpKVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9KTtcbn0pO1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZvcm1IYW5kbGVyKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==