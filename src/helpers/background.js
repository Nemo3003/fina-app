// Canvas Elements
let canvas;
let ctx;
let dots;
let dotsAnimation;

let settings = {
  minSize: 1,
  maxSize: 5,
  fps: 12,
  cellSize: 20
};

// ////////////////////////////////
// FX Class
class Dots {
  #ctx;
  #width;
  #height;

  constructor(ctx, width, height, props) {
    //Size
    this.#ctx = ctx;
    this.#width = width;
    this.#height = height;
    this.canvasFather = props.father;
    //Frames helpers
    this.lastTime = 0;
    this.interval = 1000 / (props.fps ? props.fps : 12);
    this.timer = 0;
    //Particles
    this.minSize = props.minSize ? props.minSize : 1;
    this.maxSize = props.maxSize ? props.maxSize : 3;
    this.colors = props.colors ? props.colors : ["#264653", "#2a9d8f"];
    this.cellSize = props.cellSize ? props.cellSize : 15;
  }

  #drawCircle(x, y, size) {
    this.#ctx.beginPath();
    this.#ctx.arc(x, y, size, 0, 2 * Math.PI);
    this.#ctx.fill();
  }

  animate(timeStamp) {
    const deltaTime = timeStamp - this.lastTime;
    this.lastTime = timeStamp;

    if (this.timer > this.interval) {
      this.#ctx.clearRect(0, 0, this.#width, this.#height);
      for (let y = 0; y < this.#height + this.cellSize; y += this.cellSize) {
        for (let x = 0; x < this.#width + this.cellSize; x += this.cellSize) {
          const size =
            Math.random() *
              (Math.floor(this.maxSize) - Math.ceil(this.minSize)) +
            Math.ceil(this.minSize);
          this.#ctx.fillStyle = this.colors[Math.floor(size - 1)];
          this.#drawCircle(x, y, size);
        }
      }
      this.timer = 0;
    } else {
      this.timer += deltaTime;
    }
    dotsAnimation = requestAnimationFrame(this.animate.bind(this));
  }
}

// ////////////////////////////////
// Canvas Init
window.onload = function () {
  // Get Canvas
  canvas = document.getElementById("dots");
  ctx = canvas.getContext("2d");

  // Canvas Settings
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // Create Object and run
  dots = new Dots(ctx, canvas.width, canvas.height, settings);
  dots.animate(0);
};

// ////////////////////////////////
export const updateCanvas = () => {
  cancelAnimationFrame(dotsAnimation);

  // Canvas Settings
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  // Create Fx
  dots = new Dots(ctx, canvas.width, canvas.height, settings);
  dots.animate(0);
};

// ////////////////////////////////
// Resize Update
window.addEventListener("resize", updateCanvas);

// ////////////////////////////////
// GUI Config
const gui = new dat.GUI();

const sizeFolder = gui.addFolder("Size");
sizeFolder.add(settings, "minSize", 0, 100).onChange(updateCanvas);
sizeFolder.add(settings, "maxSize", 0, 100).onChange(updateCanvas);
sizeFolder.add(settings, "cellSize", 8, 200).onChange(updateCanvas);

const fpsFolder = gui.addFolder("FPS");
fpsFolder.add(settings, "fps", 1, 60).onChange(updateCanvas);
