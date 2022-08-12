
import * as wasm from "magnetic-pendulum-rs"
import { memory } from "magnetic-pendulum-rs/magnetic_pendulum_rs_bg.wasm";
import { exit } from "process";
import { deflateRaw } from "zlib";
import { Magnet, Vec2D, Rgb, Pendulum } from "./utils";
import { GUI } from "dat.gui"

const universe = new wasm.Universe(64,64,100);

// wasm.greet();
var state = {
    type: 'pendulum',
    tension: 0.8,
    friction: 1.0,
    show_trace: false,
    steps: 25000,
};

var reset_button = { clear:function(){ 
  console.log("cleared all"); 
  universe.clear_magnets(); 
  universe.clear_pendulums(); 
  ctx.rect(0,0,width, height)
  ctx.fillStyle="black"
  ctx.fill()
}};

var gui = new GUI();
gui.add(state, 'type', {'pendulum': 'pendulum', 'magnet': 'magnet', 'anti-magnet':'antimagnet'});
gui.add(state, 'tension', 0, 5).name("Tension");
gui.add(state, 'friction', 0, 1.0, 0.001).name("Friction");

gui.add(state, 'steps', 0,50000).name("Render speed").onChange((new_steps : number) => {universe.set_steps(new_steps);});
gui.add(state, 'show_trace').name("Show trace");
gui.add(reset_button,'clear').name("Clear all");

function canvas_to_universe_coords(canvas_x: number, canvas_y: number): [number, number] {
    const x = canvas_x / width * universe.width()
    const y = canvas_y / height * universe.height()
    return [x,y]
}

function universe_to_canvas_coords(x: number, y: number) : [number, number] {
  const canvas_x = x / universe.width() * width;
  const canvas_y = y / universe.height() * height;
  return [canvas_x, canvas_y]
}

function getCursorPosition(canvas: HTMLCanvasElement, event: MouseEvent) : [number, number] {
    const rect = canvas.getBoundingClientRect()
    const canvas_x = event.clientX - rect.left
    const canvas_y = event.clientY - rect.top
    const [x,y] : [number, number] = canvas_to_universe_coords(canvas_x, canvas_y)
    return [x,y]
}

const width = universe.width()*20
const height = universe.height()*20
console.log(width,height)
const canvas = <HTMLCanvasElement> document.getElementById('magnetic-pendulum-canvas')
canvas.width = width;
canvas.height = height;

const ctx = canvas.getContext('2d');
ctx.fillStyle = "black";
ctx.fillRect(0, 0, canvas.width, canvas.height);

canvas.addEventListener('mousedown', function(e) {
    const [x, y] : [number, number] = getCursorPosition(canvas, e)
    universe.create_pendulum(x, y, state.tension, state.friction);
})


function renderLoop() {
  universe.tick();

  draw(universe);

  requestAnimationFrame(renderLoop);
};

function draw(universe: wasm.Universe ) {
  
  // Read magnets from wasm memory
  const magnets_ptr = universe.magnets()
  const magnet_sizeof = wasm.Magnet.size_of()
  const magnets_n = universe.magnets_len();
  // console.log("magnets_n", magnets_n, memory, magnets_ptr)
  let dv_magnets = new DataView(memory.buffer, magnets_ptr, magnets_n*magnet_sizeof);

  // Render magnets from wasm memory
  for (let i = 0; i < magnets_n; i++) {
    let magnet : Magnet = getMagnet(dv_magnets, i*magnet_sizeof);
    const [canvas_x, canvas_y] = universe_to_canvas_coords(magnet.pos.x, magnet.pos.y);

    ctx.beginPath();
    ctx.fillStyle = "yellow";
    ctx.rect(canvas_x, canvas_y, 5, 5)
    ctx.fill();

  }

  // Read pendulums from wasm memory
  const pendulums_ptr = universe.pendulums()
  const pendulum_sizeof = wasm.Pendulum.size_of()
  const pendulums_n = universe.pendulums_len();
  let dv_pendulums = new DataView(memory.buffer, pendulums_ptr, pendulums_n*pendulum_sizeof);


  // Render pendulums from wasm memory
  for (let i = 0; i < pendulums_n; i++) {
    const pendulum: Pendulum = getPendulum(dv_pendulums, pendulum_sizeof*i);
    const [canvas_x, canvas_y] = universe_to_canvas_coords(pendulum.pos.x, pendulum.pos.y);
    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.rect(canvas_x, canvas_y, 5, 5)
    ctx.fill();
  }

};

requestAnimationFrame(renderLoop);

function getMagnet(dv : DataView, ptr: number) {
  let offset = ptr;
  let strength = dv.getFloat64(offset, true); offset += 8;
  let pos_x = dv.getFloat64(offset, true);  offset += 8;
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