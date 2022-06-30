type input = number | string;//É possível criar tipos e combinar os tipos.

function somarValores(input1: input, input2: input) {
    let resultado: input;
    if (typeof input1 === 'string' || typeof input2 === 'string') {
        resultado = input1.toString() + input2.toString();
    } else {
        resultado = input1 + input2;
    }
    return resultado;
}

//exemplos de uma chamada para essa função, um com strings e um com números
console.log(somarValores(1, 5));
console.log(somarValores('Olá,', 'tudo bem'));
console.log(somarValores('1',5 ));
console.log(somarValores('Me','contrata'));