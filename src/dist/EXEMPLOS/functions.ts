function somar(n1: number, n2: number) { // O typescript infere que o retorno dessa função é do tipo number
    return n1 + n2; 
}

let resultado: number;
// Por ter inferido que o retorno é um number, a função pode ser usada para atribuir valor para resultado, que é do mesmo tipo.
resultado = somar(1, 4);

function somarNumeros(n1: number, n2: number) {
    return n1.toString() + n2;
}
/**
 * resultado = somarNumeros(1, 4);
 * um erro vai ser apresentado porque, por inferência, o retorno de somarNumeros é do tipo string e resultado espera um number
 * Então temos um problema aqui, porque funções podem ser alteradas e isso pode implicar em erros em outras partes do código.
 */

// Uma solução para isso é explicitamente tipar o retorno de uma função. Se algo for modificado dentro dela, o próprio TS pode reclamar caso o retorno não seja number
function somarExplicitamenteNumber(n1: number, n2: number): number {
    return n1 + n2;
}

resultado = somarExplicitamenteNumber(1, 4); 

// Funções também podem não retornar nada, que é o caso do tipo void
function printarValor(num: number): void {
    console.log('O valor é '+ num)
}

printarValor(3);

function multiplicarValorPor2(numero: number) {
    return numero * 2;
}
/**
 * Funções também podem ser passadas como parâmetro. O tipo delas é estruturado assim:
 * (parâmetro: tipo do parâmetro) => tipo do retorno
*/ 
function somarETratar(n1: number, n2: number, callback: (num: number) => void) {
    resultado = n1 + n2;
    callback(resultado); //callback chama(trata) o parâmetro 
}

function aoQuadarado(numero: number): number{
    return numero*numero;
}

function dividirPorEleMesmo(numero: number): number{
    return numero/numero;
}


somarETratar(1, 5, printarValor);
console.log(somarETratar(1, 5, multiplicarValorPor2));
console.log(somarETratar(1, 5, aoQuadarado));
console.log(somarETratar(1, 5, dividirPorEleMesmo));