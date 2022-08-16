"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateclient_ts"]("magnetic-pendulum-rs_pkg_magnetic_pendulum_wasm_js",{

/***/ "../magnetic-pendulum-rs/pkg/magnetic_pendulum_wasm.js":
/*!*************************************************************!*\
  !*** ../magnetic-pendulum-rs/pkg/magnetic_pendulum_wasm.js ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Emitter\": () => (/* binding */ Emitter),\n/* harmony export */   \"FractalGenerator\": () => (/* binding */ FractalGenerator),\n/* harmony export */   \"Magnet\": () => (/* binding */ Magnet),\n/* harmony export */   \"Pendulum\": () => (/* binding */ Pendulum),\n/* harmony export */   \"Rgb\": () => (/* binding */ Rgb),\n/* harmony export */   \"Universe\": () => (/* binding */ Universe),\n/* harmony export */   \"Vec2D\": () => (/* binding */ Vec2D),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"generate_fractal\": () => (/* binding */ generate_fractal),\n/* harmony export */   \"generate_random\": () => (/* binding */ generate_random),\n/* harmony export */   \"greet\": () => (/* binding */ greet),\n/* harmony export */   \"initSync\": () => (/* binding */ initSync),\n/* harmony export */   \"initThreadPool\": () => (/* binding */ initThreadPool),\n/* harmony export */   \"sum_of_squares\": () => (/* binding */ sum_of_squares),\n/* harmony export */   \"wbg_rayon_PoolBuilder\": () => (/* binding */ wbg_rayon_PoolBuilder),\n/* harmony export */   \"wbg_rayon_start_worker\": () => (/* binding */ wbg_rayon_start_worker)\n/* harmony export */ });\n/* harmony import */ var _snippets_wasm_bindgen_rayon_7afa899f36665473_src_workerHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./snippets/wasm-bindgen-rayon-7afa899f36665473/src/workerHelpers.js */ \"../magnetic-pendulum-rs/pkg/snippets/wasm-bindgen-rayon-7afa899f36665473/src/workerHelpers.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nlet wasm;\n\nconst cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\ncachedTextDecoder.decode();\n\nlet cachedUint8Memory0 = new Uint8Array();\n\nfunction getUint8Memory0() {\n    if (cachedUint8Memory0.buffer !== wasm.memory.buffer) {\n        cachedUint8Memory0 = new Uint8Array(wasm.memory.buffer);\n    }\n    return cachedUint8Memory0;\n}\n\nfunction getStringFromWasm0(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory0().slice(ptr, ptr + len));\n}\n\nconst heap = new Array(32).fill(undefined);\n\nheap.push(undefined, null, true, false);\n\nlet heap_next = heap.length;\n\nfunction addHeapObject(obj) {\n    if (heap_next === heap.length) heap.push(heap.length + 1);\n    const idx = heap_next;\n    heap_next = heap[idx];\n\n    heap[idx] = obj;\n    return idx;\n}\n\nfunction getObject(idx) { return heap[idx]; }\n\nfunction dropObject(idx) {\n    if (idx < 36) return;\n    heap[idx] = heap_next;\n    heap_next = idx;\n}\n\nfunction takeObject(idx) {\n    const ret = getObject(idx);\n    dropObject(idx);\n    return ret;\n}\n/**\n*/\nfunction greet() {\n    wasm.greet();\n}\n\nlet cachedUint32Memory0 = new Uint32Array();\n\nfunction getUint32Memory0() {\n    if (cachedUint32Memory0.buffer !== wasm.memory.buffer) {\n        cachedUint32Memory0 = new Uint32Array(wasm.memory.buffer);\n    }\n    return cachedUint32Memory0;\n}\n\nlet WASM_VECTOR_LEN = 0;\n\nfunction passArray32ToWasm0(arg, malloc) {\n    const ptr = malloc(arg.length * 4);\n    getUint32Memory0().set(arg, ptr / 4);\n    WASM_VECTOR_LEN = arg.length;\n    return ptr;\n}\n/**\n* @param {Int32Array} numbers\n* @returns {number}\n*/\nfunction sum_of_squares(numbers) {\n    const ptr0 = passArray32ToWasm0(numbers, wasm.__wbindgen_malloc);\n    const len0 = WASM_VECTOR_LEN;\n    const ret = wasm.sum_of_squares(ptr0, len0);\n    return ret;\n}\n\nfunction _assertClass(instance, klass) {\n    if (!(instance instanceof klass)) {\n        throw new Error(`expected instance of ${klass.name}`);\n    }\n    return instance.ptr;\n}\n\nlet cachedInt32Memory0 = new Int32Array();\n\nfunction getInt32Memory0() {\n    if (cachedInt32Memory0.buffer !== wasm.memory.buffer) {\n        cachedInt32Memory0 = new Int32Array(wasm.memory.buffer);\n    }\n    return cachedInt32Memory0;\n}\n\nlet cachedUint8ClampedMemory0 = new Uint8ClampedArray();\n\nfunction getUint8ClampedMemory0() {\n    if (cachedUint8ClampedMemory0.buffer !== wasm.memory.buffer) {\n        cachedUint8ClampedMemory0 = new Uint8ClampedArray(wasm.memory.buffer);\n    }\n    return cachedUint8ClampedMemory0;\n}\n\nfunction getClampedArrayU8FromWasm0(ptr, len) {\n    return getUint8ClampedMemory0().subarray(ptr / 1, ptr / 1 + len);\n}\n/**\n* @param {number} image_width\n* @param {number} image_height\n* @param {Universe} universe\n* @param {number} k\n* @param {number} friction\n* @param {number} mass\n* @returns {Uint8ClampedArray}\n*/\nfunction generate_fractal(image_width, image_height, universe, k, friction, mass) {\n    try {\n        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);\n        _assertClass(universe, Universe);\n        wasm.generate_fractal(retptr, image_width, image_height, universe.ptr, k, friction, mass);\n        var r0 = getInt32Memory0()[retptr / 4 + 0];\n        var r1 = getInt32Memory0()[retptr / 4 + 1];\n        var v0 = getClampedArrayU8FromWasm0(r0, r1).slice();\n        wasm.__wbindgen_free(r0, r1 * 1);\n        return v0;\n    } finally {\n        wasm.__wbindgen_add_to_stack_pointer(16);\n    }\n}\n\n/**\n* @returns {Uint8ClampedArray}\n*/\nfunction generate_random() {\n    try {\n        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);\n        wasm.generate_random(retptr);\n        var r0 = getInt32Memory0()[retptr / 4 + 0];\n        var r1 = getInt32Memory0()[retptr / 4 + 1];\n        var v0 = getClampedArrayU8FromWasm0(r0, r1).slice();\n        wasm.__wbindgen_free(r0, r1 * 1);\n        return v0;\n    } finally {\n        wasm.__wbindgen_add_to_stack_pointer(16);\n    }\n}\n\nfunction getArrayU8FromWasm0(ptr, len) {\n    return getUint8Memory0().subarray(ptr / 1, ptr / 1 + len);\n}\n\nfunction handleError(f, args) {\n    try {\n        return f.apply(this, args);\n    } catch (e) {\n        wasm.__wbindgen_exn_store(addHeapObject(e));\n    }\n}\n\nconst cachedTextEncoder = new TextEncoder('utf-8');\n\nconst encodeString = function (arg, view) {\n    const buf = cachedTextEncoder.encode(arg);\n    view.set(buf);\n    return {\n        read: arg.length,\n        written: buf.length\n    };\n};\n\nfunction passStringToWasm0(arg, malloc, realloc) {\n\n    if (realloc === undefined) {\n        const buf = cachedTextEncoder.encode(arg);\n        const ptr = malloc(buf.length);\n        getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);\n        WASM_VECTOR_LEN = buf.length;\n        return ptr;\n    }\n\n    let len = arg.length;\n    let ptr = malloc(len);\n\n    const mem = getUint8Memory0();\n\n    let offset = 0;\n\n    for (; offset < len; offset++) {\n        const code = arg.charCodeAt(offset);\n        if (code > 0x7F) break;\n        mem[ptr + offset] = code;\n    }\n\n    if (offset !== len) {\n        if (offset !== 0) {\n            arg = arg.slice(offset);\n        }\n        ptr = realloc(ptr, len, len = offset + arg.length * 3);\n        const view = getUint8Memory0().subarray(ptr + offset, ptr + len);\n        const ret = encodeString(arg, view);\n\n        offset += ret.written;\n    }\n\n    WASM_VECTOR_LEN = offset;\n    return ptr;\n}\n/**\n* @param {number} num_threads\n* @returns {Promise<any>}\n*/\nfunction initThreadPool(num_threads) {\n    const ret = wasm.initThreadPool(num_threads);\n    return takeObject(ret);\n}\n\n/**\n* @param {number} receiver\n*/\nfunction wbg_rayon_start_worker(receiver) {\n    wasm.wbg_rayon_start_worker(receiver);\n}\n\n/**\n*/\nclass Emitter {\n\n    static __wrap(ptr) {\n        const obj = Object.create(Emitter.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    __destroy_into_raw() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        return ptr;\n    }\n\n    free() {\n        const ptr = this.__destroy_into_raw();\n        wasm.__wbg_emitter_free(ptr);\n    }\n    /**\n    * @returns {number}\n    */\n    get clock() {\n        const ret = wasm.__wbg_get_emitter_clock(this.ptr);\n        return ret >>> 0;\n    }\n    /**\n    * @param {number} arg0\n    */\n    set clock(arg0) {\n        wasm.__wbg_set_emitter_clock(this.ptr, arg0);\n    }\n    /**\n    * @returns {number}\n    */\n    get tension() {\n        const ret = wasm.__wbg_get_emitter_tension(this.ptr);\n        return ret;\n    }\n    /**\n    * @param {number} arg0\n    */\n    set tension(arg0) {\n        wasm.__wbg_set_emitter_tension(this.ptr, arg0);\n    }\n    /**\n    * @returns {number}\n    */\n    get friction() {\n        const ret = wasm.__wbg_get_emitter_friction(this.ptr);\n        return ret;\n    }\n    /**\n    * @param {number} arg0\n    */\n    set friction(arg0) {\n        wasm.__wbg_set_emitter_friction(this.ptr, arg0);\n    }\n    /**\n    * @returns {number}\n    */\n    get mass() {\n        const ret = wasm.__wbg_get_emitter_mass(this.ptr);\n        return ret;\n    }\n    /**\n    * @param {number} arg0\n    */\n    set mass(arg0) {\n        wasm.__wbg_set_emitter_mass(this.ptr, arg0);\n    }\n    /**\n    * @param {number} x\n    * @param {number} y\n    * @param {number} interval\n    * @param {number} tension\n    * @param {number} friction\n    * @param {number} mass\n    * @returns {Emitter}\n    */\n    static new(x, y, interval, tension, friction, mass) {\n        const ret = wasm.emitter_new(x, y, interval, tension, friction, mass);\n        return Emitter.__wrap(ret);\n    }\n    /**\n    */\n    tick() {\n        wasm.emitter_tick(this.ptr);\n    }\n}\n/**\n*/\nclass FractalGenerator {\n\n    static __wrap(ptr) {\n        const obj = Object.create(FractalGenerator.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    __destroy_into_raw() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        return ptr;\n    }\n\n    free() {\n        const ptr = this.__destroy_into_raw();\n        wasm.__wbg_fractalgenerator_free(ptr);\n    }\n    /**\n    * @param {number} image_width\n    * @param {number} image_height\n    */\n    constructor(image_width, image_height) {\n        const ret = wasm.fractalgenerator_new(image_width, image_height);\n        return FractalGenerator.__wrap(ret);\n    }\n    /**\n    * @returns {number}\n    */\n    get_width() {\n        const ret = wasm.fractalgenerator_get_width(this.ptr);\n        return ret >>> 0;\n    }\n    /**\n    * @returns {number}\n    */\n    get_height() {\n        const ret = wasm.fractalgenerator_get_height(this.ptr);\n        return ret >>> 0;\n    }\n    /**\n    * @param {Universe} universe\n    * @param {number} k\n    * @param {number} friction\n    * @param {number} mass\n    * @returns {Uint8Array}\n    */\n    generate(universe, k, friction, mass) {\n        try {\n            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);\n            _assertClass(universe, Universe);\n            wasm.fractalgenerator_generate(retptr, this.ptr, universe.ptr, k, friction, mass);\n            var r0 = getInt32Memory0()[retptr / 4 + 0];\n            var r1 = getInt32Memory0()[retptr / 4 + 1];\n            var v0 = getArrayU8FromWasm0(r0, r1).slice();\n            wasm.__wbindgen_free(r0, r1 * 1);\n            return v0;\n        } finally {\n            wasm.__wbindgen_add_to_stack_pointer(16);\n        }\n    }\n}\n/**\n*/\nclass Magnet {\n\n    static __wrap(ptr) {\n        const obj = Object.create(Magnet.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    __destroy_into_raw() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        return ptr;\n    }\n\n    free() {\n        const ptr = this.__destroy_into_raw();\n        wasm.__wbg_magnet_free(ptr);\n    }\n    /**\n    * @param {Vec2D} pos\n    * @param {number} strength\n    * @param {number} radius\n    */\n    constructor(pos, strength, radius) {\n        _assertClass(pos, Vec2D);\n        var ptr0 = pos.ptr;\n        pos.ptr = 0;\n        const ret = wasm.magnet_new(ptr0, strength, radius);\n        return Magnet.__wrap(ret);\n    }\n    /**\n    * @returns {number}\n    */\n    static size_of() {\n        const ret = wasm.magnet_size_of();\n        return ret >>> 0;\n    }\n}\n/**\n*/\nclass Pendulum {\n\n    static __wrap(ptr) {\n        const obj = Object.create(Pendulum.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    __destroy_into_raw() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        return ptr;\n    }\n\n    free() {\n        const ptr = this.__destroy_into_raw();\n        wasm.__wbg_pendulum_free(ptr);\n    }\n    /**\n    * @param {Vec2D} pos\n    * @param {number} k\n    * @param {number} friction\n    * @param {number} mass\n    * @returns {Pendulum}\n    */\n    static new(pos, k, friction, mass) {\n        _assertClass(pos, Vec2D);\n        var ptr0 = pos.ptr;\n        pos.ptr = 0;\n        const ret = wasm.pendulum_new(ptr0, k, friction, mass);\n        return Pendulum.__wrap(ret);\n    }\n    /**\n    * @returns {number}\n    */\n    static size_of() {\n        const ret = wasm.pendulum_size_of();\n        return ret >>> 0;\n    }\n    /**\n    * @returns {Vec2D}\n    */\n    pos() {\n        const ret = wasm.pendulum_pos(this.ptr);\n        return Vec2D.__wrap(ret);\n    }\n}\n/**\n*/\nclass Rgb {\n\n    static __wrap(ptr) {\n        const obj = Object.create(Rgb.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    __destroy_into_raw() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        return ptr;\n    }\n\n    free() {\n        const ptr = this.__destroy_into_raw();\n        wasm.__wbg_rgb_free(ptr);\n    }\n    /**\n    * @param {number} r\n    * @param {number} g\n    * @param {number} b\n    */\n    constructor(r, g, b) {\n        const ret = wasm.rgb_new(r, g, b);\n        return Rgb.__wrap(ret);\n    }\n    /**\n    * @returns {number}\n    */\n    static size_of() {\n        const ret = wasm.rgb_size_of();\n        return ret >>> 0;\n    }\n    /**\n    * @param {Rgb} mix\n    * @returns {Rgb}\n    */\n    static mix_pastel(mix) {\n        _assertClass(mix, Rgb);\n        var ptr0 = mix.ptr;\n        mix.ptr = 0;\n        const ret = wasm.rgb_mix_pastel(ptr0);\n        return Rgb.__wrap(ret);\n    }\n    /**\n    * @param {Rgb} mix\n    * @returns {Rgb}\n    */\n    static mix_blacken(mix) {\n        _assertClass(mix, Rgb);\n        var ptr0 = mix.ptr;\n        mix.ptr = 0;\n        const ret = wasm.rgb_mix_blacken(ptr0);\n        return Rgb.__wrap(ret);\n    }\n    /**\n    * @returns {Rgb}\n    */\n    static random_pastel() {\n        const ret = wasm.rgb_random_pastel();\n        return Rgb.__wrap(ret);\n    }\n}\n/**\n*/\nclass Universe {\n\n    static __wrap(ptr) {\n        const obj = Object.create(Universe.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    __destroy_into_raw() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        return ptr;\n    }\n\n    free() {\n        const ptr = this.__destroy_into_raw();\n        wasm.__wbg_universe_free(ptr);\n    }\n    /**\n    * @param {number} width\n    * @param {number} height\n    * @param {number} max_iters\n    */\n    constructor(width, height, max_iters) {\n        const ret = wasm.universe_new(width, height, max_iters);\n        return Universe.__wrap(ret);\n    }\n    /**\n    * @param {Magnet} magnet\n    */\n    add_magnet(magnet) {\n        _assertClass(magnet, Magnet);\n        var ptr0 = magnet.ptr;\n        magnet.ptr = 0;\n        wasm.universe_add_magnet(this.ptr, ptr0);\n    }\n    /**\n    * @param {number} n\n    */\n    add_nums(n) {\n        wasm.universe_add_nums(this.ptr, n);\n    }\n    /**\n    * @param {number} x\n    * @param {number} y\n    * @param {number} strength\n    * @param {number} radius\n    */\n    create_magnet(x, y, strength, radius) {\n        wasm.universe_create_magnet(this.ptr, x, y, strength, radius);\n    }\n    /**\n    * @param {number} x\n    * @param {number} y\n    * @param {number} tension\n    * @param {number} friction\n    * @param {number} mass\n    */\n    create_pendulum(x, y, tension, friction, mass) {\n        wasm.universe_create_pendulum(this.ptr, x, y, tension, friction, mass);\n    }\n    /**\n    * @param {number} x\n    * @param {number} y\n    * @param {number} interval\n    * @param {number} tension\n    * @param {number} friction\n    * @param {number} mass\n    */\n    create_emitter(x, y, interval, tension, friction, mass) {\n        wasm.universe_create_emitter(this.ptr, x, y, interval, tension, friction, mass);\n    }\n    /**\n    * @param {number} i\n    * @returns {number}\n    */\n    get_num(i) {\n        const ptr = this.__destroy_into_raw();\n        const ret = wasm.universe_get_num(ptr, i);\n        return ret;\n    }\n    /**\n    */\n    clear_magnets() {\n        wasm.universe_clear_magnets(this.ptr);\n    }\n    /**\n    * @param {Pendulum} pendulum\n    */\n    add_pendulum(pendulum) {\n        _assertClass(pendulum, Pendulum);\n        var ptr0 = pendulum.ptr;\n        pendulum.ptr = 0;\n        wasm.universe_add_pendulum(this.ptr, ptr0);\n    }\n    /**\n    */\n    clear_pendulums() {\n        wasm.universe_clear_pendulums(this.ptr);\n    }\n    /**\n    */\n    clear_emitters() {\n        wasm.universe_clear_emitters(this.ptr);\n    }\n    /**\n    */\n    tick() {\n        wasm.universe_tick(this.ptr);\n    }\n    /**\n    * @returns {number}\n    */\n    width() {\n        const ret = wasm.universe_width(this.ptr);\n        return ret >>> 0;\n    }\n    /**\n    * @returns {number}\n    */\n    height() {\n        const ret = wasm.universe_height(this.ptr);\n        return ret >>> 0;\n    }\n    /**\n    * @returns {number}\n    */\n    pendulums() {\n        const ret = wasm.universe_pendulums(this.ptr);\n        return ret;\n    }\n    /**\n    * @returns {number}\n    */\n    magnets() {\n        const ret = wasm.universe_magnets(this.ptr);\n        return ret;\n    }\n    /**\n    * @returns {number}\n    */\n    nums() {\n        const ret = wasm.universe_nums(this.ptr);\n        return ret;\n    }\n    /**\n    * @returns {number}\n    */\n    pendulums_len() {\n        const ret = wasm.universe_pendulums_len(this.ptr);\n        return ret >>> 0;\n    }\n    /**\n    * @returns {number}\n    */\n    magnets_len() {\n        const ret = wasm.universe_magnets_len(this.ptr);\n        return ret >>> 0;\n    }\n    /**\n    * @param {number} new_steps\n    */\n    set_steps(new_steps) {\n        wasm.universe_set_steps(this.ptr, new_steps);\n    }\n    /**\n    * @param {number} new_delta\n    */\n    set_delta(new_delta) {\n        wasm.universe_set_delta(this.ptr, new_delta);\n    }\n}\n/**\n*/\nclass Vec2D {\n\n    static __wrap(ptr) {\n        const obj = Object.create(Vec2D.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    __destroy_into_raw() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        return ptr;\n    }\n\n    free() {\n        const ptr = this.__destroy_into_raw();\n        wasm.__wbg_vec2d_free(ptr);\n    }\n    /**\n    * @returns {number}\n    */\n    get x() {\n        const ret = wasm.__wbg_get_vec2d_x(this.ptr);\n        return ret;\n    }\n    /**\n    * @param {number} arg0\n    */\n    set x(arg0) {\n        wasm.__wbg_set_vec2d_x(this.ptr, arg0);\n    }\n    /**\n    * @returns {number}\n    */\n    get y() {\n        const ret = wasm.__wbg_get_vec2d_y(this.ptr);\n        return ret;\n    }\n    /**\n    * @param {number} arg0\n    */\n    set y(arg0) {\n        wasm.__wbg_set_vec2d_y(this.ptr, arg0);\n    }\n    /**\n    * @param {number} x\n    * @param {number} y\n    */\n    constructor(x, y) {\n        const ret = wasm.vec2d_new(x, y);\n        return Vec2D.__wrap(ret);\n    }\n    /**\n    * @param {Vec2D} v\n    * @returns {number}\n    */\n    static magnitude(v) {\n        _assertClass(v, Vec2D);\n        var ptr0 = v.ptr;\n        v.ptr = 0;\n        const ret = wasm.vec2d_magnitude(ptr0);\n        return ret;\n    }\n    /**\n    * @returns {Vec2D}\n    */\n    static zero() {\n        const ret = wasm.vec2d_zero();\n        return Vec2D.__wrap(ret);\n    }\n    /**\n    * @param {Vec2D} from_coords\n    * @param {number} to_width\n    * @param {number} to_height\n    * @param {number} from_width\n    * @param {number} from_height\n    * @returns {Vec2D}\n    */\n    static convert_coords(from_coords, to_width, to_height, from_width, from_height) {\n        _assertClass(from_coords, Vec2D);\n        var ptr0 = from_coords.ptr;\n        from_coords.ptr = 0;\n        const ret = wasm.vec2d_convert_coords(ptr0, to_width, to_height, from_width, from_height);\n        return Vec2D.__wrap(ret);\n    }\n}\n/**\n*/\nclass wbg_rayon_PoolBuilder {\n\n    static __wrap(ptr) {\n        const obj = Object.create(wbg_rayon_PoolBuilder.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    __destroy_into_raw() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        return ptr;\n    }\n\n    free() {\n        const ptr = this.__destroy_into_raw();\n        wasm.__wbg_wbg_rayon_poolbuilder_free(ptr);\n    }\n    /**\n    * @returns {number}\n    */\n    numThreads() {\n        const ret = wasm.wbg_rayon_poolbuilder_numThreads(this.ptr);\n        return ret >>> 0;\n    }\n    /**\n    * @returns {number}\n    */\n    receiver() {\n        const ret = wasm.wbg_rayon_poolbuilder_receiver(this.ptr);\n        return ret;\n    }\n    /**\n    */\n    build() {\n        wasm.wbg_rayon_poolbuilder_build(this.ptr);\n    }\n}\n\nasync function load(module, imports) {\n    if (typeof Response === 'function' && module instanceof Response) {\n        if (typeof WebAssembly.instantiateStreaming === 'function') {\n            try {\n                return await WebAssembly.instantiateStreaming(module, imports);\n\n            } catch (e) {\n                if (module.headers.get('Content-Type') != 'application/wasm') {\n                    console.warn(\"`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\\n\", e);\n\n                } else {\n                    throw e;\n                }\n            }\n        }\n\n        const bytes = await module.arrayBuffer();\n        return await WebAssembly.instantiate(bytes, imports);\n\n    } else {\n        const instance = await WebAssembly.instantiate(module, imports);\n\n        if (instance instanceof WebAssembly.Instance) {\n            return { instance, module };\n\n        } else {\n            return instance;\n        }\n    }\n}\n\nfunction getImports() {\n    const imports = {};\n    imports.wbg = {};\n    imports.wbg.__wbindgen_string_new = function(arg0, arg1) {\n        const ret = getStringFromWasm0(arg0, arg1);\n        return addHeapObject(ret);\n    };\n    imports.wbg.__wbindgen_object_drop_ref = function(arg0) {\n        takeObject(arg0);\n    };\n    imports.wbg.__wbg_alert_beb704c8b694d433 = function(arg0, arg1) {\n        alert(getStringFromWasm0(arg0, arg1));\n    };\n    imports.wbg.__wbg_log_17733ab6fa45831d = function(arg0) {\n        console.log(getObject(arg0));\n    };\n    imports.wbg.__wbg_process_e56fd54cf6319b6c = function(arg0) {\n        const ret = getObject(arg0).process;\n        return addHeapObject(ret);\n    };\n    imports.wbg.__wbindgen_is_object = function(arg0) {\n        const val = getObject(arg0);\n        const ret = typeof(val) === 'object' && val !== null;\n        return ret;\n    };\n    imports.wbg.__wbg_versions_77e21455908dad33 = function(arg0) {\n        const ret = getObject(arg0).versions;\n        return addHeapObject(ret);\n    };\n    imports.wbg.__wbg_node_0dd25d832e4785d5 = function(arg0) {\n        const ret = getObject(arg0).node;\n        return addHeapObject(ret);\n    };\n    imports.wbg.__wbindgen_is_string = function(arg0) {\n        const ret = typeof(getObject(arg0)) === 'string';\n        return ret;\n    };\n    imports.wbg.__wbg_require_0db1598d9ccecb30 = function() { return handleError(function (arg0, arg1, arg2) {\n        const ret = getObject(arg0).require(getStringFromWasm0(arg1, arg2));\n        return addHeapObject(ret);\n    }, arguments) };\n    imports.wbg.__wbg_crypto_b95d7173266618a9 = function(arg0) {\n        const ret = getObject(arg0).crypto;\n        return addHeapObject(ret);\n    };\n    imports.wbg.__wbg_msCrypto_5a86d77a66230f81 = function(arg0) {\n        const ret = getObject(arg0).msCrypto;\n        return addHeapObject(ret);\n    };\n    imports.wbg.__wbg_getRandomValues_b14734aa289bc356 = function() { return handleError(function (arg0, arg1) {\n        getObject(arg0).getRandomValues(getObject(arg1));\n    }, arguments) };\n    imports.wbg.__wbg_static_accessor_NODE_MODULE_26b231378c1be7dd = function() {\n        const ret = module;\n        return addHeapObject(ret);\n    };\n    imports.wbg.__wbg_randomFillSync_91e2b39becca6147 = function() { return handleError(function (arg0, arg1, arg2) {\n        getObject(arg0).randomFillSync(getArrayU8FromWasm0(arg1, arg2));\n    }, arguments) };\n    imports.wbg.__wbg_newnoargs_971e9a5abe185139 = function(arg0, arg1) {\n        const ret = new Function(getStringFromWasm0(arg0, arg1));\n        return addHeapObject(ret);\n    };\n    imports.wbg.__wbg_call_33d7bcddbbfa394a = function() { return handleError(function (arg0, arg1) {\n        const ret = getObject(arg0).call(getObject(arg1));\n        return addHeapObject(ret);\n    }, arguments) };\n    imports.wbg.__wbg_self_fd00a1ef86d1b2ed = function() { return handleError(function () {\n        const ret = self.self;\n        return addHeapObject(ret);\n    }, arguments) };\n    imports.wbg.__wbg_window_6f6e346d8bbd61d7 = function() { return handleError(function () {\n        const ret = window.window;\n        return addHeapObject(ret);\n    }, arguments) };\n    imports.wbg.__wbg_globalThis_3348936ac49df00a = function() { return handleError(function () {\n        const ret = globalThis.globalThis;\n        return addHeapObject(ret);\n    }, arguments) };\n    imports.wbg.__wbg_global_67175caf56f55ca9 = function() { return handleError(function () {\n        const ret = __webpack_require__.g.global;\n        return addHeapObject(ret);\n    }, arguments) };\n    imports.wbg.__wbindgen_is_undefined = function(arg0) {\n        const ret = getObject(arg0) === undefined;\n        return ret;\n    };\n    imports.wbg.__wbg_buffer_34f5ec9f8a838ba0 = function(arg0) {\n        const ret = getObject(arg0).buffer;\n        return addHeapObject(ret);\n    };\n    imports.wbg.__wbg_new_cda198d9dbc6d7ea = function(arg0) {\n        const ret = new Uint8Array(getObject(arg0));\n        return addHeapObject(ret);\n    };\n    imports.wbg.__wbg_set_1a930cfcda1a8067 = function(arg0, arg1, arg2) {\n        getObject(arg0).set(getObject(arg1), arg2 >>> 0);\n    };\n    imports.wbg.__wbg_length_51f19f73d6d9eff3 = function(arg0) {\n        const ret = getObject(arg0).length;\n        return ret;\n    };\n    imports.wbg.__wbg_newwithlength_66e5530e7079ea1b = function(arg0) {\n        const ret = new Uint8Array(arg0 >>> 0);\n        return addHeapObject(ret);\n    };\n    imports.wbg.__wbg_subarray_270ff8dd5582c1ac = function(arg0, arg1, arg2) {\n        const ret = getObject(arg0).subarray(arg1 >>> 0, arg2 >>> 0);\n        return addHeapObject(ret);\n    };\n    imports.wbg.__wbindgen_object_clone_ref = function(arg0) {\n        const ret = getObject(arg0);\n        return addHeapObject(ret);\n    };\n    imports.wbg.__wbg_new_693216e109162396 = function() {\n        const ret = new Error();\n        return addHeapObject(ret);\n    };\n    imports.wbg.__wbg_stack_0ddaca5d1abfb52f = function(arg0, arg1) {\n        const ret = getObject(arg1).stack;\n        const ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);\n        const len0 = WASM_VECTOR_LEN;\n        getInt32Memory0()[arg0 / 4 + 1] = len0;\n        getInt32Memory0()[arg0 / 4 + 0] = ptr0;\n    };\n    imports.wbg.__wbg_error_09919627ac0992f5 = function(arg0, arg1) {\n        try {\n            console.error(getStringFromWasm0(arg0, arg1));\n        } finally {\n            wasm.__wbindgen_free(arg0, arg1);\n        }\n    };\n    imports.wbg.__wbindgen_throw = function(arg0, arg1) {\n        throw new Error(getStringFromWasm0(arg0, arg1));\n    };\n    imports.wbg.__wbindgen_module = function() {\n        const ret = init.__wbindgen_wasm_module;\n        return addHeapObject(ret);\n    };\n    imports.wbg.__wbindgen_memory = function() {\n        const ret = wasm.memory;\n        return addHeapObject(ret);\n    };\n    imports.wbg.__wbg_startWorkers_04f63eca19916b8f = function(arg0, arg1, arg2) {\n        const ret = (0,_snippets_wasm_bindgen_rayon_7afa899f36665473_src_workerHelpers_js__WEBPACK_IMPORTED_MODULE_0__.startWorkers)(takeObject(arg0), takeObject(arg1), wbg_rayon_PoolBuilder.__wrap(arg2));\n        return addHeapObject(ret);\n    };\n\n    return imports;\n}\n\nfunction initMemory(imports, maybe_memory) {\n    imports.wbg.memory = maybe_memory || new WebAssembly.Memory({initial:18,maximum:16384,shared:true});\n}\n\nfunction finalizeInit(instance, module) {\n    wasm = instance.exports;\n    init.__wbindgen_wasm_module = module;\n    cachedInt32Memory0 = new Int32Array();\n    cachedUint32Memory0 = new Uint32Array();\n    cachedUint8Memory0 = new Uint8Array();\n    cachedUint8ClampedMemory0 = new Uint8ClampedArray();\n\n    wasm.__wbindgen_start();\n    return wasm;\n}\n\nfunction initSync(bytes, maybe_memory) {\n    const imports = getImports();\n\n    initMemory(imports, maybe_memory);\n\n    const module = new WebAssembly.Module(bytes);\n    const instance = new WebAssembly.Instance(module, imports);\n\n    return finalizeInit(instance, module);\n}\n\nasync function init(input, maybe_memory) {\n    if (typeof input === 'undefined') {\n        input = new URL(/* asset import */ __webpack_require__(/*! magnetic_pendulum_wasm_bg.wasm */ \"../magnetic-pendulum-rs/pkg/magnetic_pendulum_wasm_bg.wasm\"), __webpack_require__.b);\n    }\n    const imports = getImports();\n\n    if (typeof input === 'string' || (typeof Request === 'function' && input instanceof Request) || (typeof URL === 'function' && input instanceof URL)) {\n        input = fetch(input);\n    }\n\n    initMemory(imports, maybe_memory);\n\n    const { instance, module } = await load(await input, imports);\n\n    return finalizeInit(instance, module);\n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (init);\n\n\n//# sourceURL=webpack://client-ts/../magnetic-pendulum-rs/pkg/magnetic_pendulum_wasm.js?");

/***/ }),

/***/ "../magnetic-pendulum-rs/pkg/magnetic_pendulum_wasm_bg.wasm":
/*!******************************************************************!*\
  !*** ../magnetic-pendulum-rs/pkg/magnetic_pendulum_wasm_bg.wasm ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"fb2792cee0bda5955b54.wasm\";\n\n//# sourceURL=webpack://client-ts/../magnetic-pendulum-rs/pkg/magnetic_pendulum_wasm_bg.wasm?");

/***/ })

});