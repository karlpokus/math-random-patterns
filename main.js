function rand() {
  return Math.floor(Math.random() *2);
}

function color() {
  return rand()? 'black': 'white';
}

function paint(ctx, x, y, step) {
  ctx.fillStyle = color();
  ctx.fillRect(x, y, step, step);
}

function main(size, step) {
  size = size || 100;
  step = step || 1;
  
  var canvas = document.getElementById("canvas");
  canvas.width = size;
  canvas.height = size;
  var ctx = canvas.getContext("2d");
  
  for (var y = 0; y < size; y += step) {
    for (var x = 0; x < size; x += step) {
      paint(ctx, x, y, step);
    }
  }
}

/*
main [function]
args:
size of canvas square [number]
size of dot [number]
*/
main(500, 1);