let lines = gets();
let quant = lines.split("");
let num = [];
let soma = 0;
let produto = 1;
for (i = 0; i < quant.length; i++) {
  num[i] = parseInt(quant[i]);
}
for (let i of num) {
  produto *= i;
  soma += i;
}

print(produto - soma);
