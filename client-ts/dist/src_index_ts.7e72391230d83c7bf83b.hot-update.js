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

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var magnetic_pendulum_rs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! magnetic-pendulum-rs */ \"../magnetic-pendulum-rs/pkg/magnetic_pendulum_rs_bg.js\");\n/* harmony import */ var magnetic_pendulum_rs_magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! magnetic-pendulum-rs/magnetic_pendulum_rs_bg.wasm */ \"../magnetic-pendulum-rs/pkg/magnetic_pendulum_rs_bg.wasm\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([magnetic_pendulum_rs__WEBPACK_IMPORTED_MODULE_1__, magnetic_pendulum_rs_magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_2__]);\n([magnetic_pendulum_rs__WEBPACK_IMPORTED_MODULE_1__, magnetic_pendulum_rs_magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n// wasm.greet();\nvar universe = new magnetic_pendulum_rs__WEBPACK_IMPORTED_MODULE_1__.Universe(512, 512, 100);\nuniverse.add_nums(3.15);\nvar width = universe.width();\nvar height = universe.height();\nconsole.log(width, height);\nvar canvas = document.getElementById('magnetic-pendulum-canvas');\ncanvas.width = width;\ncanvas.height = height;\nvar ctx = canvas.getContext('2d');\nctx.fillStyle = \"green\";\nctx.fillRect(0, 0, canvas.width, canvas.height);\nfunction renderLoop() {\n    universe.tick();\n    draw(universe);\n    requestAnimationFrame(renderLoop);\n}\n;\nfunction draw(universe) {\n    // Read magnets from wasm memory\n    var magnets_ptr = universe.magnets();\n    var magnet_sizeof = magnetic_pendulum_rs__WEBPACK_IMPORTED_MODULE_1__.Magnet.size_of();\n    var magnets_n = universe.magnets_len();\n    console.log(\"magnets_n\", magnets_n, magnetic_pendulum_rs_magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_2__.memory, magnets_ptr);\n    var dv = new DataView(magnetic_pendulum_rs_magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_2__.memory.buffer, magnets_ptr, magnets_n * magnet_sizeof);\n    universe.tick();\n    for (var i = 0; i < magnets_n; i++) {\n        var magnet = getMagnet(dv, i * magnet_sizeof);\n        ctx.beginPath();\n        ctx.fillStyle = magnet.color.to_string();\n        ctx.rect(magnet.pos.x, magnet.pos.y, 10, 10);\n        ctx.stroke();\n    }\n}\n;\nrequestAnimationFrame(renderLoop);\nfunction getMagnet(dv, ptr) {\n    var offset = ptr;\n    var i = 0;\n    var strength = dv.getFloat64(offset, true);\n    offset += 8;\n    var pos_x = dv.getFloat64(offset, true);\n    offset += 8;\n    var pos_y = dv.getFloat64(offset, true);\n    offset += 8;\n    var color_r = dv.getUint8(offset);\n    offset += 1;\n    var color_g = dv.getUint8(offset);\n    offset += 1;\n    var color_b = dv.getUint8(offset);\n    offset += 1;\n    return new _utils__WEBPACK_IMPORTED_MODULE_0__.Magnet(strength, new _utils__WEBPACK_IMPORTED_MODULE_0__.Vec2D(pos_x, pos_y), new _utils__WEBPACK_IMPORTED_MODULE_0__.Rgb(color_r, color_g, color_b));\n}\nfunction getPendulum(dv) {\n}\n// function getNum(buffer : ArrayBuffer, ptr: number, n: number) {\n//   let dv = new DataView(buffer, ptr, 16);\n//   // dv.setFloat64(ptr, Math.PI);\n//   let myArray = new Float64Array(memory.buffer, nums_ptr, 2);\n//   console.log(myArray)\n//   let offset = 0;\n//   let i = 0;\n//   let ret = [];\n//   console.log(buffer.slice(offset, offset+8+1))\n//   console.log(\"bytelength is\", buffer.byteLength, \"offset is\", offset)\n//   while (offset < buffer.byteLength && i < n) {\n//       let strength = dv.getFloat64(offset, true); offset += 8;\n//       console.log(\"strength is\", strength)\n//       ret.push(strength);\n//       i += 1;\n//   }\n//   return ret;\n// }\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack://client-ts/./src/index.ts?");

/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Magnet\": () => (/* binding */ Magnet),\n/* harmony export */   \"Rgb\": () => (/* binding */ Rgb),\n/* harmony export */   \"Vec2D\": () => (/* binding */ Vec2D)\n/* harmony export */ });\nvar Rgb = /** @class */ (function () {\n    function Rgb(r, g, b) {\n        this.r = r;\n        this.g = g;\n        this.b = b;\n    }\n    Rgb.prototype.to_string = function (r, g, b) {\n        return \"rgb(\" + r + \",\" + g + \",\" + b + \")\";\n    };\n    return Rgb;\n}());\n\nvar Vec2D = /** @class */ (function () {\n    function Vec2D(x, y) {\n        this.x = x;\n        this.y = y;\n    }\n    return Vec2D;\n}());\n\nvar Magnet = /** @class */ (function () {\n    function Magnet(strength, pos, color) {\n        this.strength = strength;\n        this.pos = pos;\n        this.color = color;\n    }\n    return Magnet;\n}());\n\n\n\n//# sourceURL=webpack://client-ts/./src/utils.ts?");

/***/ })

});