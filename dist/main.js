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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/hills1.svg */ "./src/assets/hills1.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/hills2.svg */ "./src/assets/hills2.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=M+PLUS+2:wght@500;700&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* HEADER */\nheader {\n  display: flex;\n  justify-content: center;\n  width: 60%;\n  margin-top: 60px;\n}\n\nheader > h1 {\n  margin: 0;\n  color: white;\n  font-weight: 700;\n  font-size: 52px;\n  padding: 36px 0;\n}\n\n.user-input {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 80%;\n}\n\n.city-name {\n  background: #fff;\n  border-radius: 50px;\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n  padding: 5px;\n  text-align: center;\n  font-size: 35px;\n  font-weight: 700;\n  color: #4d4b4b;\n  font-family: \"Poppins\", Verdana, Geneva, Tahoma, sans-serif;\n\n  border: none;\n  width: 90%;\n}\n\n.city-name:focus {\n  outline: none;\n}\n\n::placeholder {\n  font-weight: 700;\n  color: #4d4b4b;\n  opacity: 1;\n  font-size: 35px;\n\n  font-family: \"Poppins\", Verdana, Geneva, Tahoma, sans-serif;\n}\n\n.city-name:focus::placeholder {\n  color: transparent;\n}\n\n.user-input > button {\n  cursor: pointer;\n  background-color: white;\n  font-family: \"Poppins\";\n  font-size: 35px;\n  padding: 3px 21px;\n  font-weight: 700;\n  border: none;\n  border-top-right-radius: 35px;\n  border: solid 2px white;\n  border-bottom-right-radius: 35px;\n  border-left-width: 0;\n\n  width: 10%;\n  min-width: 70px;\n}\n\n.user-input img {\n  vertical-align: middle;\n  height: 30px;\n  width: auto;\n  position: relative;\n  bottom: 2px;\n}\n\n/* DISPLAY */\n.weather-display {\n  display: flex;\n  width: 70%;\n  opacity: 1;\n  justify-content: center;\n  color: #fff;\n\n  font-size: 50px;\n  padding: 20px;\n  gap: 50px;\n}\n\n.temp-info {\n  display: flex;\n  flex-direction: column;\n  font-size: 50px;\n  justify-content: center;\n}\n\n.cast-display {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 50%;\n  height: 350px;\n}\n\n.cast-display > img {\n  animation: slide-in 0.5s forwards ease-in-out;\n  animation-delay: 0.2s;\n  height: 350px;\n  width: 100%;\n  opacity: 0;\n}\n\n@keyframes slide-in {\n  from {\n    opacity: 0;\n    transform: translateY(-100px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n.info-display {\n  font-size: 30px;\n  font-weight: 500;\n  font-family: \"M PLUS 2\", Verdana, Geneva, Tahoma, sans-serif;\n  color: white;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  gap: 20px;\n  transition: all 0.7s ease-in-out;\n}\n\n.white-block {\n  height: 70px;\n  width: 7px;\n  background-color: #fff;\n}\n\n.info {\n  display: flex;\n  justify-content: center;\n  gap: 100px;\n}\n\n.info-holder {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 450px;\n}\n\n.display-city-name {\n  font-size: 45px;\n  font-weight: 500;\n}\n\n.max-temp-logo,\n.min-temp-logo {\n  height: 20px;\n  margin-left: 7px;\n  display: inline-block;\n}\n\n.current-temp {\n  font-weight: 700;\n  line-height: 40px;\n}\n\n.cast-temp {\n  display: flex;\n  flex-direction: column;\n  text-align: left;\n  gap: 2px;\n}\n\n.min-max-temp {\n  display: flex;\n  flex-direction: column;\n}\n\n.humidity {\n  display: flex;\n  gap: 5px;\n}\n\n.humidity > img {\n  display: inline-block;\n}\n\n.cast {\n  text-align: center;\n  font-weight: 700;\n  letter-spacing: 2px;\n}\n\n.misc {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 5px;\n}\n\n.wind {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n}\n\n.wind > img {\n  display: inline-block;\n}\n\n.min-temp,\n.max-temp {\n  text-align: right;\n}\n/* LOADING */\n.loading-begin {\n  color: white;\n  font-family: \"Poppins\", Verdana, Geneva, Tahoma, sans-serif;\n  font-size: 60px;\n  font-weight: 500;\n  width: 100%;\n  text-align: center;\n\n  position: absolute;\n  height: 100vh;\n  width: 100%;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #01223aef;\n  z-index: 10;\n}\n\n/* WEATHER EFFECTs */\n.sun {\n  background-image: url(http://127.0.0.1:5500/dist/818f59af4f556d601fba.svg);\n  background-size: cover;\n  height: 150px;\n  width: 150px;\n  z-index: 9;\n\n  border: none;\n  border-radius: 50%;\n  box-shadow: 0 0 60px 10px rgb(255 255 0);\n}\n\n.hills-container {\n  min-height: 400px;\n  width: 100%;\n\n  position: relative;\n}\n\n.hills1,\n.hills2 {\n  background-size: cover;\n  background-repeat: no-repeat;\n  position: absolute;\n  bottom: 0;\n\n  width: 100%;\n  height: 100%;\n}\n.hills1 {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  height: 70%;\n  z-index: 9;\n}\n\n.hills2 {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  z-index: 8;\n}\n\n/* BODY */\nbody,\nhtml {\n  font-family: \"Poppins\", sans-serif, Verdana, Geneva, Tahoma;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  height: 100%;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  gap: 60px;\n\n  box-sizing: border-box;\n  background-color: #0095ff;\n}\n\n*::-webkit-scrollbar {\n  display: none;\n}\n\n* {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n\n/* MEDIA QUERIES */\n@media screen and (max-width: 1048px) {\n}\n", "",{"version":3,"sources":["webpack://./src/main.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=M+PLUS+2:wght@500;700&display=swap\");\n\n/* HEADER */\nheader {\n  display: flex;\n  justify-content: center;\n  width: 60%;\n  margin-top: 60px;\n}\n\nheader > h1 {\n  margin: 0;\n  color: white;\n  font-weight: 700;\n  font-size: 52px;\n  padding: 36px 0;\n}\n\n.user-input {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 80%;\n}\n\n.city-name {\n  background: #fff;\n  border-radius: 50px;\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n  padding: 5px;\n  text-align: center;\n  font-size: 35px;\n  font-weight: 700;\n  color: #4d4b4b;\n  font-family: \"Poppins\", Verdana, Geneva, Tahoma, sans-serif;\n\n  border: none;\n  width: 90%;\n}\n\n.city-name:focus {\n  outline: none;\n}\n\n::placeholder {\n  font-weight: 700;\n  color: #4d4b4b;\n  opacity: 1;\n  font-size: 35px;\n\n  font-family: \"Poppins\", Verdana, Geneva, Tahoma, sans-serif;\n}\n\n.city-name:focus::placeholder {\n  color: transparent;\n}\n\n.user-input > button {\n  cursor: pointer;\n  background-color: white;\n  font-family: \"Poppins\";\n  font-size: 35px;\n  padding: 3px 21px;\n  font-weight: 700;\n  border: none;\n  border-top-right-radius: 35px;\n  border: solid 2px white;\n  border-bottom-right-radius: 35px;\n  border-left-width: 0;\n\n  width: 10%;\n  min-width: 70px;\n}\n\n.user-input img {\n  vertical-align: middle;\n  height: 30px;\n  width: auto;\n  position: relative;\n  bottom: 2px;\n}\n\n/* DISPLAY */\n.weather-display {\n  display: flex;\n  width: 70%;\n  opacity: 1;\n  justify-content: center;\n  color: #fff;\n\n  font-size: 50px;\n  padding: 20px;\n  gap: 50px;\n}\n\n.temp-info {\n  display: flex;\n  flex-direction: column;\n  font-size: 50px;\n  justify-content: center;\n}\n\n.cast-display {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 50%;\n  height: 350px;\n}\n\n.cast-display > img {\n  animation: slide-in 0.5s forwards ease-in-out;\n  animation-delay: 0.2s;\n  height: 350px;\n  width: 100%;\n  opacity: 0;\n}\n\n@keyframes slide-in {\n  from {\n    opacity: 0;\n    transform: translateY(-100px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n.info-display {\n  font-size: 30px;\n  font-weight: 500;\n  font-family: \"M PLUS 2\", Verdana, Geneva, Tahoma, sans-serif;\n  color: white;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  gap: 20px;\n  transition: all 0.7s ease-in-out;\n}\n\n.white-block {\n  height: 70px;\n  width: 7px;\n  background-color: #fff;\n}\n\n.info {\n  display: flex;\n  justify-content: center;\n  gap: 100px;\n}\n\n.info-holder {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 450px;\n}\n\n.display-city-name {\n  font-size: 45px;\n  font-weight: 500;\n}\n\n.max-temp-logo,\n.min-temp-logo {\n  height: 20px;\n  margin-left: 7px;\n  display: inline-block;\n}\n\n.current-temp {\n  font-weight: 700;\n  line-height: 40px;\n}\n\n.cast-temp {\n  display: flex;\n  flex-direction: column;\n  text-align: left;\n  gap: 2px;\n}\n\n.min-max-temp {\n  display: flex;\n  flex-direction: column;\n}\n\n.humidity {\n  display: flex;\n  gap: 5px;\n}\n\n.humidity > img {\n  display: inline-block;\n}\n\n.cast {\n  text-align: center;\n  font-weight: 700;\n  letter-spacing: 2px;\n}\n\n.misc {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 5px;\n}\n\n.wind {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n}\n\n.wind > img {\n  display: inline-block;\n}\n\n.min-temp,\n.max-temp {\n  text-align: right;\n}\n/* LOADING */\n.loading-begin {\n  color: white;\n  font-family: \"Poppins\", Verdana, Geneva, Tahoma, sans-serif;\n  font-size: 60px;\n  font-weight: 500;\n  width: 100%;\n  text-align: center;\n\n  position: absolute;\n  height: 100vh;\n  width: 100%;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #01223aef;\n  z-index: 10;\n}\n\n/* WEATHER EFFECTs */\n.sun {\n  background-image: url(http://127.0.0.1:5500/dist/818f59af4f556d601fba.svg);\n  background-size: cover;\n  height: 150px;\n  width: 150px;\n  z-index: 9;\n\n  border: none;\n  border-radius: 50%;\n  box-shadow: 0 0 60px 10px rgb(255 255 0);\n}\n\n.hills-container {\n  min-height: 400px;\n  width: 100%;\n\n  position: relative;\n}\n\n.hills1,\n.hills2 {\n  background-size: cover;\n  background-repeat: no-repeat;\n  position: absolute;\n  bottom: 0;\n\n  width: 100%;\n  height: 100%;\n}\n.hills1 {\n  background-image: url(\"./assets/hills1.svg\");\n  height: 70%;\n  z-index: 9;\n}\n\n.hills2 {\n  background-image: url(\"./assets/hills2.svg\");\n  z-index: 8;\n}\n\n/* BODY */\nbody,\nhtml {\n  font-family: \"Poppins\", sans-serif, Verdana, Geneva, Tahoma;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  height: 100%;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  gap: 60px;\n\n  box-sizing: border-box;\n  background-color: #0095ff;\n}\n\n*::-webkit-scrollbar {\n  display: none;\n}\n\n* {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n\n/* MEDIA QUERIES */\n@media screen and (max-width: 1048px) {\n}\n"],"sourceRoot":""}]);
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
/* harmony import */ var _assets_weather_haze_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/weather/haze.svg */ "./src/assets/weather/haze.svg");
/* harmony import */ var _assets_weather_cloudy_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/weather/cloudy.svg */ "./src/assets/weather/cloudy.svg");
/* harmony import */ var _assets_weather_rain_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/weather/rain.svg */ "./src/assets/weather/rain.svg");
/* harmony import */ var _assets_weather_clear_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/weather/clear.svg */ "./src/assets/weather/clear.svg");
/* harmony import */ var _assets_weather_drizzle_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/weather/drizzle.svg */ "./src/assets/weather/drizzle.svg");
/* harmony import */ var _assets_weather_thunderstorm_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/weather/thunderstorm.svg */ "./src/assets/weather/thunderstorm.svg");
/* harmony import */ var _assets_up_triangle_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/up-triangle.svg */ "./src/assets/up-triangle.svg");
/* harmony import */ var _assets_down_triangle_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/down-triangle.svg */ "./src/assets/down-triangle.svg");
/* harmony import */ var _assets_humidity_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/humidity.svg */ "./src/assets/humidity.svg");
/* harmony import */ var _assets_wind_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/wind.svg */ "./src/assets/wind.svg");











const imageHandler = () => {
  async function weatherIcon(data) {
    if (data == "Haze") {
      return _assets_weather_haze_svg__WEBPACK_IMPORTED_MODULE_0__;
    } else if (data == "Rain") {
      return _assets_weather_rain_svg__WEBPACK_IMPORTED_MODULE_2__;
    } else if (data == "Clouds") {
      return _assets_weather_cloudy_svg__WEBPACK_IMPORTED_MODULE_1__;
    } else if (data == "Drizzle") {
      return _assets_weather_drizzle_svg__WEBPACK_IMPORTED_MODULE_4__;
    } else {
      return _assets_weather_thunderstorm_svg__WEBPACK_IMPORTED_MODULE_5__;
    }
  }

  async function getHumidityImage() {
    return _assets_humidity_svg__WEBPACK_IMPORTED_MODULE_8__;
  }
  async function getWindImage() {
    return _assets_wind_svg__WEBPACK_IMPORTED_MODULE_9__;
  }
  async function getUpTriangle() {
    return _assets_up_triangle_svg__WEBPACK_IMPORTED_MODULE_6__;
  }
  async function getDownTriangle() {
    return _assets_down_triangle_svg__WEBPACK_IMPORTED_MODULE_7__;
  }
  return {
    weatherIcon,
    getHumidityImage,
    getWindImage,
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

/***/ "./src/assets/humidity.svg":
/*!*********************************!*\
  !*** ./src/assets/humidity.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "438bcc62106c93fe94a1.svg";

/***/ }),

/***/ "./src/assets/up-triangle.svg":
/*!************************************!*\
  !*** ./src/assets/up-triangle.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9e5d032d941716597a91.svg";

/***/ }),

/***/ "./src/assets/weather/clear.svg":
/*!**************************************!*\
  !*** ./src/assets/weather/clear.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0e5e8fed6b52fbd4216c.svg";

/***/ }),

/***/ "./src/assets/weather/cloudy.svg":
/*!***************************************!*\
  !*** ./src/assets/weather/cloudy.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3e361a3387ba9237a827.svg";

/***/ }),

/***/ "./src/assets/weather/drizzle.svg":
/*!****************************************!*\
  !*** ./src/assets/weather/drizzle.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9568e3dce4dcc81e6b2b.svg";

/***/ }),

/***/ "./src/assets/weather/haze.svg":
/*!*************************************!*\
  !*** ./src/assets/weather/haze.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9f7151c821ee90b86a42.svg";

/***/ }),

/***/ "./src/assets/weather/rain.svg":
/*!*************************************!*\
  !*** ./src/assets/weather/rain.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "081ea4bfd9cca44d9010.svg";

/***/ }),

/***/ "./src/assets/weather/thunderstorm.svg":
/*!*********************************************!*\
  !*** ./src/assets/weather/thunderstorm.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "784ec83fa007b5e72bcf.svg";

/***/ }),

/***/ "./src/assets/wind.svg":
/*!*****************************!*\
  !*** ./src/assets/wind.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d2a2a98f7df3749ce65a.svg";

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
  const castText = document.querySelector(".cast");
  const humidityDiv = document.querySelector(".humidity");
  const windDiv = document.querySelector(".wind");
  const tempInfo = document.querySelector(".temp-info");

  const returnImage = async (condition) => {
    const imageData = await (0,_imageHandler__WEBPACK_IMPORTED_MODULE_1__["default"])().weatherIcon(condition);
    const newImg = new Image();
    newImg.src = imageData;
    return newImg;
  };

  const returnCityName = (name) => {
    const nameDiv = document.createElement("div");
    nameDiv.textContent = name;
    nameDiv.classList.add("display-city-name");
    return nameDiv;
  };

  const returnCurrentTemp = (temp) => {
    const currentTemp = document.createElement("div");
    currentTemp.classList.add("current-temp");
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

  const updateCast = (cast) => {
    castText.textContent = cast;
    return;
  };

  const updateHumidity = (humidity) => {
    humidityDiv.innerHTML = "";
    humidityDiv.textContent = humidity;

    (0,_imageHandler__WEBPACK_IMPORTED_MODULE_1__["default"])()
      .getHumidityImage()
      .then((imageData) => {
        const humidityLogo = new Image();
        humidityLogo.src = imageData;
        humidityDiv.appendChild(humidityLogo);
        return;
      });
  };

  const updateWind = (wind) => {
    windDiv.innerHTML = "";
    windDiv.textContent = wind;
  };

  const updateData = async (data) => {
    tempInfo.innerHTML = "";
    console.log(data);

    tempInfo.appendChild(returnCurrentTemp(data["main"]["temp"]));
    tempInfo.appendChild(returnCityName(data["name"]));
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
    return inputForm.elements[0];
  }

  function passCityName(e) {
    const cityName = getCityName();
    e.preventDefault();

    _apiLoadingHandler__WEBPACK_IMPORTED_MODULE_0__["default"].callApi(cityName.value)
      .then((data) => displayHandler().updateData(data))
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLG1IQUFzQztBQUNsRiw0Q0FBNEMsbUhBQXNDO0FBQ2xGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YsZ0hBQWdILElBQUksa0JBQWtCO0FBQ3RJLGlIQUFpSCxrQkFBa0I7QUFDbkkseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0EsZ0VBQWdFLGtCQUFrQiw0QkFBNEIsZUFBZSxxQkFBcUIsR0FBRyxpQkFBaUIsY0FBYyxpQkFBaUIscUJBQXFCLG9CQUFvQixvQkFBb0IsR0FBRyxpQkFBaUIsa0JBQWtCLHdCQUF3Qiw0QkFBNEIsZUFBZSxHQUFHLGdCQUFnQixxQkFBcUIsd0JBQXdCLGtDQUFrQywrQkFBK0IsaUJBQWlCLHVCQUF1QixvQkFBb0IscUJBQXFCLG1CQUFtQixrRUFBa0UsbUJBQW1CLGVBQWUsR0FBRyxzQkFBc0Isa0JBQWtCLEdBQUcsbUJBQW1CLHFCQUFxQixtQkFBbUIsZUFBZSxvQkFBb0Isb0VBQW9FLEdBQUcsbUNBQW1DLHVCQUF1QixHQUFHLDBCQUEwQixvQkFBb0IsNEJBQTRCLDZCQUE2QixvQkFBb0Isc0JBQXNCLHFCQUFxQixpQkFBaUIsa0NBQWtDLDRCQUE0QixxQ0FBcUMseUJBQXlCLGlCQUFpQixvQkFBb0IsR0FBRyxxQkFBcUIsMkJBQTJCLGlCQUFpQixnQkFBZ0IsdUJBQXVCLGdCQUFnQixHQUFHLHFDQUFxQyxrQkFBa0IsZUFBZSxlQUFlLDRCQUE0QixnQkFBZ0Isc0JBQXNCLGtCQUFrQixjQUFjLEdBQUcsZ0JBQWdCLGtCQUFrQiwyQkFBMkIsb0JBQW9CLDRCQUE0QixHQUFHLG1CQUFtQixrQkFBa0IsNEJBQTRCLHdCQUF3QixlQUFlLGtCQUFrQixHQUFHLHlCQUF5QixrREFBa0QsMEJBQTBCLGtCQUFrQixnQkFBZ0IsZUFBZSxHQUFHLHlCQUF5QixVQUFVLGlCQUFpQixvQ0FBb0MsS0FBSyxRQUFRLGlCQUFpQiwrQkFBK0IsS0FBSyxHQUFHLG1CQUFtQixvQkFBb0IscUJBQXFCLG1FQUFtRSxpQkFBaUIsdUJBQXVCLGtCQUFrQix3QkFBd0IsNEJBQTRCLGdCQUFnQixjQUFjLHFDQUFxQyxHQUFHLGtCQUFrQixpQkFBaUIsZUFBZSwyQkFBMkIsR0FBRyxXQUFXLGtCQUFrQiw0QkFBNEIsZUFBZSxHQUFHLGtCQUFrQixrQkFBa0IsMkJBQTJCLHdCQUF3Qiw0QkFBNEIsaUJBQWlCLEdBQUcsd0JBQXdCLG9CQUFvQixxQkFBcUIsR0FBRyxxQ0FBcUMsaUJBQWlCLHFCQUFxQiwwQkFBMEIsR0FBRyxtQkFBbUIscUJBQXFCLHNCQUFzQixHQUFHLGdCQUFnQixrQkFBa0IsMkJBQTJCLHFCQUFxQixhQUFhLEdBQUcsbUJBQW1CLGtCQUFrQiwyQkFBMkIsR0FBRyxlQUFlLGtCQUFrQixhQUFhLEdBQUcscUJBQXFCLDBCQUEwQixHQUFHLFdBQVcsdUJBQXVCLHFCQUFxQix3QkFBd0IsR0FBRyxXQUFXLGtCQUFrQiwyQkFBMkIsd0JBQXdCLDRCQUE0QixhQUFhLEdBQUcsV0FBVyxrQkFBa0Isd0JBQXdCLGFBQWEsR0FBRyxpQkFBaUIsMEJBQTBCLEdBQUcsMkJBQTJCLHNCQUFzQixHQUFHLGlDQUFpQyxpQkFBaUIsa0VBQWtFLG9CQUFvQixxQkFBcUIsZ0JBQWdCLHVCQUF1Qix5QkFBeUIsa0JBQWtCLGdCQUFnQixvQkFBb0IsNEJBQTRCLHdCQUF3QixnQ0FBZ0MsZ0JBQWdCLEdBQUcsaUNBQWlDLCtFQUErRSwyQkFBMkIsa0JBQWtCLGlCQUFpQixlQUFlLG1CQUFtQix1QkFBdUIsNkNBQTZDLEdBQUcsc0JBQXNCLHNCQUFzQixnQkFBZ0IseUJBQXlCLEdBQUcsdUJBQXVCLDJCQUEyQixpQ0FBaUMsdUJBQXVCLGNBQWMsa0JBQWtCLGlCQUFpQixHQUFHLFdBQVcsc0VBQXNFLGdCQUFnQixlQUFlLEdBQUcsYUFBYSxzRUFBc0UsZUFBZSxHQUFHLDZCQUE2QixrRUFBa0UsY0FBYyxlQUFlLGdCQUFnQixpQkFBaUIsR0FBRyxVQUFVLGtCQUFrQiwyQkFBMkIsd0JBQXdCLGdCQUFnQiw2QkFBNkIsOEJBQThCLEdBQUcsMEJBQTBCLGtCQUFrQixHQUFHLE9BQU8sa0RBQWtELEdBQUcsZ0VBQWdFLEdBQUcsU0FBUyxvRkFBb0YsS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsY0FBYyxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxNQUFNLFVBQVUsS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFlBQVksVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sTUFBTSxZQUFZLE1BQU0sVUFBVSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxhQUFhLGFBQWEsV0FBVyxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLFlBQVksTUFBTSxZQUFZLGFBQWEsV0FBVyxVQUFVLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksWUFBWSxZQUFZLE9BQU8sTUFBTSxZQUFZLGFBQWEsYUFBYSxZQUFZLFVBQVUsVUFBVSxLQUFLLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLFVBQVUsTUFBTSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxjQUFjLFlBQVksWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sWUFBWSxNQUFNLGlHQUFpRyxJQUFJLG9CQUFvQiwyRUFBMkUsb0JBQW9CLDBCQUEwQixrQkFBa0IsNEJBQTRCLGVBQWUscUJBQXFCLEdBQUcsaUJBQWlCLGNBQWMsaUJBQWlCLHFCQUFxQixvQkFBb0Isb0JBQW9CLEdBQUcsaUJBQWlCLGtCQUFrQix3QkFBd0IsNEJBQTRCLGVBQWUsR0FBRyxnQkFBZ0IscUJBQXFCLHdCQUF3QixrQ0FBa0MsK0JBQStCLGlCQUFpQix1QkFBdUIsb0JBQW9CLHFCQUFxQixtQkFBbUIsa0VBQWtFLG1CQUFtQixlQUFlLEdBQUcsc0JBQXNCLGtCQUFrQixHQUFHLG1CQUFtQixxQkFBcUIsbUJBQW1CLGVBQWUsb0JBQW9CLG9FQUFvRSxHQUFHLG1DQUFtQyx1QkFBdUIsR0FBRywwQkFBMEIsb0JBQW9CLDRCQUE0Qiw2QkFBNkIsb0JBQW9CLHNCQUFzQixxQkFBcUIsaUJBQWlCLGtDQUFrQyw0QkFBNEIscUNBQXFDLHlCQUF5QixpQkFBaUIsb0JBQW9CLEdBQUcscUJBQXFCLDJCQUEyQixpQkFBaUIsZ0JBQWdCLHVCQUF1QixnQkFBZ0IsR0FBRyxxQ0FBcUMsa0JBQWtCLGVBQWUsZUFBZSw0QkFBNEIsZ0JBQWdCLHNCQUFzQixrQkFBa0IsY0FBYyxHQUFHLGdCQUFnQixrQkFBa0IsMkJBQTJCLG9CQUFvQiw0QkFBNEIsR0FBRyxtQkFBbUIsa0JBQWtCLDRCQUE0Qix3QkFBd0IsZUFBZSxrQkFBa0IsR0FBRyx5QkFBeUIsa0RBQWtELDBCQUEwQixrQkFBa0IsZ0JBQWdCLGVBQWUsR0FBRyx5QkFBeUIsVUFBVSxpQkFBaUIsb0NBQW9DLEtBQUssUUFBUSxpQkFBaUIsK0JBQStCLEtBQUssR0FBRyxtQkFBbUIsb0JBQW9CLHFCQUFxQixtRUFBbUUsaUJBQWlCLHVCQUF1QixrQkFBa0Isd0JBQXdCLDRCQUE0QixnQkFBZ0IsY0FBYyxxQ0FBcUMsR0FBRyxrQkFBa0IsaUJBQWlCLGVBQWUsMkJBQTJCLEdBQUcsV0FBVyxrQkFBa0IsNEJBQTRCLGVBQWUsR0FBRyxrQkFBa0Isa0JBQWtCLDJCQUEyQix3QkFBd0IsNEJBQTRCLGlCQUFpQixHQUFHLHdCQUF3QixvQkFBb0IscUJBQXFCLEdBQUcscUNBQXFDLGlCQUFpQixxQkFBcUIsMEJBQTBCLEdBQUcsbUJBQW1CLHFCQUFxQixzQkFBc0IsR0FBRyxnQkFBZ0Isa0JBQWtCLDJCQUEyQixxQkFBcUIsYUFBYSxHQUFHLG1CQUFtQixrQkFBa0IsMkJBQTJCLEdBQUcsZUFBZSxrQkFBa0IsYUFBYSxHQUFHLHFCQUFxQiwwQkFBMEIsR0FBRyxXQUFXLHVCQUF1QixxQkFBcUIsd0JBQXdCLEdBQUcsV0FBVyxrQkFBa0IsMkJBQTJCLHdCQUF3Qiw0QkFBNEIsYUFBYSxHQUFHLFdBQVcsa0JBQWtCLHdCQUF3QixhQUFhLEdBQUcsaUJBQWlCLDBCQUEwQixHQUFHLDJCQUEyQixzQkFBc0IsR0FBRyxpQ0FBaUMsaUJBQWlCLGtFQUFrRSxvQkFBb0IscUJBQXFCLGdCQUFnQix1QkFBdUIseUJBQXlCLGtCQUFrQixnQkFBZ0Isb0JBQW9CLDRCQUE0Qix3QkFBd0IsZ0NBQWdDLGdCQUFnQixHQUFHLGlDQUFpQywrRUFBK0UsMkJBQTJCLGtCQUFrQixpQkFBaUIsZUFBZSxtQkFBbUIsdUJBQXVCLDZDQUE2QyxHQUFHLHNCQUFzQixzQkFBc0IsZ0JBQWdCLHlCQUF5QixHQUFHLHVCQUF1QiwyQkFBMkIsaUNBQWlDLHVCQUF1QixjQUFjLGtCQUFrQixpQkFBaUIsR0FBRyxXQUFXLG1EQUFtRCxnQkFBZ0IsZUFBZSxHQUFHLGFBQWEsbURBQW1ELGVBQWUsR0FBRyw2QkFBNkIsa0VBQWtFLGNBQWMsZUFBZSxnQkFBZ0IsaUJBQWlCLEdBQUcsVUFBVSxrQkFBa0IsMkJBQTJCLHdCQUF3QixnQkFBZ0IsNkJBQTZCLDhCQUE4QixHQUFHLDBCQUEwQixrQkFBa0IsR0FBRyxPQUFPLGtEQUFrRCxHQUFHLGdFQUFnRSxHQUFHLHFCQUFxQjtBQUMzL1o7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNkMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxREFBcUQ7QUFDckQ7O0FBRUE7QUFDQSxnREFBZ0Q7QUFDaEQ7O0FBRUE7QUFDQSxxRkFBcUY7QUFDckY7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLHFCQUFxQjtBQUMxQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUNyR2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG9EQUFvRDs7QUFFcEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDNUJhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBa0c7QUFDbEc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxxRkFBTzs7OztBQUk0QztBQUNwRSxPQUFPLGlFQUFlLHFGQUFPLElBQUksNEZBQWMsR0FBRyw0RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDdkdhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7O0FBRUE7QUFDQSxpRkFBaUY7QUFDakY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdEQUFnRCxTQUFTLFNBQVMsT0FBTztBQUN6RTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQsaUVBQWUsVUFBVSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckNtQjtBQUNJO0FBQ0o7QUFDRTtBQUNJO0FBQ1U7O0FBRVg7QUFDSTtBQUNUO0FBQ1I7QUFDckM7QUFDQTtBQUNBO0FBQ0EsYUFBYSxxREFBSTtBQUNqQixNQUFNO0FBQ04sYUFBYSxxREFBSTtBQUNqQixNQUFNO0FBQ04sYUFBYSx1REFBTTtBQUNuQixNQUFNO0FBQ04sYUFBYSx3REFBTztBQUNwQixNQUFNO0FBQ04sYUFBYSw2REFBWTtBQUN6QjtBQUNBOztBQUVBO0FBQ0EsV0FBVyxpREFBUTtBQUNuQjtBQUNBO0FBQ0EsV0FBVyw2Q0FBSTtBQUNmO0FBQ0E7QUFDQSxXQUFXLG9EQUFVO0FBQ3JCO0FBQ0E7QUFDQSxXQUFXLHNEQUFZO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxZQUFZLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMvQzVCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7Ozs7Ozs7Ozs7OztBQ3JCNkM7QUFDSDtBQUN0Qjs7QUFFcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNEJBQTRCLHlEQUFZO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsdUJBQXVCO0FBQ3hEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLElBQUkseURBQVk7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLDZCQUE2Qix1QkFBdUI7QUFDcEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHlEQUFZO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCw2QkFBNkIsdUJBQXVCO0FBQ3BEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLElBQUkseURBQVk7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSSxrRUFDVTtBQUNkO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFLGtFQUNVO0FBQ1o7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7QUFDRCIsInNvdXJjZXMiOlsid2VicGFjazovL1dlYXRoZXItQXBwLy4vc3JjL21haW4uY3NzIiwid2VicGFjazovL1dlYXRoZXItQXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9XZWF0aGVyLUFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vV2VhdGhlci1BcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9XZWF0aGVyLUFwcC8uL3NyYy9tYWluLmNzcz9kZGQzIiwid2VicGFjazovL1dlYXRoZXItQXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL1dlYXRoZXItQXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9XZWF0aGVyLUFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9XZWF0aGVyLUFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9XZWF0aGVyLUFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL1dlYXRoZXItQXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vV2VhdGhlci1BcHAvLi9zcmMvYXBpTG9hZGluZ0hhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vV2VhdGhlci1BcHAvLi9zcmMvaW1hZ2VIYW5kbGVyLmpzIiwid2VicGFjazovL1dlYXRoZXItQXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1dlYXRoZXItQXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL1dlYXRoZXItQXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9XZWF0aGVyLUFwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL1dlYXRoZXItQXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vV2VhdGhlci1BcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9XZWF0aGVyLUFwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9XZWF0aGVyLUFwcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9XZWF0aGVyLUFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvaGlsbHMxLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2hpbGxzMi5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6d2dodEA0MDA7NTAwOzcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1NK1BMVVMrMjp3Z2h0QDUwMDs3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBIRUFERVIgKi9cXG5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDYwJTtcXG4gIG1hcmdpbi10b3A6IDYwcHg7XFxufVxcblxcbmhlYWRlciA+IGgxIHtcXG4gIG1hcmdpbjogMDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBmb250LXNpemU6IDUycHg7XFxuICBwYWRkaW5nOiAzNnB4IDA7XFxufVxcblxcbi51c2VyLWlucHV0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogODAlO1xcbn1cXG5cXG4uY2l0eS1uYW1lIHtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMzVweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBjb2xvcjogIzRkNGI0YjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGluc1xcXCIsIFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xcblxcbiAgYm9yZGVyOiBub25lO1xcbiAgd2lkdGg6IDkwJTtcXG59XFxuXFxuLmNpdHktbmFtZTpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG46OnBsYWNlaG9sZGVyIHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBjb2xvcjogIzRkNGI0YjtcXG4gIG9wYWNpdHk6IDE7XFxuICBmb250LXNpemU6IDM1cHg7XFxuXFxuICBmb250LWZhbWlseTogXFxcIlBvcHBpbnNcXFwiLCBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLmNpdHktbmFtZTpmb2N1czo6cGxhY2Vob2xkZXIge1xcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4udXNlci1pbnB1dCA+IGJ1dHRvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGluc1xcXCI7XFxuICBmb250LXNpemU6IDM1cHg7XFxuICBwYWRkaW5nOiAzcHggMjFweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMzVweDtcXG4gIGJvcmRlcjogc29saWQgMnB4IHdoaXRlO1xcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDM1cHg7XFxuICBib3JkZXItbGVmdC13aWR0aDogMDtcXG5cXG4gIHdpZHRoOiAxMCU7XFxuICBtaW4td2lkdGg6IDcwcHg7XFxufVxcblxcbi51c2VyLWlucHV0IGltZyB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgd2lkdGg6IGF1dG87XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3R0b206IDJweDtcXG59XFxuXFxuLyogRElTUExBWSAqL1xcbi53ZWF0aGVyLWRpc3BsYXkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiA3MCU7XFxuICBvcGFjaXR5OiAxO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBjb2xvcjogI2ZmZjtcXG5cXG4gIGZvbnQtc2l6ZTogNTBweDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBnYXA6IDUwcHg7XFxufVxcblxcbi50ZW1wLWluZm8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmb250LXNpemU6IDUwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmNhc3QtZGlzcGxheSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDUwJTtcXG4gIGhlaWdodDogMzUwcHg7XFxufVxcblxcbi5jYXN0LWRpc3BsYXkgPiBpbWcge1xcbiAgYW5pbWF0aW9uOiBzbGlkZS1pbiAwLjVzIGZvcndhcmRzIGVhc2UtaW4tb3V0O1xcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjJzO1xcbiAgaGVpZ2h0OiAzNTBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgb3BhY2l0eTogMDtcXG59XFxuXFxuQGtleWZyYW1lcyBzbGlkZS1pbiB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDBweCk7XFxuICB9XFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG4gIH1cXG59XFxuXFxuLmluZm8tZGlzcGxheSB7XFxuICBmb250LXNpemU6IDMwcHg7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNIFBMVVMgMlxcXCIsIFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZ2FwOiAyMHB4O1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuN3MgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi53aGl0ZS1ibG9jayB7XFxuICBoZWlnaHQ6IDcwcHg7XFxuICB3aWR0aDogN3B4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG59XFxuXFxuLmluZm8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxMDBweDtcXG59XFxuXFxuLmluZm8taG9sZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDQ1MHB4O1xcbn1cXG5cXG4uZGlzcGxheS1jaXR5LW5hbWUge1xcbiAgZm9udC1zaXplOiA0NXB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuLm1heC10ZW1wLWxvZ28sXFxuLm1pbi10ZW1wLWxvZ28ge1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgbWFyZ2luLWxlZnQ6IDdweDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXFxuLmN1cnJlbnQtdGVtcCB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XFxufVxcblxcbi5jYXN0LXRlbXAge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgZ2FwOiAycHg7XFxufVxcblxcbi5taW4tbWF4LXRlbXAge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5odW1pZGl0eSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiA1cHg7XFxufVxcblxcbi5odW1pZGl0eSA+IGltZyB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbi5jYXN0IHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xcbn1cXG5cXG4ubWlzYyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogNXB4O1xcbn1cXG5cXG4ud2luZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMnB4O1xcbn1cXG5cXG4ud2luZCA+IGltZyB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbi5taW4tdGVtcCxcXG4ubWF4LXRlbXAge1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxufVxcbi8qIExPQURJTkcgKi9cXG4ubG9hZGluZy1iZWdpbiB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LWZhbWlseTogXFxcIlBvcHBpbnNcXFwiLCBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogNjBweDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwJTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDEyMjNhZWY7XFxuICB6LWluZGV4OiAxMDtcXG59XFxuXFxuLyogV0VBVEhFUiBFRkZFQ1RzICovXFxuLnN1biB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cDovLzEyNy4wLjAuMTo1NTAwL2Rpc3QvODE4ZjU5YWY0ZjU1NmQ2MDFmYmEuc3ZnKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBoZWlnaHQ6IDE1MHB4O1xcbiAgd2lkdGg6IDE1MHB4O1xcbiAgei1pbmRleDogOTtcXG5cXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJveC1zaGFkb3c6IDAgMCA2MHB4IDEwcHggcmdiKDI1NSAyNTUgMCk7XFxufVxcblxcbi5oaWxscy1jb250YWluZXIge1xcbiAgbWluLWhlaWdodDogNDAwcHg7XFxuICB3aWR0aDogMTAwJTtcXG5cXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmhpbGxzMSxcXG4uaGlsbHMyIHtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAwO1xcblxcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbi5oaWxsczEge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGhlaWdodDogNzAlO1xcbiAgei1pbmRleDogOTtcXG59XFxuXFxuLmhpbGxzMiB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgei1pbmRleDogODtcXG59XFxuXFxuLyogQk9EWSAqL1xcbmJvZHksXFxuaHRtbCB7XFxuICBmb250LWZhbWlseTogXFxcIlBvcHBpbnNcXFwiLCBzYW5zLXNlcmlmLCBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBnYXA6IDYwcHg7XFxuXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwOTVmZjtcXG59XFxuXFxuKjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuKiB7XFxuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XFxufVxcblxcbi8qIE1FRElBIFFVRVJJRVMgKi9cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDQ4cHgpIHtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL21haW4uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdBLFdBQVc7QUFDWDtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsVUFBVTtFQUNWLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IsMEJBQTBCO0VBQzFCLFlBQVk7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c0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixZQUFZO0VBQ1osVUFBVTs7RUFFVixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixXQUFXOztFQUVYLGtCQUFrQjtBQUNwQjs7QUFFQTs7RUFFRSxzQkFBc0I7RUFDdEIsNEJBQTRCO0VBQzVCLGtCQUFrQjtFQUNsQixTQUFTOztFQUVULFdBQVc7RUFDWCxZQUFZO0FBQ2Q7QUFDQTtFQUNFLHlEQUE0QztFQUM1QyxXQUFXO0VBQ1gsVUFBVTtBQUNaOztBQUVBO0VBQ0UseURBQTRDO0VBQzVDLFVBQVU7QUFDWjs7QUFFQSxTQUFTO0FBQ1Q7O0VBRUUsMkRBQTJEO0VBQzNELFNBQVM7RUFDVCxVQUFVO0VBQ1YsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1COztFQUVuQixTQUFTOztFQUVULHNCQUFzQjtFQUN0Qix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSw2Q0FBNkM7QUFDL0M7O0FBRUEsa0JBQWtCO0FBQ2xCO0FBQ0FcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDQwMDs1MDA7NzAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcbkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU0rUExVUysyOndnaHRANTAwOzcwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXG5cXG4vKiBIRUFERVIgKi9cXG5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDYwJTtcXG4gIG1hcmdpbi10b3A6IDYwcHg7XFxufVxcblxcbmhlYWRlciA+IGgxIHtcXG4gIG1hcmdpbjogMDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBmb250LXNpemU6IDUycHg7XFxuICBwYWRkaW5nOiAzNnB4IDA7XFxufVxcblxcbi51c2VyLWlucHV0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogODAlO1xcbn1cXG5cXG4uY2l0eS1uYW1lIHtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMzVweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBjb2xvcjogIzRkNGI0YjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGluc1xcXCIsIFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xcblxcbiAgYm9yZGVyOiBub25lO1xcbiAgd2lkdGg6IDkwJTtcXG59XFxuXFxuLmNpdHktbmFtZTpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG46OnBsYWNlaG9sZGVyIHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBjb2xvcjogIzRkNGI0YjtcXG4gIG9wYWNpdHk6IDE7XFxuICBmb250LXNpemU6IDM1cHg7XFxuXFxuICBmb250LWZhbWlseTogXFxcIlBvcHBpbnNcXFwiLCBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLmNpdHktbmFtZTpmb2N1czo6cGxhY2Vob2xkZXIge1xcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4udXNlci1pbnB1dCA+IGJ1dHRvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGluc1xcXCI7XFxuICBmb250LXNpemU6IDM1cHg7XFxuICBwYWRkaW5nOiAzcHggMjFweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMzVweDtcXG4gIGJvcmRlcjogc29saWQgMnB4IHdoaXRlO1xcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDM1cHg7XFxuICBib3JkZXItbGVmdC13aWR0aDogMDtcXG5cXG4gIHdpZHRoOiAxMCU7XFxuICBtaW4td2lkdGg6IDcwcHg7XFxufVxcblxcbi51c2VyLWlucHV0IGltZyB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgd2lkdGg6IGF1dG87XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3R0b206IDJweDtcXG59XFxuXFxuLyogRElTUExBWSAqL1xcbi53ZWF0aGVyLWRpc3BsYXkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiA3MCU7XFxuICBvcGFjaXR5OiAxO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBjb2xvcjogI2ZmZjtcXG5cXG4gIGZvbnQtc2l6ZTogNTBweDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBnYXA6IDUwcHg7XFxufVxcblxcbi50ZW1wLWluZm8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmb250LXNpemU6IDUwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmNhc3QtZGlzcGxheSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDUwJTtcXG4gIGhlaWdodDogMzUwcHg7XFxufVxcblxcbi5jYXN0LWRpc3BsYXkgPiBpbWcge1xcbiAgYW5pbWF0aW9uOiBzbGlkZS1pbiAwLjVzIGZvcndhcmRzIGVhc2UtaW4tb3V0O1xcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjJzO1xcbiAgaGVpZ2h0OiAzNTBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgb3BhY2l0eTogMDtcXG59XFxuXFxuQGtleWZyYW1lcyBzbGlkZS1pbiB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDBweCk7XFxuICB9XFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG4gIH1cXG59XFxuXFxuLmluZm8tZGlzcGxheSB7XFxuICBmb250LXNpemU6IDMwcHg7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNIFBMVVMgMlxcXCIsIFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZ2FwOiAyMHB4O1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuN3MgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi53aGl0ZS1ibG9jayB7XFxuICBoZWlnaHQ6IDcwcHg7XFxuICB3aWR0aDogN3B4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG59XFxuXFxuLmluZm8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxMDBweDtcXG59XFxuXFxuLmluZm8taG9sZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDQ1MHB4O1xcbn1cXG5cXG4uZGlzcGxheS1jaXR5LW5hbWUge1xcbiAgZm9udC1zaXplOiA0NXB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuLm1heC10ZW1wLWxvZ28sXFxuLm1pbi10ZW1wLWxvZ28ge1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgbWFyZ2luLWxlZnQ6IDdweDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXFxuLmN1cnJlbnQtdGVtcCB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XFxufVxcblxcbi5jYXN0LXRlbXAge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgZ2FwOiAycHg7XFxufVxcblxcbi5taW4tbWF4LXRlbXAge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5odW1pZGl0eSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiA1cHg7XFxufVxcblxcbi5odW1pZGl0eSA+IGltZyB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbi5jYXN0IHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xcbn1cXG5cXG4ubWlzYyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogNXB4O1xcbn1cXG5cXG4ud2luZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMnB4O1xcbn1cXG5cXG4ud2luZCA+IGltZyB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbi5taW4tdGVtcCxcXG4ubWF4LXRlbXAge1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxufVxcbi8qIExPQURJTkcgKi9cXG4ubG9hZGluZy1iZWdpbiB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LWZhbWlseTogXFxcIlBvcHBpbnNcXFwiLCBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogNjBweDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwJTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDEyMjNhZWY7XFxuICB6LWluZGV4OiAxMDtcXG59XFxuXFxuLyogV0VBVEhFUiBFRkZFQ1RzICovXFxuLnN1biB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cDovLzEyNy4wLjAuMTo1NTAwL2Rpc3QvODE4ZjU5YWY0ZjU1NmQ2MDFmYmEuc3ZnKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBoZWlnaHQ6IDE1MHB4O1xcbiAgd2lkdGg6IDE1MHB4O1xcbiAgei1pbmRleDogOTtcXG5cXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJveC1zaGFkb3c6IDAgMCA2MHB4IDEwcHggcmdiKDI1NSAyNTUgMCk7XFxufVxcblxcbi5oaWxscy1jb250YWluZXIge1xcbiAgbWluLWhlaWdodDogNDAwcHg7XFxuICB3aWR0aDogMTAwJTtcXG5cXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmhpbGxzMSxcXG4uaGlsbHMyIHtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAwO1xcblxcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbi5oaWxsczEge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuL2Fzc2V0cy9oaWxsczEuc3ZnXFxcIik7XFxuICBoZWlnaHQ6IDcwJTtcXG4gIHotaW5kZXg6IDk7XFxufVxcblxcbi5oaWxsczIge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuL2Fzc2V0cy9oaWxsczIuc3ZnXFxcIik7XFxuICB6LWluZGV4OiA4O1xcbn1cXG5cXG4vKiBCT0RZICovXFxuYm9keSxcXG5odG1sIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGluc1xcXCIsIHNhbnMtc2VyaWYsIFZlcmRhbmEsIEdlbmV2YSwgVGFob21hO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gIGdhcDogNjBweDtcXG5cXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5NWZmO1xcbn1cXG5cXG4qOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4qIHtcXG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcXG59XFxuXFxuLyogTUVESUEgUVVFUklFUyAqL1xcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwNDhweCkge1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IGFwaUhhbmRsZXIgPSAoKCkgPT4ge1xuICBsZXQgZmlyc3QgPSB0cnVlO1xuICBjb25zdCBhcGlMaW5rID0gXCJodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9cIjtcbiAgY29uc3QgYXBpS2V5ID0gXCI5NGEyYWFkNGEzODEyMWU3OTQ3MzVhOTVlZTQxNWE3NlwiO1xuXG4gIGFzeW5jIGZ1bmN0aW9uIGNhbGxBcGkoY2l0eU5hbWUpIHtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGxvYWRpbmdIYW5kbGVyLnJldHVybkxvYWRpbmcoKSk7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChhcGlMaW5rICsgYHE9JHtjaXR5TmFtZX0mYXBwaWQ9JHthcGlLZXl9YCwge1xuICAgICAgbW9kZTogXCJjb3JzXCIsXG4gICAgfSk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgY2FsbEFwaSxcbiAgfTtcbn0pKCk7XG5cbmNvbnN0IGxvYWRpbmdIYW5kbGVyID0gKCgpID0+IHtcbiAgY29uc3QgcmV0dXJuTG9hZGluZyA9ICgpID0+IHtcbiAgICBjb25zdCBsb2FkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBmZXRjaERhdGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgbG9hZGluZy5jbGFzc0xpc3QuYWRkKFwibG9hZGluZy1iZWdpblwiKTtcbiAgICBmZXRjaERhdGEuY2xhc3NMaXN0LmFkZChcInRleHRcIik7XG5cbiAgICBmZXRjaERhdGEudGV4dENvbnRlbnQgPSBcIkZldGNoaW5nIERhdGFcIjtcblxuICAgIGxvYWRpbmcuYXBwZW5kQ2hpbGQoZmV0Y2hEYXRhKTtcbiAgICByZXR1cm4gbG9hZGluZztcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICByZXR1cm5Mb2FkaW5nLFxuICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgYXBpSGFuZGxlcjtcbiIsImltcG9ydCBIYXplIGZyb20gXCIuL2Fzc2V0cy93ZWF0aGVyL2hhemUuc3ZnXCI7XG5pbXBvcnQgQ2xvdWR5IGZyb20gXCIuL2Fzc2V0cy93ZWF0aGVyL2Nsb3VkeS5zdmdcIjtcbmltcG9ydCBSYWluIGZyb20gXCIuL2Fzc2V0cy93ZWF0aGVyL3JhaW4uc3ZnXCI7XG5pbXBvcnQgQ2xlYXIgZnJvbSBcIi4vYXNzZXRzL3dlYXRoZXIvY2xlYXIuc3ZnXCI7XG5pbXBvcnQgRHJpenpsZSBmcm9tIFwiLi9hc3NldHMvd2VhdGhlci9kcml6emxlLnN2Z1wiO1xuaW1wb3J0IFRodW5kZXJzdG9ybSBmcm9tIFwiLi9hc3NldHMvd2VhdGhlci90aHVuZGVyc3Rvcm0uc3ZnXCI7XG5cbmltcG9ydCBVcFRyaWFuZ2xlIGZyb20gXCIuL2Fzc2V0cy91cC10cmlhbmdsZS5zdmdcIjtcbmltcG9ydCBEb3duVHJpYW5nbGUgZnJvbSBcIi4vYXNzZXRzL2Rvd24tdHJpYW5nbGUuc3ZnXCI7XG5pbXBvcnQgSHVtaWRpdHkgZnJvbSBcIi4vYXNzZXRzL2h1bWlkaXR5LnN2Z1wiO1xuaW1wb3J0IFdpbmQgZnJvbSBcIi4vYXNzZXRzL3dpbmQuc3ZnXCI7XG5jb25zdCBpbWFnZUhhbmRsZXIgPSAoKSA9PiB7XG4gIGFzeW5jIGZ1bmN0aW9uIHdlYXRoZXJJY29uKGRhdGEpIHtcbiAgICBpZiAoZGF0YSA9PSBcIkhhemVcIikge1xuICAgICAgcmV0dXJuIEhhemU7XG4gICAgfSBlbHNlIGlmIChkYXRhID09IFwiUmFpblwiKSB7XG4gICAgICByZXR1cm4gUmFpbjtcbiAgICB9IGVsc2UgaWYgKGRhdGEgPT0gXCJDbG91ZHNcIikge1xuICAgICAgcmV0dXJuIENsb3VkeTtcbiAgICB9IGVsc2UgaWYgKGRhdGEgPT0gXCJEcml6emxlXCIpIHtcbiAgICAgIHJldHVybiBEcml6emxlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gVGh1bmRlcnN0b3JtO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGdldEh1bWlkaXR5SW1hZ2UoKSB7XG4gICAgcmV0dXJuIEh1bWlkaXR5O1xuICB9XG4gIGFzeW5jIGZ1bmN0aW9uIGdldFdpbmRJbWFnZSgpIHtcbiAgICByZXR1cm4gV2luZDtcbiAgfVxuICBhc3luYyBmdW5jdGlvbiBnZXRVcFRyaWFuZ2xlKCkge1xuICAgIHJldHVybiBVcFRyaWFuZ2xlO1xuICB9XG4gIGFzeW5jIGZ1bmN0aW9uIGdldERvd25UcmlhbmdsZSgpIHtcbiAgICByZXR1cm4gRG93blRyaWFuZ2xlO1xuICB9XG4gIHJldHVybiB7XG4gICAgd2VhdGhlckljb24sXG4gICAgZ2V0SHVtaWRpdHlJbWFnZSxcbiAgICBnZXRXaW5kSW1hZ2UsXG4gICAgZ2V0VXBUcmlhbmdsZSxcbiAgICBnZXREb3duVHJpYW5nbGUsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBpbWFnZUhhbmRsZXI7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsImltcG9ydCBhcGlIYW5kbGVyIGZyb20gXCIuL2FwaUxvYWRpbmdIYW5kbGVyXCI7XG5pbXBvcnQgaW1hZ2VIYW5kbGVyIGZyb20gXCIuL2ltYWdlSGFuZGxlclwiO1xuaW1wb3J0IFwiLi9tYWluLmNzc1wiO1xuXG5jb25zdCBkaXNwbGF5SGFuZGxlciA9ICgpID0+IHtcbiAgY29uc3Qgd2VhdGhlckRpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndlYXRoZXItZGlzcGxheVwiKTtcbiAgY29uc3QgY2FzdFRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhc3RcIik7XG4gIGNvbnN0IGh1bWlkaXR5RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5odW1pZGl0eVwiKTtcbiAgY29uc3Qgd2luZERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2luZFwiKTtcbiAgY29uc3QgdGVtcEluZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRlbXAtaW5mb1wiKTtcblxuICBjb25zdCByZXR1cm5JbWFnZSA9IGFzeW5jIChjb25kaXRpb24pID0+IHtcbiAgICBjb25zdCBpbWFnZURhdGEgPSBhd2FpdCBpbWFnZUhhbmRsZXIoKS53ZWF0aGVySWNvbihjb25kaXRpb24pO1xuICAgIGNvbnN0IG5ld0ltZyA9IG5ldyBJbWFnZSgpO1xuICAgIG5ld0ltZy5zcmMgPSBpbWFnZURhdGE7XG4gICAgcmV0dXJuIG5ld0ltZztcbiAgfTtcblxuICBjb25zdCByZXR1cm5DaXR5TmFtZSA9IChuYW1lKSA9PiB7XG4gICAgY29uc3QgbmFtZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbmFtZURpdi50ZXh0Q29udGVudCA9IG5hbWU7XG4gICAgbmFtZURpdi5jbGFzc0xpc3QuYWRkKFwiZGlzcGxheS1jaXR5LW5hbWVcIik7XG4gICAgcmV0dXJuIG5hbWVEaXY7XG4gIH07XG5cbiAgY29uc3QgcmV0dXJuQ3VycmVudFRlbXAgPSAodGVtcCkgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRUZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjdXJyZW50VGVtcC5jbGFzc0xpc3QuYWRkKFwiY3VycmVudC10ZW1wXCIpO1xuICAgIGN1cnJlbnRUZW1wLnRleHRDb250ZW50ID0gYCR7TWF0aC5yb3VuZCh0ZW1wIC0gMjczKX3CsENgO1xuICAgIHJldHVybiBjdXJyZW50VGVtcDtcbiAgfTtcblxuICBjb25zdCByZXR1cm5NYXhUZW1wID0gKHRlbXApID0+IHtcbiAgICBjb25zdCBtYXhUZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtYXhUZW1wLmNsYXNzTGlzdC5hZGQoXCJtYXgtdGVtcFwiKTtcblxuICAgIGltYWdlSGFuZGxlcigpXG4gICAgICAuZ2V0VXBUcmlhbmdsZSgpXG4gICAgICAudGhlbigoZGF0KSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0ltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgIG5ld0ltYWdlLnNyYyA9IGRhdDtcbiAgICAgICAgbmV3SW1hZ2UuY2xhc3NMaXN0LmFkZChcIm1heC10ZW1wLWxvZ29cIik7XG4gICAgICAgIG1heFRlbXAuYXBwZW5kQ2hpbGQobmV3SW1hZ2UpO1xuICAgICAgfSk7XG4gICAgbWF4VGVtcC50ZXh0Q29udGVudCA9IGAke01hdGgucm91bmQodGVtcCAtIDI3Myl9wrBDYDtcbiAgICByZXR1cm4gbWF4VGVtcDtcbiAgfTtcblxuICBjb25zdCByZXR1cm5NaW5UZW1wID0gKHRlbXApID0+IHtcbiAgICBjb25zdCBtaW5UZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtaW5UZW1wLmNsYXNzTGlzdC5hZGQoXCJtaW4tdGVtcFwiKTtcbiAgICBpbWFnZUhhbmRsZXIoKVxuICAgICAgLmdldERvd25UcmlhbmdsZSgpXG4gICAgICAudGhlbigoZGF0KSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0ltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgIG5ld0ltYWdlLnNyYyA9IGRhdDtcbiAgICAgICAgbmV3SW1hZ2UuY2xhc3NMaXN0LmFkZChcIm1pbi10ZW1wLWxvZ29cIik7XG4gICAgICAgIG1pblRlbXAuYXBwZW5kQ2hpbGQobmV3SW1hZ2UpO1xuICAgICAgfSk7XG4gICAgbWluVGVtcC50ZXh0Q29udGVudCA9IGAke01hdGgucm91bmQodGVtcCAtIDI3Myl9wrBDYDtcbiAgICByZXR1cm4gbWluVGVtcDtcbiAgfTtcblxuICBjb25zdCB1cGRhdGVDYXN0ID0gKGNhc3QpID0+IHtcbiAgICBjYXN0VGV4dC50ZXh0Q29udGVudCA9IGNhc3Q7XG4gICAgcmV0dXJuO1xuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZUh1bWlkaXR5ID0gKGh1bWlkaXR5KSA9PiB7XG4gICAgaHVtaWRpdHlEaXYuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBodW1pZGl0eURpdi50ZXh0Q29udGVudCA9IGh1bWlkaXR5O1xuXG4gICAgaW1hZ2VIYW5kbGVyKClcbiAgICAgIC5nZXRIdW1pZGl0eUltYWdlKClcbiAgICAgIC50aGVuKChpbWFnZURhdGEpID0+IHtcbiAgICAgICAgY29uc3QgaHVtaWRpdHlMb2dvID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGh1bWlkaXR5TG9nby5zcmMgPSBpbWFnZURhdGE7XG4gICAgICAgIGh1bWlkaXR5RGl2LmFwcGVuZENoaWxkKGh1bWlkaXR5TG9nbyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZVdpbmQgPSAod2luZCkgPT4ge1xuICAgIHdpbmREaXYuaW5uZXJIVE1MID0gXCJcIjtcbiAgICB3aW5kRGl2LnRleHRDb250ZW50ID0gd2luZDtcbiAgfTtcblxuICBjb25zdCB1cGRhdGVEYXRhID0gYXN5bmMgKGRhdGEpID0+IHtcbiAgICB0ZW1wSW5mby5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuXG4gICAgdGVtcEluZm8uYXBwZW5kQ2hpbGQocmV0dXJuQ3VycmVudFRlbXAoZGF0YVtcIm1haW5cIl1bXCJ0ZW1wXCJdKSk7XG4gICAgdGVtcEluZm8uYXBwZW5kQ2hpbGQocmV0dXJuQ2l0eU5hbWUoZGF0YVtcIm5hbWVcIl0pKTtcbiAgICB3ZWF0aGVyRGlzcGxheS5hcHBlbmRDaGlsZCh0ZW1wSW5mbyk7XG5cbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9hZGluZy1iZWdpblwiKSk7XG4gICAgcmV0dXJuO1xuICB9O1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZURhdGEsXG4gIH07XG59O1xuXG5jb25zdCBmb3JtSGFuZGxlciA9ICgpID0+IHtcbiAgY29uc3QgaW5wdXRGb3JtID0gZG9jdW1lbnQuZm9ybXNbMF07XG4gIGlucHV0Rm9ybS5vbnN1Ym1pdCA9IHBhc3NDaXR5TmFtZTtcblxuICBmdW5jdGlvbiBnZXRDaXR5TmFtZSgpIHtcbiAgICByZXR1cm4gaW5wdXRGb3JtLmVsZW1lbnRzWzBdO1xuICB9XG5cbiAgZnVuY3Rpb24gcGFzc0NpdHlOYW1lKGUpIHtcbiAgICBjb25zdCBjaXR5TmFtZSA9IGdldENpdHlOYW1lKCk7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgYXBpSGFuZGxlclxuICAgICAgLmNhbGxBcGkoY2l0eU5hbWUudmFsdWUpXG4gICAgICAudGhlbigoZGF0YSkgPT4gZGlzcGxheUhhbmRsZXIoKS51cGRhdGVEYXRhKGRhdGEpKVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICB9KTtcbiAgICBpbnB1dEZvcm0ucmVzZXQoKTtcbiAgfVxufTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgYXBpSGFuZGxlclxuICAgIC5jYWxsQXBpKFwiTmV3IERlbGhpXCIpXG4gICAgLnRoZW4oKGRhdGEpID0+IGRpc3BsYXlIYW5kbGVyKCkudXBkYXRlRGF0YShkYXRhKSlcbiAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfSk7XG59KTtcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmb3JtSGFuZGxlcik7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=