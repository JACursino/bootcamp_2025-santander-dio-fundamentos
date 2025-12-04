# Classificador de Heróis

Sistema desenvolvido para classificar heróis de acordo com seus pontos de experiência acumulados. O projeto utiliza Node.js e foi criado como parte do Bootcamp Santander 2025 em parceria com a DIO.

## Descrição

O classificador recebe o nome de um herói e sua quantidade de XP, processando essas informações para determinar em qual nível o personagem se encontra. A classificação segue uma escala progressiva que vai desde Ferro até Radiante, sendo este último o nível máximo alcançável.

## Tecnologias Utilizadas

O projeto foi desenvolvido utilizando Node.js na versão 22.16.0. Para capturar a entrada do usuário via terminal, é utilizado o módulo readline, que faz parte da biblioteca nativa do Node.js e não requer instalação adicional de pacotes externos.

## Estrutura de Níveis

A classificação dos heróis segue os seguintes critérios de XP:

Ferro compreende heróis com XP entre 0 e 999 pontos. Bronze abrange a faixa de 1.000 a 1.999 pontos. Prata contempla heróis de 2.000 a 4.999 pontos. Ouro classifica aqueles entre 5.000 e 6.999 pontos. Platina engloba a faixa de 7.000 a 7.999 pontos. Ascendente compreende heróis de 8.000 a 8.999 pontos. Imortal contempla a faixa de 9.000 a 9.999 pontos. Radiante é alcançado por heróis com 10.000 pontos ou mais.

## Execução

Para executar o programa, navegue até o diretório onde o arquivo index.js está localizado e execute o comando node index.js no terminal. O sistema solicitará o nome do herói e sua quantidade de XP, exibindo em seguida a classificação correspondente.

## Validações

O sistema implementa validações para garantir que o valor de XP informado seja numérico e não negativo. Caso o usuário insira um valor inválido, uma mensagem de erro será exibida e o programa será encerrado.


