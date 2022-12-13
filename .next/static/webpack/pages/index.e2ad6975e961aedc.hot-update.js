"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/screen/GameHome.tsx":
/*!****************************************!*\
  !*** ./components/screen/GameHome.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GameHome\": function() { return /* binding */ GameHome; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Buttons_menu_MenuButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Buttons/menu/MenuButton */ \"./components/Buttons/menu/MenuButton.tsx\");\n/* harmony import */ var _Buttons_menuSelection_MenuSelectionButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Buttons/menuSelection/MenuSelectionButton */ \"./components/Buttons/menuSelection/MenuSelectionButton.tsx\");\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.module.css */ \"./components/screen/styles.module.css\");\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst numberOfPlayers = [\n    1,\n    2,\n    3,\n    4\n];\nconst gridSize = [\n    \"4X4\",\n    \"6X6\"\n];\nconst listItemsPlayers = numberOfPlayers.map((item)=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Buttons_menuSelection_MenuSelectionButton__WEBPACK_IMPORTED_MODULE_3__.MenuSelectionbutton, {\n        buttonName: \"\".concat(item),\n        id: \"item_\".concat(item)\n    }, item, false, {\n        fileName: \"/home/arthurkyam/Desktop/Daniel project/Memory-game/components/screen/GameHome.tsx\",\n        lineNumber: 10,\n        columnNumber: 10\n    }, undefined);\n});\nconst listItemGridSize = gridSize.map((item)=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Buttons_menuSelection_MenuSelectionButton__WEBPACK_IMPORTED_MODULE_3__.MenuSelectionbutton, {\n        buttonName: item,\n        id: \"size_\".concat(item)\n    }, item, false, {\n        fileName: \"/home/arthurkyam/Desktop/Daniel project/Memory-game/components/screen/GameHome.tsx\",\n        lineNumber: 14,\n        columnNumber: 10\n    }, undefined);\n});\nconst GameHome = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_4___default().GameHome_container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"memory\"\n            }, void 0, false, {\n                fileName: \"/home/arthurkyam/Desktop/Daniel project/Memory-game/components/screen/GameHome.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_4___default().GameHome_wrapper),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Select Theme\"\n                            }, void 0, false, {\n                                fileName: \"/home/arthurkyam/Desktop/Daniel project/Memory-game/components/screen/GameHome.tsx\",\n                                lineNumber: 23,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Buttons_menuSelection_MenuSelectionButton__WEBPACK_IMPORTED_MODULE_3__.MenuSelectionbutton, {\n                                        buttonName: \"Numbers\",\n                                        id: \"Numbers\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/arthurkyam/Desktop/Daniel project/Memory-game/components/screen/GameHome.tsx\",\n                                        lineNumber: 25,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Buttons_menuSelection_MenuSelectionButton__WEBPACK_IMPORTED_MODULE_3__.MenuSelectionbutton, {\n                                        buttonName: \"Icons\",\n                                        id: \"Icons\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/arthurkyam/Desktop/Daniel project/Memory-game/components/screen/GameHome.tsx\",\n                                        lineNumber: 26,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/arthurkyam/Desktop/Daniel project/Memory-game/components/screen/GameHome.tsx\",\n                                lineNumber: 24,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"Number of Players\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/arthurkyam/Desktop/Daniel project/Memory-game/components/screen/GameHome.tsx\",\n                                        lineNumber: 29,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: listItemsPlayers\n                                    }, void 0, false, {\n                                        fileName: \"/home/arthurkyam/Desktop/Daniel project/Memory-game/components/screen/GameHome.tsx\",\n                                        lineNumber: 30,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/arthurkyam/Desktop/Daniel project/Memory-game/components/screen/GameHome.tsx\",\n                                lineNumber: 28,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/arthurkyam/Desktop/Daniel project/Memory-game/components/screen/GameHome.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Grid Size\"\n                            }, void 0, false, {\n                                fileName: \"/home/arthurkyam/Desktop/Daniel project/Memory-game/components/screen/GameHome.tsx\",\n                                lineNumber: 34,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: listItemGridSize\n                            }, void 0, false, {\n                                fileName: \"/home/arthurkyam/Desktop/Daniel project/Memory-game/components/screen/GameHome.tsx\",\n                                lineNumber: 35,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/arthurkyam/Desktop/Daniel project/Memory-game/components/screen/GameHome.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Buttons_menu_MenuButton__WEBPACK_IMPORTED_MODULE_2__.Menubutton, {\n                        buttonName: \"Start Game\"\n                    }, void 0, false, {\n                        fileName: \"/home/arthurkyam/Desktop/Daniel project/Memory-game/components/screen/GameHome.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/arthurkyam/Desktop/Daniel project/Memory-game/components/screen/GameHome.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/arthurkyam/Desktop/Daniel project/Memory-game/components/screen/GameHome.tsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, undefined);\n};\n_c = GameHome;\nvar _c;\n$RefreshReg$(_c, \"GameHome\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3NjcmVlbi9HYW1lSG9tZS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFBMEI7QUFDOEI7QUFDMkI7QUFDMUM7QUFFekMsTUFBTUksa0JBQWtCO0lBQUM7SUFBRztJQUFHO0lBQUc7Q0FBRTtBQUNwQyxNQUFNQyxXQUFXO0lBQUM7SUFBTztDQUFNO0FBRS9CLE1BQU1DLG1CQUFtQkYsZ0JBQWdCRyxHQUFHLENBQUMsQ0FBQ0MsT0FBUztJQUNyRCxxQkFBTyw4REFBQ04sMkZBQW1CQTtRQUFDTyxZQUFZLEdBQVEsT0FBTEQ7UUFBbUJFLElBQUksUUFBYSxPQUFMRjtPQUFsQkE7Ozs7O0FBQzFEO0FBRUEsTUFBTUcsbUJBQW1CTixTQUFTRSxHQUFHLENBQUMsQ0FBQ0MsT0FBUztJQUM5QyxxQkFBTyw4REFBQ04sMkZBQW1CQTtRQUFDTyxZQUFZRDtRQUFpQkUsSUFBSSxRQUFhLE9BQUxGO09BQWxCQTs7Ozs7QUFDckQ7QUFFTyxNQUFNSSxXQUFXLElBQU07SUFDNUIscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVdYLDhFQUF5Qjs7MEJBQ3ZDLDhEQUFDYTswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDSDtnQkFBSUMsV0FBV1gsNEVBQXVCOztrQ0FDckMsOERBQUNVOzswQ0FDQyw4REFBQ0s7MENBQUU7Ozs7OzswQ0FDSCw4REFBQ0w7O2tEQUNDLDhEQUFDWCwyRkFBbUJBO3dDQUFDTyxZQUFXO3dDQUFVQyxJQUFHOzs7Ozs7a0RBQzdDLDhEQUFDUiwyRkFBbUJBO3dDQUFDTyxZQUFXO3dDQUFRQyxJQUFHOzs7Ozs7Ozs7Ozs7MENBRTdDLDhEQUFDRzs7a0RBQ0MsOERBQUNLO2tEQUFFOzs7Ozs7a0RBQ0gsOERBQUNMO2tEQUFLUDs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUdWLDhEQUFDTzs7MENBQ0MsOERBQUNLOzBDQUFFOzs7Ozs7MENBQ0gsOERBQUNMOzBDQUFLRjs7Ozs7Ozs7Ozs7O2tDQUVSLDhEQUFDVixnRUFBVUE7d0JBQUNRLFlBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUkvQixFQUFFO0tBeEJXRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3NjcmVlbi9HYW1lSG9tZS50c3g/ZTk3NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTWVudWJ1dHRvbiB9IGZyb20gJy4uL0J1dHRvbnMvbWVudS9NZW51QnV0dG9uJztcbmltcG9ydCB7IE1lbnVTZWxlY3Rpb25idXR0b24gfSBmcm9tICcuLi9CdXR0b25zL21lbnVTZWxlY3Rpb24vTWVudVNlbGVjdGlvbkJ1dHRvbic7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5jc3MnO1xuXG5jb25zdCBudW1iZXJPZlBsYXllcnMgPSBbMSwgMiwgMywgNF07XG5jb25zdCBncmlkU2l6ZSA9IFsnNFg0JywgJzZYNiddO1xuXG5jb25zdCBsaXN0SXRlbXNQbGF5ZXJzID0gbnVtYmVyT2ZQbGF5ZXJzLm1hcCgoaXRlbSkgPT4ge1xuICByZXR1cm4gPE1lbnVTZWxlY3Rpb25idXR0b24gYnV0dG9uTmFtZT17YCR7aXRlbX1gfSBrZXk9e2l0ZW19IGlkPXtgaXRlbV8ke2l0ZW19YH0gLz47XG59KTtcblxuY29uc3QgbGlzdEl0ZW1HcmlkU2l6ZSA9IGdyaWRTaXplLm1hcCgoaXRlbSkgPT4ge1xuICByZXR1cm4gPE1lbnVTZWxlY3Rpb25idXR0b24gYnV0dG9uTmFtZT17aXRlbX0ga2V5PXtpdGVtfSBpZD17YHNpemVfJHtpdGVtfWB9IC8+O1xufSk7XG5cbmV4cG9ydCBjb25zdCBHYW1lSG9tZSA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkdhbWVIb21lX2NvbnRhaW5lcn0+XG4gICAgICA8aDI+bWVtb3J5PC9oMj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuR2FtZUhvbWVfd3JhcHBlcn0+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPHA+U2VsZWN0IFRoZW1lPC9wPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8TWVudVNlbGVjdGlvbmJ1dHRvbiBidXR0b25OYW1lPVwiTnVtYmVyc1wiIGlkPVwiTnVtYmVyc1wiIC8+XG4gICAgICAgICAgICA8TWVudVNlbGVjdGlvbmJ1dHRvbiBidXR0b25OYW1lPVwiSWNvbnNcIiBpZD1cIkljb25zXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHA+TnVtYmVyIG9mIFBsYXllcnM8L3A+XG4gICAgICAgICAgICA8ZGl2PntsaXN0SXRlbXNQbGF5ZXJzfTwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8cD5HcmlkIFNpemU8L3A+XG4gICAgICAgICAgPGRpdj57bGlzdEl0ZW1HcmlkU2l6ZX08L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxNZW51YnV0dG9uIGJ1dHRvbk5hbWU9XCJTdGFydCBHYW1lXCIgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIk1lbnVidXR0b24iLCJNZW51U2VsZWN0aW9uYnV0dG9uIiwic3R5bGVzIiwibnVtYmVyT2ZQbGF5ZXJzIiwiZ3JpZFNpemUiLCJsaXN0SXRlbXNQbGF5ZXJzIiwibWFwIiwiaXRlbSIsImJ1dHRvbk5hbWUiLCJpZCIsImxpc3RJdGVtR3JpZFNpemUiLCJHYW1lSG9tZSIsImRpdiIsImNsYXNzTmFtZSIsIkdhbWVIb21lX2NvbnRhaW5lciIsImgyIiwiR2FtZUhvbWVfd3JhcHBlciIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/screen/GameHome.tsx\n"));

/***/ })

});