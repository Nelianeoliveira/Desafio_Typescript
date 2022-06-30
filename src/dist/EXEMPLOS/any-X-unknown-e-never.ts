let anyEstaDeVolta: any;
anyEstaDeVolta = 3;
anyEstaDeVolta = 'teste';
anyEstaDeVolta = 5;

let stringTeste: string = 'verificar'
stringTeste = anyEstaDeVolta;


let unknownvalor: unknown; // unknown é um tipo que pode receber qualquer valor
unknownvalor = 3;
unknownvalor = 'Opa';
unknownvalor = true;
unknownvalor = 'vai sim';

let stringteste2: string;


//O tipo unknown não pode ser arbitrariamente atribuído
if (typeof unknownvalor === 'string') {
    stringteste2 = unknownvalor; //Esse tipo só pode ser atribuido se uma validação for feita
}

// Não é uma prática ruim usar unknown, já que ele força uma validação de tipos. Diferente do any, que como já vimos pode ser usado sem se preocupar com tipage.

function jogaErro(mensagem: string, codigoDeErro: number): never { // never quer dizer que o script pode ser interrompido ou nunca chegar a um fim
    throw {message: mensagem, errorCode: codigoDeErro }; // throw interrompe o código
}

jogaErro('Um erro ocorreu!', 500); // O mesmo tipo poderia ser usado se fosse usado um while loop que nunca é finalizado