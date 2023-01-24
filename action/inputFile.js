let $ = document.querySelector.bind(document);
let file = $('.arquivosFile');
let arquivando = $('.arquivando');

let arquivoBaixar;

arquivando.addEventListener('change', function(){
    arquivoBaixar = this.files[0].name;
    file.value = arquivoBaixar;
})

export default function arquivoBaixado(){
    return window.location =`./executores/${arquivoBaixar}`
}
