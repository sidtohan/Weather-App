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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=M+PLUS+2:wght@500;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* HEADER */\nheader {\n  display: flex;\n  justify-content: space-between;\n  width: 80%;\n}\n\nheader > h1 {\n  margin: 0;\n  color: white;\n  font-weight: 700;\n  font-size: 52px;\n  padding: 36px 0;\n}\n\n.user-input {\n  display: flex;\n  align-items: center;\n}\n\n.city-name {\n  background: transparent;\n  border-radius: 50px;\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n  padding: 5px;\n  text-align: center;\n  font-size: 20px;\n  font-weight: 500;\n  color: white;\n  font-family: \"Poppins\", Verdana, Geneva, Tahoma, sans-serif;\n  border: solid 2px white;\n}\n\n.city-name:focus {\n  outline: none;\n}\n\n::placeholder {\n  font-weight: 500;\n  color: white;\n  opacity: 1;\n  font-size: 20px;\n\n  font-family: \"Poppins\", Verdana, Geneva, Tahoma, sans-serif;\n}\n\n.city-name:focus::placeholder {\n  color: transparent;\n}\n\n.user-input > button {\n  cursor: pointer;\n  background-color: transparent;\n  font-family: \"Poppins\";\n  font-size: 20px;\n  padding: 5px 12px;\n  font-weight: 700;\n  border: none;\n  border-top-right-radius: 25px;\n  border: solid 2px white;\n  border-bottom-right-radius: 25px;\n  border-left-width: 0;\n}\n\n.user-input img {\n  vertical-align: middle;\n  height: 23px;\n  width: auto;\n  position: relative;\n  bottom: 2px;\n}\n\n/* DISPLAY */\n.weather-display {\n  display: flex;\n  width: 70%;\n  opacity: 1;\n  justify-content: center;\n  transition: 0.5s ease-in-out;\n}\n\n.cast-display {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 50%;\n  height: 350px;\n}\n\n.cast-display > img {\n  animation: slide-in 0.5s forwards ease-in-out;\n  animation-delay: 0.2s;\n  height: 350px;\n  width: 100%;\n  opacity: 0;\n}\n\n@keyframes slide-in {\n  from {\n    opacity: 0;\n    transform: translateY(-100px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n.info-display {\n  font-size: 30px;\n  font-weight: 500;\n  font-family: \"M PLUS 2\", Verdana, Geneva, Tahoma, sans-serif;\n  color: white;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 50%;\n  gap: 20px;\n  transition: all 0.7s ease-in-out;\n}\n\n.white-block{\n  height:70px;\n  width: 7px;\n  background-color: #fff;\n}\n\n.info {\n  display: flex;\n  justify-content: center;\n  gap: 100px;\n}\n\n.max-temp-logo,.min-temp-logo{\n  height: 20px;\n  margin-left: 7px;\n  display: inline-block;\n}\n.current-temp {\n  font-size: 70px;\n  font-weight: 700;\n}\n\n.cast-temp {\n  display: flex;\n  flex-direction: column;\n  text-align: left;\n  gap: 2px;\n}\n\n.min-max-temp{\n  display: flex;\n  flex-direction: column;\n}\n\n.humidity {\n  display: flex;\n  gap: 5px;\n}\n\n.humidity > img {\n  display: inline-block;\n}\n\n.cast {\n  text-align: center;\n  font-weight: 700;\n  letter-spacing: 2px;\n}\n\n.misc {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 5px;\n}\n\n.wind {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n}\n\n.wind > img {\n  display: inline-block;\n}\n\n/* LOADING */\n.loading-begin {\n  color: white;\n  font-family: \"Poppins\", Verdana, Geneva, Tahoma, sans-serif;\n  font-size: 60px;\n  font-weight: 500;\n  width: 100%;\n  text-align: center;\n\n  position: static;\n  top: 30vh;\n  height: 400px;\n  background-color: inherit;\n  opacity: 1;\n  z-index: 9;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: inherit;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 60px;\n  box-sizing: border-box;\n}\n\nbody,\nhtml {\n  font-family: \"Poppins\", sans-serif, Verdana, Geneva, Tahoma;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  height: 100%;\n}\n\nhtml {\n  background: linear-gradient(246.17deg, #7a04c3 21.35%, #103753 97.99%);\n}\n* {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n\n/* MEDIA QUERIES */\n@media screen and (max-width: 1048px) {\n  .city-name {\n    width: 100%;\n  }\n  header > h1 {\n    font-size: 10vw;\n    padding-bottom: 2vh;\n  }\n\n  header {\n    flex-direction: column;\n    width: 80%;\n    align-items: center;\n  }\n  .weather-display {\n    flex-direction: column;\n    align-items: center;\n    gap: 30px;\n    width: 100%;\n  }\n  .cast-display > img {\n    height: 267px;\n    width: 85%;\n  }\n  .cast-display {\n    width: 100%;\n    height: auto;\n  }\n  .info {\n    gap: 10vw;\n  }\n  .current-temp {\n    font-size: 13vw;\n  }\n  .loading-begin {\n    top: 35vh !important;\n    font-size: 9vw;\n  }\n  body {\n    gap: 10vh;\n  }\n}\n\n@media screen and (max-width: 414px) {\n  .loading-begin {\n    top: 30vh !important;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/main.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=M+PLUS+2:wght@500;700&display=swap\");\n\n/* HEADER */\nheader {\n  display: flex;\n  justify-content: space-between;\n  width: 80%;\n}\n\nheader > h1 {\n  margin: 0;\n  color: white;\n  font-weight: 700;\n  font-size: 52px;\n  padding: 36px 0;\n}\n\n.user-input {\n  display: flex;\n  align-items: center;\n}\n\n.city-name {\n  background: transparent;\n  border-radius: 50px;\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n  padding: 5px;\n  text-align: center;\n  font-size: 20px;\n  font-weight: 500;\n  color: white;\n  font-family: \"Poppins\", Verdana, Geneva, Tahoma, sans-serif;\n  border: solid 2px white;\n}\n\n.city-name:focus {\n  outline: none;\n}\n\n::placeholder {\n  font-weight: 500;\n  color: white;\n  opacity: 1;\n  font-size: 20px;\n\n  font-family: \"Poppins\", Verdana, Geneva, Tahoma, sans-serif;\n}\n\n.city-name:focus::placeholder {\n  color: transparent;\n}\n\n.user-input > button {\n  cursor: pointer;\n  background-color: transparent;\n  font-family: \"Poppins\";\n  font-size: 20px;\n  padding: 5px 12px;\n  font-weight: 700;\n  border: none;\n  border-top-right-radius: 25px;\n  border: solid 2px white;\n  border-bottom-right-radius: 25px;\n  border-left-width: 0;\n}\n\n.user-input img {\n  vertical-align: middle;\n  height: 23px;\n  width: auto;\n  position: relative;\n  bottom: 2px;\n}\n\n/* DISPLAY */\n.weather-display {\n  display: flex;\n  width: 70%;\n  opacity: 1;\n  justify-content: center;\n  transition: 0.5s ease-in-out;\n}\n\n.cast-display {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 50%;\n  height: 350px;\n}\n\n.cast-display > img {\n  animation: slide-in 0.5s forwards ease-in-out;\n  animation-delay: 0.2s;\n  height: 350px;\n  width: 100%;\n  opacity: 0;\n}\n\n@keyframes slide-in {\n  from {\n    opacity: 0;\n    transform: translateY(-100px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n.info-display {\n  font-size: 30px;\n  font-weight: 500;\n  font-family: \"M PLUS 2\", Verdana, Geneva, Tahoma, sans-serif;\n  color: white;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 50%;\n  gap: 20px;\n  transition: all 0.7s ease-in-out;\n}\n\n.white-block{\n  height:70px;\n  width: 7px;\n  background-color: #fff;\n}\n\n.info {\n  display: flex;\n  justify-content: center;\n  gap: 100px;\n}\n\n.max-temp-logo,.min-temp-logo{\n  height: 20px;\n  margin-left: 7px;\n  display: inline-block;\n}\n.current-temp {\n  font-size: 70px;\n  font-weight: 700;\n}\n\n.cast-temp {\n  display: flex;\n  flex-direction: column;\n  text-align: left;\n  gap: 2px;\n}\n\n.min-max-temp{\n  display: flex;\n  flex-direction: column;\n}\n\n.humidity {\n  display: flex;\n  gap: 5px;\n}\n\n.humidity > img {\n  display: inline-block;\n}\n\n.cast {\n  text-align: center;\n  font-weight: 700;\n  letter-spacing: 2px;\n}\n\n.misc {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 5px;\n}\n\n.wind {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n}\n\n.wind > img {\n  display: inline-block;\n}\n\n/* LOADING */\n.loading-begin {\n  color: white;\n  font-family: \"Poppins\", Verdana, Geneva, Tahoma, sans-serif;\n  font-size: 60px;\n  font-weight: 500;\n  width: 100%;\n  text-align: center;\n\n  position: static;\n  top: 30vh;\n  height: 400px;\n  background-color: inherit;\n  opacity: 1;\n  z-index: 9;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: inherit;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 60px;\n  box-sizing: border-box;\n}\n\nbody,\nhtml {\n  font-family: \"Poppins\", sans-serif, Verdana, Geneva, Tahoma;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  height: 100%;\n}\n\nhtml {\n  background: linear-gradient(246.17deg, #7a04c3 21.35%, #103753 97.99%);\n}\n* {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n\n/* MEDIA QUERIES */\n@media screen and (max-width: 1048px) {\n  .city-name {\n    width: 100%;\n  }\n  header > h1 {\n    font-size: 10vw;\n    padding-bottom: 2vh;\n  }\n\n  header {\n    flex-direction: column;\n    width: 80%;\n    align-items: center;\n  }\n  .weather-display {\n    flex-direction: column;\n    align-items: center;\n    gap: 30px;\n    width: 100%;\n  }\n  .cast-display > img {\n    height: 267px;\n    width: 85%;\n  }\n  .cast-display {\n    width: 100%;\n    height: auto;\n  }\n  .info {\n    gap: 10vw;\n  }\n  .current-temp {\n    font-size: 13vw;\n  }\n  .loading-begin {\n    top: 35vh !important;\n    font-size: 9vw;\n  }\n  body {\n    gap: 10vh;\n  }\n}\n\n@media screen and (max-width: 414px) {\n  .loading-begin {\n    top: 30vh !important;\n  }\n}\n"],"sourceRoot":""}]);
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
    const weatherDisplay = document.querySelector(".weather-display");
    weatherDisplay.innerHTML = "";
    if (first) {
      document.body.removeChild(document.querySelector(".loading-begin"));
      document.body.appendChild(loadingHandler.returnLoading());
      first = false;
    } else {
      document.body.appendChild(loadingHandler.returnLoading());
    }
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

module.exports = __webpack_require__.p + "28582b06648fefbdbe87.svg";

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

  const returnImage = async (condition) => {
    const imageData = await (0,_imageHandler__WEBPACK_IMPORTED_MODULE_1__["default"])().weatherIcon(condition);
    const newImg = new Image();
    newImg.src = imageData;
    return newImg;
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
    console.log(data);
    /*
    const info = `
    <div class="info-display">
      <div class="current-temp"></div>
      <div class="info">
        <div class="cast-temp">
          <div class="cast"></div>
          <div class="max-temp"></div>
          <div class="min-temp"></div>
        </div>
        <div class="misc">
          <div class="humidity"></div>
          <div class="wind"></div>
        </div>
      </div>
    </div>`*/
    const cast = document.createElement("div");
    const info = document.createElement("div");
    const minMaxTemp = document.createElement("div");
    const whiteBlock = document.createElement("div");

    cast.classList.add("cast-display");
    info.classList.add("info-display");
    minMaxTemp.classList.add("min-max-temp");
    whiteBlock.classList.add("white-block");

    // need to await here cuz of the possible image delays
    const imgDat = await returnImage(data["weather"][0]["main"]);
    cast.appendChild(imgDat);
    info.appendChild(returnCurrentTemp(data["main"]["temp"]));
    minMaxTemp.appendChild(returnMaxTemp(data["main"]["temp_max"]));
    minMaxTemp.appendChild(returnMinTemp(data["main"]["temp_min"]));
    // updateCast(data["weather"][0]["main"]);
    // updateHumidity(data["main"]["humidity"]);
    // updateWind(data["wind"]["speed"]);

    info.appendChild(whiteBlock);
    info.appendChild(minMaxTemp);
    weatherDisplay.appendChild(cast);
    weatherDisplay.appendChild(info);
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

window.addEventListener("DOMContentLoaded", formHandler);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLE1BQU0sVUFBVSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLFVBQVUsS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxNQUFNLFlBQVksV0FBVyxV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c3MiLCJ3ZWJwYWNrOi8vV2VhdGhlci1BcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL1dlYXRoZXItQXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vV2VhdGhlci1BcHAvLi9zcmMvbWFpbi5jc3M/ZGRkMyIsIndlYnBhY2s6Ly9XZWF0aGVyLUFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9XZWF0aGVyLUFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vV2VhdGhlci1BcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vV2VhdGhlci1BcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vV2VhdGhlci1BcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9XZWF0aGVyLUFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL1dlYXRoZXItQXBwLy4vc3JjL2FwaUxvYWRpbmdIYW5kbGVyLmpzIiwid2VicGFjazovL1dlYXRoZXItQXBwLy4vc3JjL2ltYWdlSGFuZGxlci5qcyIsIndlYnBhY2s6Ly9XZWF0aGVyLUFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9XZWF0aGVyLUFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9XZWF0aGVyLUFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vV2VhdGhlci1BcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9XZWF0aGVyLUFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL1dlYXRoZXItQXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vV2VhdGhlci1BcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vV2VhdGhlci1BcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOndnaHRANDAwOzUwMDs3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TStQTFVTKzI6d2dodEA1MDA7NzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIEhFQURFUiAqL1xcbmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgd2lkdGg6IDgwJTtcXG59XFxuXFxuaGVhZGVyID4gaDEge1xcbiAgbWFyZ2luOiAwO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGZvbnQtc2l6ZTogNTJweDtcXG4gIHBhZGRpbmc6IDM2cHggMDtcXG59XFxuXFxuLnVzZXItaW5wdXQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jaXR5LW5hbWUge1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LWZhbWlseTogXFxcIlBvcHBpbnNcXFwiLCBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcXG4gIGJvcmRlcjogc29saWQgMnB4IHdoaXRlO1xcbn1cXG5cXG4uY2l0eS1uYW1lOmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbjo6cGxhY2Vob2xkZXIge1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG9wYWNpdHk6IDE7XFxuICBmb250LXNpemU6IDIwcHg7XFxuXFxuICBmb250LWZhbWlseTogXFxcIlBvcHBpbnNcXFwiLCBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLmNpdHktbmFtZTpmb2N1czo6cGxhY2Vob2xkZXIge1xcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4udXNlci1pbnB1dCA+IGJ1dHRvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGluc1xcXCI7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBwYWRkaW5nOiA1cHggMTJweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjVweDtcXG4gIGJvcmRlcjogc29saWQgMnB4IHdoaXRlO1xcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDI1cHg7XFxuICBib3JkZXItbGVmdC13aWR0aDogMDtcXG59XFxuXFxuLnVzZXItaW5wdXQgaW1nIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICBoZWlnaHQ6IDIzcHg7XFxuICB3aWR0aDogYXV0bztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJvdHRvbTogMnB4O1xcbn1cXG5cXG4vKiBESVNQTEFZICovXFxuLndlYXRoZXItZGlzcGxheSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDcwJTtcXG4gIG9wYWNpdHk6IDE7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHRyYW5zaXRpb246IDAuNXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5jYXN0LWRpc3BsYXkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiA1MCU7XFxuICBoZWlnaHQ6IDM1MHB4O1xcbn1cXG5cXG4uY2FzdC1kaXNwbGF5ID4gaW1nIHtcXG4gIGFuaW1hdGlvbjogc2xpZGUtaW4gMC41cyBmb3J3YXJkcyBlYXNlLWluLW91dDtcXG4gIGFuaW1hdGlvbi1kZWxheTogMC4ycztcXG4gIGhlaWdodDogMzUwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIG9wYWNpdHk6IDA7XFxufVxcblxcbkBrZXlmcmFtZXMgc2xpZGUtaW4ge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwcHgpO1xcbiAgfVxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxuICB9XFxufVxcblxcbi5pbmZvLWRpc3BsYXkge1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTSBQTFVTIDJcXFwiLCBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogNTAlO1xcbiAgZ2FwOiAyMHB4O1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuN3MgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi53aGl0ZS1ibG9ja3tcXG4gIGhlaWdodDo3MHB4O1xcbiAgd2lkdGg6IDdweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxufVxcblxcbi5pbmZvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMTAwcHg7XFxufVxcblxcbi5tYXgtdGVtcC1sb2dvLC5taW4tdGVtcC1sb2dve1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgbWFyZ2luLWxlZnQ6IDdweDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuLmN1cnJlbnQtdGVtcCB7XFxuICBmb250LXNpemU6IDcwcHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4uY2FzdC10ZW1wIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIGdhcDogMnB4O1xcbn1cXG5cXG4ubWluLW1heC10ZW1we1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5odW1pZGl0eSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiA1cHg7XFxufVxcblxcbi5odW1pZGl0eSA+IGltZyB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbi5jYXN0IHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xcbn1cXG5cXG4ubWlzYyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogNXB4O1xcbn1cXG5cXG4ud2luZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMnB4O1xcbn1cXG5cXG4ud2luZCA+IGltZyB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbi8qIExPQURJTkcgKi9cXG4ubG9hZGluZy1iZWdpbiB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LWZhbWlseTogXFxcIlBvcHBpbnNcXFwiLCBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogNjBweDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXG4gIHBvc2l0aW9uOiBzdGF0aWM7XFxuICB0b3A6IDMwdmg7XFxuICBoZWlnaHQ6IDQwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gIG9wYWNpdHk6IDE7XFxuICB6LWluZGV4OiA5O1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxufVxcblxcbmJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA2MHB4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSxcXG5odG1sIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGluc1xcXCIsIHNhbnMtc2VyaWYsIFZlcmRhbmEsIEdlbmV2YSwgVGFob21hO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5odG1sIHtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyNDYuMTdkZWcsICM3YTA0YzMgMjEuMzUlLCAjMTAzNzUzIDk3Ljk5JSk7XFxufVxcbioge1xcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xcbn1cXG5cXG4vKiBNRURJQSBRVUVSSUVTICovXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTA0OHB4KSB7XFxuICAuY2l0eS1uYW1lIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuICBoZWFkZXIgPiBoMSB7XFxuICAgIGZvbnQtc2l6ZTogMTB2dztcXG4gICAgcGFkZGluZy1ib3R0b206IDJ2aDtcXG4gIH1cXG5cXG4gIGhlYWRlciB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuICAud2VhdGhlci1kaXNwbGF5IHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAzMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG4gIC5jYXN0LWRpc3BsYXkgPiBpbWcge1xcbiAgICBoZWlnaHQ6IDI2N3B4O1xcbiAgICB3aWR0aDogODUlO1xcbiAgfVxcbiAgLmNhc3QtZGlzcGxheSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICB9XFxuICAuaW5mbyB7XFxuICAgIGdhcDogMTB2dztcXG4gIH1cXG4gIC5jdXJyZW50LXRlbXAge1xcbiAgICBmb250LXNpemU6IDEzdnc7XFxuICB9XFxuICAubG9hZGluZy1iZWdpbiB7XFxuICAgIHRvcDogMzV2aCAhaW1wb3J0YW50O1xcbiAgICBmb250LXNpemU6IDl2dztcXG4gIH1cXG4gIGJvZHkge1xcbiAgICBnYXA6IDEwdmg7XFxuICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQxNHB4KSB7XFxuICAubG9hZGluZy1iZWdpbiB7XFxuICAgIHRvcDogMzB2aCAhaW1wb3J0YW50O1xcbiAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvbWFpbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBR0EsV0FBVztBQUNYO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7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O0FBQ2xCO0VBQ0U7SUFDRSxXQUFXO0VBQ2I7RUFDQTtJQUNFLGVBQWU7SUFDZixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0Usc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsV0FBVztFQUNiO0VBQ0E7SUFDRSxhQUFhO0lBQ2IsVUFBVTtFQUNaO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsWUFBWTtFQUNkO0VBQ0E7SUFDRSxTQUFTO0VBQ1g7RUFDQTtJQUNFLGVBQWU7RUFDakI7RUFDQTtJQUNFLG9CQUFvQjtJQUNwQixjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxTQUFTO0VBQ1g7QUFDRjs7QUFFQTtFQUNFO0lBQ0Usb0JBQW9CO0VBQ3RCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDQwMDs1MDA7NzAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcbkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU0rUExVUysyOndnaHRANTAwOzcwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXG5cXG4vKiBIRUFERVIgKi9cXG5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHdpZHRoOiA4MCU7XFxufVxcblxcbmhlYWRlciA+IGgxIHtcXG4gIG1hcmdpbjogMDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBmb250LXNpemU6IDUycHg7XFxuICBwYWRkaW5nOiAzNnB4IDA7XFxufVxcblxcbi51c2VyLWlucHV0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY2l0eS1uYW1lIHtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XFxuICBwYWRkaW5nOiA1cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIiwgVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XFxuICBib3JkZXI6IHNvbGlkIDJweCB3aGl0ZTtcXG59XFxuXFxuLmNpdHktbmFtZTpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG46OnBsYWNlaG9sZGVyIHtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBjb2xvcjogd2hpdGU7XFxuICBvcGFjaXR5OiAxO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcblxcbiAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIiwgVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5jaXR5LW5hbWU6Zm9jdXM6OnBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLnVzZXItaW5wdXQgPiBidXR0b24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBmb250LWZhbWlseTogXFxcIlBvcHBpbnNcXFwiO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgcGFkZGluZzogNXB4IDEycHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDI1cHg7XFxuICBib3JkZXI6IHNvbGlkIDJweCB3aGl0ZTtcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyNXB4O1xcbiAgYm9yZGVyLWxlZnQtd2lkdGg6IDA7XFxufVxcblxcbi51c2VyLWlucHV0IGltZyB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgaGVpZ2h0OiAyM3B4O1xcbiAgd2lkdGg6IGF1dG87XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3R0b206IDJweDtcXG59XFxuXFxuLyogRElTUExBWSAqL1xcbi53ZWF0aGVyLWRpc3BsYXkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiA3MCU7XFxuICBvcGFjaXR5OiAxO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB0cmFuc2l0aW9uOiAwLjVzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uY2FzdC1kaXNwbGF5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogNTAlO1xcbiAgaGVpZ2h0OiAzNTBweDtcXG59XFxuXFxuLmNhc3QtZGlzcGxheSA+IGltZyB7XFxuICBhbmltYXRpb246IHNsaWRlLWluIDAuNXMgZm9yd2FyZHMgZWFzZS1pbi1vdXQ7XFxuICBhbmltYXRpb24tZGVsYXk6IDAuMnM7XFxuICBoZWlnaHQ6IDM1MHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNsaWRlLWluIHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMHB4KTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbiAgfVxcbn1cXG5cXG4uaW5mby1kaXNwbGF5IHtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBmb250LWZhbWlseTogXFxcIk0gUExVUyAyXFxcIiwgVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDUwJTtcXG4gIGdhcDogMjBweDtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjdzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4ud2hpdGUtYmxvY2t7XFxuICBoZWlnaHQ6NzBweDtcXG4gIHdpZHRoOiA3cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uaW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDEwMHB4O1xcbn1cXG5cXG4ubWF4LXRlbXAtbG9nbywubWluLXRlbXAtbG9nb3tcXG4gIGhlaWdodDogMjBweDtcXG4gIG1hcmdpbi1sZWZ0OiA3cHg7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcbi5jdXJyZW50LXRlbXAge1xcbiAgZm9udC1zaXplOiA3MHB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLmNhc3QtdGVtcCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBnYXA6IDJweDtcXG59XFxuXFxuLm1pbi1tYXgtdGVtcHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uaHVtaWRpdHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogNXB4O1xcbn1cXG5cXG4uaHVtaWRpdHkgPiBpbWcge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG5cXG4uY2FzdCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXG59XFxuXFxuLm1pc2Mge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDVweDtcXG59XFxuXFxuLndpbmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDJweDtcXG59XFxuXFxuLndpbmQgPiBpbWcge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG5cXG4vKiBMT0FESU5HICovXFxuLmxvYWRpbmctYmVnaW4ge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIiwgVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDYwcHg7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxuICBwb3NpdGlvbjogc3RhdGljO1xcbiAgdG9wOiAzMHZoO1xcbiAgaGVpZ2h0OiA0MDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICBvcGFjaXR5OiAxO1xcbiAgei1pbmRleDogOTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNjBweDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHksXFxuaHRtbCB7XFxuICBmb250LWZhbWlseTogXFxcIlBvcHBpbnNcXFwiLCBzYW5zLXNlcmlmLCBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuaHRtbCB7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjQ2LjE3ZGVnLCAjN2EwNGMzIDIxLjM1JSwgIzEwMzc1MyA5Ny45OSUpO1xcbn1cXG4qIHtcXG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcXG59XFxuXFxuLyogTUVESUEgUVVFUklFUyAqL1xcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwNDhweCkge1xcbiAgLmNpdHktbmFtZSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbiAgaGVhZGVyID4gaDEge1xcbiAgICBmb250LXNpemU6IDEwdnc7XFxuICAgIHBhZGRpbmctYm90dG9tOiAydmg7XFxuICB9XFxuXFxuICBoZWFkZXIge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcbiAgLndlYXRoZXItZGlzcGxheSB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMzBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuICAuY2FzdC1kaXNwbGF5ID4gaW1nIHtcXG4gICAgaGVpZ2h0OiAyNjdweDtcXG4gICAgd2lkdGg6IDg1JTtcXG4gIH1cXG4gIC5jYXN0LWRpc3BsYXkge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgfVxcbiAgLmluZm8ge1xcbiAgICBnYXA6IDEwdnc7XFxuICB9XFxuICAuY3VycmVudC10ZW1wIHtcXG4gICAgZm9udC1zaXplOiAxM3Z3O1xcbiAgfVxcbiAgLmxvYWRpbmctYmVnaW4ge1xcbiAgICB0b3A6IDM1dmggIWltcG9ydGFudDtcXG4gICAgZm9udC1zaXplOiA5dnc7XFxuICB9XFxuICBib2R5IHtcXG4gICAgZ2FwOiAxMHZoO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MTRweCkge1xcbiAgLmxvYWRpbmctYmVnaW4ge1xcbiAgICB0b3A6IDMwdmggIWltcG9ydGFudDtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgYXBpSGFuZGxlciA9ICgoKSA9PiB7XG4gIGxldCBmaXJzdCA9IHRydWU7XG4gIGNvbnN0IGFwaUxpbmsgPSBcImh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP1wiO1xuICBjb25zdCBhcGlLZXkgPSBcIjk0YTJhYWQ0YTM4MTIxZTc5NDczNWE5NWVlNDE1YTc2XCI7XG5cbiAgYXN5bmMgZnVuY3Rpb24gY2FsbEFwaShjaXR5TmFtZSkge1xuICAgIGNvbnN0IHdlYXRoZXJEaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53ZWF0aGVyLWRpc3BsYXlcIik7XG4gICAgd2VhdGhlckRpc3BsYXkuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBpZiAoZmlyc3QpIHtcbiAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2FkaW5nLWJlZ2luXCIpKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobG9hZGluZ0hhbmRsZXIucmV0dXJuTG9hZGluZygpKTtcbiAgICAgIGZpcnN0ID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobG9hZGluZ0hhbmRsZXIucmV0dXJuTG9hZGluZygpKTtcbiAgICB9XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChhcGlMaW5rICsgYHE9JHtjaXR5TmFtZX0mYXBwaWQ9JHthcGlLZXl9YCwge1xuICAgICAgbW9kZTogXCJjb3JzXCIsXG4gICAgfSk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgY2FsbEFwaSxcbiAgfTtcbn0pKCk7XG5cbmNvbnN0IGxvYWRpbmdIYW5kbGVyID0gKCgpID0+IHtcbiAgY29uc3QgcmV0dXJuTG9hZGluZyA9ICgpID0+IHtcbiAgICBjb25zdCBsb2FkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBmZXRjaERhdGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgbG9hZGluZy5jbGFzc0xpc3QuYWRkKFwibG9hZGluZy1iZWdpblwiKTtcbiAgICBmZXRjaERhdGEuY2xhc3NMaXN0LmFkZChcInRleHRcIik7XG5cbiAgICBmZXRjaERhdGEudGV4dENvbnRlbnQgPSBcIkZldGNoaW5nIERhdGFcIjtcblxuICAgIGxvYWRpbmcuYXBwZW5kQ2hpbGQoZmV0Y2hEYXRhKTtcbiAgICByZXR1cm4gbG9hZGluZztcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICByZXR1cm5Mb2FkaW5nLFxuICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgYXBpSGFuZGxlcjtcbiIsImltcG9ydCBIYXplIGZyb20gXCIuL2Fzc2V0cy93ZWF0aGVyL2hhemUuc3ZnXCI7XG5pbXBvcnQgQ2xvdWR5IGZyb20gXCIuL2Fzc2V0cy93ZWF0aGVyL2Nsb3VkeS5zdmdcIjtcbmltcG9ydCBSYWluIGZyb20gXCIuL2Fzc2V0cy93ZWF0aGVyL3JhaW4uc3ZnXCI7XG5pbXBvcnQgQ2xlYXIgZnJvbSBcIi4vYXNzZXRzL3dlYXRoZXIvY2xlYXIuc3ZnXCI7XG5pbXBvcnQgRHJpenpsZSBmcm9tIFwiLi9hc3NldHMvd2VhdGhlci9kcml6emxlLnN2Z1wiO1xuaW1wb3J0IFRodW5kZXJzdG9ybSBmcm9tIFwiLi9hc3NldHMvd2VhdGhlci90aHVuZGVyc3Rvcm0uc3ZnXCI7XG5cbmltcG9ydCBVcFRyaWFuZ2xlIGZyb20gXCIuL2Fzc2V0cy91cC10cmlhbmdsZS5zdmdcIjtcbmltcG9ydCBEb3duVHJpYW5nbGUgZnJvbSBcIi4vYXNzZXRzL2Rvd24tdHJpYW5nbGUuc3ZnXCI7XG5pbXBvcnQgSHVtaWRpdHkgZnJvbSBcIi4vYXNzZXRzL2h1bWlkaXR5LnN2Z1wiO1xuaW1wb3J0IFdpbmQgZnJvbSBcIi4vYXNzZXRzL3dpbmQuc3ZnXCI7XG5jb25zdCBpbWFnZUhhbmRsZXIgPSAoKSA9PiB7XG4gIGFzeW5jIGZ1bmN0aW9uIHdlYXRoZXJJY29uKGRhdGEpIHtcbiAgICBpZiAoZGF0YSA9PSBcIkhhemVcIikge1xuICAgICAgcmV0dXJuIEhhemU7XG4gICAgfSBlbHNlIGlmIChkYXRhID09IFwiUmFpblwiKSB7XG4gICAgICByZXR1cm4gUmFpbjtcbiAgICB9IGVsc2UgaWYgKGRhdGEgPT0gXCJDbG91ZHNcIikge1xuICAgICAgcmV0dXJuIENsb3VkeTtcbiAgICB9IGVsc2UgaWYgKGRhdGEgPT0gXCJEcml6emxlXCIpIHtcbiAgICAgIHJldHVybiBEcml6emxlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gVGh1bmRlcnN0b3JtO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGdldEh1bWlkaXR5SW1hZ2UoKSB7XG4gICAgcmV0dXJuIEh1bWlkaXR5O1xuICB9XG4gIGFzeW5jIGZ1bmN0aW9uIGdldFdpbmRJbWFnZSgpIHtcbiAgICByZXR1cm4gV2luZDtcbiAgfVxuICBhc3luYyBmdW5jdGlvbiBnZXRVcFRyaWFuZ2xlKCkge1xuICAgIHJldHVybiBVcFRyaWFuZ2xlO1xuICB9XG4gIGFzeW5jIGZ1bmN0aW9uIGdldERvd25UcmlhbmdsZSgpIHtcbiAgICByZXR1cm4gRG93blRyaWFuZ2xlO1xuICB9XG4gIHJldHVybiB7XG4gICAgd2VhdGhlckljb24sXG4gICAgZ2V0SHVtaWRpdHlJbWFnZSxcbiAgICBnZXRXaW5kSW1hZ2UsXG4gICAgZ2V0VXBUcmlhbmdsZSxcbiAgICBnZXREb3duVHJpYW5nbGUsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBpbWFnZUhhbmRsZXI7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCBhcGlIYW5kbGVyIGZyb20gXCIuL2FwaUxvYWRpbmdIYW5kbGVyXCI7XG5pbXBvcnQgaW1hZ2VIYW5kbGVyIGZyb20gXCIuL2ltYWdlSGFuZGxlclwiO1xuaW1wb3J0IFwiLi9tYWluLmNzc1wiO1xuXG5jb25zdCBkaXNwbGF5SGFuZGxlciA9ICgpID0+IHtcbiAgY29uc3Qgd2VhdGhlckRpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndlYXRoZXItZGlzcGxheVwiKTtcbiAgY29uc3QgY2FzdFRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhc3RcIik7XG4gIGNvbnN0IGh1bWlkaXR5RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5odW1pZGl0eVwiKTtcbiAgY29uc3Qgd2luZERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2luZFwiKTtcblxuICBjb25zdCByZXR1cm5JbWFnZSA9IGFzeW5jIChjb25kaXRpb24pID0+IHtcbiAgICBjb25zdCBpbWFnZURhdGEgPSBhd2FpdCBpbWFnZUhhbmRsZXIoKS53ZWF0aGVySWNvbihjb25kaXRpb24pO1xuICAgIGNvbnN0IG5ld0ltZyA9IG5ldyBJbWFnZSgpO1xuICAgIG5ld0ltZy5zcmMgPSBpbWFnZURhdGE7XG4gICAgcmV0dXJuIG5ld0ltZztcbiAgfTtcblxuICBjb25zdCByZXR1cm5DdXJyZW50VGVtcCA9ICh0ZW1wKSA9PiB7XG4gICAgY29uc3QgY3VycmVudFRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGN1cnJlbnRUZW1wLmNsYXNzTGlzdC5hZGQoXCJjdXJyZW50LXRlbXBcIik7XG4gICAgY3VycmVudFRlbXAudGV4dENvbnRlbnQgPSBgJHtNYXRoLnJvdW5kKHRlbXAgLSAyNzMpfcKwQ2A7XG4gICAgcmV0dXJuIGN1cnJlbnRUZW1wO1xuICB9O1xuXG4gIGNvbnN0IHJldHVybk1heFRlbXAgPSAodGVtcCkgPT4ge1xuICAgIGNvbnN0IG1heFRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1heFRlbXAuY2xhc3NMaXN0LmFkZChcIm1heC10ZW1wXCIpO1xuXG4gICAgaW1hZ2VIYW5kbGVyKClcbiAgICAgIC5nZXRVcFRyaWFuZ2xlKClcbiAgICAgIC50aGVuKChkYXQpID0+IHtcbiAgICAgICAgY29uc3QgbmV3SW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgbmV3SW1hZ2Uuc3JjID0gZGF0O1xuICAgICAgICBuZXdJbWFnZS5jbGFzc0xpc3QuYWRkKFwibWF4LXRlbXAtbG9nb1wiKTtcbiAgICAgICAgbWF4VGVtcC5hcHBlbmRDaGlsZChuZXdJbWFnZSk7XG4gICAgICB9KTtcbiAgICBtYXhUZW1wLnRleHRDb250ZW50ID0gYCR7TWF0aC5yb3VuZCh0ZW1wIC0gMjczKX3CsENgO1xuICAgIHJldHVybiBtYXhUZW1wO1xuICB9O1xuXG4gIGNvbnN0IHJldHVybk1pblRlbXAgPSAodGVtcCkgPT4ge1xuICAgIGNvbnN0IG1pblRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1pblRlbXAuY2xhc3NMaXN0LmFkZChcIm1pbi10ZW1wXCIpO1xuICAgIGltYWdlSGFuZGxlcigpXG4gICAgICAuZ2V0RG93blRyaWFuZ2xlKClcbiAgICAgIC50aGVuKChkYXQpID0+IHtcbiAgICAgICAgY29uc3QgbmV3SW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgbmV3SW1hZ2Uuc3JjID0gZGF0O1xuICAgICAgICBuZXdJbWFnZS5jbGFzc0xpc3QuYWRkKFwibWluLXRlbXAtbG9nb1wiKTtcbiAgICAgICAgbWluVGVtcC5hcHBlbmRDaGlsZChuZXdJbWFnZSk7XG4gICAgICB9KTtcbiAgICBtaW5UZW1wLnRleHRDb250ZW50ID0gYCR7TWF0aC5yb3VuZCh0ZW1wIC0gMjczKX3CsENgO1xuICAgIHJldHVybiBtaW5UZW1wO1xuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZUNhc3QgPSAoY2FzdCkgPT4ge1xuICAgIGNhc3RUZXh0LnRleHRDb250ZW50ID0gY2FzdDtcbiAgICByZXR1cm47XG4gIH07XG5cbiAgY29uc3QgdXBkYXRlSHVtaWRpdHkgPSAoaHVtaWRpdHkpID0+IHtcbiAgICBodW1pZGl0eURpdi5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGh1bWlkaXR5RGl2LnRleHRDb250ZW50ID0gaHVtaWRpdHk7XG5cbiAgICBpbWFnZUhhbmRsZXIoKVxuICAgICAgLmdldEh1bWlkaXR5SW1hZ2UoKVxuICAgICAgLnRoZW4oKGltYWdlRGF0YSkgPT4ge1xuICAgICAgICBjb25zdCBodW1pZGl0eUxvZ28gPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgaHVtaWRpdHlMb2dvLnNyYyA9IGltYWdlRGF0YTtcbiAgICAgICAgaHVtaWRpdHlEaXYuYXBwZW5kQ2hpbGQoaHVtaWRpdHlMb2dvKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSk7XG4gIH07XG5cbiAgY29uc3QgdXBkYXRlV2luZCA9ICh3aW5kKSA9PiB7XG4gICAgd2luZERpdi5pbm5lckhUTUwgPSBcIlwiO1xuICAgIHdpbmREaXYudGV4dENvbnRlbnQgPSB3aW5kO1xuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZURhdGEgPSBhc3luYyAoZGF0YSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgIC8qXG4gICAgY29uc3QgaW5mbyA9IGBcbiAgICA8ZGl2IGNsYXNzPVwiaW5mby1kaXNwbGF5XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY3VycmVudC10ZW1wXCI+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiaW5mb1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FzdC10ZW1wXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhc3RcIj48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibWF4LXRlbXBcIj48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibWluLXRlbXBcIj48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtaXNjXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImh1bWlkaXR5XCI+PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIndpbmRcIj48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5gKi9cbiAgICBjb25zdCBjYXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBpbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBtaW5NYXhUZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCB3aGl0ZUJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIGNhc3QuY2xhc3NMaXN0LmFkZChcImNhc3QtZGlzcGxheVwiKTtcbiAgICBpbmZvLmNsYXNzTGlzdC5hZGQoXCJpbmZvLWRpc3BsYXlcIik7XG4gICAgbWluTWF4VGVtcC5jbGFzc0xpc3QuYWRkKFwibWluLW1heC10ZW1wXCIpO1xuICAgIHdoaXRlQmxvY2suY2xhc3NMaXN0LmFkZChcIndoaXRlLWJsb2NrXCIpO1xuXG4gICAgLy8gbmVlZCB0byBhd2FpdCBoZXJlIGN1eiBvZiB0aGUgcG9zc2libGUgaW1hZ2UgZGVsYXlzXG4gICAgY29uc3QgaW1nRGF0ID0gYXdhaXQgcmV0dXJuSW1hZ2UoZGF0YVtcIndlYXRoZXJcIl1bMF1bXCJtYWluXCJdKTtcbiAgICBjYXN0LmFwcGVuZENoaWxkKGltZ0RhdCk7XG4gICAgaW5mby5hcHBlbmRDaGlsZChyZXR1cm5DdXJyZW50VGVtcChkYXRhW1wibWFpblwiXVtcInRlbXBcIl0pKTtcbiAgICBtaW5NYXhUZW1wLmFwcGVuZENoaWxkKHJldHVybk1heFRlbXAoZGF0YVtcIm1haW5cIl1bXCJ0ZW1wX21heFwiXSkpO1xuICAgIG1pbk1heFRlbXAuYXBwZW5kQ2hpbGQocmV0dXJuTWluVGVtcChkYXRhW1wibWFpblwiXVtcInRlbXBfbWluXCJdKSk7XG4gICAgLy8gdXBkYXRlQ2FzdChkYXRhW1wid2VhdGhlclwiXVswXVtcIm1haW5cIl0pO1xuICAgIC8vIHVwZGF0ZUh1bWlkaXR5KGRhdGFbXCJtYWluXCJdW1wiaHVtaWRpdHlcIl0pO1xuICAgIC8vIHVwZGF0ZVdpbmQoZGF0YVtcIndpbmRcIl1bXCJzcGVlZFwiXSk7XG5cbiAgICBpbmZvLmFwcGVuZENoaWxkKHdoaXRlQmxvY2spO1xuICAgIGluZm8uYXBwZW5kQ2hpbGQobWluTWF4VGVtcCk7XG4gICAgd2VhdGhlckRpc3BsYXkuYXBwZW5kQ2hpbGQoY2FzdCk7XG4gICAgd2VhdGhlckRpc3BsYXkuYXBwZW5kQ2hpbGQoaW5mbyk7XG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvYWRpbmctYmVnaW5cIikpO1xuICAgIHJldHVybjtcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGVEYXRhLFxuICB9O1xufTtcblxuY29uc3QgZm9ybUhhbmRsZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGlucHV0Rm9ybSA9IGRvY3VtZW50LmZvcm1zWzBdO1xuICBpbnB1dEZvcm0ub25zdWJtaXQgPSBwYXNzQ2l0eU5hbWU7XG5cbiAgZnVuY3Rpb24gZ2V0Q2l0eU5hbWUoKSB7XG4gICAgcmV0dXJuIGlucHV0Rm9ybS5lbGVtZW50c1swXTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBhc3NDaXR5TmFtZShlKSB7XG4gICAgY29uc3QgY2l0eU5hbWUgPSBnZXRDaXR5TmFtZSgpO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGFwaUhhbmRsZXJcbiAgICAgIC5jYWxsQXBpKGNpdHlOYW1lLnZhbHVlKVxuICAgICAgLnRoZW4oKGRhdGEpID0+IGRpc3BsYXlIYW5kbGVyKCkudXBkYXRlRGF0YShkYXRhKSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgfSk7XG4gICAgaW5wdXRGb3JtLnJlc2V0KCk7XG4gIH1cbn07XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmb3JtSGFuZGxlcik7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=