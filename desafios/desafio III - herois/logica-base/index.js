// Classe do Herói
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    // Método para exibir informações do herói
    exibirInfo() {
        let icone = this.obterIcone();
        console.log(`${icone}  Nome:  ${this.nome}`);
        console.log(`    Idade:  ${this.idade}`);
        console.log(`    Tipo:  ${this.tipo}`);
        console.log("------------------");
    }

    // Método para obter o ícone do tipo
    obterIcone() {
        if (this.tipo === "Mago") {
            return "🔮 ";
        } else if (this.tipo === "Guerreiro") {
            return "⚔️ ";
        } else if (this.tipo === "Monge") {
            return "🥋 ";
        } else if (this.tipo === "Ninja") {
            return "🥷 ";
        } else {
            return "❓";
        }
    }

    // Método para atacar conforme o tipo
    atacar() {
        let ataque;
        let iconeAtaque;

        // Estrutura de decisão para definir o tipo de ataque
        if (this.tipo === "Mago") {
            ataque = "magia";
            iconeAtaque = "✨ ";
        } else if (this.tipo === "Guerreiro") {
            ataque = "espada";
            iconeAtaque = "🗡️ ";
        } else if (this.tipo === "Monge") {
            ataque = "artes marciais";
            iconeAtaque = "🥋 ";
        } else if (this.tipo === "Ninja") {
            ataque = "shuriken";
            iconeAtaque = "💥 ";
        } else {
            ataque = "ataque desconhecido";
            iconeAtaque = "❓";
        }

        // Exibindo a mensagem conforme o requisito
        console.log(`${iconeAtaque} O herói ${this.tipo} atacou usando ${ataque}`);
    }
}

// Criando 4 heróis com os tipos do desafio
const heroi1 = new Heroi("Merlin", 28, "Mago");
const heroi2 = new Heroi("Arthur", 32, "Guerreiro");
const heroi3 = new Heroi("Aragorn Fuy", 25, "Monge");
const heroi4 = new Heroi("Ryu", 23, "Ninja");

// Exibindo informações dos heróis
console.log("\n=== INFORMAÇÕES DOS HERÓIS ===\n");
heroi1.exibirInfo();
heroi2.exibirInfo();
heroi3.exibirInfo();
heroi4.exibirInfo();

// Testando os ataques (requisito do desafio)
console.log("\n=== DEMONSTRAÇÃO: Ataques Individuais ===\n");
heroi1.atacar();
heroi2.atacar();
heroi3.atacar();
heroi4.atacar();

// Exemplo com loop
console.log("\n=== DEMONSTRAÇÃO: Ataques com Laço de Repetição (FOR) ===\n");
const todosHerois = [heroi1, heroi2, heroi3, heroi4];
for (let i = 0; i < todosHerois.length; i++) {
    todosHerois[i].atacar();
}

console.log("\n🏆 === FIM DA BATALHA === 🏆\n");
