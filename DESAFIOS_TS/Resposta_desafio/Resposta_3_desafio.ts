// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?

let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo')!;
let soma = document.getElementById('soma')!as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo');

let saldoTotal = 0

limparSaldo()

function somarAoSaldo(soma: number) {
    
    if (campoSaldo) {
        saldoTotal += soma
        campoSaldo.innerHTML = saldoTotal.toString();
        limparCampoSoma();
    }
}

function limparCampoSoma() {
    soma.value = "";
}
function limparSaldo() {
    if(campoSaldo){
        saldoTotal = 0;
        campoSaldo.innerHTML = saldoTotal.toString();
    }
}
if (botaoAtualizar) {
botaoAtualizar.addEventListener('click', function () {
    somarAoSaldo(Number(soma.value));
    return saldoTotal + soma.value;
});
}
botaoLimpar.addEventListener('click', () => { 
        limparSaldo();
});
console.log(soma);
/* Se retirar a ! de "let botaoLimpar = document.getElementById('limpar-saldo')!;" a solução é a seguinte:

  if (botaoLimpar) {
   botaoLimpar.addEventListener('click', function () { 
    limparSaldo();
  });

}*/