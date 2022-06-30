/* Como podemos rodar isso em um arquivo .ts sem causar erros?
//funcionario.codigo = 10;
//funcionario.nome = "John";*/
let funcionario1 = {
    codigo: 10,
    nome:'John'
}

let funcionario2: {codigo: number, nome: string} ={
    codigo: 10,
    nome: 'John'

}

interface funcionario {
    codigo: number,
    nome: string
}

let funcionario3: funcionario = {
    codigo: 10 ,
    nome:'John'
}

const funcionarioObj = {} as funcionario;
funcionarioObj.codigo = 10;
funcionarioObj.nome = 'John';

const funcionarioObj2: funcionario = {
    codigo: 10,
    nome: 'John'
}