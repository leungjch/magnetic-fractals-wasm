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

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'magnetic-pendulum-rs'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var magnetic_pendulum_rs_magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! magnetic-pendulum-rs/magnetic_pendulum_rs_bg.wasm */ \"../magnetic-pendulum-rs/pkg/magnetic_pendulum_rs_bg.wasm\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ \"./src/utils.ts\");\n/* harmony import */ var dat_gui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dat.gui */ \"./node_modules/dat.gui/build/dat.gui.module.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([magnetic_pendulum_rs_magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_1__]);\nmagnetic_pendulum_rs_magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nvar universe = new Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'magnetic-pendulum-rs'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(64, 64, 100);\nvar fractal_generator = new Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'magnetic-pendulum-rs'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(64, 64);\nvar state = {\n    type: 'pendulum',\n    tension: 0.8,\n    friction: 1.0,\n    show_velocity: false,\n    show_tension: false,\n    steps: 25000,\n    magnet_strength: 0,\n    magnet_radius: 10,\n    emitter_interval: 50,\n    show_fractal: false,\n};\nvar reset_button = {\n    clear: function () {\n        console.log(\"cleared all\");\n        universe.clear_magnets();\n        universe.clear_pendulums();\n        ctx.rect(0, 0, width, height);\n        ctx.fillStyle = \"black\";\n        ctx.fill();\n    }\n};\nvar generate_fractal_button = {\n    generate_fractal: function () {\n        fractal_generator.generate(universe, state.tension, state.friction);\n        console.log(\"done\");\n    }\n};\nvar gui = new dat_gui__WEBPACK_IMPORTED_MODULE_3__.GUI();\ngui.add(state, 'type', { 'pendulum': 'pendulum', 'magnet': 'magnet', 'emitter': 'emitter' });\nvar pendulum_folder = gui.addFolder(\"Pendulum settings\");\npendulum_folder.add(state, 'tension', 0, 5).name(\"Tension\");\npendulum_folder.add(state, 'friction', 0, 1.0, 0.001).name(\"Friction\");\nvar magnet_folder = gui.addFolder(\"Magnet settings\");\nmagnet_folder.add(state, 'magnet_strength', -10, 10).name(\"Magnet strength\");\nmagnet_folder.add(state, \"magnet_radius\", 1, 100).name(\"Magnet radius\");\nvar emitter_folder = gui.addFolder(\"Emitter settings\");\nemitter_folder.add(state, \"emitter_interval\", 5, 150, 5);\ngui.add(state, 'steps', 0, 50000).name(\"Render speed\").onChange(function (new_steps) { universe.set_steps(new_steps); });\ngui.add(state, \"show_velocity\").name(\"Show velocity\");\ngui.add(state, \"show_tension\").name(\"Show tension\");\ngui.add(state, \"show_fractal\").name(\"Show fractal\");\ngui.add(reset_button, 'clear').name(\"Clear all\");\ngui.add(generate_fractal_button, \"generate_fractal\").name(\"Generate fractal\");\nfunction canvas_to_universe_coords(canvas_x, canvas_y) {\n    var x = canvas_x / width * universe.width();\n    var y = canvas_y / height * universe.height();\n    return [x, y];\n}\nfunction universe_to_canvas_coords(x, y) {\n    var canvas_x = x / universe.width() * width;\n    var canvas_y = y / universe.height() * height;\n    return [canvas_x, canvas_y];\n}\nfunction getCursorPosition(canvas, event) {\n    var rect = canvas.getBoundingClientRect();\n    var canvas_x = event.clientX - rect.left;\n    var canvas_y = event.clientY - rect.top;\n    var _a = canvas_to_universe_coords(canvas_x, canvas_y), x = _a[0], y = _a[1];\n    return [x, y];\n}\nvar width = universe.width() * 20;\nvar height = universe.height() * 20;\nconsole.log(width, height);\nvar canvas = document.getElementById('magnetic-pendulum-canvas');\ncanvas.width = width;\ncanvas.height = height;\nvar ctx = canvas.getContext('2d');\nctx.fillStyle = \"black\";\nctx.fillRect(0, 0, canvas.width, canvas.height);\ncanvas.addEventListener('mousedown', function (e) {\n    var _a = getCursorPosition(canvas, e), x = _a[0], y = _a[1];\n    if (state.type == \"pendulum\") {\n        universe.create_pendulum(x, y, state.tension, state.friction);\n    }\n    if (state.type == \"magnet\") {\n        universe.create_magnet(x, y, state.magnet_strength);\n    }\n    if (state.type == \"emitter\") {\n        universe.create_emitter(x, y, state.emitter_interval, state.friction, state.tension);\n    }\n});\nfunction renderLoop() {\n    universe.tick();\n    draw(universe);\n    requestAnimationFrame(renderLoop);\n}\n;\nfunction draw(universe) {\n    // ctx.globalCompositeOperation = 'destination-over';\n    ctx.clearRect(0, 0, width, height); // clear canvas\n    // Read magnets from wasm memory\n    var magnets_ptr = universe.magnets();\n    var magnet_sizeof = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'magnetic-pendulum-rs'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();\n    var magnets_n = universe.magnets_len();\n    // console.log(\"magnets_n\", magnets_n, memory, magnets_ptr)\n    var dv_magnets = new DataView(magnetic_pendulum_rs_magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_1__.memory.buffer, magnets_ptr, magnets_n * magnet_sizeof);\n    // Render magnets from wasm memory\n    for (var i = 0; i < magnets_n; i++) {\n        var magnet = getMagnet(dv_magnets, i * magnet_sizeof);\n        var _a = universe_to_canvas_coords(magnet.pos.x, magnet.pos.y), canvas_x = _a[0], canvas_y = _a[1];\n        ctx.beginPath();\n        ctx.fillStyle = \"blue\";\n        ctx.rect(canvas_x, canvas_y, 5, 5);\n        ctx.fill();\n    }\n    // Get pendulums info from wasm memory\n    var pendulums_ptr = universe.pendulums();\n    var pendulum_sizeof = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'magnetic-pendulum-rs'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();\n    var pendulums_n = universe.pendulums_len();\n    var dv_pendulums = new DataView(magnetic_pendulum_rs_magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_1__.memory.buffer, pendulums_ptr, pendulums_n * pendulum_sizeof);\n    // Render pendulums from wasm memory\n    for (var i = 0; i < pendulums_n; i++) {\n        var pendulum = getPendulum(dv_pendulums, pendulum_sizeof * i);\n        var _b = universe_to_canvas_coords(pendulum.pos.x, pendulum.pos.y), canvas_x = _b[0], canvas_y = _b[1];\n        ctx.beginPath();\n        ctx.fillStyle = \"black\";\n        ctx.rect(canvas_x, canvas_y, 5, 5);\n        ctx.fill();\n        // Show tension\n        if (state.show_tension) {\n            ctx.beginPath();\n            ctx.lineWidth = Math.sqrt(Math.pow(pendulum.f_tension.x, 2) + Math.pow(pendulum.f_tension.y, 2));\n            ctx.moveTo(canvas_x, canvas_y);\n            ctx.lineTo(width / 2, height / 2);\n            ctx.stroke();\n            ctx.lineWidth = 1;\n        }\n        if (state.show_velocity) {\n            // Show velocities\n            var _c = universe_to_canvas_coords(pendulum.vel.x, pendulum.vel.y), canvas_vel_x = _c[0], canvas_vel_y = _c[1];\n            ctx.beginPath();\n            ctx.moveTo(canvas_x, canvas_y);\n            ctx.lineTo(canvas_x - canvas_vel_x / 10, canvas_y - canvas_vel_y / 10);\n            ctx.stroke();\n        }\n    }\n    if (state.show_fractal) {\n        var img_ptr = fractal_generator.get_pointer();\n        var rgb_sizeof = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'magnetic-pendulum-rs'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();\n        var img_len = fractal_generator.get_length();\n        var dv_img = new DataView(magnetic_pendulum_rs_magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_1__.memory.buffer, img_ptr, img_len * rgb_sizeof);\n        // Get image data\n        for (var i = 0; i < fractal_generator.get_length(); i++) {\n            var rgb = getRgb(dv_img, rgb_sizeof * i);\n            console.log(rgb);\n        }\n    }\n}\n;\nrequestAnimationFrame(renderLoop);\nfunction getMagnet(dv, ptr) {\n    var offset = ptr;\n    var strength = dv.getFloat64(offset, true);\n    offset += 8;\n    var pos_x = dv.getFloat64(offset, true);\n    offset += 8;\n    var pos_y = dv.getFloat64(offset, true);\n    offset += 8;\n    var color_r = dv.getUint8(offset);\n    offset += 1;\n    var color_g = dv.getUint8(offset);\n    offset += 1;\n    var color_b = dv.getUint8(offset);\n    offset += 1;\n    return new _utils__WEBPACK_IMPORTED_MODULE_2__.Magnet(strength, new _utils__WEBPACK_IMPORTED_MODULE_2__.Vec2D(pos_x, pos_y), new _utils__WEBPACK_IMPORTED_MODULE_2__.Rgb(color_r, color_g, color_b));\n}\nfunction getPendulum(dv, ptr) {\n    var offset = ptr;\n    var pos_start_x = dv.getFloat64(offset, true);\n    offset += 8;\n    var pos_start_y = dv.getFloat64(offset, true);\n    offset += 8;\n    var pos_x = dv.getFloat64(offset, true);\n    offset += 8;\n    var pos_y = dv.getFloat64(offset, true);\n    offset += 8;\n    var vel_x = dv.getFloat64(offset, true);\n    offset += 8;\n    var vel_y = dv.getFloat64(offset, true);\n    offset += 8;\n    var acc_x = dv.getFloat64(offset, true);\n    offset += 8;\n    var acc_y = dv.getFloat64(offset, true);\n    offset += 8;\n    var ten_x = dv.getFloat64(offset, true);\n    offset += 8;\n    var ten_y = dv.getFloat64(offset, true);\n    offset += 8;\n    var k = dv.getFloat64(offset, true);\n    offset += 8;\n    var friction = dv.getFloat64(offset, true);\n    offset += 8;\n    var mag_x = dv.getFloat64(offset, true);\n    offset += 8;\n    var mag_y = dv.getFloat64(offset, true);\n    offset += 8;\n    var fnet_x = dv.getFloat64(offset, true);\n    offset += 8;\n    var fnet_y = dv.getFloat64(offset, true);\n    offset += 8;\n    var isStationary = dv.getUint8(offset) == 1 ? true : false;\n    offset += 1;\n    return new _utils__WEBPACK_IMPORTED_MODULE_2__.Pendulum(new _utils__WEBPACK_IMPORTED_MODULE_2__.Vec2D(pos_start_x, pos_start_y), new _utils__WEBPACK_IMPORTED_MODULE_2__.Vec2D(pos_x, pos_y), new _utils__WEBPACK_IMPORTED_MODULE_2__.Vec2D(vel_x, vel_y), new _utils__WEBPACK_IMPORTED_MODULE_2__.Vec2D(acc_x, acc_y), new _utils__WEBPACK_IMPORTED_MODULE_2__.Vec2D(ten_x, ten_y), k, friction, new _utils__WEBPACK_IMPORTED_MODULE_2__.Vec2D(mag_x, mag_y), new _utils__WEBPACK_IMPORTED_MODULE_2__.Vec2D(fnet_x, fnet_y), isStationary);\n}\nfunction getRgb(dv, ptr) {\n    var offset = ptr;\n    var color_r = dv.getUint8(offset);\n    offset += 1;\n    var color_g = dv.getUint8(offset);\n    offset += 1;\n    var color_b = dv.getUint8(offset);\n    offset += 1;\n    return new _utils__WEBPACK_IMPORTED_MODULE_2__.Rgb(color_r, color_g, color_b);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack://client-ts/./src/index.ts?");

/***/ }),

/***/ "../magnetic-pendulum-rs/pkg/magnetic_pendulum_rs_bg.js":
/*!**************************************************************!*\
  !*** ../magnetic-pendulum-rs/pkg/magnetic_pendulum_rs_bg.js ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Emitter\": () => (/* binding */ Emitter),\n/* harmony export */   \"FractalGenerator\": () => (/* binding */ FractalGenerator),\n/* harmony export */   \"Magnet\": () => (/* binding */ Magnet),\n/* harmony export */   \"Pendulum\": () => (/* binding */ Pendulum),\n/* harmony export */   \"Rgb\": () => (/* binding */ Rgb),\n/* harmony export */   \"Universe\": () => (/* binding */ Universe),\n/* harmony export */   \"Vec2D\": () => (/* binding */ Vec2D),\n/* harmony export */   \"__wbg_alert_bc509be1fa53a025\": () => (/* binding */ __wbg_alert_bc509be1fa53a025),\n/* harmony export */   \"__wbindgen_throw\": () => (/* binding */ __wbindgen_throw),\n/* harmony export */   \"greet\": () => (/* binding */ greet)\n/* harmony export */ });\n/* harmony import */ var _magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./magnetic_pendulum_rs_bg.wasm */ \"../magnetic-pendulum-rs/pkg/magnetic_pendulum_rs_bg.wasm\");\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__]);\n_magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;\n\nlet cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\ncachedTextDecoder.decode();\n\nlet cachedUint8Memory0 = new Uint8Array();\n\nfunction getUint8Memory0() {\n    if (cachedUint8Memory0.byteLength === 0) {\n        cachedUint8Memory0 = new Uint8Array(_magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.memory.buffer);\n    }\n    return cachedUint8Memory0;\n}\n\nfunction getStringFromWasm0(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));\n}\n/**\n*/\nfunction greet() {\n    _magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.greet();\n}\n\nfunction _assertClass(instance, klass) {\n    if (!(instance instanceof klass)) {\n        throw new Error(`expected instance of ${klass.name}`);\n    }\n    return instance.ptr;\n}\n/**\n*/\nclass Emitter {\n\n    static __wrap(ptr) {\n        const obj = Object.create(Emitter.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    __destroy_into_raw() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        return ptr;\n    }\n\n    free() {\n        const ptr = this.__destroy_into_raw();\n        _magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbg_emitter_free(ptr);\n    }\n    /**\n    * @returns {number}\n    */\n    get clock() {\n        const ret = _magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbg_get_emitter_clock(this.ptr);\n        return ret >>> 0;\n    }\n    /**\n    * @param {number} arg0\n    */\n    set clock(arg0) {\n        _magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbg_set_emitter_clock(this.ptr, arg0);\n    }\n    /**\n    * @returns {number}\n    */\n    get tension() {\n        const ret = _magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbg_get_emitter_tension(this.ptr);\n        return ret;\n    }\n    /**\n    * @param {number} arg0\n    */\n    set tension(arg0) {\n        _magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbg_set_emitter_tension(this.ptr, arg0);\n    }\n    /**\n    * @returns {number}\n    */\n    get friction() {\n        const ret = _magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbg_get_emitter_friction(this.ptr);\n        return ret;\n    }\n    /**\n    * @param {number} arg0\n    */\n    set friction(arg0) {\n        _magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbg_set_emitter_friction(this.ptr, arg0);\n    }\n    /**\n    * @param {number} x\n    * @param {number} y\n    * @param {number} interval\n    * @param {number} tension\n    * @param {number} friction\n    * @returns {Emitter}\n    */\n    static new(x, y, interval, tension, friction) {\n        const ret = _magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.emitter_new(x, y, interval, tension, friction);\n        return Emitter.__wrap(ret);\n    }\n    /**\n    */\n    tick() {\n        _magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.emitter_tick(this.ptr);\n    }\n}\n/**\n*/\nclass FractalGenerator {\n\n    static __wrap(ptr) {\n        const obj = Object.create(FractalGenerator.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    __destroy_into_raw() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        return ptr;\n    }\n\n    free() {\n        const ptr = this.__destroy_into_raw();\n        _magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbg_fractalgenerator_free(ptr);\n    }\n    /**\n    * @param {number} image_width\n    * @param {number} image_height\n    * @param {Universe} universe_ptr\n    */\n    constructor(image_width, image_height, universe_ptr) {\n        _assertClass(universe_ptr, Universe);\n        const ret = _magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.fractalgenerator_new(image_width, image_height, universe_ptr.ptr);\n        return FractalGenerator.__wrap(ret);\n    }\n    /**\n    * @param {Universe} universe\n    * @param {number} k\n    * @param {number} friction\n    */\n    generate(universe, k, friction) {\n        _assertClass(universe, Universe);\n        _magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.fractalgenerator_generate(this.ptr, universe.ptr, k, friction);\n    }\n    /**\n    * @returns {number}\n    */\n    get_pointer() {\n        const ret = _magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.fractalgenerator_get_pointer(this.ptr);\n        return ret;\n    }\n    /**\n    * @returns {number}\n    */\n    get_length() {\n        const ret = _magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.fractalgenerator_get_length(this.ptr);\n        return ret >>> 0;\n    }\n    /**\n    * @returns {Rgb}\n    */\n    get_first_element() {\n        const ret = _magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.fractalgenerator_get_first_element(this.ptr);\n        return Rgb.__wrap(ret);\n    }\n}\n/**\n*/\nclass Magnet {\n\n    static __wrap(ptr) {\n        const obj = Object.create(Magnet.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    __destroy_into_raw() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        return ptr;\n    }\n\n    free() {\n        const ptr = this.__destroy_into_raw();\n        _magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbg_magnet_free(ptr);\n    }\n    /**\n    * @param {Vec2D} pos\n    * @param {number} strength\n    */\n    constructor(pos, strength) {\n        _assertClass(pos, Vec2D);\n        var ptr0 = pos.ptr;\n        pos.ptr = 0;\n        const ret = _magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.magnet_new(ptr0, strength);\n        return Magnet.__wrap(ret);\n    }\n    /**\n    * @returns {number}\n    */\n    static size_of() {\n        const ret = _magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.magnet_size_of();\n        return ret >>> 0;\n    }\n}\n/**\n*/\nclass Pendulum {\n\n    static __wrap(ptr) {\n        const obj = Object.create(Pendulum.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    __destroy_into_raw() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        return ptr;\n    }\n\n    free() {\n        const ptr = this.__destroy_into_raw();\n        _magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbg_pendulum_free(ptr);\n    }\n    /**\n    * @param {Vec2D} pos\n    * @param {number} k\n    * @param {number} friction\n    * @returns {Pendulum}\n    */\n    static new(pos, k, friction) {\n        _assertClass(pos, Vec2D);\n        var ptr0 = pos.ptr;\n        pos.ptr = 0;\n        const ret = _magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.pendulum_new(ptr0, k, friction);\n        return Pendulum.__wrap(ret);\n    }\n    /**\n    * @returns {number}\n    */\n    static size_of() {\n        const ret = _magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.pendulum_size_of();\n        return ret >>> 0;\n    }\n    /**\n    * @returns {Vec2D}\n    */\n    pos() {\n        const ret = _magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.pendulum_pos(this.ptr);\n        return Vec2D.__wrap(ret);\n    }\n}\n/**\n*/\nclass Rgb {\n\n    static __wrap(ptr) {\n        const obj = Object.create(Rgb.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    __destroy_into_raw() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        return ptr;\n    }\n\n    free() {\n        const ptr = this.__destroy_into_raw();\n        _magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbg_rgb_free(ptr);\n    }\n    /**\n    * @param {number} r\n    * @param {number} g\n    * @param {number} b\n    */\n    constructor(r, g, b) {\n        const ret = _magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rgb_new(r, g, b);\n        return Rgb.__wrap(ret);\n    }\n    /**\n    * @returns {number}\n    */\n    static size_of() {\n        const ret = _magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rgb_size_of();\n        return ret >>> 0;\n    }\n}\n/**\n*/\nclass Universe {\n\n    static __wrap(ptr) {\n        const obj = Object.create(Universe.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    __destroy_into_raw() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        return ptr;\n    }\n\n    free() {\n        const ptr = this.__destroy_into_raw();\n        _magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbg_universe_free(ptr);\n    }\n    /**\n    * @param {number} width\n    * @param {number} height\n    * @param {number} max_iters\n    */\n    constructor(width, height, max_iters) {\n        const ret = _magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.universe_new(width, height, max_iters);\n        return Universe.__wrap(ret);\n    }\n    /**\n    * @param {Magnet} magnet\n    */\n    add_magnet(magnet) {\n        _assertClass(magnet, Magnet);\n        var ptr0 = magnet.ptr;\n        magnet.ptr = 0;\n        _magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.universe_add_magnet(this.ptr, ptr0);\n    }\n    /**\n    * @param {number} n\n    */\n    add_nums(n) {\n        _magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.universe_add_nums(this.ptr, n);\n    }\n    /**\n    * @param {number} x\n    * @param {number} y\n    * @param {number} strength\n    */\n    create_magnet(x, y, strength) {\n        _magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.universe_create_magnet(this.ptr, x, y, strength);\n    }\n    /**\n    * @param {number} x\n    * @param {number} y\n    * @param {number} tension\n    * @param {number} friction\n    */\n    create_pendulum(x, y, tension, friction) {\n        _magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.universe_create_pendulum(this.ptr, x, y, tension, friction);\n    }\n    /**\n    * @param {number} x\n    * @param {number} y\n    * @param {number} interval\n    * @param {number} tension\n    * @param {number} friction\n    */\n    create_emitter(x, y, interval, tension, friction) {\n        _magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.universe_create_emitter(this.ptr, x, y, interval, tension, friction);\n    }\n    /**\n    * @param {number} i\n    * @returns {number}\n    */\n    get_num(i) {\n        const ptr = this.__destroy_into_raw();\n        const ret = _magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.universe_get_num(ptr, i);\n        return ret;\n    }\n    /**\n    */\n    clear_magnets() {\n        _magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.universe_clear_magnets(this.ptr);\n    }\n    /**\n    * @param {Pendulum} pendulum\n    */\n    add_pendulum(pendulum) {\n        _assertClass(pendulum, Pendulum);\n        var ptr0 = pendulum.ptr;\n        pendulum.ptr = 0;\n        _magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.universe_add_pendulum(this.ptr, ptr0);\n    }\n    /**\n    */\n    clear_pendulums() {\n        _magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.universe_clear_pendulums(this.ptr);\n    }\n    /**\n    */\n    clear_emitters() {\n        _magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.universe_clear_emitters(this.ptr);\n    }\n    /**\n    */\n    tick() {\n        _magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.universe_tick(this.ptr);\n    }\n    /**\n    * @returns {number}\n    */\n    width() {\n        const ret = _magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.universe_width(this.ptr);\n        return ret >>> 0;\n    }\n    /**\n    * @returns {number}\n    */\n    height() {\n        const ret = _magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.universe_height(this.ptr);\n        return ret >>> 0;\n    }\n    /**\n    * @returns {number}\n    */\n    pendulums() {\n        const ret = _magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.universe_pendulums(this.ptr);\n        return ret;\n    }\n    /**\n    * @returns {number}\n    */\n    magnets() {\n        const ret = _magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.universe_magnets(this.ptr);\n        return ret;\n    }\n    /**\n    * @returns {number}\n    */\n    nums() {\n        const ret = _magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.universe_nums(this.ptr);\n        return ret;\n    }\n    /**\n    * @returns {number}\n    */\n    pendulums_len() {\n        const ret = _magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.universe_pendulums_len(this.ptr);\n        return ret >>> 0;\n    }\n    /**\n    * @returns {number}\n    */\n    magnets_len() {\n        const ret = _magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.universe_magnets_len(this.ptr);\n        return ret >>> 0;\n    }\n    /**\n    * @param {number} new_steps\n    */\n    set_steps(new_steps) {\n        _magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.universe_set_steps(this.ptr, new_steps);\n    }\n    /**\n    * @param {number} new_delta\n    */\n    set_delta(new_delta) {\n        _magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.universe_set_delta(this.ptr, new_delta);\n    }\n    /**\n    * @returns {number}\n    */\n    get_ptr() {\n        const ret = _magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.universe_get_ptr(this.ptr);\n        return ret;\n    }\n}\n/**\n*/\nclass Vec2D {\n\n    static __wrap(ptr) {\n        const obj = Object.create(Vec2D.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    __destroy_into_raw() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        return ptr;\n    }\n\n    free() {\n        const ptr = this.__destroy_into_raw();\n        _magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbg_vec2d_free(ptr);\n    }\n    /**\n    * @returns {number}\n    */\n    get x() {\n        const ret = _magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbg_get_vec2d_x(this.ptr);\n        return ret;\n    }\n    /**\n    * @param {number} arg0\n    */\n    set x(arg0) {\n        _magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbg_set_vec2d_x(this.ptr, arg0);\n    }\n    /**\n    * @returns {number}\n    */\n    get y() {\n        const ret = _magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbg_get_vec2d_y(this.ptr);\n        return ret;\n    }\n    /**\n    * @param {number} arg0\n    */\n    set y(arg0) {\n        _magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbg_set_vec2d_y(this.ptr, arg0);\n    }\n    /**\n    * @param {number} x\n    * @param {number} y\n    */\n    constructor(x, y) {\n        const ret = _magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.vec2d_new(x, y);\n        return Vec2D.__wrap(ret);\n    }\n    /**\n    * @param {Vec2D} v\n    * @returns {number}\n    */\n    static magnitude(v) {\n        _assertClass(v, Vec2D);\n        var ptr0 = v.ptr;\n        v.ptr = 0;\n        const ret = _magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.vec2d_magnitude(ptr0);\n        return ret;\n    }\n    /**\n    * @returns {Vec2D}\n    */\n    static zero() {\n        const ret = _magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.vec2d_zero();\n        return Vec2D.__wrap(ret);\n    }\n    /**\n    * @param {Vec2D} from_coords\n    * @param {number} to_width\n    * @param {number} to_height\n    * @param {number} from_width\n    * @param {number} from_height\n    * @returns {Vec2D}\n    */\n    static convert_coords(from_coords, to_width, to_height, from_width, from_height) {\n        _assertClass(from_coords, Vec2D);\n        var ptr0 = from_coords.ptr;\n        from_coords.ptr = 0;\n        const ret = _magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.vec2d_convert_coords(ptr0, to_width, to_height, from_width, from_height);\n        return Vec2D.__wrap(ret);\n    }\n}\n\nfunction __wbg_alert_bc509be1fa53a025(arg0, arg1) {\n    alert(getStringFromWasm0(arg0, arg1));\n};\n\nfunction __wbindgen_throw(arg0, arg1) {\n    throw new Error(getStringFromWasm0(arg0, arg1));\n};\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack://client-ts/../magnetic-pendulum-rs/pkg/magnetic_pendulum_rs_bg.js?");

/***/ }),

/***/ "../magnetic-pendulum-rs/pkg/magnetic_pendulum_rs_bg.wasm":
/*!****************************************************************!*\
  !*** ../magnetic-pendulum-rs/pkg/magnetic_pendulum_rs_bg.wasm ***!
  \****************************************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("var __webpack_instantiate__ = ([WEBPACK_IMPORTED_MODULE_0]) => {\n\treturn __webpack_require__.v(exports, module.id, \"dd2f190c9b8316160abd\", {\n\t\t\"./magnetic_pendulum_rs_bg.js\": {\n\t\t\t\"__wbg_alert_bc509be1fa53a025\": WEBPACK_IMPORTED_MODULE_0.__wbg_alert_bc509be1fa53a025,\n\t\t\t\"__wbindgen_throw\": WEBPACK_IMPORTED_MODULE_0.__wbindgen_throw\n\t\t}\n\t});\n}\n__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => {\n\ttry {\n\t/* harmony import */ var WEBPACK_IMPORTED_MODULE_0 = __webpack_require__(/*! ./magnetic_pendulum_rs_bg.js */ \"../magnetic-pendulum-rs/pkg/magnetic_pendulum_rs_bg.js\");\n\tvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([WEBPACK_IMPORTED_MODULE_0]);\n\tvar [WEBPACK_IMPORTED_MODULE_0] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__;\n\tawait __webpack_require__.v(exports, module.id, \"dd2f190c9b8316160abd\", {\n\t\t\"./magnetic_pendulum_rs_bg.js\": {\n\t\t\t\"__wbg_alert_bc509be1fa53a025\": WEBPACK_IMPORTED_MODULE_0.__wbg_alert_bc509be1fa53a025,\n\t\t\t\"__wbindgen_throw\": WEBPACK_IMPORTED_MODULE_0.__wbindgen_throw\n\t\t}\n\t});\n\t__webpack_async_result__();\n\t} catch(e) { __webpack_async_result__(e); }\n}, 1);\n\n//# sourceURL=webpack://client-ts/../magnetic-pendulum-rs/pkg/magnetic_pendulum_rs_bg.wasm?");

/***/ })

});