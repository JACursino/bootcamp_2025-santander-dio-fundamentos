// Cria partículas de fundo
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
        particlesContainer.appendChild(particle);
    }
}

// Inicializa as partículas quando a página carregar
createParticles();

// Configuração do Web Speech API
let audioAtivado = true;
let synth = window.speechSynthesis;
let vozPortugues = null;

// Função para inicializar as vozes
function inicializarVozes() {
    const vozes = synth.getVoices();
    // Procura por voz em português brasileiro
    vozPortugues = vozes.find(voz => voz.lang === 'pt-BR') ||
                   vozes.find(voz => voz.lang.startsWith('pt')) ||
                   vozes[0]; // Fallback para primeira voz disponível
}

// Carrega as vozes (alguns navegadores carregam de forma assíncrona)
if (synth.onvoiceschanged !== undefined) {
    synth.onvoiceschanged = inicializarVozes;
}
inicializarVozes();

/**
 * Função para falar texto usando Web Speech API
 */
function falar(texto) {
    if (!audioAtivado) return;

    // Cancela qualquer fala em andamento
    synth.cancel();

    const utterance = new SpeechSynthesisUtterance(texto);
    utterance.lang = 'pt-BR';
    utterance.rate = 0.9; // Velocidade da fala
    utterance.pitch = 1; // Tom da voz
    utterance.volume = 1; // Volume

    if (vozPortugues) {
        utterance.voice = vozPortugues;
    }

    synth.speak(utterance);
}

/**
 * Alterna o estado do áudio
 */
function toggleAudio() {
    audioAtivado = !audioAtivado;
    const btn = document.getElementById('btnAudio');
    const icon = document.getElementById('audioIcon');
    const text = document.getElementById('audioText');

    if (audioAtivado) {
        btn.classList.remove('disabled');
        icon.textContent = '🔊';
        text.textContent = 'Áudio Ativado';
        falar('Áudio ativado');
    } else {
        btn.classList.add('disabled');
        icon.textContent = '🔇';
        text.textContent = 'Áudio Desativado';
        synth.cancel(); // Para qualquer fala em andamento
    }
}

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
    if (vitorias < 10) return "Ferro";
    if (vitorias <= 20) return "Bronze";
    if (vitorias <= 50) return "Prata";
    if (vitorias <= 80) return "Ouro";
    if (vitorias <= 90) return "Diamante";
    if (vitorias <= 100) return "Lendário";
    return "Imortal";
}

/**
 * Retorna o ícone do nível
 */
function obterIconeNivel(nivel) {
    const nivelUpper = nivel.toUpperCase().replace("Á", "A");
    return RANKS[nivelUpper]?.icone || "⚔️";
}

/**
 * Gera mensagem motivacional baseada no desempenho
 */
function gerarMensagemMotivacional(vitorias, derrotas, saldo, nivel) {
    if (vitorias === 0 && derrotas === 0) {
        return "🕹️ Primeira vez? A jornada de mil vitórias começa com uma única partida!";
    }

    if (derrotas === 0 && vitorias > 0) {
        return "⭐ INACREDITÁVEL! Sequência perfeita! Você é uma lenda viva!";
    }

    if (saldo < 0) {
        return "💪 Todo campeão já enfrentou derrotas! Levante-se e mostre seu valor!";
    }

    const mensagens = {
        "Ferro": "🔩 Todo grande guerreiro começa do zero. Continue treinando!",
        "Bronze": "🥉 Bom começo! Você está no caminho certo, continue assim!",
        "Prata": "🥈 Excelente progresso! Sua dedicação está dando frutos!",
        "Ouro": "🥇 Impressionante! Você está entre os melhores!",
        "Diamante": "💎 ESPETACULAR! Poucos chegam até aqui. Você é raro!",
        "Lendário": "🏆 LENDÁRIO! Seu nome será lembrado nos anais da história!",
        "Imortal": "👑 IMORTAL! Você transcendeu os limites! SUPREMACIA ABSOLUTA!"
    };

    return mensagens[nivel] || "⚔️ Continue lutando, herói!";
}

/**
 * Mostra mensagem de erro
 */
function mostrarErro(mensagem) {
    const errorDiv = document.getElementById('error');
    errorDiv.textContent = '❌ ' + mensagem;
    errorDiv.classList.add('show');
    document.getElementById('result').classList.remove('show');
}

/**
 * Esconde mensagem de erro
 */
function esconderErro() {
    document.getElementById('error').classList.remove('show');
}

/**
 * Limpa os campos e reseta a interface
 */
function limpar() {
    // Limpa os campos de entrada
    document.getElementById('victories').value = '';
    document.getElementById('defeats').value = '';

    // Esconde o resultado e erro
    document.getElementById('result').classList.remove('show');
    esconderErro();

    // Foca no primeiro campo
    document.getElementById('victories').focus();

    // Narra a ação
    falar('Campos limpos. Digite novamente suas vitórias e derrotas.');
}

/**
 * Função principal que calcula e exibe o resultado
 */
function calcular() {
    esconderErro();

    const vitorias = parseInt(document.getElementById('victories').value);
    const derrotas = parseInt(document.getElementById('defeats').value);

    // Validações
    if (isNaN(vitorias) || vitorias < 0) {
        const mensagemErro = 'Quantidade de vitórias inválida. Use apenas números positivos.';
        mostrarErro(mensagemErro);
        falar(mensagemErro);
        return;
    }

    if (isNaN(derrotas) || derrotas < 0) {
        const mensagemErro = 'Quantidade de derrotas inválida. Use apenas números positivos.';
        mostrarErro(mensagemErro);
        falar(mensagemErro);
        return;
    }

    // Cálculos
    const saldo = calcularSaldo(vitorias, derrotas);
    const nivel = determinarNivel(vitorias);
    const icone = obterIconeNivel(nivel);
    const taxaVitoria = vitorias + derrotas > 0
        ? ((vitorias / (vitorias + derrotas)) * 100).toFixed(1)
        : 0;
    const mensagem = gerarMensagemMotivacional(vitorias, derrotas, saldo, nivel);

    // Atualiza a interface
    document.getElementById('rankIcon').textContent = icone;
    document.getElementById('rankName').textContent = nivel.toUpperCase();

    document.getElementById('statVictories').textContent = vitorias;
    document.getElementById('statDefeats').textContent = derrotas;
    document.getElementById('statBalance').textContent = saldo;
    document.getElementById('statWinRate').textContent = taxaVitoria + '%';
    document.getElementById('motivationText').textContent = mensagem;

    // Exibe o resultado
    document.getElementById('result').classList.add('show');

    // Narra o resultado com texto melhorado
    let textoNarracao;
    if (saldo > 0) {
        textoNarracao = `Parabéns! Você alcançou o nível ${nivel}.
            Com ${vitorias} vitórias e ${derrotas} derrotas,
            seu saldo é positivo em ${saldo} vitórias.
            Taxa de vitória: ${taxaVitoria} por cento.
            ${mensagem}`;
    } else if (saldo < 0) {
        textoNarracao = `Você está no nível ${nivel}.
            Com ${vitorias} vitórias e ${derrotas} derrotas,
            você tem um déficit de ${Math.abs(saldo)} vitórias.
            Taxa de vitória: ${taxaVitoria} por cento.
            ${mensagem}`;
    } else {
        textoNarracao = `Você está no nível ${nivel}.
            Com ${vitorias} vitórias e ${derrotas} derrotas,
            seu saldo está equilibrado.
            Taxa de vitória: ${taxaVitoria} por cento.
            ${mensagem}`;
    }

    falar(textoNarracao);
}

// Event Listeners para permitir calcular com Enter
document.getElementById('victories').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') calcular();
});

document.getElementById('defeats').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') calcular();
});

// Event Listeners para narrar ao focar nos campos
document.getElementById('victories').addEventListener('focus', function() {
    falar('Campo de vitórias. Digite o número de vitórias.');
});

document.getElementById('defeats').addEventListener('focus', function() {
    falar('Campo de derrotas. Digite o número de derrotas.');
});

// Mensagem de boas-vindas ao carregar a página
window.addEventListener('load', function() {
    setTimeout(() => {
        falar('Bem-vindo à Rank-Hero. Digite nos campos abaixo, suas vitórias e logo em seguida suas derrotas para descobrir em qual nível está o seu personagem.');
    }, 1000);
});
