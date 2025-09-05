/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "(pages-dir-node)/./src/hooks/use-theme.tsx":
/*!*********************************!*\
  !*** ./src/hooks/use-theme.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Theme: () => (/* binding */ Theme),\n/* harmony export */   ThemeProvider: () => (/* binding */ ThemeProvider),\n/* harmony export */   useTheme: () => (/* binding */ useTheme)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar Theme = /*#__PURE__*/ function(Theme) {\n    Theme[\"LIGHT\"] = \"light\";\n    Theme[\"DARK\"] = \"dark\";\n    return Theme;\n}({});\nconst ThemeContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext(undefined);\nconst ThemeProvider = ({ children })=>{\n    const [theme, setTheme] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(\"light\");\n    const toggleTheme = ()=>{\n        if (theme === \"light\") {\n            setTheme(\"dark\");\n            document.documentElement.classList.add(\"dark\");\n            localStorage.setItem('theme', \"dark\");\n        } else {\n            setTheme(\"light\");\n            document.documentElement.classList.remove(\"dark\");\n            localStorage.setItem('theme', \"light\");\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"ThemeProvider.useEffect\": ()=>{\n            const localTheme = localStorage.getItem('theme');\n            if (localTheme) {\n                setTheme(localTheme);\n                if (localTheme === \"dark\") {\n                    document.documentElement.classList.add(\"dark\");\n                }\n            }\n            return ({\n                \"ThemeProvider.useEffect\": ()=>{\n                    setTheme(\"light\");\n                }\n            })[\"ThemeProvider.useEffect\"];\n        }\n    }[\"ThemeProvider.useEffect\"], []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ThemeContext.Provider, {\n        value: {\n            theme,\n            toggleTheme\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/muhammadghally/Documents/portfolio_project/src/hooks/use-theme.tsx\",\n        lineNumber: 47,\n        columnNumber: 10\n    }, undefined);\n};\nconst useTheme = ()=>{\n    const context = react__WEBPACK_IMPORTED_MODULE_1___default().useContext(ThemeContext);\n    if (context === undefined) {\n        throw new Error('useTheme must be used within a ThemeProvider');\n    }\n    return context;\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3NyYy9ob29rcy91c2UtdGhlbWUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQTBEO0FBRW5ELG1DQUFLRTs7O1dBQUFBO01BR1g7QUFXRCxNQUFNQyw2QkFBZUgsMERBQW1CLENBQStCSztBQUV2RSxNQUFNQyxnQkFBOEMsQ0FBQyxFQUFFQyxRQUFRLEVBQUU7SUFDL0QsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdULHFEQUFjO0lBRXhDLE1BQU1XLGNBQWM7UUFDbEIsSUFBSUgsbUJBQXVCO1lBQ3pCQztZQUNBRyxTQUFTQyxlQUFlLENBQUNDLFNBQVMsQ0FBQ0MsR0FBRztZQUN0Q0MsYUFBYUMsT0FBTyxDQUFDO1FBQ3ZCLE9BQU87WUFDTFI7WUFDQUcsU0FBU0MsZUFBZSxDQUFDQyxTQUFTLENBQUNJLE1BQU07WUFDekNGLGFBQWFDLE9BQU8sQ0FBQztRQUN2QjtJQUNGO0lBRUFoQixnREFBU0E7bUNBQUM7WUFDUixNQUFNa0IsYUFBYUgsYUFBYUksT0FBTyxDQUFDO1lBQ3hDLElBQUlELFlBQVk7Z0JBQ2RWLFNBQVNVO2dCQUNULElBQUlBLHVCQUEyQjtvQkFDN0JQLFNBQVNDLGVBQWUsQ0FBQ0MsU0FBUyxDQUFDQyxHQUFHO2dCQUN4QztZQUNGO1lBQ0E7MkNBQU87b0JBQ0xOO2dCQUNGOztRQUNGO2tDQUFHLEVBQUU7SUFFTCxxQkFBTyw4REFBQ04sYUFBYWtCLFFBQVE7UUFBQ0MsT0FBTztZQUFFZDtZQUFPRztRQUFZO2tCQUFJSjs7Ozs7O0FBQ2hFO0FBRUEsTUFBTWdCLFdBQVc7SUFDZixNQUFNQyxVQUFVeEIsdURBQWdCLENBQUNHO0lBQ2pDLElBQUlxQixZQUFZbkIsV0FBVztRQUN6QixNQUFNLElBQUlxQixNQUFNO0lBQ2xCO0lBQ0EsT0FBT0Y7QUFDVDtBQUVtQyIsInNvdXJjZXMiOlsiL1VzZXJzL211aGFtbWFkZ2hhbGx5L0RvY3VtZW50cy9wb3J0Zm9saW9fcHJvamVjdC9zcmMvaG9va3MvdXNlLXRoZW1lLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VMYXlvdXRFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBlbnVtIFRoZW1lIHtcbiAgTElHSFQgPSAnbGlnaHQnLFxuICBEQVJLID0gJ2RhcmsnLFxufVxuXG50eXBlIFRoZW1lQ29udGV4dFR5cGUgPSB7XG4gIHRoZW1lOiBUaGVtZTtcbiAgdG9nZ2xlVGhlbWU6ICgpID0+IHZvaWQ7XG59O1xuXG50eXBlIFRoZW1lUHJvdmlkZXJQcm9wcyA9IHtcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcbn1cblxuY29uc3QgVGhlbWVDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dDxUaGVtZUNvbnRleHRUeXBlIHwgdW5kZWZpbmVkPih1bmRlZmluZWQpO1xuXG5jb25zdCBUaGVtZVByb3ZpZGVyOiBSZWFjdC5GQzxUaGVtZVByb3ZpZGVyUHJvcHM+ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBbdGhlbWUsIHNldFRoZW1lXSA9IFJlYWN0LnVzZVN0YXRlPFRoZW1lPihUaGVtZS5MSUdIVCk7XG5cbiAgY29uc3QgdG9nZ2xlVGhlbWUgPSAoKSA9PiB7XG4gICAgaWYgKHRoZW1lID09PSBUaGVtZS5MSUdIVCkge1xuICAgICAgc2V0VGhlbWUoVGhlbWUuREFSSyk7XG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChUaGVtZS5EQVJLKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0aGVtZScsIFRoZW1lLkRBUkspO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRUaGVtZShUaGVtZS5MSUdIVCk7XG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShUaGVtZS5EQVJLKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0aGVtZScsIFRoZW1lLkxJR0hUKTtcbiAgICB9XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBsb2NhbFRoZW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RoZW1lJyk7XG4gICAgaWYgKGxvY2FsVGhlbWUpIHtcbiAgICAgIHNldFRoZW1lKGxvY2FsVGhlbWUgYXMgVGhlbWUpO1xuICAgICAgaWYgKGxvY2FsVGhlbWUgPT09IFRoZW1lLkRBUkspIHtcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoVGhlbWUuREFSSyk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBzZXRUaGVtZShUaGVtZS5MSUdIVCk7XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiA8VGhlbWVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHRoZW1lLCB0b2dnbGVUaGVtZSB9fT57Y2hpbGRyZW59PC9UaGVtZUNvbnRleHQuUHJvdmlkZXI+O1xufTtcblxuY29uc3QgdXNlVGhlbWUgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRleHQgPSBSZWFjdC51c2VDb250ZXh0KFRoZW1lQ29udGV4dCk7XG4gIGlmIChjb250ZXh0ID09PSB1bmRlZmluZWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3VzZVRoZW1lIG11c3QgYmUgdXNlZCB3aXRoaW4gYSBUaGVtZVByb3ZpZGVyJyk7XG4gIH1cbiAgcmV0dXJuIGNvbnRleHQ7XG59O1xuXG5leHBvcnQgeyBUaGVtZVByb3ZpZGVyLCB1c2VUaGVtZSB9O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwiVGhlbWUiLCJUaGVtZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidW5kZWZpbmVkIiwiVGhlbWVQcm92aWRlciIsImNoaWxkcmVuIiwidGhlbWUiLCJzZXRUaGVtZSIsInVzZVN0YXRlIiwidG9nZ2xlVGhlbWUiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJyZW1vdmUiLCJsb2NhbFRoZW1lIiwiZ2V0SXRlbSIsIlByb3ZpZGVyIiwidmFsdWUiLCJ1c2VUaGVtZSIsImNvbnRleHQiLCJ1c2VDb250ZXh0IiwiRXJyb3IiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(pages-dir-node)/./src/hooks/use-theme.tsx\n");

/***/ }),

/***/ "(pages-dir-node)/./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hooks_use_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/hooks/use-theme */ \"(pages-dir-node)/./src/hooks/use-theme.tsx\");\n/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/app.scss */ \"(pages-dir-node)/./src/styles/app.scss\");\n/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_app_scss__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_hooks_use_theme__WEBPACK_IMPORTED_MODULE_1__.ThemeProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/muhammadghally/Documents/portfolio_project/src/pages/_app.tsx\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/muhammadghally/Documents/portfolio_project/src/pages/_app.tsx\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3NyYy9wYWdlcy9fYXBwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWtEO0FBQ3ZCO0FBRzNCLFNBQVNDLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQVk7SUFDL0MscUJBQ0UsOERBQUNILDJEQUFhQTtrQkFDWiw0RUFBQ0U7WUFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7OztBQUc5QjtBQUVBLGlFQUFlRixLQUFLQSxFQUFDIiwic291cmNlcyI6WyIvVXNlcnMvbXVoYW1tYWRnaGFsbHkvRG9jdW1lbnRzL3BvcnRmb2xpb19wcm9qZWN0L3NyYy9wYWdlcy9fYXBwLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnQC9ob29rcy91c2UtdGhlbWUnO1xuaW1wb3J0ICdAL3N0eWxlcy9hcHAuc2Nzcyc7XG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPFRoZW1lUHJvdmlkZXI+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC9UaGVtZVByb3ZpZGVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiJdLCJuYW1lcyI6WyJUaGVtZVByb3ZpZGVyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(pages-dir-node)/./src/pages/_app.tsx\n");

/***/ }),

/***/ "(pages-dir-node)/./src/styles/app.scss":
/*!*****************************!*\
  !*** ./src/styles/app.scss ***!
  \*****************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(pages-dir-node)/./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();