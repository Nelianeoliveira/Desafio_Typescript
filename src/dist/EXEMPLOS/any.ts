let cnpj: any;// O any é uma notação que diz que a propriedade pode ter qualquer tipo

cnpj = '016204450000001';// string

cnpj = true;// boolean

cnpj = 10;// número
// O uso de any faz com que typescript trate suas variáveis como JS

// Essa função abaixo espera uma string
function mostrarCNPJ(cnpj: string) {
    console.log(cnpj)
}

// E aqui passamos a variável cpf que contém um number, mas como ela é um any, o TS não reclama porque ela pode conter qualquer atributo, inclusive uma string
mostrarCNPJ(cnpj); 
/**
    Usar any tira poder do typescript e pode criar incoerências no seu projeto
    O any é comumente usado quando um objeto desconhecido é manipulado, ou quando uma refatoração de JS para TS é aplicada rapidamente sem tipar os objetos utilizados
    É uma má prática que reduz a velocidade dos times no longo prazo e foge do propósito do typescript
    Com o uso do ESLint é possível configurar seu projeto para não permitir o uso explícito de any
 */