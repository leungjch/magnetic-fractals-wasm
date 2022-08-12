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

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var magnetic_pendulum_rs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! magnetic-pendulum-rs */ \"../magnetic-pendulum-rs/pkg/magnetic_pendulum_rs_bg.js\");\n/* harmony import */ var magnetic_pendulum_rs_magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! magnetic-pendulum-rs/magnetic_pendulum_rs_bg.wasm */ \"../magnetic-pendulum-rs/pkg/magnetic_pendulum_rs_bg.wasm\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils.ts\");\n/* harmony import */ var dat_gui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dat.gui */ \"./node_modules/dat.gui/build/dat.gui.module.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([magnetic_pendulum_rs__WEBPACK_IMPORTED_MODULE_2__, magnetic_pendulum_rs_magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_3__]);\n([magnetic_pendulum_rs__WEBPACK_IMPORTED_MODULE_2__, magnetic_pendulum_rs_magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\nvar universe = new magnetic_pendulum_rs__WEBPACK_IMPORTED_MODULE_2__.Universe(64, 64, 100);\n// wasm.greet();\nvar text = {\n    type: 'pendulum',\n    tension: 0.8,\n    show_trace: false,\n};\nvar reset_button = { clear: function () { console.log(\"cleared all\"); universe.clear_magnets(); universe.clear_pendulums(); } };\nvar gui = new dat_gui__WEBPACK_IMPORTED_MODULE_1__.GUI();\ngui.add(text, 'type', { 'pendulum': 'pendulum', 'magnet': 'magnet', 'anti-magnet': 'antimagnet' });\ngui.add(text, 'tension', 0, 5).name(\"Tension\");\ngui.add(text, 'show_trace').name(\"Show trace\");\ngui.add(reset_button, 'clear').name(\"Clear all\");\nfunction canvas_to_universe_coords(canvas_x, canvas_y) {\n    var x = canvas_x / width * universe.width();\n    var y = canvas_y / height * universe.height();\n    return [x, y];\n}\nfunction universe_to_canvas_coords(x, y) {\n    var canvas_x = x / universe.width() * width;\n    var canvas_y = y / universe.height() * height;\n    return [canvas_x, canvas_y];\n}\nfunction getCursorPosition(canvas, event) {\n    var rect = canvas.getBoundingClientRect();\n    var canvas_x = event.clientX - rect.left;\n    var canvas_y = event.clientY - rect.top;\n    var _a = canvas_to_universe_coords(canvas_x, canvas_y), x = _a[0], y = _a[1];\n    universe.create_pendulum(x, y, text.tension, 0);\n}\nvar width = universe.width() * 50;\nvar height = universe.height() * 50;\nconsole.log(width, height);\nvar canvas = document.getElementById('magnetic-pendulum-canvas');\ncanvas.width = width;\ncanvas.height = height;\nvar ctx = canvas.getContext('2d');\nctx.fillStyle = \"black\";\nctx.fillRect(0, 0, canvas.width, canvas.height);\ncanvas.addEventListener('mousedown', function (e) {\n    getCursorPosition(canvas, e);\n});\nfunction renderLoop() {\n    universe.tick();\n    draw(universe);\n    requestAnimationFrame(renderLoop);\n}\n;\nfunction draw(universe) {\n    // Read magnets from wasm memory\n    var magnets_ptr = universe.magnets();\n    var magnet_sizeof = magnetic_pendulum_rs__WEBPACK_IMPORTED_MODULE_2__.Magnet.size_of();\n    var magnets_n = universe.magnets_len();\n    // console.log(\"magnets_n\", magnets_n, memory, magnets_ptr)\n    var dv_magnets = new DataView(magnetic_pendulum_rs_magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_3__.memory.buffer, magnets_ptr, magnets_n * magnet_sizeof);\n    // Render magnets from wasm memory\n    for (var i = 0; i < magnets_n; i++) {\n        var magnet = getMagnet(dv_magnets, i * magnet_sizeof);\n        ctx.beginPath();\n        ctx.fillStyle = \"yellow\";\n        ctx.rect(magnet.pos.x + width / 2, magnet.pos.y + height / 2, 5, 5);\n        ctx.fill();\n    }\n    // Read pendulums from wasm memory\n    var pendulums_ptr = universe.pendulums();\n    var pendulum_sizeof = magnetic_pendulum_rs__WEBPACK_IMPORTED_MODULE_2__.Pendulum.size_of();\n    var pendulums_n = universe.pendulums_len();\n    var dv_pendulums = new DataView(magnetic_pendulum_rs_magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_3__.memory.buffer, pendulums_ptr, pendulums_n * pendulum_sizeof);\n    // Render pendulums from wasm memory\n    for (var i = 0; i < pendulums_n; i++) {\n        var pendulum = getPendulum(dv_pendulums, pendulum_sizeof * i);\n        var _a = universe_to_canvas_coords(pendulum.pos.x, pendulum.pos.y), canvas_x = _a[0], canvas_y = _a[1];\n        ctx.beginPath();\n        ctx.fillStyle = \"white\";\n        ctx.rect(canvas_x, canvas_y, 5, 5);\n        ctx.fill();\n    }\n}\n;\nrequestAnimationFrame(renderLoop);\nfunction getMagnet(dv, ptr) {\n    var offset = ptr;\n    var strength = dv.getFloat64(offset, true);\n    offset += 8;\n    var pos_x = dv.getFloat64(offset, true);\n    offset += 8;\n    var pos_y = dv.getFloat64(offset, true);\n    offset += 8;\n    var color_r = dv.getUint8(offset);\n    offset += 1;\n    var color_g = dv.getUint8(offset);\n    offset += 1;\n    var color_b = dv.getUint8(offset);\n    offset += 1;\n    return new _utils__WEBPACK_IMPORTED_MODULE_0__.Magnet(strength, new _utils__WEBPACK_IMPORTED_MODULE_0__.Vec2D(pos_x, pos_y), new _utils__WEBPACK_IMPORTED_MODULE_0__.Rgb(color_r, color_g, color_b));\n}\nfunction getPendulum(dv, ptr) {\n    var offset = ptr;\n    var pos_start_x = dv.getFloat64(offset, true);\n    offset += 8;\n    var pos_start_y = dv.getFloat64(offset, true);\n    offset += 8;\n    var pos_x = dv.getFloat64(offset, true);\n    offset += 8;\n    var pos_y = dv.getFloat64(offset, true);\n    offset += 8;\n    var vel_x = dv.getFloat64(offset, true);\n    offset += 8;\n    var vel_y = dv.getFloat64(offset, true);\n    offset += 8;\n    var acc_x = dv.getFloat64(offset, true);\n    offset += 8;\n    var acc_y = dv.getFloat64(offset, true);\n    offset += 8;\n    var ten_x = dv.getFloat64(offset, true);\n    offset += 8;\n    var ten_y = dv.getFloat64(offset, true);\n    offset += 8;\n    var k = dv.getFloat64(offset, true);\n    offset += 8;\n    var friction = dv.getFloat64(offset, true);\n    offset += 8;\n    var mag_x = dv.getFloat64(offset, true);\n    offset += 8;\n    var mag_y = dv.getFloat64(offset, true);\n    offset += 8;\n    var fnet_x = dv.getFloat64(offset, true);\n    offset += 8;\n    var fnet_y = dv.getFloat64(offset, true);\n    offset += 8;\n    var isStationary = dv.getUint8(offset) == 1 ? true : false;\n    offset += 1;\n    return new _utils__WEBPACK_IMPORTED_MODULE_0__.Pendulum(new _utils__WEBPACK_IMPORTED_MODULE_0__.Vec2D(pos_start_x, pos_start_y), new _utils__WEBPACK_IMPORTED_MODULE_0__.Vec2D(pos_x, pos_y), new _utils__WEBPACK_IMPORTED_MODULE_0__.Vec2D(vel_x, vel_y), new _utils__WEBPACK_IMPORTED_MODULE_0__.Vec2D(acc_x, acc_y), new _utils__WEBPACK_IMPORTED_MODULE_0__.Vec2D(ten_x, ten_y), k, friction, new _utils__WEBPACK_IMPORTED_MODULE_0__.Vec2D(mag_x, mag_y), new _utils__WEBPACK_IMPORTED_MODULE_0__.Vec2D(fnet_x, fnet_y), isStationary);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack://client-ts/./src/index.ts?");

/***/ })

});