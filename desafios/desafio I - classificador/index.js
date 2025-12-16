// Importa o módulo nativo readline
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Imprime o Cabeçalho ---
console.log("╔══════════════════════════════════════════════════╗");
console.log('🛡️               ORDEM DOS GUARDIÕES  🛡️');
console.log('╚══════════════════════════════════════════════════╝\n');

// Entrada de Dados ---
rl.question("Digite o nome do herói: ", (nomeHeroi) => {
    rl.question("Digite o XP do herói: ", (xpInput) => {
        const xp = parseInt(xpInput);

        // Verifica se a conversão foi bem-sucedida e se o XP é positivo
        if (isNaN(xp) || xp < 0) {
            console.log("\n❌ Erro: XP inválido. Por favor, reinicie e digite um número válido.");
            rl.close();
            return;
        }

        // Classificação de Nível ---
        let nivel = "";

        if (xp < 1000) {
            nivel = "Ferro";
        } else if (xp < 2000) {
            nivel = "Bronze";
        } else if (xp < 5000) {
            nivel = "Prata";
        } else if (xp < 7000) {
            nivel = "Ouro";
        } else if (xp < 8000) {
            nivel = "Platina";
        } else if (xp < 9000) {
            nivel = "Ascendente";
        } else if (xp < 10000) {
            nivel = "Imortal";
        } else {
            nivel = "Radiante";
        }

        // Saída do Resultado ---
        console.log("\n" + "=".repeat(50));
        console.log(`✨ O herói de nome ${nomeHeroi} está no nível ${nivel}!`);
        console.log(`📊 XP Total: ${xp.toLocaleString('pt-BR')}`);
        console.log("=".repeat(50));

        rl.close();
    });
});
