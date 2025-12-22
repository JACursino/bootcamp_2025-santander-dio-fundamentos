// Importa o módulo nativo readline
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// --- Cabeçalho ---
console.log("\n----------------------------------------------");
console.log("  🛡️  CALCULADORA DE RANKEADAS 🛡️  ");
console.log("----------------------------------------------\n");

// Tabela de Ranks
const RANKS = {
    FERRO: { min: 0, max: 10, icone: "🔩" },
    BRONZE: { min: 11, max: 20, icone: "🥉" },
    PRATA: { min: 21, max: 50, icone: "🥈" },
    OURO: { min: 51, max: 80, icone: "🥇" },
    DIAMANTE: { min: 81, max: 90, icone: "💎" },
    LENDARIO: { min: 91, max: 100, icone: "🏆" },
    IMORTAL: { min: 101, max: Infinity, icone: "👑" }
};

/**
 * Calcula o saldo de vitórias
 */
function calcularSaldo(vitorias, derrotas) {
    return vitorias - derrotas;
}

/**
 * Determina o nível baseado nas vitórias
 */
function determinarNivel(vitorias) {
    if (vitorias < 10) {
        return "Ferro";
    } else if (vitorias >= 10 && vitorias <= 20) {
        return "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        return "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        return "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        return "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        return "Lendário";
    } else {
        return "Imortal";
    }
}

/**
 * Retorna o ícone do nível
 */
function obterIconeNivel(nivel) {
    const nivelUpper = nivel.toUpperCase().replace("Á", "A"); // Normaliza
    return RANKS[nivelUpper]?.icone || "⚔️";
}

/**
 * Gera mensagem motivacional baseada no desempenho
 */
function gerarMensagemMotivacional(vitorias, derrotas, saldo, nivel) {
    const taxaVitoria = vitorias + derrotas > 0
        ? ((vitorias / (vitorias + derrotas)) * 100)
        : 0;

    // Casos especiais
    if (vitorias === 0 && derrotas === 0) {
        return "🕹️ Primeira vez? A jornada de mil vitórias começa com uma única partida!";
    }

    if (derrotas === 0 && vitorias > 0) {
        return "⭐ INACREDITÁVEL! Sequência perfeita! Você é uma lenda viva!";
    }

    if (saldo < 0) {
        return "💪 Todo campeão já enfrentou derrotas! Levante-se e mostre seu valor!";
    }

    // Mensagens por nível
    switch(nivel) {
        case "Ferro":
            return "🔩 Todo grande guerreiro começa do zero. Continue treinando!";

        case "Bronze":
            return "🥉 Bom começo! Você está no caminho certo, continue assim!";

        case "Prata":
            return "🥈 Excelente progresso! Sua dedicação está dando frutos!";

        case "Ouro":
            return "🥇 Impressionante! Você está entre os melhores!";

        case "Diamante":
            return "💎 ESPETACULAR! Poucos chegam até aqui. Você é raro!";

        case "Lendário":
            return "🏆 LENDÁRIO! Seu nome será lembrado nos anais da história!";

        case "Imortal":
            return "👑 IMORTAL! Você transcendeu os limites! SUPREMACIA ABSOLUTA!";

        default:
            return "⚔️ Continue lutando, herói!";
    }
}

/**
 * Processa as rankeadas e retorna resultado
 */
function processarRankeadas(vitorias, derrotas) {
    const saldoVitorias = calcularSaldo(vitorias, derrotas);
    const nivel = determinarNivel(vitorias);
    const icone = obterIconeNivel(nivel);
    const taxaVitoria = vitorias + derrotas > 0
        ? ((vitorias / (vitorias + derrotas)) * 100).toFixed(1)
        : 0;
    const mensagem = gerarMensagemMotivacional(vitorias, derrotas, saldoVitorias, nivel);

    return { saldoVitorias, nivel, icone, taxaVitoria, mensagem };
}

/**
 * Exibe o resultado formatado
 */
function exibirResultado(vitorias, derrotas, resultado) {
    console.log("\n" + "═".repeat(62));
    console.log(`  ${resultado.icone} O Herói tem de saldo de ${resultado.saldoVitorias} está no nível de ${resultado.nivel}`);
    console.log("═".repeat(62));

    console.log("\n Estatísticas Detalhadas:\n");
    console.log(`   ✅ Vitórias: ${vitorias}`);
    console.log(`   ❌ Derrotas: ${derrotas}`);
    console.log(`   ⚔️  Saldo: ${resultado.saldoVitorias}`);
    console.log(`   ${resultado.icone} Nível: ${resultado.nivel}`);
    console.log(`   📈 Taxa de Vitória: ${resultado.taxaVitoria}%`);

    // Mensagem motivacional
    console.log("\n💬 Mensagem do Sistema:\n");
    console.log(`   ${resultado.mensagem}`);
    console.log();
}

// --- Entrada de Dados ---
rl.question("💪 Digite a quantidade de vitórias: ", (vitoriasInput) => {
    const vitorias = parseInt(vitoriasInput);

    if (isNaN(vitorias) || vitorias < 0) {
        console.log("\n❌ Erro: Quantidade de vitórias inválida. Use apenas números positivos.");
        rl.close();
        return;
    }

    rl.question("💀 Digite a quantidade de derrotas: ", (derrotasInput) => {
        const derrotas = parseInt(derrotasInput);

        if (isNaN(derrotas) || derrotas < 0) {
            console.log("\n❌ Erro: Quantidade de derrotas inválida. Use apenas números positivos.");
            rl.close();
            return;
        }

        // Processa e exibe resultado
        const resultado = processarRankeadas(vitorias, derrotas);
        exibirResultado(vitorias, derrotas, resultado);

        rl.close();
    });
});
