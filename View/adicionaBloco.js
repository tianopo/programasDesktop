import arquivoBaixado from '../action/inputFile.js';

let nome = document.querySelector('#nome');

export function adicionaBloco(img){
  return `
    <div class="movimento bloco subtitle is-6">
      <p>${nome.value}</p>
      <a class="baixar" href="${arquivoBaixado()}"
      onClick="window.open(this.href,'pagename','resizable,height=1080,width=720'); 
      return false;" download>
        <img src="${img}" class="bloco-imagem">
      </a>
    </div>
  `
}
