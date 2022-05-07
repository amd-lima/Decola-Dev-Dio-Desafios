let lines = gets();

let num = parseInt(lines);
let count = 0;

while (num !== 0) {
  num % 2 == 0 ? (num = num / 2) : (num = num - 1);
  count++;
}
print(count);
