
import * as wasm from "magnetic-pendulum-rs"
import { memory } from "magnetic-pendulum-rs/magnetic_pendulum_rs_bg.wasm";
import { exit } from "process";
import { deflateRaw } from "zlib";
import { Magnet, Vec2D, Rgb, Pendulum } from "./utils";
import { GUI } from "dat.gui"
import { createJsxText } from "typescript";
let UNIVERSE_WIDTH = 128;
const universe = new wasm.Universe(64, 64, 100);
const fractal_generator = new wasm.FractalGenerator(UNIVERSE_WIDTH, UNIVERSE_WIDTH);

var state = {
  type: 'pendulum',
  tension: 0.8,
  friction: 1.0,
  show_velocity: false,
  show_tension: false,
  steps: 25000,
  magnet_strength: 50,
  magnet_radius: 10,
  emitter_interval: 50,
  show_fractal: false,
};

var reset_button = {
  clear: function () {
    console.log("cleared all");
    universe.clear_magnets();
    universe.clear_pendulums();
    ctx.rect(0, 0, width, height)
    ctx.fillStyle = "black"
    ctx.fill()
  }
};

var generate_fractal_button = {
  generate_fractal: function () {
    fractal_generator.generate(universe, state.tension, state.friction)
    console.log("done")
  }
}

var gui = new GUI();
gui.add(state, 'type', { 'pendulum': 'pendulum', 'magnet': 'magnet', 'emitter': 'emitter' });
var pendulum_folder = gui.addFolder("Pendulum settings");
pendulum_folder.add(state, 'tension', 0, 5).name("Tension");
pendulum_folder.add(state, 'friction', 0, 1.0, 0.001).name("Friction");
var magnet_folder = gui.addFolder("Magnet settings");
magnet_folder.add(state, 'magnet_strength', -100, 100).name("Magnet strength")
magnet_folder.add(state, "magnet_radius", 1, 100).name("Magnet radius")
var emitter_folder = gui.addFolder("Emitter settings");
emitter_folder.add(state, "emitter_interval", 5, 150, 5)

gui.add(state, 'steps', 0, 50000).name("Render speed").onChange((new_steps: number) => { universe.set_steps(new_steps); });
gui.add(state, "show_velocity").name("Show velocity")
gui.add(state, "show_tension").name("Show tension")
gui.add(state, "show_fractal").name("Show fractal")
gui.add(reset_button, 'clear').name("Clear all");
gui.add(generate_fractal_button, "generate_fractal").name("Generate fractal");

function canvas_to_universe_coords(canvas_x: number, canvas_y: number): [number, number] {
  const x = canvas_x / width * universe.width()
  const y = canvas_y / height * universe.height()
  return [x, y]
}

function universe_to_canvas_coords(x: number, y: number): [number, number] {
  const canvas_x = x / universe.width() * width;
  const canvas_y = y / universe.height() * height;
  return [canvas_x, canvas_y]
}

function getCursorPosition(canvas: HTMLCanvasElement, event: MouseEvent): [number, number] {
  const rect = canvas.getBoundingClientRect()
  const canvas_x = event.clientX - rect.left
  const canvas_y = event.clientY - rect.top
  const [x, y]: [number, number] = canvas_to_universe_coords(canvas_x, canvas_y)
  return [x, y]
}

const width = universe.width() * 20
const height = universe.height() * 20
console.log(width, height)
const canvas = <HTMLCanvasElement>document.getElementById('magnetic-pendulum-canvas')
canvas.width = width;
canvas.height = height;

const ctx = canvas.getContext('2d');
ctx.fillStyle = "black";
ctx.fillRect(0, 0, canvas.width, canvas.height);

canvas.addEventListener('mousedown', function (e) {
  const [x, y]: [number, number] = getCursorPosition(canvas, e)
  if (state.type == "pendulum") {
    universe.create_pendulum(x, y, state.tension, state.friction);
  }
  if (state.type == "magnet") {
    universe.create_magnet(x, y, state.magnet_strength);
  }

  if (state.type == "emitter") {
    universe.create_emitter(x, y, state.emitter_interval, state.friction, state.tension);
  }
})



function renderLoop() {
  universe.tick();

  draw(universe);

  requestAnimationFrame(renderLoop);
};

function draw(universe: wasm.Universe) {

  // ctx.globalCompositeOperation = 'destination-over';
  ctx.clearRect(0, 0, width, height); // clear canvas


  // Read magnets from wasm memory
  const magnets_ptr = universe.magnets()
  const magnet_sizeof = wasm.Magnet.size_of()
  const magnets_n = universe.magnets_len();
  // console.log("magnets_n", magnets_n, memory, magnets_ptr)
  let dv_magnets = new DataView(memory.buffer, magnets_ptr, magnets_n * magnet_sizeof);

  // Render magnets from wasm memory
  for (let i = 0; i < magnets_n; i++) {
    let magnet: Magnet = getMagnet(dv_magnets, i * magnet_sizeof);
    const [canvas_x, canvas_y] = universe_to_canvas_coords(magnet.pos.x, magnet.pos.y);

    ctx.beginPath();
    ctx.fillStyle = "blue";
    ctx.rect(canvas_x, canvas_y, 5, 5)
    ctx.fill();
  }

  // Get pendulums info from wasm memory
  const pendulums_ptr = universe.pendulums()
  const pendulum_sizeof = wasm.Pendulum.size_of()
  const pendulums_n = universe.pendulums_len();
  let dv_pendulums = new DataView(memory.buffer, pendulums_ptr, pendulums_n * pendulum_sizeof);


  // Render pendulums from wasm memory
  for (let i = 0; i < pendulums_n; i++) {
    const pendulum: Pendulum = getPendulum(dv_pendulums, pendulum_sizeof * i);
    const [canvas_x, canvas_y] = universe_to_canvas_coords(pendulum.pos.x, pendulum.pos.y);
    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.rect(canvas_x, canvas_y, 5, 5)
    ctx.fill();

    // Show tension
    if (state.show_tension) {
      ctx.beginPath();
      ctx.lineWidth = Math.sqrt(Math.pow(pendulum.f_tension.x, 2) + Math.pow(pendulum.f_tension.y, 2));
      ctx.moveTo(canvas_x, canvas_y);
      ctx.lineTo(width / 2, height / 2);
      ctx.stroke();
      ctx.lineWidth = 1;
    }
    if (state.show_velocity) {
      // Show velocities
      const [canvas_vel_x, canvas_vel_y] = universe_to_canvas_coords(pendulum.vel.x, pendulum.vel.y)
      ctx.beginPath();
      ctx.moveTo(canvas_x, canvas_y);
      ctx.lineTo(canvas_x - canvas_vel_x / 10, canvas_y - canvas_vel_y / 10);
      ctx.stroke();
    }
  }

  if (state.show_fractal) {

    const img_ptr = fractal_generator.get_pointer()
    const rgb_sizeof = wasm.Rgb.size_of()
    const img_len = fractal_generator.get_length();
    let dv_img = new DataView(memory.buffer, img_ptr, img_len * rgb_sizeof);
    // Get image data
    let fractal_width = fractal_generator.get_width();
    let fractal_height = fractal_generator.get_height();
    let pixel_width = width / fractal_width;
    for (let i = 0; i < fractal_height; i++) {
      for (let j = 0; j < fractal_width; j++) {
        let rgb = getRgb(dv_img, rgb_sizeof * (i*fractal_width+j));
        ctx.fillStyle=rgb.to_string();
        ctx.fillRect(j*pixel_width,i*pixel_width,pixel_width,pixel_width)

      // console.log(rgb)
      }
    }
  }

};

requestAnimationFrame(renderLoop);

function getMagnet(dv: DataView, ptr: number) {
  let offset = ptr;
  let strength = dv.getFloat64(offset, true); offset += 8;
  let pos_x = dv.getFloat64(offset, true); offset += 8;
  let pos_y = dv.getFloat64(offset, true); offset += 8;
  let color_r = dv.getUint8(offset); offset += 1;
  let color_g = dv.getUint8(offset); offset += 1;
  let color_b = dv.getUint8(offset); offset += 1;
  return new Magnet(
    strength,
    new Vec2D(pos_x, pos_y),
    new Rgb(color_r, color_g, color_b)
  )
}

function getPendulum(dv: DataView, ptr: number) {
  let offset = ptr;
  let pos_start_x = dv.getFloat64(offset, true); offset += 8;
  let pos_start_y = dv.getFloat64(offset, true); offset += 8;
  let pos_x = dv.getFloat64(offset, true); offset += 8;
  let pos_y = dv.getFloat64(offset, true); offset += 8;
  let vel_x = dv.getFloat64(offset, true); offset += 8;
  let vel_y = dv.getFloat64(offset, true); offset += 8;
  let acc_x = dv.getFloat64(offset, true); offset += 8;
  let acc_y = dv.getFloat64(offset, true); offset += 8;
  let ten_x = dv.getFloat64(offset, true); offset += 8;
  let ten_y = dv.getFloat64(offset, true); offset += 8;
  let k = dv.getFloat64(offset, true); offset += 8;
  let friction = dv.getFloat64(offset, true); offset += 8;
  let mag_x = dv.getFloat64(offset, true); offset += 8;
  let mag_y = dv.getFloat64(offset, true); offset += 8;
  let fnet_x = dv.getFloat64(offset, true); offset += 8;
  let fnet_y = dv.getFloat64(offset, true); offset += 8;
  let isStationary = dv.getUint8(offset) == 1 ? true : false; offset += 1;
  return new Pendulum(
    new Vec2D(pos_start_x, pos_start_y),
    new Vec2D(pos_x, pos_y),
    new Vec2D(vel_x, vel_y),
    new Vec2D(acc_x, acc_y),
    new Vec2D(ten_x, ten_y),
    k,
    friction,
    new Vec2D(mag_x, mag_y),
    new Vec2D(fnet_x, fnet_y),
    isStationary
  );
}

function getRgb(dv: DataView, ptr: number) {
  let offset = ptr;
  let color_r = dv.getUint8(offset); offset += 1;
  let color_g = dv.getUint8(offset); offset += 1;
  let color_b = dv.getUint8(offset); offset += 1;
  return new Rgb(color_r, color_g, color_b);
}