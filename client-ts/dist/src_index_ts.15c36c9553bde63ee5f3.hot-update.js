"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateclient_ts"]("src_index_ts",{

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var magnetic_pendulum_rs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! magnetic-pendulum-rs */ \"../magnetic-pendulum-rs/pkg/magnetic_pendulum_rs_bg.js\");\n/* harmony import */ var magnetic_pendulum_rs_magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! magnetic-pendulum-rs/magnetic_pendulum_rs_bg.wasm */ \"../magnetic-pendulum-rs/pkg/magnetic_pendulum_rs_bg.wasm\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([magnetic_pendulum_rs__WEBPACK_IMPORTED_MODULE_0__, magnetic_pendulum_rs_magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_1__]);\n([magnetic_pendulum_rs__WEBPACK_IMPORTED_MODULE_0__, magnetic_pendulum_rs_magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n// wasm.greet();\nvar universe = new magnetic_pendulum_rs__WEBPACK_IMPORTED_MODULE_0__.Universe(512, 512, 100);\n// universe.add_magnet(new wasm.Magnet(\n//     new wasm.Vec2D(0.0, 0.0),\n//     1.0\n// ));\nmagnetic_pendulum_rs_magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_1__.memory.grow(1);\nuniverse.add_nums(12);\nvar width = universe.width();\nvar height = universe.height();\nconsole.log(width, height);\nvar canvas = document.getElementById('magnetic-pendulum-canvas');\ncanvas.width = width;\ncanvas.height = height;\nvar ctx = canvas.getContext('2d');\nctx.fillStyle = \"green\";\nctx.fillRect(0, 0, canvas.width, canvas.height);\nfunction renderLoop() {\n    universe.tick();\n    draw(universe);\n    requestAnimationFrame(renderLoop);\n}\n;\nfunction draw(universe) {\n    var magnets_ptr = universe.magnets();\n    var nums_ptr = universe.nums();\n    var magnet_sizeof = magnetic_pendulum_rs__WEBPACK_IMPORTED_MODULE_0__.Magnet.size_of();\n    var magnets_n = universe.magnets_len();\n    console.log(magnetic_pendulum_rs_magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_1__.memory.buffer.byteLength);\n    console.log(magnetic_pendulum_rs_magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_1__.memory);\n    console.log(\"SIZEOF IS\", nums_ptr, 1);\n    var magnets = new Uint8Array(magnetic_pendulum_rs_magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_1__.memory.buffer, nums_ptr, 1);\n    console.log(magnets[0]);\n}\n;\n// requestAnimationFrame(renderLoop);\n// const image = wasm.Image.new(10);\n// console.log(memory)\n// console.log(\"ptr is\", image.get_pointer())\n// const buf = new Uint8ClampedArray(memory.buffer, image.get_pointer(), 10);\n// for (let i = 0; i < 10; i++) {\n//   console.log(buf[i])\n//   buf[i] = 255;\n// }\n// console.log(image.get_length());\n// console.log(image.get_first_element(), buf[0]);\nvar magnets_ptr = universe.magnets();\nvar nums_ptr = universe.nums();\nvar magnet_sizeof = magnetic_pendulum_rs__WEBPACK_IMPORTED_MODULE_0__.Magnet.size_of();\nvar magnets_n = universe.magnets_len();\nconsole.log(magnetic_pendulum_rs_magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_1__.memory.buffer.byteLength);\nconsole.log(magnetic_pendulum_rs_magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_1__.memory);\nconsole.log(\"SIZEOF IS\", magnets_ptr, 1);\nvar magnets = new Uint8Array(magnetic_pendulum_rs_magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_1__.memory.buffer, magnets_ptr, magnets_n);\nconsole.log(magnets[0]);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack://client-ts/./src/index.ts?");

/***/ })

});