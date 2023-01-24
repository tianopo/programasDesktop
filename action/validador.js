import repetir from './movimentar.js';

export let seguranca = true;
let principal = document.querySelector('.principal');
export let done;

export default function admin() {
    done = 0;
    let usuario = document.getElementsByName('usuario')[0].value;
    let senha = document.getElementsByName('senha')[0].value;

    usuario = usuario.toLowerCase();
    senha = senha.toLowerCase();
    if (usuario == "administrador" && senha == "1234") {
        principal.classList.remove('is-invisible');
        seguranca = false;
        repetir();

        document.querySelector('.alterarAdm').classList.add('is-invisible');
        document.querySelector('.botaoSaida').classList.remove('is-invisible');
        done = 1;
        return false;
    }
    if (done == 0) alert("Dados incorretos, tente novamente");
}

export function validarEntrada(){
    if(seguranca == true){
        principal.classList.add('is-invisible');
    }
}

export function sair(){
    document.querySelector('.principal').classList.add('is-invisible');
    document.querySelector('.alterarAdm').classList.remove('is-invisible');
    document.querySelector('.botaoSaida').classList.add('is-invisible');
    seguranca = true;
    done = 0;
}