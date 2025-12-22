# 🎮 Escrevendo as Classes de Um Jogo

Projeto desenvolvido como parte do desafio de **Lógica de Programação** da [DIO - Digital Innovation One](https://www.dio.me/).

## 📋 Sobre o Desafio

Criar uma classe genérica que represente um herói de uma aventura, aplicando conceitos fundamentais de programação orientada a objetos e lógica de programação.

## 🎯 Objetivos

O desafio consiste em criar uma classe `Heroi` que possua:

### Propriedades:
- `nome` - Nome do herói
- `idade` - Idade do herói
- `tipo` - Tipo do herói (guerreiro, mago, monge, ninja)

### Métodos:
- `atacar()` - Realiza um ataque baseado no tipo do herói

### Regras de Ataque:
O método `atacar()` deve exibir mensagens diferentes conforme o tipo:

| Tipo | Ataque |
|------|--------|
| 🔮 Mago | usou magia |
| ⚔️ Guerreiro | usou espada |
| 🥋 Monge | usou artes marciais |
| 🥷 Ninja | usou shuriken |

### Saída Esperada:
```
o {tipo} atacou usando {ataque}
```

## 🛠️ Tecnologias Utilizadas

- **JavaScript** - Linguagem de programação
- **Node.js** - Ambiente de execução

## 📦 Conceitos Aplicados

- ✅ Variáveis
- ✅ Operadores
- ✅ Estruturas de decisão (if/else)
- ✅ Funções e Métodos
- ✅ Classes e Objetos
- ✅ Laços de repetição (for)


## 💻 Exemplo de Saída

```
=== INFORMAÇÕES DOS HERÓIS ===

Nome: Merlin
Idade: 28
Tipo: mago
------------------
Nome: Arthur
Idade: 32
Tipo: guerreiro
------------------
Nome: Aragorn Fuy
Idade: 25
Tipo: monge
------------------
Nome: Ryu
Idade: 23
Tipo: ninja
------------------

=== DEMONSTRAÇÃO: Ataques Individuais ===

o mago atacou usando magia
o guerreiro atacou usando espada
o monge atacou usando artes marciais
o ninja atacou usando shuriken

=== DEMONSTRAÇÃO: Ataques com Laço de Repetição (FOR) ===

o mago atacou usando magia
o guerreiro atacou usando espada
o monge atacou usando artes marciais
o ninja atacou usando shuriken
```


## 🎨 Versões do Projeto

###  Versão com Emojis (Opcional)
- Adição de ícones visuais
- Melhorias na formatação do terminal
- Método obterIcone() adicional

