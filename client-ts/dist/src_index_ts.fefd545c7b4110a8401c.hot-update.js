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

/***/ "../magnetic-pendulum-rs/pkg/magnetic_pendulum_rs_bg.js":
/*!**************************************************************!*\
  !*** ../magnetic-pendulum-rs/pkg/magnetic_pendulum_rs_bg.js ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Emitter\": () => (/* binding */ Emitter),\n/* harmony export */   \"FractalGenerator\": () => (/* binding */ FractalGenerator),\n/* harmony export */   \"Magnet\": () => (/* binding */ Magnet),\n/* harmony export */   \"Pendulum\": () => (/* binding */ Pendulum),\n/* harmony export */   \"Rgb\": () => (/* binding */ Rgb),\n/* harmony export */   \"Universe\": () => (/* binding */ Universe),\n/* harmony export */   \"Vec2D\": () => (/* binding */ Vec2D),\n/* harmony export */   \"__wbg_alert_bc509be1fa53a025\": () => (/* binding */ __wbg_alert_bc509be1fa53a025),\n/* harmony export */   \"__wbg_buffer_34f5ec9f8a838ba0\": () => (/* binding */ __wbg_buffer_34f5ec9f8a838ba0),\n/* harmony export */   \"__wbg_call_33d7bcddbbfa394a\": () => (/* binding */ __wbg_call_33d7bcddbbfa394a),\n/* harmony export */   \"__wbg_crypto_b95d7173266618a9\": () => (/* binding */ __wbg_crypto_b95d7173266618a9),\n/* harmony export */   \"__wbg_getRandomValues_b14734aa289bc356\": () => (/* binding */ __wbg_getRandomValues_b14734aa289bc356),\n/* harmony export */   \"__wbg_globalThis_3348936ac49df00a\": () => (/* binding */ __wbg_globalThis_3348936ac49df00a),\n/* harmony export */   \"__wbg_global_67175caf56f55ca9\": () => (/* binding */ __wbg_global_67175caf56f55ca9),\n/* harmony export */   \"__wbg_length_51f19f73d6d9eff3\": () => (/* binding */ __wbg_length_51f19f73d6d9eff3),\n/* harmony export */   \"__wbg_msCrypto_5a86d77a66230f81\": () => (/* binding */ __wbg_msCrypto_5a86d77a66230f81),\n/* harmony export */   \"__wbg_new_cda198d9dbc6d7ea\": () => (/* binding */ __wbg_new_cda198d9dbc6d7ea),\n/* harmony export */   \"__wbg_newnoargs_971e9a5abe185139\": () => (/* binding */ __wbg_newnoargs_971e9a5abe185139),\n/* harmony export */   \"__wbg_newwithlength_66e5530e7079ea1b\": () => (/* binding */ __wbg_newwithlength_66e5530e7079ea1b),\n/* harmony export */   \"__wbg_node_0dd25d832e4785d5\": () => (/* binding */ __wbg_node_0dd25d832e4785d5),\n/* harmony export */   \"__wbg_process_e56fd54cf6319b6c\": () => (/* binding */ __wbg_process_e56fd54cf6319b6c),\n/* harmony export */   \"__wbg_randomFillSync_91e2b39becca6147\": () => (/* binding */ __wbg_randomFillSync_91e2b39becca6147),\n/* harmony export */   \"__wbg_require_0db1598d9ccecb30\": () => (/* binding */ __wbg_require_0db1598d9ccecb30),\n/* harmony export */   \"__wbg_self_fd00a1ef86d1b2ed\": () => (/* binding */ __wbg_self_fd00a1ef86d1b2ed),\n/* harmony export */   \"__wbg_set_1a930cfcda1a8067\": () => (/* binding */ __wbg_set_1a930cfcda1a8067),\n/* harmony export */   \"__wbg_static_accessor_NODE_MODULE_26b231378c1be7dd\": () => (/* binding */ __wbg_static_accessor_NODE_MODULE_26b231378c1be7dd),\n/* harmony export */   \"__wbg_subarray_270ff8dd5582c1ac\": () => (/* binding */ __wbg_subarray_270ff8dd5582c1ac),\n/* harmony export */   \"__wbg_versions_77e21455908dad33\": () => (/* binding */ __wbg_versions_77e21455908dad33),\n/* harmony export */   \"__wbg_window_6f6e346d8bbd61d7\": () => (/* binding */ __wbg_window_6f6e346d8bbd61d7),\n/* harmony export */   \"__wbindgen_is_object\": () => (/* binding */ __wbindgen_is_object),\n/* harmony export */   \"__wbindgen_is_string\": () => (/* binding */ __wbindgen_is_string),\n/* harmony export */   \"__wbindgen_is_undefined\": () => (/* binding */ __wbindgen_is_undefined),\n/* harmony export */   \"__wbindgen_memory\": () => (/* binding */ __wbindgen_memory),\n/* harmony export */   \"__wbindgen_object_clone_ref\": () => (/* binding */ __wbindgen_object_clone_ref),\n/* harmony export */   \"__wbindgen_object_drop_ref\": () => (/* binding */ __wbindgen_object_drop_ref),\n/* harmony export */   \"__wbindgen_throw\": () => (/* binding */ __wbindgen_throw),\n/* harmony export */   \"greet\": () => (/* binding */ greet)\n/* harmony export */ });\n/* harmony import */ var _magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./magnetic_pendulum_rs_bg.wasm */ \"../magnetic-pendulum-rs/pkg/magnetic_pendulum_rs_bg.wasm\");\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__]);\n_magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst heap = new Array(32).fill(undefined);\n\nheap.push(undefined, null, true, false);\n\nfunction getObject(idx) { return heap[idx]; }\n\nlet heap_next = heap.length;\n\nfunction dropObject(idx) {\n    if (idx < 36) return;\n    heap[idx] = heap_next;\n    heap_next = idx;\n}\n\nfunction takeObject(idx) {\n    const ret = getObject(idx);\n    dropObject(idx);\n    return ret;\n}\n\nfunction addHeapObject(obj) {\n    if (heap_next === heap.length) heap.push(heap.length + 1);\n    const idx = heap_next;\n    heap_next = heap[idx];\n\n    heap[idx] = obj;\n    return idx;\n}\n\nconst lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;\n\nlet cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\ncachedTextDecoder.decode();\n\nlet cachedUint8Memory0 = new Uint8Array();\n\nfunction getUint8Memory0() {\n    if (cachedUint8Memory0.byteLength === 0) {\n        cachedUint8Memory0 = new Uint8Array(_magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.memory.buffer);\n    }\n    return cachedUint8Memory0;\n}\n\nfunction getStringFromWasm0(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));\n}\n/**\n*/\nfunction greet() {\n    _magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.greet();\n}\n\nfunction _assertClass(instance, klass) {\n    if (!(instance instanceof klass)) {\n        throw new Error(`expected instance of ${klass.name}`);\n    }\n    return instance.ptr;\n}\n\nfunction handleError(f, args) {\n    try {\n        return f.apply(this, args);\n    } catch (e) {\n        _magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_exn_store(addHeapObject(e));\n    }\n}\n\nfunction getArrayU8FromWasm0(ptr, len) {\n    return getUint8Memory0().subarray(ptr / 1, ptr / 1 + len);\n}\n/**\n*/\nclass Emitter {\n\n    static __wrap(ptr) {\n        const obj = Object.create(Emitter.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    __destroy_into_raw() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        return ptr;\n    }\n\n    free() {\n        const ptr = this.__destroy_into_raw();\n        _magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbg_emitter_free(ptr);\n    }\n    /**\n    * @returns {number}\n    */\n    get clock() {\n        const ret = _magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbg_get_emitter_clock(this.ptr);\n        return ret >>> 0;\n    }\n    /**\n    * @param {number} arg0\n    */\n    set clock(arg0) {\n        _magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbg_set_emitter_clock(this.ptr, arg0);\n    }\n    /**\n    * @returns {number}\n    */\n    get tension() {\n        const ret = _magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbg_get_emitter_tension(this.ptr);\n        return ret;\n    }\n    /**\n    * @param {number} arg0\n    */\n    set tension(arg0) {\n        _magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbg_set_emitter_tension(this.ptr, arg0);\n    }\n    /**\n    * @returns {number}\n    */\n    get friction() {\n        const ret = _magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbg_get_emitter_friction(this.ptr);\n        return ret;\n    }\n    /**\n    * @param {number} arg0\n    */\n    set friction(arg0) {\n        _magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbg_set_emitter_friction(this.ptr, arg0);\n    }\n    /**\n    * @param {number} x\n    * @param {number} y\n    * @param {number} interval\n    * @param {number} tension\n    * @param {number} friction\n    * @returns {Emitter}\n    */\n    static new(x, y, interval, tension, friction) {\n        const ret = _magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.emitter_new(x, y, interval, tension, friction);\n        return Emitter.__wrap(ret);\n    }\n    /**\n    */\n    tick() {\n        _magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.emitter_tick(this.ptr);\n    }\n}\n/**\n*/\nclass FractalGenerator {\n\n    static __wrap(ptr) {\n        const obj = Object.create(FractalGenerator.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    __destroy_into_raw() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        return ptr;\n    }\n\n    free() {\n        const ptr = this.__destroy_into_raw();\n        _magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbg_fractalgenerator_free(ptr);\n    }\n    /**\n    * @param {number} image_width\n    * @param {number} image_height\n    */\n    constructor(image_width, image_height) {\n        const ret = _magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.fractalgenerator_new(image_width, image_height);\n        return FractalGenerator.__wrap(ret);\n    }\n    /**\n    * @returns {number}\n    */\n    get_width() {\n        const ret = _magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.fractalgenerator_get_width(this.ptr);\n        return ret >>> 0;\n    }\n    /**\n    * @returns {number}\n    */\n    get_height() {\n        const ret = _magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.fractalgenerator_get_height(this.ptr);\n        return ret >>> 0;\n    }\n    /**\n    * @param {Universe} universe\n    * @param {number} k\n    * @param {number} friction\n    */\n    generate(universe, k, friction) {\n        _assertClass(universe, Universe);\n        _magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.fractalgenerator_generate(this.ptr, universe.ptr, k, friction);\n    }\n    /**\n    * @returns {number}\n    */\n    get_pointer() {\n        const ret = _magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.fractalgenerator_get_pointer(this.ptr);\n        return ret;\n    }\n    /**\n    * @returns {number}\n    */\n    get_length() {\n        const ret = _magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.fractalgenerator_get_length(this.ptr);\n        return ret >>> 0;\n    }\n    /**\n    * @returns {Rgb}\n    */\n    get_first_element() {\n        const ret = _magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.fractalgenerator_get_first_element(this.ptr);\n        return Rgb.__wrap(ret);\n    }\n}\n/**\n*/\nclass Magnet {\n\n    static __wrap(ptr) {\n        const obj = Object.create(Magnet.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    __destroy_into_raw() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        return ptr;\n    }\n\n    free() {\n        const ptr = this.__destroy_into_raw();\n        _magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbg_magnet_free(ptr);\n    }\n    /**\n    * @param {Vec2D} pos\n    * @param {number} strength\n    * @param {number} radius\n    */\n    constructor(pos, strength, radius) {\n        _assertClass(pos, Vec2D);\n        var ptr0 = pos.ptr;\n        pos.ptr = 0;\n        const ret = _magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.magnet_new(ptr0, strength, radius);\n        return Magnet.__wrap(ret);\n    }\n    /**\n    * @returns {number}\n    */\n    static size_of() {\n        const ret = _magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.magnet_size_of();\n        return ret >>> 0;\n    }\n}\n/**\n*/\nclass Pendulum {\n\n    static __wrap(ptr) {\n        const obj = Object.create(Pendulum.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    __destroy_into_raw() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        return ptr;\n    }\n\n    free() {\n        const ptr = this.__destroy_into_raw();\n        _magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbg_pendulum_free(ptr);\n    }\n    /**\n    * @param {Vec2D} pos\n    * @param {number} k\n    * @param {number} friction\n    * @returns {Pendulum}\n    */\n    static new(pos, k, friction) {\n        _assertClass(pos, Vec2D);\n        var ptr0 = pos.ptr;\n        pos.ptr = 0;\n        const ret = _magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.pendulum_new(ptr0, k, friction);\n        return Pendulum.__wrap(ret);\n    }\n    /**\n    * @returns {number}\n    */\n    static size_of() {\n        const ret = _magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.pendulum_size_of();\n        return ret >>> 0;\n    }\n    /**\n    * @returns {Vec2D}\n    */\n    pos() {\n        const ret = _magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.pendulum_pos(this.ptr);\n        return Vec2D.__wrap(ret);\n    }\n}\n/**\n*/\nclass Rgb {\n\n    static __wrap(ptr) {\n        const obj = Object.create(Rgb.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    __destroy_into_raw() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        return ptr;\n    }\n\n    free() {\n        const ptr = this.__destroy_into_raw();\n        _magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbg_rgb_free(ptr);\n    }\n    /**\n    * @param {number} r\n    * @param {number} g\n    * @param {number} b\n    */\n    constructor(r, g, b) {\n        const ret = _magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rgb_new(r, g, b);\n        return Rgb.__wrap(ret);\n    }\n    /**\n    * @returns {number}\n    */\n    static size_of() {\n        const ret = _magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rgb_size_of();\n        return ret >>> 0;\n    }\n    /**\n    * @returns {Rgb}\n    */\n    static random_pastel() {\n        const ret = _magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rgb_random_pastel();\n        return Rgb.__wrap(ret);\n    }\n}\n/**\n*/\nclass Universe {\n\n    static __wrap(ptr) {\n        const obj = Object.create(Universe.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    __destroy_into_raw() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        return ptr;\n    }\n\n    free() {\n        const ptr = this.__destroy_into_raw();\n        _magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbg_universe_free(ptr);\n    }\n    /**\n    * @param {number} width\n    * @param {number} height\n    * @param {number} max_iters\n    */\n    constructor(width, height, max_iters) {\n        const ret = _magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.universe_new(width, height, max_iters);\n        return Universe.__wrap(ret);\n    }\n    /**\n    * @param {Magnet} magnet\n    */\n    add_magnet(magnet) {\n        _assertClass(magnet, Magnet);\n        var ptr0 = magnet.ptr;\n        magnet.ptr = 0;\n        _magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.universe_add_magnet(this.ptr, ptr0);\n    }\n    /**\n    * @param {number} n\n    */\n    add_nums(n) {\n        _magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.universe_add_nums(this.ptr, n);\n    }\n    /**\n    * @param {number} x\n    * @param {number} y\n    * @param {number} strength\n    * @param {number} radius\n    */\n    create_magnet(x, y, strength, radius) {\n        _magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.universe_create_magnet(this.ptr, x, y, strength, radius);\n    }\n    /**\n    * @param {number} x\n    * @param {number} y\n    * @param {number} tension\n    * @param {number} friction\n    */\n    create_pendulum(x, y, tension, friction) {\n        _magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.universe_create_pendulum(this.ptr, x, y, tension, friction);\n    }\n    /**\n    * @param {number} x\n    * @param {number} y\n    * @param {number} interval\n    * @param {number} tension\n    * @param {number} friction\n    */\n    create_emitter(x, y, interval, tension, friction) {\n        _magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.universe_create_emitter(this.ptr, x, y, interval, tension, friction);\n    }\n    /**\n    * @param {number} i\n    * @returns {number}\n    */\n    get_num(i) {\n        const ptr = this.__destroy_into_raw();\n        const ret = _magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.universe_get_num(ptr, i);\n        return ret;\n    }\n    /**\n    */\n    clear_magnets() {\n        _magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.universe_clear_magnets(this.ptr);\n    }\n    /**\n    * @param {Pendulum} pendulum\n    */\n    add_pendulum(pendulum) {\n        _assertClass(pendulum, Pendulum);\n        var ptr0 = pendulum.ptr;\n        pendulum.ptr = 0;\n        _magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.universe_add_pendulum(this.ptr, ptr0);\n    }\n    /**\n    */\n    clear_pendulums() {\n        _magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.universe_clear_pendulums(this.ptr);\n    }\n    /**\n    */\n    clear_emitters() {\n        _magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.universe_clear_emitters(this.ptr);\n    }\n    /**\n    */\n    tick() {\n        _magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.universe_tick(this.ptr);\n    }\n    /**\n    * @returns {number}\n    */\n    width() {\n        const ret = _magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.universe_width(this.ptr);\n        return ret >>> 0;\n    }\n    /**\n    * @returns {number}\n    */\n    height() {\n        const ret = _magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.universe_height(this.ptr);\n        return ret >>> 0;\n    }\n    /**\n    * @returns {number}\n    */\n    pendulums() {\n        const ret = _magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.universe_pendulums(this.ptr);\n        return ret;\n    }\n    /**\n    * @returns {number}\n    */\n    magnets() {\n        const ret = _magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.universe_magnets(this.ptr);\n        return ret;\n    }\n    /**\n    * @returns {number}\n    */\n    nums() {\n        const ret = _magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.universe_nums(this.ptr);\n        return ret;\n    }\n    /**\n    * @returns {number}\n    */\n    pendulums_len() {\n        const ret = _magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.universe_pendulums_len(this.ptr);\n        return ret >>> 0;\n    }\n    /**\n    * @returns {number}\n    */\n    magnets_len() {\n        const ret = _magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.universe_magnets_len(this.ptr);\n        return ret >>> 0;\n    }\n    /**\n    * @param {number} new_steps\n    */\n    set_steps(new_steps) {\n        _magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.universe_set_steps(this.ptr, new_steps);\n    }\n    /**\n    * @param {number} new_delta\n    */\n    set_delta(new_delta) {\n        _magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.universe_set_delta(this.ptr, new_delta);\n    }\n}\n/**\n*/\nclass Vec2D {\n\n    static __wrap(ptr) {\n        const obj = Object.create(Vec2D.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    __destroy_into_raw() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        return ptr;\n    }\n\n    free() {\n        const ptr = this.__destroy_into_raw();\n        _magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbg_vec2d_free(ptr);\n    }\n    /**\n    * @returns {number}\n    */\n    get x() {\n        const ret = _magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbg_get_vec2d_x(this.ptr);\n        return ret;\n    }\n    /**\n    * @param {number} arg0\n    */\n    set x(arg0) {\n        _magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbg_set_vec2d_x(this.ptr, arg0);\n    }\n    /**\n    * @returns {number}\n    */\n    get y() {\n        const ret = _magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbg_get_vec2d_y(this.ptr);\n        return ret;\n    }\n    /**\n    * @param {number} arg0\n    */\n    set y(arg0) {\n        _magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbg_set_vec2d_y(this.ptr, arg0);\n    }\n    /**\n    * @param {number} x\n    * @param {number} y\n    */\n    constructor(x, y) {\n        const ret = _magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.vec2d_new(x, y);\n        return Vec2D.__wrap(ret);\n    }\n    /**\n    * @param {Vec2D} v\n    * @returns {number}\n    */\n    static magnitude(v) {\n        _assertClass(v, Vec2D);\n        var ptr0 = v.ptr;\n        v.ptr = 0;\n        const ret = _magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.vec2d_magnitude(ptr0);\n        return ret;\n    }\n    /**\n    * @returns {Vec2D}\n    */\n    static zero() {\n        const ret = _magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.vec2d_zero();\n        return Vec2D.__wrap(ret);\n    }\n    /**\n    * @param {Vec2D} from_coords\n    * @param {number} to_width\n    * @param {number} to_height\n    * @param {number} from_width\n    * @param {number} from_height\n    * @returns {Vec2D}\n    */\n    static convert_coords(from_coords, to_width, to_height, from_width, from_height) {\n        _assertClass(from_coords, Vec2D);\n        var ptr0 = from_coords.ptr;\n        from_coords.ptr = 0;\n        const ret = _magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.vec2d_convert_coords(ptr0, to_width, to_height, from_width, from_height);\n        return Vec2D.__wrap(ret);\n    }\n}\n\nfunction __wbg_alert_bc509be1fa53a025(arg0, arg1) {\n    alert(getStringFromWasm0(arg0, arg1));\n};\n\nfunction __wbindgen_object_drop_ref(arg0) {\n    takeObject(arg0);\n};\n\nfunction __wbg_process_e56fd54cf6319b6c(arg0) {\n    const ret = getObject(arg0).process;\n    return addHeapObject(ret);\n};\n\nfunction __wbindgen_is_object(arg0) {\n    const val = getObject(arg0);\n    const ret = typeof(val) === 'object' && val !== null;\n    return ret;\n};\n\nfunction __wbg_versions_77e21455908dad33(arg0) {\n    const ret = getObject(arg0).versions;\n    return addHeapObject(ret);\n};\n\nfunction __wbg_node_0dd25d832e4785d5(arg0) {\n    const ret = getObject(arg0).node;\n    return addHeapObject(ret);\n};\n\nfunction __wbindgen_is_string(arg0) {\n    const ret = typeof(getObject(arg0)) === 'string';\n    return ret;\n};\n\nfunction __wbg_require_0db1598d9ccecb30() { return handleError(function (arg0, arg1, arg2) {\n    const ret = getObject(arg0).require(getStringFromWasm0(arg1, arg2));\n    return addHeapObject(ret);\n}, arguments) };\n\nfunction __wbg_crypto_b95d7173266618a9(arg0) {\n    const ret = getObject(arg0).crypto;\n    return addHeapObject(ret);\n};\n\nfunction __wbg_msCrypto_5a86d77a66230f81(arg0) {\n    const ret = getObject(arg0).msCrypto;\n    return addHeapObject(ret);\n};\n\nfunction __wbg_getRandomValues_b14734aa289bc356() { return handleError(function (arg0, arg1) {\n    getObject(arg0).getRandomValues(getObject(arg1));\n}, arguments) };\n\nfunction __wbg_static_accessor_NODE_MODULE_26b231378c1be7dd() {\n    const ret = module;\n    return addHeapObject(ret);\n};\n\nfunction __wbg_randomFillSync_91e2b39becca6147() { return handleError(function (arg0, arg1, arg2) {\n    getObject(arg0).randomFillSync(getArrayU8FromWasm0(arg1, arg2));\n}, arguments) };\n\nfunction __wbg_newnoargs_971e9a5abe185139(arg0, arg1) {\n    const ret = new Function(getStringFromWasm0(arg0, arg1));\n    return addHeapObject(ret);\n};\n\nfunction __wbg_call_33d7bcddbbfa394a() { return handleError(function (arg0, arg1) {\n    const ret = getObject(arg0).call(getObject(arg1));\n    return addHeapObject(ret);\n}, arguments) };\n\nfunction __wbg_self_fd00a1ef86d1b2ed() { return handleError(function () {\n    const ret = self.self;\n    return addHeapObject(ret);\n}, arguments) };\n\nfunction __wbg_window_6f6e346d8bbd61d7() { return handleError(function () {\n    const ret = window.window;\n    return addHeapObject(ret);\n}, arguments) };\n\nfunction __wbg_globalThis_3348936ac49df00a() { return handleError(function () {\n    const ret = globalThis.globalThis;\n    return addHeapObject(ret);\n}, arguments) };\n\nfunction __wbg_global_67175caf56f55ca9() { return handleError(function () {\n    const ret = __webpack_require__.g.global;\n    return addHeapObject(ret);\n}, arguments) };\n\nfunction __wbindgen_is_undefined(arg0) {\n    const ret = getObject(arg0) === undefined;\n    return ret;\n};\n\nfunction __wbg_buffer_34f5ec9f8a838ba0(arg0) {\n    const ret = getObject(arg0).buffer;\n    return addHeapObject(ret);\n};\n\nfunction __wbg_new_cda198d9dbc6d7ea(arg0) {\n    const ret = new Uint8Array(getObject(arg0));\n    return addHeapObject(ret);\n};\n\nfunction __wbg_set_1a930cfcda1a8067(arg0, arg1, arg2) {\n    getObject(arg0).set(getObject(arg1), arg2 >>> 0);\n};\n\nfunction __wbg_length_51f19f73d6d9eff3(arg0) {\n    const ret = getObject(arg0).length;\n    return ret;\n};\n\nfunction __wbg_newwithlength_66e5530e7079ea1b(arg0) {\n    const ret = new Uint8Array(arg0 >>> 0);\n    return addHeapObject(ret);\n};\n\nfunction __wbg_subarray_270ff8dd5582c1ac(arg0, arg1, arg2) {\n    const ret = getObject(arg0).subarray(arg1 >>> 0, arg2 >>> 0);\n    return addHeapObject(ret);\n};\n\nfunction __wbindgen_object_clone_ref(arg0) {\n    const ret = getObject(arg0);\n    return addHeapObject(ret);\n};\n\nfunction __wbindgen_throw(arg0, arg1) {\n    throw new Error(getStringFromWasm0(arg0, arg1));\n};\n\nfunction __wbindgen_memory() {\n    const ret = _magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.memory;\n    return addHeapObject(ret);\n};\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack://client-ts/../magnetic-pendulum-rs/pkg/magnetic_pendulum_rs_bg.js?");

/***/ }),

/***/ "../magnetic-pendulum-rs/pkg/magnetic_pendulum_rs_bg.wasm":
/*!****************************************************************!*\
  !*** ../magnetic-pendulum-rs/pkg/magnetic_pendulum_rs_bg.wasm ***!
  \****************************************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("var __webpack_instantiate__ = ([WEBPACK_IMPORTED_MODULE_0]) => {\n\treturn __webpack_require__.v(exports, module.id, \"5a019bc4ae1f0fd92be5\", {\n\t\t\"./magnetic_pendulum_rs_bg.js\": {\n\t\t\t\"__wbg_alert_bc509be1fa53a025\": WEBPACK_IMPORTED_MODULE_0.__wbg_alert_bc509be1fa53a025,\n\t\t\t\"__wbindgen_object_drop_ref\": WEBPACK_IMPORTED_MODULE_0.__wbindgen_object_drop_ref,\n\t\t\t\"__wbg_process_e56fd54cf6319b6c\": WEBPACK_IMPORTED_MODULE_0.__wbg_process_e56fd54cf6319b6c,\n\t\t\t\"__wbindgen_is_object\": WEBPACK_IMPORTED_MODULE_0.__wbindgen_is_object,\n\t\t\t\"__wbg_versions_77e21455908dad33\": WEBPACK_IMPORTED_MODULE_0.__wbg_versions_77e21455908dad33,\n\t\t\t\"__wbg_node_0dd25d832e4785d5\": WEBPACK_IMPORTED_MODULE_0.__wbg_node_0dd25d832e4785d5,\n\t\t\t\"__wbindgen_is_string\": WEBPACK_IMPORTED_MODULE_0.__wbindgen_is_string,\n\t\t\t\"__wbg_require_0db1598d9ccecb30\": WEBPACK_IMPORTED_MODULE_0.__wbg_require_0db1598d9ccecb30,\n\t\t\t\"__wbg_crypto_b95d7173266618a9\": WEBPACK_IMPORTED_MODULE_0.__wbg_crypto_b95d7173266618a9,\n\t\t\t\"__wbg_msCrypto_5a86d77a66230f81\": WEBPACK_IMPORTED_MODULE_0.__wbg_msCrypto_5a86d77a66230f81,\n\t\t\t\"__wbg_getRandomValues_b14734aa289bc356\": WEBPACK_IMPORTED_MODULE_0.__wbg_getRandomValues_b14734aa289bc356,\n\t\t\t\"__wbg_static_accessor_NODE_MODULE_26b231378c1be7dd\": WEBPACK_IMPORTED_MODULE_0.__wbg_static_accessor_NODE_MODULE_26b231378c1be7dd,\n\t\t\t\"__wbg_randomFillSync_91e2b39becca6147\": WEBPACK_IMPORTED_MODULE_0.__wbg_randomFillSync_91e2b39becca6147,\n\t\t\t\"__wbg_newnoargs_971e9a5abe185139\": WEBPACK_IMPORTED_MODULE_0.__wbg_newnoargs_971e9a5abe185139,\n\t\t\t\"__wbg_call_33d7bcddbbfa394a\": WEBPACK_IMPORTED_MODULE_0.__wbg_call_33d7bcddbbfa394a,\n\t\t\t\"__wbg_self_fd00a1ef86d1b2ed\": WEBPACK_IMPORTED_MODULE_0.__wbg_self_fd00a1ef86d1b2ed,\n\t\t\t\"__wbg_window_6f6e346d8bbd61d7\": WEBPACK_IMPORTED_MODULE_0.__wbg_window_6f6e346d8bbd61d7,\n\t\t\t\"__wbg_globalThis_3348936ac49df00a\": WEBPACK_IMPORTED_MODULE_0.__wbg_globalThis_3348936ac49df00a,\n\t\t\t\"__wbg_global_67175caf56f55ca9\": WEBPACK_IMPORTED_MODULE_0.__wbg_global_67175caf56f55ca9,\n\t\t\t\"__wbindgen_is_undefined\": WEBPACK_IMPORTED_MODULE_0.__wbindgen_is_undefined,\n\t\t\t\"__wbg_buffer_34f5ec9f8a838ba0\": WEBPACK_IMPORTED_MODULE_0.__wbg_buffer_34f5ec9f8a838ba0,\n\t\t\t\"__wbg_new_cda198d9dbc6d7ea\": WEBPACK_IMPORTED_MODULE_0.__wbg_new_cda198d9dbc6d7ea,\n\t\t\t\"__wbg_set_1a930cfcda1a8067\": WEBPACK_IMPORTED_MODULE_0.__wbg_set_1a930cfcda1a8067,\n\t\t\t\"__wbg_length_51f19f73d6d9eff3\": WEBPACK_IMPORTED_MODULE_0.__wbg_length_51f19f73d6d9eff3,\n\t\t\t\"__wbg_newwithlength_66e5530e7079ea1b\": WEBPACK_IMPORTED_MODULE_0.__wbg_newwithlength_66e5530e7079ea1b,\n\t\t\t\"__wbg_subarray_270ff8dd5582c1ac\": WEBPACK_IMPORTED_MODULE_0.__wbg_subarray_270ff8dd5582c1ac,\n\t\t\t\"__wbindgen_object_clone_ref\": WEBPACK_IMPORTED_MODULE_0.__wbindgen_object_clone_ref,\n\t\t\t\"__wbindgen_throw\": WEBPACK_IMPORTED_MODULE_0.__wbindgen_throw,\n\t\t\t\"__wbindgen_memory\": WEBPACK_IMPORTED_MODULE_0.__wbindgen_memory\n\t\t}\n\t});\n}\n__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => {\n\ttry {\n\t/* harmony import */ var WEBPACK_IMPORTED_MODULE_0 = __webpack_require__(/*! ./magnetic_pendulum_rs_bg.js */ \"../magnetic-pendulum-rs/pkg/magnetic_pendulum_rs_bg.js\");\n\tvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([WEBPACK_IMPORTED_MODULE_0]);\n\tvar [WEBPACK_IMPORTED_MODULE_0] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__;\n\tawait __webpack_require__.v(exports, module.id, \"5a019bc4ae1f0fd92be5\", {\n\t\t\"./magnetic_pendulum_rs_bg.js\": {\n\t\t\t\"__wbg_alert_bc509be1fa53a025\": WEBPACK_IMPORTED_MODULE_0.__wbg_alert_bc509be1fa53a025,\n\t\t\t\"__wbindgen_object_drop_ref\": WEBPACK_IMPORTED_MODULE_0.__wbindgen_object_drop_ref,\n\t\t\t\"__wbg_process_e56fd54cf6319b6c\": WEBPACK_IMPORTED_MODULE_0.__wbg_process_e56fd54cf6319b6c,\n\t\t\t\"__wbindgen_is_object\": WEBPACK_IMPORTED_MODULE_0.__wbindgen_is_object,\n\t\t\t\"__wbg_versions_77e21455908dad33\": WEBPACK_IMPORTED_MODULE_0.__wbg_versions_77e21455908dad33,\n\t\t\t\"__wbg_node_0dd25d832e4785d5\": WEBPACK_IMPORTED_MODULE_0.__wbg_node_0dd25d832e4785d5,\n\t\t\t\"__wbindgen_is_string\": WEBPACK_IMPORTED_MODULE_0.__wbindgen_is_string,\n\t\t\t\"__wbg_require_0db1598d9ccecb30\": WEBPACK_IMPORTED_MODULE_0.__wbg_require_0db1598d9ccecb30,\n\t\t\t\"__wbg_crypto_b95d7173266618a9\": WEBPACK_IMPORTED_MODULE_0.__wbg_crypto_b95d7173266618a9,\n\t\t\t\"__wbg_msCrypto_5a86d77a66230f81\": WEBPACK_IMPORTED_MODULE_0.__wbg_msCrypto_5a86d77a66230f81,\n\t\t\t\"__wbg_getRandomValues_b14734aa289bc356\": WEBPACK_IMPORTED_MODULE_0.__wbg_getRandomValues_b14734aa289bc356,\n\t\t\t\"__wbg_static_accessor_NODE_MODULE_26b231378c1be7dd\": WEBPACK_IMPORTED_MODULE_0.__wbg_static_accessor_NODE_MODULE_26b231378c1be7dd,\n\t\t\t\"__wbg_randomFillSync_91e2b39becca6147\": WEBPACK_IMPORTED_MODULE_0.__wbg_randomFillSync_91e2b39becca6147,\n\t\t\t\"__wbg_newnoargs_971e9a5abe185139\": WEBPACK_IMPORTED_MODULE_0.__wbg_newnoargs_971e9a5abe185139,\n\t\t\t\"__wbg_call_33d7bcddbbfa394a\": WEBPACK_IMPORTED_MODULE_0.__wbg_call_33d7bcddbbfa394a,\n\t\t\t\"__wbg_self_fd00a1ef86d1b2ed\": WEBPACK_IMPORTED_MODULE_0.__wbg_self_fd00a1ef86d1b2ed,\n\t\t\t\"__wbg_window_6f6e346d8bbd61d7\": WEBPACK_IMPORTED_MODULE_0.__wbg_window_6f6e346d8bbd61d7,\n\t\t\t\"__wbg_globalThis_3348936ac49df00a\": WEBPACK_IMPORTED_MODULE_0.__wbg_globalThis_3348936ac49df00a,\n\t\t\t\"__wbg_global_67175caf56f55ca9\": WEBPACK_IMPORTED_MODULE_0.__wbg_global_67175caf56f55ca9,\n\t\t\t\"__wbindgen_is_undefined\": WEBPACK_IMPORTED_MODULE_0.__wbindgen_is_undefined,\n\t\t\t\"__wbg_buffer_34f5ec9f8a838ba0\": WEBPACK_IMPORTED_MODULE_0.__wbg_buffer_34f5ec9f8a838ba0,\n\t\t\t\"__wbg_new_cda198d9dbc6d7ea\": WEBPACK_IMPORTED_MODULE_0.__wbg_new_cda198d9dbc6d7ea,\n\t\t\t\"__wbg_set_1a930cfcda1a8067\": WEBPACK_IMPORTED_MODULE_0.__wbg_set_1a930cfcda1a8067,\n\t\t\t\"__wbg_length_51f19f73d6d9eff3\": WEBPACK_IMPORTED_MODULE_0.__wbg_length_51f19f73d6d9eff3,\n\t\t\t\"__wbg_newwithlength_66e5530e7079ea1b\": WEBPACK_IMPORTED_MODULE_0.__wbg_newwithlength_66e5530e7079ea1b,\n\t\t\t\"__wbg_subarray_270ff8dd5582c1ac\": WEBPACK_IMPORTED_MODULE_0.__wbg_subarray_270ff8dd5582c1ac,\n\t\t\t\"__wbindgen_object_clone_ref\": WEBPACK_IMPORTED_MODULE_0.__wbindgen_object_clone_ref,\n\t\t\t\"__wbindgen_throw\": WEBPACK_IMPORTED_MODULE_0.__wbindgen_throw,\n\t\t\t\"__wbindgen_memory\": WEBPACK_IMPORTED_MODULE_0.__wbindgen_memory\n\t\t}\n\t});\n\t__webpack_async_result__();\n\t} catch(e) { __webpack_async_result__(e); }\n}, 1);\n\n//# sourceURL=webpack://client-ts/../magnetic-pendulum-rs/pkg/magnetic_pendulum_rs_bg.wasm?");

/***/ })

});