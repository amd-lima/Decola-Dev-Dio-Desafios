let input = gets();
let desconto = parseInt(input);

input = gets();
let precoAntigo = parseInt(input);

let precoNovo = precoAntigo * (desconto / 100);
desconto = precoAntigo - precoNovo;
print(desconto);
