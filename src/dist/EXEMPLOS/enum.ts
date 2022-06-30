const sarah = {
    name: 'Sarah',
    idade: 26,
    casado: true,
    profissao: 'Desenvolvedora' // Nesse campo é dito que a sarah trabalha como 'Desenvolvedora'
}

const maria = { 
    name: 'Mariana',
    idade: 25,
    casado: false,
    profissao: 'desenvolvedora' // E aqui é dito que mariana trabalha como 'desenvolvedora'.
}

// Isso está correto? Existe diferença entre 'Desenvolvedora' e 'desenvolvedora'? Acredito que não. Isso deve ter sido um erro cometido na digitação.

// Para resolver isso vamos usar a feature Enum do TypeScript para criar o enum Profissao
enum Profissao {//pode ser declarado várias constantes no enum
    Professora,
    Atriz,
    Desenvolvedora,
    JogadoraDeFutebol
}

interface Estudante extends Pessoa {
materias: string []
}

// E para garantir que o enum vai ser usado corretamente, vamos criar um tipo Pessoa também
interface Pessoa  {
    name: string,
    idade: number,
    casado?: boolean, //O ponto de interrogação faz com que seja opcional declarar 
    profissao?: Profissao // o enum inserido como um tipo
}

const vanessa: Pessoa = {
    name: 'Vanessa',
    idade: 26,
    casado: false,
    profissao: Profissao.Desenvolvedora // Definir de forma padronizada a profissão de cada objeto do tipo Pessoa
}

const mario: Pessoa = {
    name: 'Maria',
    idade: 26,
    casado: false,
    profissao: Profissao.Desenvolvedora 
}

const jessica: Estudante = {
name: 'Jessica',
idade: 28,
profissao: Profissao.Desenvolvedora,
materias:['Matemática discreta', 'Programação']
}

const monica: Estudante = {
    name: 'Monica',
    idade: 20,
    profissao: Profissao.Desenvolvedora,
    materias:['Matemática discreta', 'Programação']
    }

    function lista(lista: string[]) {
        for (const item of lista) {
            console.log('-', item);
        }
    }
     lista(monica.materias);