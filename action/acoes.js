import repetir from './movimentar.js';
import { adicionaBloco } from '../View/adicionaBloco.js';
import { fileName } from '../action/inputImage.js'
import { validarEntrada, seguranca, sair } from './validador.js';

let $ = document.querySelector.bind(document);
export let arquivos = [];
let excluirArquivos = [];
let clicked = false;
let id = 1;

let adicionar = $('.adicionar');
let principalAcoes = $('.principal-acoes');
let cancelarAcao = $('.cancelar');
let adicionaImg = $('.adicionaImg');
let ordenarAcao = $('.ordenar');

export default function download() {
  if (seguranca == true) {
    validarEntrada();
  } else {
    if (fileName == undefined) {
      $('.notification').classList.remove('is-invisible')
    } else {
      arquivos.push(adicionaBloco(fileName));
      excluirArquivos.push(adicionaBloco(fileName));
      localStorage.setItem(id, adicionaBloco(fileName));
      id++;
      adicionar.innerHTML = arquivos.join(' ');

      limpaInput();
      repetir()
    }
  }
}

function viewStorage(){
  if(arquivos.length == 0){
    for(let i=0;i<id;i++){
    let a = localStorage.getItem(id)
    if(a == null) {
      adicionar.innerHTML = arquivos.join(' ');
      break;
    }
    arquivos.push(a)
    excluirArquivos.push(a);
    id++
    }
  }
}

function ordenar() {
  adicionar.innerHTML = arquivos.join(' ');
  repetir();
}

function limpaInput() {
  link.value = "";
  nome.value = "";
  link.focus();
}

function botaoExcluir() {
  adicionar.innerHTML = excluirArquivos.join(' ');
  principalAcoes.classList.add('is-invisible');
  cancelarAcao.classList.remove('is-invisible');
  adicionaImg.classList.add('is-invisible');
  ordenarAcao.classList.add('is-invisible');

  let exclusao = document.querySelectorAll('.bloco')
  for(let o of exclusao) o.classList.add('exclusao')

  for (let i = 0; i < excluirArquivos.length; i++) {
    exclusao[i].addEventListener('click', (e) => {
      e.preventDefault();
      clicked = true
      
      if (clicked == true) {
        localStorage.clear();
        excluirArquivos.splice(i, 1);
        arquivos.splice(i, 1);
        id = 1;
        for(let y=0;y<id;y++){
          if(arquivos[y] == undefined){
            break;
          }
          localStorage.setItem(id, arquivos[y]);
          id++
        } 
        adicionar.innerHTML = arquivos.join(' ');
        repetir();
        clicked = false;

        principalAcoes.classList.remove('is-invisible');
        cancelarAcao.classList.add('is-invisible');
        adicionaImg.classList.remove('is-invisible');
        ordenarAcao.classList.remove('is-invisible');
      }
    })
  }
}

function cancelaExclusao() {
  adicionar.innerHTML = arquivos;
  principalAcoes.classList.remove('is-invisible');
  cancelarAcao.classList.add('is-invisible');
  adicionaImg.classList.remove('is-invisible');
  ordenarAcao.classList.remove('is-invisible');
  repetir();
}

$('#download').addEventListener('click', () => download())
$('.cancelar').addEventListener('click', () => cancelaExclusao())

$('.bola').addEventListener('click', () => {
  arquivos.length === 0 ? $('.notification')
    .classList.remove('is-invisible') : botaoExcluir();
})
$('#ordem').addEventListener('click', () => {
  arquivos.length === 0 ? $('.notification')
    .classList.remove('is-invisible') : ordenar();
})

document.querySelector('.botaoSaida').addEventListener('click', () => {
  sair();
  repetir();
  adicionar.innerHTML = arquivos.join(' ');
});

viewStorage();