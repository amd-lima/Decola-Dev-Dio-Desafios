let lines = gets().split("\n");
let line = lines.shift().split(" ");
let X = parseInt(line[0]);
let y = parseInt(line[1]);

var price = 0;

if (X == 1) {
  price = y * 4.0;
} else if (X == 2) {
  price = y * 4.5;
} else if (X == 3) {
  price = y * 5.0;
} else if (X == 4) {
  price = y * 2.0;
} else if (X == 5) {
  price = y * 1.5;
}
print("Total: R$ " + price.toFixed(2));

//atenção: a var y está minuscula
