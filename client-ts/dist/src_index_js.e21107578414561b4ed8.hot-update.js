"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateclient_ts"]("src_index_js",{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'magnetic-pendulum-rs'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var magnetic_pendulum_rs_magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! magnetic-pendulum-rs/magnetic_pendulum_rs_bg.wasm */ \"../magnetic-pendulum-rs/pkg/magnetic_pendulum_rs_bg.wasm\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([magnetic_pendulum_rs_magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_1__]);\nmagnetic_pendulum_rs_magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n// wasm.greet();\nconst universe = new Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'magnetic-pendulum-rs'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(512,512,100);\n\n// universe.add_magnet(new wasm.Magnet(\n//     new wasm.Vec2D(0.0, 0.0),\n//     1.0\n// ));\nmagnetic_pendulum_rs_magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_1__.memory.grow(1)\n\n\nconst width = universe.width()\nconst height = universe.height()\nconsole.log(width,height)\nconst canvas =  document.getElementById('magnetic-pendulum-canvas')\ncanvas.width = width;\ncanvas.height = height;\n\nconst ctx = canvas.getContext('2d');\nctx.fillStyle = \"green\";\nctx.fillRect(0, 0, canvas.width, canvas.height);\n\nfunction renderLoop() {\n  universe.tick();\n\n  draw(universe);\n\n  requestAnimationFrame(renderLoop);\n};\n\nfunction draw(universe) {\n  const magnets_ptr = universe.magnets()\n  const nums_ptr = universe.nums();\n  const magnet_sizeof = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'magnetic-pendulum-rs'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())()\n  const magnets_n = universe.magnets_len();\n  console.log(magnetic_pendulum_rs_magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_1__.memory.buffer.byteLength)\n  console.log(magnetic_pendulum_rs_magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_1__.memory)\n  console.log(\"SIZEOF IS\", nums_ptr, 1)\n  const magnets = new Uint8Array(magnetic_pendulum_rs_magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_1__.memory.buffer, nums_ptr, 1)\n  console.log(magnets[0])\n};\n\n// requestAnimationFrame(renderLoop);\n\n\nconst image = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'magnetic-pendulum-rs'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(10);\nconsole.log(magnetic_pendulum_rs_magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_1__.memory)\nconsole.log(\"ptr is\", image.get_pointer())\nconst buf = new Uint8Array(magnetic_pendulum_rs_magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_1__.memory.buffer, image.get_pointer(), 10);\n\nfor (let i = 0; i < 10; i++) {\n  console.log(buf[i])\n  buf[i] = 255;\n}\n\nconsole.log(image.get_length());\nconsole.log(image.get_first_element(), buf[0]);\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack://client-ts/./src/index.js?");

/***/ })

});