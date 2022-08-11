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

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var magnetic_pendulum_rs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! magnetic-pendulum-rs */ \"../magnetic-pendulum-rs/pkg/magnetic_pendulum_rs_bg.js\");\n/* harmony import */ var magnetic_pendulum_rs_magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! magnetic-pendulum-rs/magnetic_pendulum_rs_bg.wasm */ \"../magnetic-pendulum-rs/pkg/magnetic_pendulum_rs_bg.wasm\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([magnetic_pendulum_rs__WEBPACK_IMPORTED_MODULE_0__, magnetic_pendulum_rs_magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_1__]);\n([magnetic_pendulum_rs__WEBPACK_IMPORTED_MODULE_0__, magnetic_pendulum_rs_magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n// wasm.greet();\nvar universe = new magnetic_pendulum_rs__WEBPACK_IMPORTED_MODULE_0__.Universe(512, 512, 100);\nuniverse.add_nums(3.15);\nvar width = universe.width();\nvar height = universe.height();\nconsole.log(width, height);\nvar canvas = document.getElementById('magnetic-pendulum-canvas');\ncanvas.width = width;\ncanvas.height = height;\nvar ctx = canvas.getContext('2d');\nctx.fillStyle = \"green\";\nctx.fillRect(0, 0, canvas.width, canvas.height);\nfunction renderLoop() {\n    universe.tick();\n    draw(universe);\n    requestAnimationFrame(renderLoop);\n}\n;\nfunction draw(universe) {\n    // Read magnets from wasm memory\n    var magnets_ptr = universe.magnets();\n    var magnet_sizeof = magnetic_pendulum_rs__WEBPACK_IMPORTED_MODULE_0__.Magnet.size_of();\n    var magnets_n = universe.magnets_len();\n    var dv = new DataView(magnetic_pendulum_rs_magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_1__.memory.buffer, magnets_ptr, magnets_n);\n    for (var i = void 0; ; )\n        ;\n}\n;\n// requestAnimationFrame(renderLoop);\nvar magnets_ptr = universe.magnets();\nvar nums_ptr = universe.nums();\nvar magnet_sizeof = magnetic_pendulum_rs__WEBPACK_IMPORTED_MODULE_0__.Magnet.size_of();\nvar magnets_n = universe.magnets_len();\nconsole.log(magnetic_pendulum_rs_magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_1__.memory.buffer.byteLength);\nconsole.log(magnetic_pendulum_rs_magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_1__.memory);\nconsole.log(\"SIZEOF IS\", magnets_ptr, magnets_n);\n// const magnets = new Uint8Array(memory.buffer, magnets_ptr, magnets_n)\nvar nums = new Uint8Array(magnetic_pendulum_rs_magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_1__.memory.buffer, nums_ptr, 1);\nfunction getMagnet(buffer, ptr, n) {\n    var dv = new DataView(buffer);\n    var offset = ptr;\n    var i = 0;\n    var ret = [];\n    var strength = dv.getFloat64(offset, true);\n    offset += 8;\n    var pos_x = dv.getFloat64(offset, true);\n    offset += 8;\n    var pos_y = dv.getFloat64(offset, true);\n    offset += 8;\n    var color_r = dv.getUint8(offset);\n    offset += 1;\n    var color_g = dv.getUint8(offset);\n    offset += 1;\n    var color_b = dv.getUint8(offset);\n    offset += 1;\n    return ret;\n}\nfunction getNum(buffer, ptr, n) {\n    var dv = new DataView(buffer, ptr, 16);\n    // dv.setFloat64(ptr, Math.PI);\n    var myArray = new Float64Array(magnetic_pendulum_rs_magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_1__.memory.buffer, nums_ptr, 2);\n    console.log(myArray);\n    var offset = 0;\n    var i = 0;\n    var ret = [];\n    console.log(buffer.slice(offset, offset + 8 + 1));\n    console.log(\"bytelength is\", buffer.byteLength, \"offset is\", offset);\n    while (offset < buffer.byteLength && i < n) {\n        var strength = dv.getFloat64(offset, true);\n        offset += 8;\n        console.log(\"strength is\", strength);\n        ret.push(strength);\n        i += 1;\n    }\n    return ret;\n}\n// console.log(magnets.buffer.byteLength, \"g\", memory.buffer.byteLength)\nvar ret = getMagnet(magnetic_pendulum_rs_magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_1__.memory.buffer, magnets_ptr, magnets_n);\nfor (var _i = 0, ret_1 = ret; _i < ret_1.length; _i++) {\n    var m = ret_1[_i];\n    console.log(m);\n}\nconsole.log(universe.get_num(0));\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack://client-ts/./src/index.ts?");

/***/ })

});