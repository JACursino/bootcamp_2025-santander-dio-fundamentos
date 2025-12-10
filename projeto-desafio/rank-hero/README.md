# 🛡️ Calculadora de Partidas Rankeadas

![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

> Calculadora interativa de ranqueamento baseada em vitórias e derrotas, desenvolvida como parte do desafio da [Digital Innovation One (DIO)](https://www.dio.me/).

## 🎯 Sobre o Projeto

Este projeto foi desenvolvido como resposta ao **Desafio #2 - Calculadora de Partidas Rankeadas** da DIO, com o objetivo de aplicar conceitos fundamentais de programação como:

- ✅ Variáveis
- ✅ Operadores
- ✅ Estruturas de decisão (if/else)
- ✅ Funções
- ✅ Entrada/Saída de dados

O desafio básico foi expandido com diversas funcionalidades extras para criar uma experiência mais completa e profissional.

## ✨ Funcionalidades

### Funcionalidades Básicas (Desafio Original)
- ✅ Cálculo do saldo de ranqueadas (vitórias - derrotas)
- ✅ Determinação do nível baseado em vitórias
- ✅ Exibição do resultado formatado

### Funcionalidades Avançadas (Implementadas)
- 🎨 **Interface CLI elegante** com emojis e formatação visual
- 📊 **Estatísticas detalhadas** incluindo taxa de vitória
- 💬 **Mensagens motivacionais** contextuais baseadas no desempenho
- 🏆 **Sistema de ícones** representando cada nível
- ✅ **Validação robusta** de entrada de dados
- 🎯 **Casos especiais** tratados (sequência perfeita, saldo negativo, etc)
- 📈 **Cálculo de taxa de vitória** em porcentagem

## 🚀 Tecnologias Utilizadas

- **Node.js** - Ambiente de execução JavaScript
- **Readline** - Módulo nativo para entrada de dados

### Uso

1. O programa solicitará a quantidade de **vitórias**
2. Em seguida, solicitará a quantidade de **derrotas**
3. O resultado será exibido com:
   - Saldo de vitórias
   - Nível alcançado
   - Taxa de vitória
   - Mensagem motivacional

## 🏆 Sistema de Ranqueamento

O sistema classifica os jogadores em 7 níveis baseados na quantidade de vitórias:

| Vitórias | Nível | Ícone |
|----------|-------|-------|
| < 10 | 🔩 Ferro | 🔩 |
| 10 - 20 | 🥉 Bronze | 🥉 |
| 21 - 50 | 🥈 Prata | 🥈 |
| 51 - 80 | 🥇 Ouro | 🥇 |
| 81 - 90 | 💎 Diamante | 💎 |
| 91 - 100 | 🏆 Lendário | 🏆 |
| ≥ 101 | 👑 Imortal | 👑 |

## 📸 Exemplos de Uso
![Demonstração no Terminal](./imagens/calculadora.png)
```

## 🎨 Melhorias Implementadas

### 1. **Modularização**
O código foi organizado em funções específicas, cada uma com responsabilidade única:
- `calcularSaldo()` - Calcula vitórias - derrotas
- `determinarNivel()` - Define o rank baseado em vitórias
- `obterIconeNivel()` - Retorna o emoji do nível
- `gerarMensagemMotivacional()` - Cria mensagens contextuais
- `processarRankeadas()` - Orquestra todo o processo
- `exibirResultado()` - Formata e exibe o output

### 2. **Validação de Dados**
```javascript
if (isNaN(vitorias) || vitorias < 0) {
    console.log("\n❌ Erro: Quantidade de vitórias inválida.");
    return;
}
```

## 📚 Aprendizados

Durante o desenvolvimento deste projeto, foram aplicados e aprofundados os seguintes conceitos:

### Conceitos de Programação
- ✅ Funções puras e reutilizáveis
- ✅ Estruturas condicionais complexas (if/else if/else)
- ✅ Operadores aritméticos e de comparação
- ✅ Manipulação de strings com template literals
- ✅ Validação de entrada de dados

### Boas Práticas
- ✅ Código limpo e legível
- ✅ Separação de responsabilidades
- ✅ Nomenclatura descritiva de variáveis e funções
- ✅ Comentários informativos
- ✅ Tratamento de erros

## 🙏 Agradecimentos

- [Digital Innovation One (DIO)](https://www.dio.me/) pelo desafio proposto
