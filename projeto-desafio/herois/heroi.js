// Classe do Herói
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    // Método para exibir informações do herói
    exibirInfo() {
        console.log(`Nome: ${this.nome}`);
        console.log(`Idade: ${this.idade}`);
        console.log(`Tipo: ${this.tipo}`);
        console.log("------------------");
    }

    // Método para atacar conforme o tipo
    atacar() {
        let ataque;

        // Estrutura de decisão para definir o tipo de ataque
        if (this.tipo === "mago") {
            ataque = "magia";
        } else if (this.tipo === "guerreiro") {
            ataque = "espada";
        } else if (this.tipo === "monge") {
            ataque = "artes marciais";
        } else if (this.tipo === "ninja") {
            ataque = "shuriken";
        } else {
            ataque = "ataque desconhecido";
        }

        // Exibindo a mensagem conforme o requisito
        console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
}

// Criando 4 heróis com os tipos do desafio
const Heroi1 = new Heroi("Merlin", 28, "mago");
const Heroi2 = new Heroi("Arthur", 32, "guerreiro");
const Heroi3 = new Heroi("Aragorn Fuy", 25, "monge");
const Heroi4 = new Heroi("Ryu", 23, "ninja");

// Exibindo informações dos heróis
console.log("\n=== INFORMAÇÕES DOS HERÓIS ===\n");
Heroi1.exibirInfo();
Heroi2.exibirInfo();
Heroi3.exibirInfo();
Heroi4.exibirInfo();

// Testando os ataques (requisito do desafio)
console.log("\n=== ATAQUES ===\n");
Heroi1.atacar();
Heroi2.atacar();
Heroi3.atacar();
Heroi4.atacar();

// Exemplo com loop
console.log("\n=== RODADA DE ATAQUES (com loop) ===\n");
const todosHerois = [Heroi1, Heroi2, Heroi3, Heroi4];

for (let i = 0; i < todosHerois.length; i++) {
    todosHerois[i].atacar();
}
