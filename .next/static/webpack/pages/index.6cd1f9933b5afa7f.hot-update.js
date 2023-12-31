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

/***/ "./src/components/Home/index.tsx":
/*!***************************************!*\
  !*** ./src/components/Home/index.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Inputs_InputSearch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Inputs/InputSearch */ \"./src/components/Inputs/InputSearch/index.tsx\");\n/* harmony import */ var _VideoList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../VideoList */ \"./src/components/VideoList/index.tsx\");\n/* harmony import */ var _VideoPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../VideoPage */ \"./src/components/VideoPage/index.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Home = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const [videos, setVideos] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [selectedVideo, setSelectedVideo] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    // Função para buscar vídeos (substitua por chamada real à API do YouTube)\n    const fetchVideos = async (searchTerm)=>{\n        // Substitua esta lógica pela chamada real à API do YouTube\n        const response = await fetch(\"https://www.googleapis.com/youtube/v3/search?part=snippet&q=\".concat(searchTerm, \"&key=AIzaSyCgayYHddGZ6mi5ih0U8HWP5_DKfo2i5q8\"));\n        const data = await response.json();\n        setVideos(data.items);\n    };\n    const handleSearch = (searchTerm)=>{\n        const searchTermWithKaraoke = \"karaoke \".concat(searchTerm);\n        fetchVideos(searchTermWithKaraoke);\n    };\n    const handleVideoClick = (videoId)=>{\n        setSelectedVideo(videoId);\n    };\n    const handleBack = ()=>{\n        setSelectedVideo(null);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n        p: \"5\",\n        gap: \"10\",\n        height: \"100vh\",\n        flexDirection: \"column\",\n        background: \"white.500\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {\n                margin: \"0 auto\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Text, {\n                    fontSize: \"40px\",\n                    bgGradient: \"linear(to-r, #FFDF00, #FFCC00, #ECBD00, #CC9900, #B8860B)\",\n                    bgClip: \"text\",\n                    fontWeight: \"bold\",\n                    children: \"Karaoke de Reveilon\"\n                }, void 0, false, {\n                    fileName: \"/Users/amarildo/Desktop/karaoke/src/components/Home/index.tsx\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/amarildo/Desktop/karaoke/src/components/Home/index.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, undefined),\n            selectedVideo ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_VideoPage__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                videoId: selectedVideo,\n                setBack: handleBack\n            }, void 0, false, {\n                fileName: \"/Users/amarildo/Desktop/karaoke/src/components/Home/index.tsx\",\n                lineNumber: 50,\n                columnNumber: 9\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n                        justifyContent: \"flex-start\",\n                        flexDirection: \"column\",\n                        gap: \"2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Text, {\n                                fontSize: \"20px\",\n                                color: \"gold.500\",\n                                children: \"Pesquise aqui sua m\\xfasica:\"\n                            }, void 0, false, {\n                                fileName: \"/Users/amarildo/Desktop/karaoke/src/components/Home/index.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Inputs_InputSearch__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                onchange: (e)=>handleSearch(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"/Users/amarildo/Desktop/karaoke/src/components/Home/index.tsx\",\n                                lineNumber: 57,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/amarildo/Desktop/karaoke/src/components/Home/index.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_VideoList__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        videos: videos,\n                        handleVideoClick: handleVideoClick\n                    }, void 0, false, {\n                        fileName: \"/Users/amarildo/Desktop/karaoke/src/components/Home/index.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/amarildo/Desktop/karaoke/src/components/Home/index.tsx\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Home, \"vAqOQfu1NSJyK4Zo2V6dPRpEJv0=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Ib21lL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUFtRDtBQUNYO0FBQ2M7QUFDTjtBQUNYO0FBQ0E7QUFFckMsTUFBTVMsT0FBTyxJQUFvQjs7SUFDL0IsTUFBTUMsU0FBU1Asc0RBQVNBO0lBQ3hCLE1BQU0sQ0FBQ1EsUUFBUUMsVUFBVSxHQUFHUCwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ3ZDLE1BQU0sQ0FBQ1EsZUFBZUMsaUJBQWlCLEdBQUdULCtDQUFRQSxDQUFDLElBQUk7SUFFdkQsMEVBQTBFO0lBQzFFLE1BQU1VLGNBQWMsT0FBT0MsYUFBb0I7UUFDN0MsMkRBQTJEO1FBQzNELE1BQU1DLFdBQVcsTUFBTUMsTUFDckIsK0RBQTBFLE9BQVhGLFlBQVc7UUFFNUUsTUFBTUcsT0FBTyxNQUFNRixTQUFTRyxJQUFJO1FBQ2hDUixVQUFVTyxLQUFLRSxLQUFLO0lBQ3RCO0lBRUEsTUFBTUMsZUFBZSxDQUFDTixhQUFvQjtRQUN4QyxNQUFNTyx3QkFBd0IsV0FBc0IsT0FBWFA7UUFDekNELFlBQVlRO0lBQ2Q7SUFFQSxNQUFNQyxtQkFBbUIsQ0FBQ0MsVUFBaUI7UUFDekNYLGlCQUFpQlc7SUFDbkI7SUFFQSxNQUFNQyxhQUFhLElBQU07UUFDdkJaLGlCQUFpQixJQUFJO0lBQ3ZCO0lBRUEscUJBQ0UsOERBQUNiLGtEQUFJQTtRQUFDMEIsR0FBRTtRQUFJQyxLQUFJO1FBQUtDLFFBQU87UUFBUUMsZUFBYztRQUFTQyxZQUFXOzswQkFDcEUsOERBQUMvQixpREFBR0E7Z0JBQUNnQyxRQUFPOzBCQUNWLDRFQUFDOUIsa0RBQUlBO29CQUNIK0IsVUFBUztvQkFDVEMsWUFBVztvQkFDWEMsUUFBTztvQkFDUEMsWUFBVzs4QkFDWjs7Ozs7Ozs7Ozs7WUFLRnZCLDhCQUNDLDhEQUFDTCxrREFBU0E7Z0JBQUNpQixTQUFTWjtnQkFBZXdCLFNBQVNYOzs7OzswQ0FFNUM7O2tDQUNFLDhEQUFDekIsa0RBQUlBO3dCQUFDcUMsZ0JBQWU7d0JBQWFSLGVBQWM7d0JBQVNGLEtBQUk7OzBDQUMzRCw4REFBQzFCLGtEQUFJQTtnQ0FBQytCLFVBQVM7Z0NBQU9NLE9BQU07MENBQVc7Ozs7OzswQ0FHdkMsOERBQUNqQywyREFBV0E7Z0NBQUNrQyxVQUFVLENBQUNDLElBQVduQixhQUFhbUIsRUFBRUMsTUFBTSxDQUFDQyxLQUFLOzs7Ozs7Ozs7Ozs7a0NBRWhFLDhEQUFDcEMsa0RBQVNBO3dCQUFDSSxRQUFRQTt3QkFBUWEsa0JBQWtCQTs7Ozs7Ozs0QkFFaEQ7Ozs7Ozs7QUFHUDtHQXhETWY7O1FBQ1dOLGtEQUFTQTs7O0tBRHBCTTtBQTBETiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Ib21lL2luZGV4LnRzeD83M2NkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJveCwgRmxleCwgVGV4dCB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IFJlYWN0LCB7IFJlYWN0RWxlbWVudCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSW5wdXRTZWFyY2ggZnJvbSAnLi4vSW5wdXRzL0lucHV0U2VhcmNoJztcbmltcG9ydCBWaWRlb0xpc3QgZnJvbSAnLi4vVmlkZW9MaXN0JztcbmltcG9ydCBWaWRlb1BhZ2UgZnJvbSAnLi4vVmlkZW9QYWdlJztcblxuY29uc3QgSG9tZSA9ICgpOiBSZWFjdEVsZW1lbnQgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgW3ZpZGVvcywgc2V0VmlkZW9zXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3NlbGVjdGVkVmlkZW8sIHNldFNlbGVjdGVkVmlkZW9dID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgLy8gRnVuw6fDo28gcGFyYSBidXNjYXIgdsOtZGVvcyAoc3Vic3RpdHVhIHBvciBjaGFtYWRhIHJlYWwgw6AgQVBJIGRvIFlvdVR1YmUpXG4gIGNvbnN0IGZldGNoVmlkZW9zID0gYXN5bmMgKHNlYXJjaFRlcm06IGFueSkgPT4ge1xuICAgIC8vIFN1YnN0aXR1YSBlc3RhIGzDs2dpY2EgcGVsYSBjaGFtYWRhIHJlYWwgw6AgQVBJIGRvIFlvdVR1YmVcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL3lvdXR1YmUvdjMvc2VhcmNoP3BhcnQ9c25pcHBldCZxPSR7c2VhcmNoVGVybX0ma2V5PUFJemFTeUNnYXlZSGRkR1o2bWk1aWgwVThIV1A1X0RLZm8yaTVxOGAsXG4gICAgKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHNldFZpZGVvcyhkYXRhLml0ZW1zKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVTZWFyY2ggPSAoc2VhcmNoVGVybTogYW55KSA9PiB7XG4gICAgY29uc3Qgc2VhcmNoVGVybVdpdGhLYXJhb2tlID0gYGthcmFva2UgJHtzZWFyY2hUZXJtfWA7XG4gICAgZmV0Y2hWaWRlb3Moc2VhcmNoVGVybVdpdGhLYXJhb2tlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVWaWRlb0NsaWNrID0gKHZpZGVvSWQ6IGFueSkgPT4ge1xuICAgIHNldFNlbGVjdGVkVmlkZW8odmlkZW9JZCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQmFjayA9ICgpID0+IHtcbiAgICBzZXRTZWxlY3RlZFZpZGVvKG51bGwpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEZsZXggcD1cIjVcIiBnYXA9XCIxMFwiIGhlaWdodD1cIjEwMHZoXCIgZmxleERpcmVjdGlvbj1cImNvbHVtblwiIGJhY2tncm91bmQ9XCJ3aGl0ZS41MDBcIj5cbiAgICAgIDxCb3ggbWFyZ2luPVwiMCBhdXRvXCI+XG4gICAgICAgIDxUZXh0XG4gICAgICAgICAgZm9udFNpemU9XCI0MHB4XCJcbiAgICAgICAgICBiZ0dyYWRpZW50PVwibGluZWFyKHRvLXIsICNGRkRGMDAsICNGRkNDMDAsICNFQ0JEMDAsICNDQzk5MDAsICNCODg2MEIpXCJcbiAgICAgICAgICBiZ0NsaXA9XCJ0ZXh0XCJcbiAgICAgICAgICBmb250V2VpZ2h0PVwiYm9sZFwiXG4gICAgICAgID5cbiAgICAgICAgICBLYXJhb2tlIGRlIFJldmVpbG9uXG4gICAgICAgIDwvVGV4dD5cbiAgICAgIDwvQm94PlxuXG4gICAgICB7c2VsZWN0ZWRWaWRlbyA/IChcbiAgICAgICAgPFZpZGVvUGFnZSB2aWRlb0lkPXtzZWxlY3RlZFZpZGVvfSBzZXRCYWNrPXtoYW5kbGVCYWNrfSAvPlxuICAgICAgKSA6IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8RmxleCBqdXN0aWZ5Q29udGVudD1cImZsZXgtc3RhcnRcIiBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIgZ2FwPVwiMlwiPlxuICAgICAgICAgICAgPFRleHQgZm9udFNpemU9XCIyMHB4XCIgY29sb3I9XCJnb2xkLjUwMFwiPlxuICAgICAgICAgICAgICBQZXNxdWlzZSBhcXVpIHN1YSBtw7pzaWNhOlxuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPElucHV0U2VhcmNoIG9uY2hhbmdlPXsoZTogYW55KSA9PiBoYW5kbGVTZWFyY2goZS50YXJnZXQudmFsdWUpfSAvPlxuICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICA8VmlkZW9MaXN0IHZpZGVvcz17dmlkZW9zfSBoYW5kbGVWaWRlb0NsaWNrPXtoYW5kbGVWaWRlb0NsaWNrfSAvPlxuICAgICAgICA8Lz5cbiAgICAgICl9XG4gICAgPC9GbGV4PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJuYW1lcyI6WyJCb3giLCJGbGV4IiwiVGV4dCIsInVzZVJvdXRlciIsIlJlYWN0IiwidXNlU3RhdGUiLCJJbnB1dFNlYXJjaCIsIlZpZGVvTGlzdCIsIlZpZGVvUGFnZSIsIkhvbWUiLCJyb3V0ZXIiLCJ2aWRlb3MiLCJzZXRWaWRlb3MiLCJzZWxlY3RlZFZpZGVvIiwic2V0U2VsZWN0ZWRWaWRlbyIsImZldGNoVmlkZW9zIiwic2VhcmNoVGVybSIsInJlc3BvbnNlIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsIml0ZW1zIiwiaGFuZGxlU2VhcmNoIiwic2VhcmNoVGVybVdpdGhLYXJhb2tlIiwiaGFuZGxlVmlkZW9DbGljayIsInZpZGVvSWQiLCJoYW5kbGVCYWNrIiwicCIsImdhcCIsImhlaWdodCIsImZsZXhEaXJlY3Rpb24iLCJiYWNrZ3JvdW5kIiwibWFyZ2luIiwiZm9udFNpemUiLCJiZ0dyYWRpZW50IiwiYmdDbGlwIiwiZm9udFdlaWdodCIsInNldEJhY2siLCJqdXN0aWZ5Q29udGVudCIsImNvbG9yIiwib25jaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Home/index.tsx\n"));

/***/ })

});