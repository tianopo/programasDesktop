## Olá pessoal 👋


## 📑 Sobre o projeto
  Este projeto foi desenvolvido por conta de uma demanda de um cliente que permitiu postar o projeto.
  
##  📰 Introdução

  Existe várias formas que podemos fazer para ter acesso aos programas que estão nos computadores, pdf, arquivos de texto, músicas, zip, etc... Este programa é uma alternativa para quem quiser incluir um atalho para agilizar o processo de procura, e ainda pode incrementar uma forma divertida para movimentar seu programa e incluir a imagem que quiser como identificador. Para atender este objetivo, foi criado pastas para incluir estes atalhos e o uso do localstorage para armazenar os dados salvos. Já na parte de estilização e estrutura, foi utilizado o framework bulm. uma observação forte, este programa é para ser usado tanto em web quanto em desktop usando o framework electron, seguiremos o passo-a-passo.
  
__Palavras-Chave:__ Javascript, Bulma, Electron, css, desktop, pastas.

## 🛠️ Tecnologias

As seguintes ferramentas, linguagens, bibliotecas e tecnologias foram usadas na construção do projeto:

[Javascript](https://www.javascript.com/): Linguagem utilizada para o desenvolvimento de tudo.
[Batchfile](https://en.wikipedia.org/wiki/Batch_file): Utilizado apenas para localizar pastas no computador e abrir os programas
[Bulma](https://bulma.io/): Framework para construção da estilização e estrutura do HTML.
[Electron](https://electronjs.org/pt/): Framework para criar aplicativo em desktop
[Git](https://git-scm.com/): Versionamento do código
[GitHub](https://github.com/): Armazenamento do código

## 🚧 Dependências para execução

Como o projeto tem estilização e estrututura pelo Bulma, utilizaremos o mesmo para rodar o projeto. Electron será opcional, pois a aplicação poderá ser usado tanto web quanto em desktop.

## ▶️ Primeiros passos antes de executar

* iniciaremos o projeto para roda-lo no git:
```
npm init -y
```
* para incluir o Bulma
```
npm install bulma
```
* Incluir o electron para aplicação desktop
```
npm install --save-dev electron
```
* à partir disso, há um script que incluir já no json, chamado 
``` {
  "scripts": {
    "iniciar": "electron ."
  }
} 
```
* Então rode no git:
```
npm run iniciar
```
pronto, agora sua aplicação rodará em desktop.
Sugiro quando for iniciar a aplicação na web, faça com a extensão do visual studio code 'Live Server'

![Live Server](https://user-images.githubusercontent.com/92820414/214518289-5aaaf1ef-eee4-4bd4-94fd-0f67b8b690c1.png)

clique com o botão direito do mouse em index.html e depois em 'Open with Live Server'

![Open Live Server](https://user-images.githubusercontent.com/92820414/214518564-204eb4fb-a111-4083-b419-5cc1d8d801b7.png)

## ▶️ Executando a aplicação

Está é a tela da aplicação

![Index.html](https://user-images.githubusercontent.com/92820414/214522266-03905564-e6aa-442c-975e-23a60541fe58.png)

* Clique em administrador

![adm](https://user-images.githubusercontent.com/92820414/214522482-936efbe5-4fea-4bf3-b0bc-d5e4817dc5ec.png)

login: administrador
senha: 1234

![login](https://user-images.githubusercontent.com/92820414/214522714-e0a16aa1-9d81-4bac-91a0-16f04e3aec8b.png)

Agora você estará logado como administrador e poderá adicionar, remover, ordenar e movimentar seus blocos adicionados

![adm logado](https://user-images.githubusercontent.com/92820414/214522797-1e2cdbba-9ba5-4bcd-80ec-8c4e13fbf901.png)

* Antes de adicionar, o aplicativo estará sincronizado com a pasta executores, então adicione o arquivo que gostaria de adicionar por lá (foram testados .zip, .pdf, word, .xlx, .txt, .bat, .mp3, .png)

![pasta](https://user-images.githubusercontent.com/92820414/214525583-6264df53-b759-446e-ac98-8ff553a8e6db.gif)

* Adicione agora o arquivo e preencha a imagem que também é obrigatória

![adicionar](https://user-images.githubusercontent.com/92820414/214526463-a5e7a928-4656-4509-94df-1c3bbb6ca4e7.gif)

* Exclua arquivos

![excluir](https://user-images.githubusercontent.com/92820414/214527556-1fd834e5-2731-44f7-8cf1-04368aca92a7.gif)

* Movimente arquivos

![Movimento](https://user-images.githubusercontent.com/92820414/214527700-829994c0-c02b-4470-8eb7-8c51e8545a84.gif)

* Ordene arquivos

![Ordenar](https://user-images.githubusercontent.com/92820414/214527843-e26c67ed-bf82-4ae0-af7b-3bf35e5810cc.gif)

* Também podemos pegar alguns arquivos batchs e colocar o caminho de algum programa executavel para abrir ou qualquer outro arquivo que não esteja na pasta executores, o exemplo da imagem é o aplicativo IPFS.

![Batch](https://user-images.githubusercontent.com/92820414/214529669-66478308-6ec5-4db4-80e4-8a3d2cc491b2.gif)

* Incrementado um sistema de segurança também caso queira usar o código para suas aplicações e o usuário não é o administrador.

![Segurança](https://user-images.githubusercontent.com/92820414/214529995-27ac5be3-7b9a-4c58-866f-e74ce377f97f.gif)
