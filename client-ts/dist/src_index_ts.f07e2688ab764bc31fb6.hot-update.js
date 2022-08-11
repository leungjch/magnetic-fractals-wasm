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

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var magnetic_pendulum_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! magnetic-pendulum-wasm */ \"../magnetic-pendulum-wasm/pkg/magnetic_pendulum_wasm_bg.js\");\n/* harmony import */ var magnetic_pendulum_wasm_magnetic_pendulum_bg_wasm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! magnetic-pendulum-wasm/magnetic_pendulum_bg.wasm */ \"../magnetic-pendulum-wasm/pkg/magnetic_pendulum_bg.wasm\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([magnetic_pendulum_wasm__WEBPACK_IMPORTED_MODULE_0__, magnetic_pendulum_wasm_magnetic_pendulum_bg_wasm__WEBPACK_IMPORTED_MODULE_1__]);\n([magnetic_pendulum_wasm__WEBPACK_IMPORTED_MODULE_0__, magnetic_pendulum_wasm_magnetic_pendulum_bg_wasm__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n// wasm.greet();\nvar universe = magnetic_pendulum_wasm__WEBPACK_IMPORTED_MODULE_0__.Universe[\"new\"](512, 512, 100);\nuniverse.add_magnet(magnetic_pendulum_wasm__WEBPACK_IMPORTED_MODULE_0__.Magnet[\"new\"](magnetic_pendulum_wasm__WEBPACK_IMPORTED_MODULE_0__.Vec2D[\"new\"](0.0, 0.0), 1.0));\nvar width = universe.width();\nvar height = universe.height();\nconsole.log(width, height);\nvar canvas = document.getElementById('magnetic-pendulum-canvas');\ncanvas.width = width;\ncanvas.height = height;\nvar ctx = canvas.getContext('2d');\nctx.fillStyle = \"green\";\nctx.fillRect(0, 0, canvas.width, canvas.height);\nfunction renderLoop() {\n    universe.tick();\n    draw(universe);\n    requestAnimationFrame(renderLoop);\n}\n;\nfunction draw(universe) {\n    var magnets_ptr = universe.magnets();\n    var magnet_sizeof = magnetic_pendulum_wasm__WEBPACK_IMPORTED_MODULE_0__.Magnet.size_of();\n    var magnets_n = universe.magnets_len();\n    console.log(\"SIZEOF IS\", magnets_n, magnet_sizeof, magnets_ptr);\n    console.log(magnetic_pendulum_wasm_magnetic_pendulum_bg_wasm__WEBPACK_IMPORTED_MODULE_1__.memory);\n    var magnets = new Uint8Array(magnetic_pendulum_wasm_magnetic_pendulum_bg_wasm__WEBPACK_IMPORTED_MODULE_1__.memory.buffer, magnets_ptr, magnet_sizeof);\n    console.log(\"DONE\");\n    for (var i = 0; i < magnets_n; i++) {\n        var magnet = magnets[i];\n        console.log(magnet);\n    }\n}\n;\nrequestAnimationFrame(renderLoop);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack://client-ts/./src/index.ts?");

/***/ }),

/***/ "../magnetic-pendulum-wasm/pkg/magnetic_pendulum_wasm_bg.js":
/*!******************************************************************!*\
  !*** ../magnetic-pendulum-wasm/pkg/magnetic_pendulum_wasm_bg.js ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Magnet\": () => (/* binding */ Magnet),\n/* harmony export */   \"Pendulum\": () => (/* binding */ Pendulum),\n/* harmony export */   \"Rgb\": () => (/* binding */ Rgb),\n/* harmony export */   \"Universe\": () => (/* binding */ Universe),\n/* harmony export */   \"Vec2D\": () => (/* binding */ Vec2D),\n/* harmony export */   \"__wbg_alert_2c19ebef6d41a706\": () => (/* binding */ __wbg_alert_2c19ebef6d41a706),\n/* harmony export */   \"__wbindgen_throw\": () => (/* binding */ __wbindgen_throw),\n/* harmony export */   \"greet\": () => (/* binding */ greet)\n/* harmony export */ });\n/* harmony import */ var _magnetic_pendulum_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./magnetic_pendulum_wasm_bg.wasm */ \"../magnetic-pendulum-wasm/pkg/magnetic_pendulum_wasm_bg.wasm\");\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_magnetic_pendulum_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__]);\n_magnetic_pendulum_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;\n\nlet cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\ncachedTextDecoder.decode();\n\nlet cachedUint8Memory0 = new Uint8Array();\n\nfunction getUint8Memory0() {\n    if (cachedUint8Memory0.byteLength === 0) {\n        cachedUint8Memory0 = new Uint8Array(_magnetic_pendulum_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.memory.buffer);\n    }\n    return cachedUint8Memory0;\n}\n\nfunction getStringFromWasm0(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));\n}\n/**\n*/\nfunction greet() {\n    _magnetic_pendulum_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.greet();\n}\n\nfunction _assertClass(instance, klass) {\n    if (!(instance instanceof klass)) {\n        throw new Error(`expected instance of ${klass.name}`);\n    }\n    return instance.ptr;\n}\n/**\n*/\nclass Magnet {\n\n    static __wrap(ptr) {\n        const obj = Object.create(Magnet.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    __destroy_into_raw() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        return ptr;\n    }\n\n    free() {\n        const ptr = this.__destroy_into_raw();\n        _magnetic_pendulum_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbg_magnet_free(ptr);\n    }\n    /**\n    * @param {Vec2D} pos\n    * @param {number} strength\n    * @returns {Magnet}\n    */\n    static new(pos, strength) {\n        _assertClass(pos, Vec2D);\n        var ptr0 = pos.ptr;\n        pos.ptr = 0;\n        const ret = _magnetic_pendulum_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.magnet_new(ptr0, strength);\n        return Magnet.__wrap(ret);\n    }\n    /**\n    * @returns {number}\n    */\n    static size_of() {\n        const ret = _magnetic_pendulum_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.magnet_size_of();\n        return ret >>> 0;\n    }\n}\n/**\n*/\nclass Pendulum {\n\n    static __wrap(ptr) {\n        const obj = Object.create(Pendulum.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    __destroy_into_raw() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        return ptr;\n    }\n\n    free() {\n        const ptr = this.__destroy_into_raw();\n        _magnetic_pendulum_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbg_pendulum_free(ptr);\n    }\n    /**\n    * @param {Vec2D} pos\n    * @param {number} k\n    * @param {number} friction\n    * @returns {Pendulum}\n    */\n    static new(pos, k, friction) {\n        _assertClass(pos, Vec2D);\n        var ptr0 = pos.ptr;\n        pos.ptr = 0;\n        const ret = _magnetic_pendulum_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.pendulum_new(ptr0, k, friction);\n        return Pendulum.__wrap(ret);\n    }\n    /**\n    * @returns {Vec2D}\n    */\n    pos() {\n        const ret = _magnetic_pendulum_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.pendulum_pos(this.ptr);\n        return Vec2D.__wrap(ret);\n    }\n}\n/**\n*/\nclass Rgb {\n\n    __destroy_into_raw() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        return ptr;\n    }\n\n    free() {\n        const ptr = this.__destroy_into_raw();\n        _magnetic_pendulum_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbg_rgb_free(ptr);\n    }\n}\n/**\n*/\nclass Universe {\n\n    static __wrap(ptr) {\n        const obj = Object.create(Universe.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    __destroy_into_raw() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        return ptr;\n    }\n\n    free() {\n        const ptr = this.__destroy_into_raw();\n        _magnetic_pendulum_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbg_universe_free(ptr);\n    }\n    /**\n    * @param {number} width\n    * @param {number} height\n    * @param {number} max_iters\n    * @returns {Universe}\n    */\n    static new(width, height, max_iters) {\n        const ret = _magnetic_pendulum_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.universe_new(width, height, max_iters);\n        return Universe.__wrap(ret);\n    }\n    /**\n    * @param {Magnet} magnet\n    */\n    add_magnet(magnet) {\n        _assertClass(magnet, Magnet);\n        var ptr0 = magnet.ptr;\n        magnet.ptr = 0;\n        _magnetic_pendulum_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.universe_add_magnet(this.ptr, ptr0);\n    }\n    /**\n    */\n    clear_magnets() {\n        _magnetic_pendulum_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.universe_clear_magnets(this.ptr);\n    }\n    /**\n    * @param {Pendulum} pendulum\n    */\n    add_pendulum(pendulum) {\n        _assertClass(pendulum, Pendulum);\n        var ptr0 = pendulum.ptr;\n        pendulum.ptr = 0;\n        _magnetic_pendulum_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.universe_add_pendulum(this.ptr, ptr0);\n    }\n    /**\n    */\n    clear_pendulums() {\n        _magnetic_pendulum_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.universe_clear_pendulums(this.ptr);\n    }\n    /**\n    */\n    tick() {\n        _magnetic_pendulum_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.universe_tick(this.ptr);\n    }\n    /**\n    * @returns {number}\n    */\n    width() {\n        const ret = _magnetic_pendulum_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.universe_width(this.ptr);\n        return ret >>> 0;\n    }\n    /**\n    * @returns {number}\n    */\n    height() {\n        const ret = _magnetic_pendulum_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.universe_height(this.ptr);\n        return ret >>> 0;\n    }\n    /**\n    * @returns {number}\n    */\n    pendulums() {\n        const ret = _magnetic_pendulum_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.universe_pendulums(this.ptr);\n        return ret;\n    }\n    /**\n    * @returns {number}\n    */\n    magnets() {\n        const ret = _magnetic_pendulum_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.universe_magnets(this.ptr);\n        return ret;\n    }\n    /**\n    * @returns {number}\n    */\n    pendulums_len() {\n        const ret = _magnetic_pendulum_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.universe_pendulums_len(this.ptr);\n        return ret >>> 0;\n    }\n    /**\n    * @returns {number}\n    */\n    magnets_len() {\n        const ret = _magnetic_pendulum_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.universe_magnets_len(this.ptr);\n        return ret >>> 0;\n    }\n}\n/**\n*/\nclass Vec2D {\n\n    static __wrap(ptr) {\n        const obj = Object.create(Vec2D.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    __destroy_into_raw() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        return ptr;\n    }\n\n    free() {\n        const ptr = this.__destroy_into_raw();\n        _magnetic_pendulum_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbg_vec2d_free(ptr);\n    }\n    /**\n    * @returns {number}\n    */\n    get x() {\n        const ret = _magnetic_pendulum_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbg_get_vec2d_x(this.ptr);\n        return ret;\n    }\n    /**\n    * @param {number} arg0\n    */\n    set x(arg0) {\n        _magnetic_pendulum_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbg_set_vec2d_x(this.ptr, arg0);\n    }\n    /**\n    * @returns {number}\n    */\n    get y() {\n        const ret = _magnetic_pendulum_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbg_get_vec2d_y(this.ptr);\n        return ret;\n    }\n    /**\n    * @param {number} arg0\n    */\n    set y(arg0) {\n        _magnetic_pendulum_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbg_set_vec2d_y(this.ptr, arg0);\n    }\n    /**\n    * @param {number} x\n    * @param {number} y\n    * @returns {Vec2D}\n    */\n    static new(x, y) {\n        const ret = _magnetic_pendulum_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.vec2d_new(x, y);\n        return Vec2D.__wrap(ret);\n    }\n    /**\n    * @returns {Vec2D}\n    */\n    static zero() {\n        const ret = _magnetic_pendulum_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.vec2d_zero();\n        return Vec2D.__wrap(ret);\n    }\n}\n\nfunction __wbg_alert_2c19ebef6d41a706(arg0, arg1) {\n    alert(getStringFromWasm0(arg0, arg1));\n};\n\nfunction __wbindgen_throw(arg0, arg1) {\n    throw new Error(getStringFromWasm0(arg0, arg1));\n};\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack://client-ts/../magnetic-pendulum-wasm/pkg/magnetic_pendulum_wasm_bg.js?");

/***/ }),

/***/ "../magnetic-pendulum-wasm/pkg/magnetic_pendulum_wasm_bg.wasm":
/*!********************************************************************!*\
  !*** ../magnetic-pendulum-wasm/pkg/magnetic_pendulum_wasm_bg.wasm ***!
  \********************************************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("var __webpack_instantiate__ = ([WEBPACK_IMPORTED_MODULE_0]) => {\n\treturn __webpack_require__.v(exports, module.id, \"ef00d79700b02b2c3d51\", {\n\t\t\"./magnetic_pendulum_wasm_bg.js\": {\n\t\t\t\"__wbg_alert_2c19ebef6d41a706\": WEBPACK_IMPORTED_MODULE_0.__wbg_alert_2c19ebef6d41a706,\n\t\t\t\"__wbindgen_throw\": WEBPACK_IMPORTED_MODULE_0.__wbindgen_throw\n\t\t}\n\t});\n}\n__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => {\n\ttry {\n\t/* harmony import */ var WEBPACK_IMPORTED_MODULE_0 = __webpack_require__(/*! ./magnetic_pendulum_wasm_bg.js */ \"../magnetic-pendulum-wasm/pkg/magnetic_pendulum_wasm_bg.js\");\n\tvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([WEBPACK_IMPORTED_MODULE_0]);\n\tvar [WEBPACK_IMPORTED_MODULE_0] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__;\n\tawait __webpack_require__.v(exports, module.id, \"ef00d79700b02b2c3d51\", {\n\t\t\"./magnetic_pendulum_wasm_bg.js\": {\n\t\t\t\"__wbg_alert_2c19ebef6d41a706\": WEBPACK_IMPORTED_MODULE_0.__wbg_alert_2c19ebef6d41a706,\n\t\t\t\"__wbindgen_throw\": WEBPACK_IMPORTED_MODULE_0.__wbindgen_throw\n\t\t}\n\t});\n\t__webpack_async_result__();\n\t} catch(e) { __webpack_async_result__(e); }\n}, 1);\n\n//# sourceURL=webpack://client-ts/../magnetic-pendulum-wasm/pkg/magnetic_pendulum_wasm_bg.wasm?");

/***/ })

});