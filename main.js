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
___CSS_LOADER_EXPORT___.push([module.id, "/* HEADER */\nheader {\n  display: flex;\n  justify-content: center;\n  padding: 50px 0;\n  width: 80%;\n}\n\nheader > h1 {\n  margin: 0;\n  color: white;\n  font-weight: 700;\n  font-size: 52px;\n  padding: 36px 0;\n}\n\n.user-input {\n  display: flex;\n  align-items: center;\n}\n\n.city-name {\n  background: #fff;\n  border-radius: 50px;\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n  padding: 5px;\n  text-align: center;\n  font-size: 35px;\n  font-weight: 700;\n  color: #4d4b4b;\n  font-family: \"Poppins\", Verdana, Geneva, Tahoma, sans-serif;\n\n  border: none;\n}\n\n.city-name:focus {\n  outline: none;\n}\n\n::placeholder {\n  font-weight: 700;\n  color: #4d4b4b;\n  opacity: 1;\n  font-size: 35px;\n\n  font-family: \"Poppins\", Verdana, Geneva, Tahoma, sans-serif;\n}\n\n.city-name:focus::placeholder {\n  color: transparent;\n}\n\n.user-input > button {\n  cursor: pointer;\n  background-color: white;\n  font-family: \"Poppins\";\n  font-size: 35px;\n  padding: 3px 21px;\n  font-weight: 700;\n  border: none;\n  border-top-right-radius: 35px;\n  border: solid 2px white;\n  border-bottom-right-radius: 35px;\n  border-left-width: 0;\n}\n\n.user-input img {\n  vertical-align: middle;\n  height: 30px;\n  width: auto;\n  position: relative;\n  bottom: 2px;\n}\n\n/* DISPLAY */\n.weather-display {\n  display: flex;\n  width: 70%;\n  opacity: 1;\n  justify-content: center;\n  color: #fff;\n\n  font-size: 50px;\n  padding: 20px;\n  gap: 50px;\n}\n\n.temp-info{\n  display: flex;\n  flex-direction: column;\n  font-size: 60px;\n}\n\n.cast-display {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 50%;\n  height: 350px;\n}\n\n.cast-display > img {\n  animation: slide-in 0.5s forwards ease-in-out;\n  animation-delay: 0.2s;\n  height: 350px;\n  width: 100%;\n  opacity: 0;\n}\n\n@keyframes slide-in {\n  from {\n    opacity: 0;\n    transform: translateY(-100px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n.info-display {\n  font-size: 30px;\n  font-weight: 500;\n  font-family: \"M PLUS 2\", Verdana, Geneva, Tahoma, sans-serif;\n  color: white;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  gap: 20px;\n  transition: all 0.7s ease-in-out;\n}\n\n.white-block {\n  height: 70px;\n  width: 7px;\n  background-color: #fff;\n}\n\n.info {\n  display: flex;\n  justify-content: center;\n  gap: 100px;\n}\n\n.info-holder {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 450px;\n}\n\n.display-city-name{\n  font-size: 50px;\n  font-weight: 500;\n}\n\n\n.max-temp-logo,\n.min-temp-logo {\n  height: 20px;\n  margin-left: 7px;\n  display: inline-block;\n}\n\n.current-temp {\n  font-weight: 700;\n}\n\n.cast-temp {\n  display: flex;\n  flex-direction: column;\n  text-align: left;\n  gap: 2px;\n}\n\n.min-max-temp {\n  display: flex;\n  flex-direction: column;\n}\n\n.humidity {\n  display: flex;\n  gap: 5px;\n}\n\n.humidity > img {\n  display: inline-block;\n}\n\n.cast {\n  text-align: center;\n  font-weight: 700;\n  letter-spacing: 2px;\n}\n\n.misc {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 5px;\n}\n\n.wind {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n}\n\n.wind > img {\n  display: inline-block;\n}\n\n.min-temp,\n.max-temp {\n  text-align: right;\n}\n/* LOADING */\n.loading-begin {\n  color: white;\n  font-family: \"Poppins\", Verdana, Geneva, Tahoma, sans-serif;\n  font-size: 60px;\n  font-weight: 500;\n  width: 100%;\n  text-align: center;\n\n  position: absolute;\n  height: 100vh;\n  width: 100%;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #01223aef;\n  z-index: 10;\n}\n\n/* WEATHER EFFECTs */\n.sun {\n  background-image: url(http://127.0.0.1:5500/dist/818f59af4f556d601fba.svg);\n  background-size: cover;\n  height: 150px;\n  width: 150px;\n  z-index: 9;\n\n  border: none;\n  border-radius: 50%;\n  box-shadow: 0 0 60px 10px rgb(255 255 0);\n}\n\n.hills-container{\n  margin-top: 50px;\n  height: 400px;\n  width: 100%;\n}\n\n.hills1,\n.hills2 {\n  background-size: cover;\n  position: absolute;\n\n  width: 100%;\n  height: 400px;\n}\n.hills1 {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n.hills2 {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  bottom: -10px;\n}\n\n/* BODY */\nbody {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  box-sizing: border-box;\n\n  background-color: #0095ff;\n}\n\nbody,\nhtml {\n  font-family: \"Poppins\", sans-serif, Verdana, Geneva, Tahoma;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  height: 100%;\n}\n\n* {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n\n/* MEDIA QUERIES */\n@media screen and (max-width: 1048px) {\n  .city-name {\n    width: 100%;\n  }\n  header > h1 {\n    font-size: 10vw;\n    padding-bottom: 2vh;\n  }\n\n  header {\n    flex-direction: column;\n    width: 80%;\n    align-items: center;\n  }\n  .weather-display {\n    flex-direction: column;\n    align-items: center;\n    gap: 30px;\n    width: 100%;\n  }\n  .cast-display > img {\n    height: 267px;\n    width: 85%;\n  }\n  .cast-display {\n    width: 100%;\n    height: auto;\n  }\n  .info {\n    gap: 10vw;\n  }\n  .info-holder {\n    padding-bottom: 40px;\n  }\n  .current-temp {\n    font-size: 13vw;\n  }\n  .loading-begin {\n    top: 35vh !important;\n    font-size: 9vw;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/main.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=M+PLUS+2:wght@500;700&display=swap\");\n\n/* HEADER */\nheader {\n  display: flex;\n  justify-content: center;\n  padding: 50px 0;\n  width: 80%;\n}\n\nheader > h1 {\n  margin: 0;\n  color: white;\n  font-weight: 700;\n  font-size: 52px;\n  padding: 36px 0;\n}\n\n.user-input {\n  display: flex;\n  align-items: center;\n}\n\n.city-name {\n  background: #fff;\n  border-radius: 50px;\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n  padding: 5px;\n  text-align: center;\n  font-size: 35px;\n  font-weight: 700;\n  color: #4d4b4b;\n  font-family: \"Poppins\", Verdana, Geneva, Tahoma, sans-serif;\n\n  border: none;\n}\n\n.city-name:focus {\n  outline: none;\n}\n\n::placeholder {\n  font-weight: 700;\n  color: #4d4b4b;\n  opacity: 1;\n  font-size: 35px;\n\n  font-family: \"Poppins\", Verdana, Geneva, Tahoma, sans-serif;\n}\n\n.city-name:focus::placeholder {\n  color: transparent;\n}\n\n.user-input > button {\n  cursor: pointer;\n  background-color: white;\n  font-family: \"Poppins\";\n  font-size: 35px;\n  padding: 3px 21px;\n  font-weight: 700;\n  border: none;\n  border-top-right-radius: 35px;\n  border: solid 2px white;\n  border-bottom-right-radius: 35px;\n  border-left-width: 0;\n}\n\n.user-input img {\n  vertical-align: middle;\n  height: 30px;\n  width: auto;\n  position: relative;\n  bottom: 2px;\n}\n\n/* DISPLAY */\n.weather-display {\n  display: flex;\n  width: 70%;\n  opacity: 1;\n  justify-content: center;\n  color: #fff;\n\n  font-size: 50px;\n  padding: 20px;\n  gap: 50px;\n}\n\n.temp-info{\n  display: flex;\n  flex-direction: column;\n  font-size: 60px;\n}\n\n.cast-display {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 50%;\n  height: 350px;\n}\n\n.cast-display > img {\n  animation: slide-in 0.5s forwards ease-in-out;\n  animation-delay: 0.2s;\n  height: 350px;\n  width: 100%;\n  opacity: 0;\n}\n\n@keyframes slide-in {\n  from {\n    opacity: 0;\n    transform: translateY(-100px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n.info-display {\n  font-size: 30px;\n  font-weight: 500;\n  font-family: \"M PLUS 2\", Verdana, Geneva, Tahoma, sans-serif;\n  color: white;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  gap: 20px;\n  transition: all 0.7s ease-in-out;\n}\n\n.white-block {\n  height: 70px;\n  width: 7px;\n  background-color: #fff;\n}\n\n.info {\n  display: flex;\n  justify-content: center;\n  gap: 100px;\n}\n\n.info-holder {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 450px;\n}\n\n.display-city-name{\n  font-size: 50px;\n  font-weight: 500;\n}\n\n\n.max-temp-logo,\n.min-temp-logo {\n  height: 20px;\n  margin-left: 7px;\n  display: inline-block;\n}\n\n.current-temp {\n  font-weight: 700;\n}\n\n.cast-temp {\n  display: flex;\n  flex-direction: column;\n  text-align: left;\n  gap: 2px;\n}\n\n.min-max-temp {\n  display: flex;\n  flex-direction: column;\n}\n\n.humidity {\n  display: flex;\n  gap: 5px;\n}\n\n.humidity > img {\n  display: inline-block;\n}\n\n.cast {\n  text-align: center;\n  font-weight: 700;\n  letter-spacing: 2px;\n}\n\n.misc {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 5px;\n}\n\n.wind {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n}\n\n.wind > img {\n  display: inline-block;\n}\n\n.min-temp,\n.max-temp {\n  text-align: right;\n}\n/* LOADING */\n.loading-begin {\n  color: white;\n  font-family: \"Poppins\", Verdana, Geneva, Tahoma, sans-serif;\n  font-size: 60px;\n  font-weight: 500;\n  width: 100%;\n  text-align: center;\n\n  position: absolute;\n  height: 100vh;\n  width: 100%;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #01223aef;\n  z-index: 10;\n}\n\n/* WEATHER EFFECTs */\n.sun {\n  background-image: url(http://127.0.0.1:5500/dist/818f59af4f556d601fba.svg);\n  background-size: cover;\n  height: 150px;\n  width: 150px;\n  z-index: 9;\n\n  border: none;\n  border-radius: 50%;\n  box-shadow: 0 0 60px 10px rgb(255 255 0);\n}\n\n.hills-container{\n  margin-top: 50px;\n  height: 400px;\n  width: 100%;\n}\n\n.hills1,\n.hills2 {\n  background-size: cover;\n  position: absolute;\n\n  width: 100%;\n  height: 400px;\n}\n.hills1 {\n  background-image: url(\"./assets/hills1.svg\");\n}\n\n.hills2 {\n  background-image: url(\"./assets/hills2.svg\");\n  bottom: -10px;\n}\n\n/* BODY */\nbody {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  box-sizing: border-box;\n\n  background-color: #0095ff;\n}\n\nbody,\nhtml {\n  font-family: \"Poppins\", sans-serif, Verdana, Geneva, Tahoma;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  height: 100%;\n}\n\n* {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n\n/* MEDIA QUERIES */\n@media screen and (max-width: 1048px) {\n  .city-name {\n    width: 100%;\n  }\n  header > h1 {\n    font-size: 10vw;\n    padding-bottom: 2vh;\n  }\n\n  header {\n    flex-direction: column;\n    width: 80%;\n    align-items: center;\n  }\n  .weather-display {\n    flex-direction: column;\n    align-items: center;\n    gap: 30px;\n    width: 100%;\n  }\n  .cast-display > img {\n    height: 267px;\n    width: 85%;\n  }\n  .cast-display {\n    width: 100%;\n    height: auto;\n  }\n  .info {\n    gap: 10vw;\n  }\n  .info-holder {\n    padding-bottom: 40px;\n  }\n  .current-temp {\n    font-size: 13vw;\n  }\n  .loading-begin {\n    top: 35vh !important;\n    font-size: 9vw;\n  }\n}\n"],"sourceRoot":""}]);
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

module.exports = __webpack_require__.p + "c7a20d7d8afdf8c907e7.svg";

/***/ }),

/***/ "./src/assets/hills2.svg":
/*!*******************************!*\
  !*** ./src/assets/hills2.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d22d330d975975296bbc.svg";

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
  inputForm.reset();
});
window.addEventListener("DOMContentLoaded", formHandler);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQztBQUNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vV2VhdGhlci1BcHAvLi9zcmMvbWFpbi5jc3MiLCJ3ZWJwYWNrOi8vV2VhdGhlci1BcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL1dlYXRoZXItQXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9XZWF0aGVyLUFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL1dlYXRoZXItQXBwLy4vc3JjL21haW4uY3NzP2RkZDMiLCJ3ZWJwYWNrOi8vV2VhdGhlci1BcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vV2VhdGhlci1BcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL1dlYXRoZXItQXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL1dlYXRoZXItQXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL1dlYXRoZXItQXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vV2VhdGhlci1BcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9XZWF0aGVyLUFwcC8uL3NyYy9hcGlMb2FkaW5nSGFuZGxlci5qcyIsIndlYnBhY2s6Ly9XZWF0aGVyLUFwcC8uL3NyYy9pbWFnZUhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vV2VhdGhlci1BcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vV2VhdGhlci1BcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vV2VhdGhlci1BcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL1dlYXRoZXItQXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vV2VhdGhlci1BcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9XZWF0aGVyLUFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL1dlYXRoZXItQXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL1dlYXRoZXItQXBwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL1dlYXRoZXItQXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9oaWxsczEuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvaGlsbHMyLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDQwMDs1MDA7NzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU0rUExVUysyOndnaHRANTAwOzcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIEhFQURFUiAqL1xcbmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nOiA1MHB4IDA7XFxuICB3aWR0aDogODAlO1xcbn1cXG5cXG5oZWFkZXIgPiBoMSB7XFxuICBtYXJnaW46IDA7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgZm9udC1zaXplOiA1MnB4O1xcbiAgcGFkZGluZzogMzZweCAwO1xcbn1cXG5cXG4udXNlci1pbnB1dCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNpdHktbmFtZSB7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XFxuICBwYWRkaW5nOiA1cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDM1cHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgY29sb3I6ICM0ZDRiNGI7XFxuICBmb250LWZhbWlseTogXFxcIlBvcHBpbnNcXFwiLCBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcXG5cXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLmNpdHktbmFtZTpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG46OnBsYWNlaG9sZGVyIHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBjb2xvcjogIzRkNGI0YjtcXG4gIG9wYWNpdHk6IDE7XFxuICBmb250LXNpemU6IDM1cHg7XFxuXFxuICBmb250LWZhbWlseTogXFxcIlBvcHBpbnNcXFwiLCBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLmNpdHktbmFtZTpmb2N1czo6cGxhY2Vob2xkZXIge1xcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4udXNlci1pbnB1dCA+IGJ1dHRvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGluc1xcXCI7XFxuICBmb250LXNpemU6IDM1cHg7XFxuICBwYWRkaW5nOiAzcHggMjFweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMzVweDtcXG4gIGJvcmRlcjogc29saWQgMnB4IHdoaXRlO1xcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDM1cHg7XFxuICBib3JkZXItbGVmdC13aWR0aDogMDtcXG59XFxuXFxuLnVzZXItaW5wdXQgaW1nIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICB3aWR0aDogYXV0bztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJvdHRvbTogMnB4O1xcbn1cXG5cXG4vKiBESVNQTEFZICovXFxuLndlYXRoZXItZGlzcGxheSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDcwJTtcXG4gIG9wYWNpdHk6IDE7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGNvbG9yOiAjZmZmO1xcblxcbiAgZm9udC1zaXplOiA1MHB4O1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGdhcDogNTBweDtcXG59XFxuXFxuLnRlbXAtaW5mb3tcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZm9udC1zaXplOiA2MHB4O1xcbn1cXG5cXG4uY2FzdC1kaXNwbGF5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogNTAlO1xcbiAgaGVpZ2h0OiAzNTBweDtcXG59XFxuXFxuLmNhc3QtZGlzcGxheSA+IGltZyB7XFxuICBhbmltYXRpb246IHNsaWRlLWluIDAuNXMgZm9yd2FyZHMgZWFzZS1pbi1vdXQ7XFxuICBhbmltYXRpb24tZGVsYXk6IDAuMnM7XFxuICBoZWlnaHQ6IDM1MHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNsaWRlLWluIHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMHB4KTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbiAgfVxcbn1cXG5cXG4uaW5mby1kaXNwbGF5IHtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBmb250LWZhbWlseTogXFxcIk0gUExVUyAyXFxcIiwgVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBnYXA6IDIwcHg7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC43cyBlYXNlLWluLW91dDtcXG59XFxuXFxuLndoaXRlLWJsb2NrIHtcXG4gIGhlaWdodDogNzBweDtcXG4gIHdpZHRoOiA3cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uaW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDEwMHB4O1xcbn1cXG5cXG4uaW5mby1ob2xkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogNDUwcHg7XFxufVxcblxcbi5kaXNwbGF5LWNpdHktbmFtZXtcXG4gIGZvbnQtc2l6ZTogNTBweDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcblxcbi5tYXgtdGVtcC1sb2dvLFxcbi5taW4tdGVtcC1sb2dvIHtcXG4gIGhlaWdodDogMjBweDtcXG4gIG1hcmdpbi1sZWZ0OiA3cHg7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbi5jdXJyZW50LXRlbXAge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLmNhc3QtdGVtcCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBnYXA6IDJweDtcXG59XFxuXFxuLm1pbi1tYXgtdGVtcCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmh1bWlkaXR5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDVweDtcXG59XFxuXFxuLmh1bWlkaXR5ID4gaW1nIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXFxuLmNhc3Qge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XFxufVxcblxcbi5taXNjIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiA1cHg7XFxufVxcblxcbi53aW5kIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAycHg7XFxufVxcblxcbi53aW5kID4gaW1nIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXFxuLm1pbi10ZW1wLFxcbi5tYXgtdGVtcCB7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuLyogTE9BRElORyAqL1xcbi5sb2FkaW5nLWJlZ2luIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGluc1xcXCIsIFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiA2MHB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcblxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDAlO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMTIyM2FlZjtcXG4gIHotaW5kZXg6IDEwO1xcbn1cXG5cXG4vKiBXRUFUSEVSIEVGRkVDVHMgKi9cXG4uc3VuIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwOi8vMTI3LjAuMC4xOjU1MDAvZGlzdC84MThmNTlhZjRmNTU2ZDYwMWZiYS5zdmcpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGhlaWdodDogMTUwcHg7XFxuICB3aWR0aDogMTUwcHg7XFxuICB6LWluZGV4OiA5O1xcblxcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYm94LXNoYWRvdzogMCAwIDYwcHggMTBweCByZ2IoMjU1IDI1NSAwKTtcXG59XFxuXFxuLmhpbGxzLWNvbnRhaW5lcntcXG4gIG1hcmdpbi10b3A6IDUwcHg7XFxuICBoZWlnaHQ6IDQwMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5oaWxsczEsXFxuLmhpbGxzMiB7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcblxcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDQwMHB4O1xcbn1cXG4uaGlsbHMxIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxufVxcblxcbi5oaWxsczIge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG4gIGJvdHRvbTogLTEwcHg7XFxufVxcblxcbi8qIEJPRFkgKi9cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5NWZmO1xcbn1cXG5cXG5ib2R5LFxcbmh0bWwge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIiwgc2Fucy1zZXJpZiwgVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWE7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbioge1xcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xcbn1cXG5cXG4vKiBNRURJQSBRVUVSSUVTICovXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTA0OHB4KSB7XFxuICAuY2l0eS1uYW1lIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuICBoZWFkZXIgPiBoMSB7XFxuICAgIGZvbnQtc2l6ZTogMTB2dztcXG4gICAgcGFkZGluZy1ib3R0b206IDJ2aDtcXG4gIH1cXG5cXG4gIGhlYWRlciB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuICAud2VhdGhlci1kaXNwbGF5IHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAzMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG4gIC5jYXN0LWRpc3BsYXkgPiBpbWcge1xcbiAgICBoZWlnaHQ6IDI2N3B4O1xcbiAgICB3aWR0aDogODUlO1xcbiAgfVxcbiAgLmNhc3QtZGlzcGxheSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICB9XFxuICAuaW5mbyB7XFxuICAgIGdhcDogMTB2dztcXG4gIH1cXG4gIC5pbmZvLWhvbGRlciB7XFxuICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xcbiAgfVxcbiAgLmN1cnJlbnQtdGVtcCB7XFxuICAgIGZvbnQtc2l6ZTogMTN2dztcXG4gIH1cXG4gIC5sb2FkaW5nLWJlZ2luIHtcXG4gICAgdG9wOiAzNXZoICFpbXBvcnRhbnQ7XFxuICAgIGZvbnQtc2l6ZTogOXZ3O1xcbiAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvbWFpbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBR0EsV0FBVztBQUNYO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsVUFBVTtBQUNaOztBQUVBO0VBQ0UsU0FBUztFQUNULFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IsMEJBQTBCO0VBQzFCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsMkRBQTJEOztFQUUzRCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxnQkFBZ0I7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Q1gsYUFBYTtBQUNmO0FBQ0E7RUFDRSx5REFBNEM7QUFDOUM7O0FBRUE7RUFDRSx5REFBNEM7RUFDNUMsYUFBYTtBQUNmOztBQUVBLFNBQVM7QUFDVDtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHNCQUFzQjs7RUFFdEIseUJBQXlCO0FBQzNCOztBQUVBOztFQUVFLDJEQUEyRDtFQUMzRCxTQUFTO0VBQ1QsVUFBVTtFQUNWLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSw2Q0FBNkM7QUFDL0M7O0FBRUEsa0JBQWtCO0FBQ2xCO0VBQ0U7SUFDRSxXQUFXO0VBQ2I7RUFDQTtJQUNFLGVBQWU7SUFDZixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0Usc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsV0FBVztFQUNiO0VBQ0E7SUFDRSxhQUFhO0lBQ2IsVUFBVTtFQUNaO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsWUFBWTtFQUNkO0VBQ0E7SUFDRSxTQUFTO0VBQ1g7RUFDQTtJQUNFLG9CQUFvQjtFQUN0QjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0Usb0JBQW9CO0lBQ3BCLGNBQWM7RUFDaEI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOndnaHRANDAwOzUwMDs3MDAmZGlzcGxheT1zd2FwXFxcIik7XFxuQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TStQTFVTKzI6d2dodEA1MDA7NzAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcblxcbi8qIEhFQURFUiAqL1xcbmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nOiA1MHB4IDA7XFxuICB3aWR0aDogODAlO1xcbn1cXG5cXG5oZWFkZXIgPiBoMSB7XFxuICBtYXJnaW46IDA7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgZm9udC1zaXplOiA1MnB4O1xcbiAgcGFkZGluZzogMzZweCAwO1xcbn1cXG5cXG4udXNlci1pbnB1dCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNpdHktbmFtZSB7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XFxuICBwYWRkaW5nOiA1cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDM1cHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgY29sb3I6ICM0ZDRiNGI7XFxuICBmb250LWZhbWlseTogXFxcIlBvcHBpbnNcXFwiLCBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcXG5cXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLmNpdHktbmFtZTpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG46OnBsYWNlaG9sZGVyIHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBjb2xvcjogIzRkNGI0YjtcXG4gIG9wYWNpdHk6IDE7XFxuICBmb250LXNpemU6IDM1cHg7XFxuXFxuICBmb250LWZhbWlseTogXFxcIlBvcHBpbnNcXFwiLCBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLmNpdHktbmFtZTpmb2N1czo6cGxhY2Vob2xkZXIge1xcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4udXNlci1pbnB1dCA+IGJ1dHRvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGluc1xcXCI7XFxuICBmb250LXNpemU6IDM1cHg7XFxuICBwYWRkaW5nOiAzcHggMjFweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMzVweDtcXG4gIGJvcmRlcjogc29saWQgMnB4IHdoaXRlO1xcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDM1cHg7XFxuICBib3JkZXItbGVmdC13aWR0aDogMDtcXG59XFxuXFxuLnVzZXItaW5wdXQgaW1nIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICB3aWR0aDogYXV0bztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJvdHRvbTogMnB4O1xcbn1cXG5cXG4vKiBESVNQTEFZICovXFxuLndlYXRoZXItZGlzcGxheSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDcwJTtcXG4gIG9wYWNpdHk6IDE7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGNvbG9yOiAjZmZmO1xcblxcbiAgZm9udC1zaXplOiA1MHB4O1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGdhcDogNTBweDtcXG59XFxuXFxuLnRlbXAtaW5mb3tcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZm9udC1zaXplOiA2MHB4O1xcbn1cXG5cXG4uY2FzdC1kaXNwbGF5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogNTAlO1xcbiAgaGVpZ2h0OiAzNTBweDtcXG59XFxuXFxuLmNhc3QtZGlzcGxheSA+IGltZyB7XFxuICBhbmltYXRpb246IHNsaWRlLWluIDAuNXMgZm9yd2FyZHMgZWFzZS1pbi1vdXQ7XFxuICBhbmltYXRpb24tZGVsYXk6IDAuMnM7XFxuICBoZWlnaHQ6IDM1MHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNsaWRlLWluIHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMHB4KTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbiAgfVxcbn1cXG5cXG4uaW5mby1kaXNwbGF5IHtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBmb250LWZhbWlseTogXFxcIk0gUExVUyAyXFxcIiwgVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBnYXA6IDIwcHg7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC43cyBlYXNlLWluLW91dDtcXG59XFxuXFxuLndoaXRlLWJsb2NrIHtcXG4gIGhlaWdodDogNzBweDtcXG4gIHdpZHRoOiA3cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uaW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDEwMHB4O1xcbn1cXG5cXG4uaW5mby1ob2xkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogNDUwcHg7XFxufVxcblxcbi5kaXNwbGF5LWNpdHktbmFtZXtcXG4gIGZvbnQtc2l6ZTogNTBweDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcblxcbi5tYXgtdGVtcC1sb2dvLFxcbi5taW4tdGVtcC1sb2dvIHtcXG4gIGhlaWdodDogMjBweDtcXG4gIG1hcmdpbi1sZWZ0OiA3cHg7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbi5jdXJyZW50LXRlbXAge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLmNhc3QtdGVtcCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBnYXA6IDJweDtcXG59XFxuXFxuLm1pbi1tYXgtdGVtcCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmh1bWlkaXR5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDVweDtcXG59XFxuXFxuLmh1bWlkaXR5ID4gaW1nIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXFxuLmNhc3Qge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XFxufVxcblxcbi5taXNjIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiA1cHg7XFxufVxcblxcbi53aW5kIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAycHg7XFxufVxcblxcbi53aW5kID4gaW1nIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXFxuLm1pbi10ZW1wLFxcbi5tYXgtdGVtcCB7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuLyogTE9BRElORyAqL1xcbi5sb2FkaW5nLWJlZ2luIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGluc1xcXCIsIFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiA2MHB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcblxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDAlO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMTIyM2FlZjtcXG4gIHotaW5kZXg6IDEwO1xcbn1cXG5cXG4vKiBXRUFUSEVSIEVGRkVDVHMgKi9cXG4uc3VuIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwOi8vMTI3LjAuMC4xOjU1MDAvZGlzdC84MThmNTlhZjRmNTU2ZDYwMWZiYS5zdmcpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGhlaWdodDogMTUwcHg7XFxuICB3aWR0aDogMTUwcHg7XFxuICB6LWluZGV4OiA5O1xcblxcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYm94LXNoYWRvdzogMCAwIDYwcHggMTBweCByZ2IoMjU1IDI1NSAwKTtcXG59XFxuXFxuLmhpbGxzLWNvbnRhaW5lcntcXG4gIG1hcmdpbi10b3A6IDUwcHg7XFxuICBoZWlnaHQ6IDQwMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5oaWxsczEsXFxuLmhpbGxzMiB7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcblxcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDQwMHB4O1xcbn1cXG4uaGlsbHMxIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi9hc3NldHMvaGlsbHMxLnN2Z1xcXCIpO1xcbn1cXG5cXG4uaGlsbHMyIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi9hc3NldHMvaGlsbHMyLnN2Z1xcXCIpO1xcbiAgYm90dG9tOiAtMTBweDtcXG59XFxuXFxuLyogQk9EWSAqL1xcbmJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDk1ZmY7XFxufVxcblxcbmJvZHksXFxuaHRtbCB7XFxuICBmb250LWZhbWlseTogXFxcIlBvcHBpbnNcXFwiLCBzYW5zLXNlcmlmLCBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuKiB7XFxuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XFxufVxcblxcbi8qIE1FRElBIFFVRVJJRVMgKi9cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDQ4cHgpIHtcXG4gIC5jaXR5LW5hbWUge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG4gIGhlYWRlciA+IGgxIHtcXG4gICAgZm9udC1zaXplOiAxMHZ3O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMnZoO1xcbiAgfVxcblxcbiAgaGVhZGVyIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG4gIC53ZWF0aGVyLWRpc3BsYXkge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDMwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbiAgLmNhc3QtZGlzcGxheSA+IGltZyB7XFxuICAgIGhlaWdodDogMjY3cHg7XFxuICAgIHdpZHRoOiA4NSU7XFxuICB9XFxuICAuY2FzdC1kaXNwbGF5IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogYXV0bztcXG4gIH1cXG4gIC5pbmZvIHtcXG4gICAgZ2FwOiAxMHZ3O1xcbiAgfVxcbiAgLmluZm8taG9sZGVyIHtcXG4gICAgcGFkZGluZy1ib3R0b206IDQwcHg7XFxuICB9XFxuICAuY3VycmVudC10ZW1wIHtcXG4gICAgZm9udC1zaXplOiAxM3Z3O1xcbiAgfVxcbiAgLmxvYWRpbmctYmVnaW4ge1xcbiAgICB0b3A6IDM1dmggIWltcG9ydGFudDtcXG4gICAgZm9udC1zaXplOiA5dnc7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgYXBpSGFuZGxlciA9ICgoKSA9PiB7XG4gIGxldCBmaXJzdCA9IHRydWU7XG4gIGNvbnN0IGFwaUxpbmsgPSBcImh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP1wiO1xuICBjb25zdCBhcGlLZXkgPSBcIjk0YTJhYWQ0YTM4MTIxZTc5NDczNWE5NWVlNDE1YTc2XCI7XG5cbiAgYXN5bmMgZnVuY3Rpb24gY2FsbEFwaShjaXR5TmFtZSkge1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobG9hZGluZ0hhbmRsZXIucmV0dXJuTG9hZGluZygpKTtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGFwaUxpbmsgKyBgcT0ke2NpdHlOYW1lfSZhcHBpZD0ke2FwaUtleX1gLCB7XG4gICAgICBtb2RlOiBcImNvcnNcIixcbiAgICB9KTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBjYWxsQXBpLFxuICB9O1xufSkoKTtcblxuY29uc3QgbG9hZGluZ0hhbmRsZXIgPSAoKCkgPT4ge1xuICBjb25zdCByZXR1cm5Mb2FkaW5nID0gKCkgPT4ge1xuICAgIGNvbnN0IGxvYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGZldGNoRGF0YSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBsb2FkaW5nLmNsYXNzTGlzdC5hZGQoXCJsb2FkaW5nLWJlZ2luXCIpO1xuICAgIGZldGNoRGF0YS5jbGFzc0xpc3QuYWRkKFwidGV4dFwiKTtcblxuICAgIGZldGNoRGF0YS50ZXh0Q29udGVudCA9IFwiRmV0Y2hpbmcgRGF0YVwiO1xuXG4gICAgbG9hZGluZy5hcHBlbmRDaGlsZChmZXRjaERhdGEpO1xuICAgIHJldHVybiBsb2FkaW5nO1xuICB9O1xuICByZXR1cm4ge1xuICAgIHJldHVybkxvYWRpbmcsXG4gIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBhcGlIYW5kbGVyO1xuIiwiaW1wb3J0IEhhemUgZnJvbSBcIi4vYXNzZXRzL3dlYXRoZXIvaGF6ZS5zdmdcIjtcbmltcG9ydCBDbG91ZHkgZnJvbSBcIi4vYXNzZXRzL3dlYXRoZXIvY2xvdWR5LnN2Z1wiO1xuaW1wb3J0IFJhaW4gZnJvbSBcIi4vYXNzZXRzL3dlYXRoZXIvcmFpbi5zdmdcIjtcbmltcG9ydCBDbGVhciBmcm9tIFwiLi9hc3NldHMvd2VhdGhlci9jbGVhci5zdmdcIjtcbmltcG9ydCBEcml6emxlIGZyb20gXCIuL2Fzc2V0cy93ZWF0aGVyL2RyaXp6bGUuc3ZnXCI7XG5pbXBvcnQgVGh1bmRlcnN0b3JtIGZyb20gXCIuL2Fzc2V0cy93ZWF0aGVyL3RodW5kZXJzdG9ybS5zdmdcIjtcblxuaW1wb3J0IFVwVHJpYW5nbGUgZnJvbSBcIi4vYXNzZXRzL3VwLXRyaWFuZ2xlLnN2Z1wiO1xuaW1wb3J0IERvd25UcmlhbmdsZSBmcm9tIFwiLi9hc3NldHMvZG93bi10cmlhbmdsZS5zdmdcIjtcbmltcG9ydCBIdW1pZGl0eSBmcm9tIFwiLi9hc3NldHMvaHVtaWRpdHkuc3ZnXCI7XG5pbXBvcnQgV2luZCBmcm9tIFwiLi9hc3NldHMvd2luZC5zdmdcIjtcbmNvbnN0IGltYWdlSGFuZGxlciA9ICgpID0+IHtcbiAgYXN5bmMgZnVuY3Rpb24gd2VhdGhlckljb24oZGF0YSkge1xuICAgIGlmIChkYXRhID09IFwiSGF6ZVwiKSB7XG4gICAgICByZXR1cm4gSGF6ZTtcbiAgICB9IGVsc2UgaWYgKGRhdGEgPT0gXCJSYWluXCIpIHtcbiAgICAgIHJldHVybiBSYWluO1xuICAgIH0gZWxzZSBpZiAoZGF0YSA9PSBcIkNsb3Vkc1wiKSB7XG4gICAgICByZXR1cm4gQ2xvdWR5O1xuICAgIH0gZWxzZSBpZiAoZGF0YSA9PSBcIkRyaXp6bGVcIikge1xuICAgICAgcmV0dXJuIERyaXp6bGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBUaHVuZGVyc3Rvcm07XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gZ2V0SHVtaWRpdHlJbWFnZSgpIHtcbiAgICByZXR1cm4gSHVtaWRpdHk7XG4gIH1cbiAgYXN5bmMgZnVuY3Rpb24gZ2V0V2luZEltYWdlKCkge1xuICAgIHJldHVybiBXaW5kO1xuICB9XG4gIGFzeW5jIGZ1bmN0aW9uIGdldFVwVHJpYW5nbGUoKSB7XG4gICAgcmV0dXJuIFVwVHJpYW5nbGU7XG4gIH1cbiAgYXN5bmMgZnVuY3Rpb24gZ2V0RG93blRyaWFuZ2xlKCkge1xuICAgIHJldHVybiBEb3duVHJpYW5nbGU7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICB3ZWF0aGVySWNvbixcbiAgICBnZXRIdW1pZGl0eUltYWdlLFxuICAgIGdldFdpbmRJbWFnZSxcbiAgICBnZXRVcFRyaWFuZ2xlLFxuICAgIGdldERvd25UcmlhbmdsZSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGltYWdlSGFuZGxlcjtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiaW1wb3J0IGFwaUhhbmRsZXIgZnJvbSBcIi4vYXBpTG9hZGluZ0hhbmRsZXJcIjtcbmltcG9ydCBpbWFnZUhhbmRsZXIgZnJvbSBcIi4vaW1hZ2VIYW5kbGVyXCI7XG5pbXBvcnQgXCIuL21haW4uY3NzXCI7XG5cbmNvbnN0IGRpc3BsYXlIYW5kbGVyID0gKCkgPT4ge1xuICBjb25zdCB3ZWF0aGVyRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2VhdGhlci1kaXNwbGF5XCIpO1xuICBjb25zdCBjYXN0VGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FzdFwiKTtcbiAgY29uc3QgaHVtaWRpdHlEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmh1bWlkaXR5XCIpO1xuICBjb25zdCB3aW5kRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53aW5kXCIpO1xuICBjb25zdCB0ZW1wSW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGVtcC1pbmZvXCIpO1xuXG4gIGNvbnN0IHJldHVybkltYWdlID0gYXN5bmMgKGNvbmRpdGlvbikgPT4ge1xuICAgIGNvbnN0IGltYWdlRGF0YSA9IGF3YWl0IGltYWdlSGFuZGxlcigpLndlYXRoZXJJY29uKGNvbmRpdGlvbik7XG4gICAgY29uc3QgbmV3SW1nID0gbmV3IEltYWdlKCk7XG4gICAgbmV3SW1nLnNyYyA9IGltYWdlRGF0YTtcbiAgICByZXR1cm4gbmV3SW1nO1xuICB9O1xuXG4gIGNvbnN0IHJldHVybkNpdHlOYW1lID0gKG5hbWUpID0+IHtcbiAgICBjb25zdCBuYW1lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBuYW1lRGl2LnRleHRDb250ZW50ID0gbmFtZTtcbiAgICBuYW1lRGl2LmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5LWNpdHktbmFtZVwiKTtcbiAgICByZXR1cm4gbmFtZURpdjtcbiAgfTtcblxuICBjb25zdCByZXR1cm5DdXJyZW50VGVtcCA9ICh0ZW1wKSA9PiB7XG4gICAgY29uc3QgY3VycmVudFRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGN1cnJlbnRUZW1wLmNsYXNzTGlzdC5hZGQoXCJjdXJyZW50LXRlbXBcIik7XG4gICAgY3VycmVudFRlbXAudGV4dENvbnRlbnQgPSBgJHtNYXRoLnJvdW5kKHRlbXAgLSAyNzMpfcKwQ2A7XG4gICAgcmV0dXJuIGN1cnJlbnRUZW1wO1xuICB9O1xuXG4gIGNvbnN0IHJldHVybk1heFRlbXAgPSAodGVtcCkgPT4ge1xuICAgIGNvbnN0IG1heFRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1heFRlbXAuY2xhc3NMaXN0LmFkZChcIm1heC10ZW1wXCIpO1xuXG4gICAgaW1hZ2VIYW5kbGVyKClcbiAgICAgIC5nZXRVcFRyaWFuZ2xlKClcbiAgICAgIC50aGVuKChkYXQpID0+IHtcbiAgICAgICAgY29uc3QgbmV3SW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgbmV3SW1hZ2Uuc3JjID0gZGF0O1xuICAgICAgICBuZXdJbWFnZS5jbGFzc0xpc3QuYWRkKFwibWF4LXRlbXAtbG9nb1wiKTtcbiAgICAgICAgbWF4VGVtcC5hcHBlbmRDaGlsZChuZXdJbWFnZSk7XG4gICAgICB9KTtcbiAgICBtYXhUZW1wLnRleHRDb250ZW50ID0gYCR7TWF0aC5yb3VuZCh0ZW1wIC0gMjczKX3CsENgO1xuICAgIHJldHVybiBtYXhUZW1wO1xuICB9O1xuXG4gIGNvbnN0IHJldHVybk1pblRlbXAgPSAodGVtcCkgPT4ge1xuICAgIGNvbnN0IG1pblRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1pblRlbXAuY2xhc3NMaXN0LmFkZChcIm1pbi10ZW1wXCIpO1xuICAgIGltYWdlSGFuZGxlcigpXG4gICAgICAuZ2V0RG93blRyaWFuZ2xlKClcbiAgICAgIC50aGVuKChkYXQpID0+IHtcbiAgICAgICAgY29uc3QgbmV3SW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgbmV3SW1hZ2Uuc3JjID0gZGF0O1xuICAgICAgICBuZXdJbWFnZS5jbGFzc0xpc3QuYWRkKFwibWluLXRlbXAtbG9nb1wiKTtcbiAgICAgICAgbWluVGVtcC5hcHBlbmRDaGlsZChuZXdJbWFnZSk7XG4gICAgICB9KTtcbiAgICBtaW5UZW1wLnRleHRDb250ZW50ID0gYCR7TWF0aC5yb3VuZCh0ZW1wIC0gMjczKX3CsENgO1xuICAgIHJldHVybiBtaW5UZW1wO1xuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZUNhc3QgPSAoY2FzdCkgPT4ge1xuICAgIGNhc3RUZXh0LnRleHRDb250ZW50ID0gY2FzdDtcbiAgICByZXR1cm47XG4gIH07XG5cbiAgY29uc3QgdXBkYXRlSHVtaWRpdHkgPSAoaHVtaWRpdHkpID0+IHtcbiAgICBodW1pZGl0eURpdi5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGh1bWlkaXR5RGl2LnRleHRDb250ZW50ID0gaHVtaWRpdHk7XG5cbiAgICBpbWFnZUhhbmRsZXIoKVxuICAgICAgLmdldEh1bWlkaXR5SW1hZ2UoKVxuICAgICAgLnRoZW4oKGltYWdlRGF0YSkgPT4ge1xuICAgICAgICBjb25zdCBodW1pZGl0eUxvZ28gPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgaHVtaWRpdHlMb2dvLnNyYyA9IGltYWdlRGF0YTtcbiAgICAgICAgaHVtaWRpdHlEaXYuYXBwZW5kQ2hpbGQoaHVtaWRpdHlMb2dvKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSk7XG4gIH07XG5cbiAgY29uc3QgdXBkYXRlV2luZCA9ICh3aW5kKSA9PiB7XG4gICAgd2luZERpdi5pbm5lckhUTUwgPSBcIlwiO1xuICAgIHdpbmREaXYudGV4dENvbnRlbnQgPSB3aW5kO1xuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZURhdGEgPSBhc3luYyAoZGF0YSkgPT4ge1xuICAgIHRlbXBJbmZvLmlubmVySFRNTCA9IFwiXCI7XG4gICAgY29uc29sZS5sb2coZGF0YSk7XG5cbiAgICB0ZW1wSW5mby5hcHBlbmRDaGlsZChyZXR1cm5DdXJyZW50VGVtcChkYXRhW1wibWFpblwiXVtcInRlbXBcIl0pKTtcbiAgICB0ZW1wSW5mby5hcHBlbmRDaGlsZChyZXR1cm5DaXR5TmFtZShkYXRhW1wibmFtZVwiXSkpO1xuICAgIHdlYXRoZXJEaXNwbGF5LmFwcGVuZENoaWxkKHRlbXBJbmZvKTtcblxuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2FkaW5nLWJlZ2luXCIpKTtcbiAgICByZXR1cm47XG4gIH07XG4gIHJldHVybiB7XG4gICAgdXBkYXRlRGF0YSxcbiAgfTtcbn07XG5cbmNvbnN0IGZvcm1IYW5kbGVyID0gKCkgPT4ge1xuICBjb25zdCBpbnB1dEZvcm0gPSBkb2N1bWVudC5mb3Jtc1swXTtcbiAgaW5wdXRGb3JtLm9uc3VibWl0ID0gcGFzc0NpdHlOYW1lO1xuXG4gIGZ1bmN0aW9uIGdldENpdHlOYW1lKCkge1xuICAgIHJldHVybiBpbnB1dEZvcm0uZWxlbWVudHNbMF07XG4gIH1cblxuICBmdW5jdGlvbiBwYXNzQ2l0eU5hbWUoZSkge1xuICAgIGNvbnN0IGNpdHlOYW1lID0gZ2V0Q2l0eU5hbWUoKTtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBhcGlIYW5kbGVyXG4gICAgICAuY2FsbEFwaShjaXR5TmFtZS52YWx1ZSlcbiAgICAgIC50aGVuKChkYXRhKSA9PiBkaXNwbGF5SGFuZGxlcigpLnVwZGF0ZURhdGEoZGF0YSkpXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgIH0pO1xuICAgIGlucHV0Rm9ybS5yZXNldCgpO1xuICB9XG59O1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICBhcGlIYW5kbGVyXG4gICAgLmNhbGxBcGkoXCJOZXcgRGVsaGlcIilcbiAgICAudGhlbigoZGF0YSkgPT4gZGlzcGxheUhhbmRsZXIoKS51cGRhdGVEYXRhKGRhdGEpKVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9KTtcbiAgaW5wdXRGb3JtLnJlc2V0KCk7XG59KTtcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmb3JtSGFuZGxlcik7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=