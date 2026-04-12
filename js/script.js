//Aguarda o HTML carregar completamente

document.addEventListener('DOMContentLoaded', () => {

    //Selecionar os elementos do DOM

    const inputSenha = document.getElementById('senha');
    const btnSubmit = document.getElementById('btnSubmit');
    const form = document.getElementById('formCadastro');

    //Selecionar os itens da lista de requisitos de senha
    const reqLength = document.getElementById('req-length'); //tamanho
    const reqUpper = document.getElementById('req-upper'); //maiuscula
    const reqNumber = document.getElementById('req-number'); //numero
    const reqSpecial = document.getElementById('req-special'); //car. especial


//função que verifica a senha a cada tecla digitada
inputSenha.addEventListener('input', () => {
    const valor = inputSenha.value;

    //validar tamanho
    const hasLength = valor.length >= 8;
    alternarClasse(reqLength, hasLength);

    //validar letra maiuscula (Regex)
    const hasUpper = /[A-Z]/.test(valor);
    alternarClasse(reqUpper, hasUpper);

    //validar numero
    const hasNumber = /[0-9]/.test(valor);
    alternarClasse(reqNumber, hasNumber);

    //validar caractere especial
    const hasSpecial = /[!@#$%¨&*()_<>?.]/.test(valor);
    alternarClasse(reqSpecial, hasSpecial);

        if (hasLength && hasUpper && hasNumber && hasSpecial) {
            btnSubmit.disabled = false;
            btnSubmit.style.cursor = 'pointer';
        } else {
            btnSubmit.disabled = true;
            btnSubmit.style.cursor = 'not-allowed';
        }
    });

    form.addEventListener('submit', function (event) {
        if (!validarFormulario()) {
            event.preventDefault();
        }
    });
});

function alternarClasse(elemento, estaValido) {
    const icone = elemento.querySelector('i');

    if (estaValido) {
        elemento.classList.add('valid');
        elemento.classList.remove('invalid');
        icone.classList.remove('ph-circle');
        icone.classList.add('ph-check-circle');
    } else {
        elemento.classList.remove('valid');
        elemento.classList.add('invalid');
        icone.classList.remove('ph-check-circle');
        icone.classList.add('ph-circle');
    }
}

const inputNome = document.getElementById('nome');
const erroNome = document.getElementById('erro-nome');
const inputEmail = document.getElementById('email');
const erroEmail = document.getElementById('erro-email');
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validarFormulario() {
    let valido = true // FLAG: monitora o estado de validade do formulário
    

    /*validação do nome (obrigatório) */
    //critério de aceite 1: o campo nome não pode ser vazio ou nulo

    if (inputNome.value.trim() === '') { //pega po campo input nome e remove espaços em branco 
         /*se o camppo estiver vazio, após removes espaços em branco */
         erroNome.textContent = '* O nome é obrigatório'
         erroNome.classList.add('erro-msg')
         valido = false
    }
    else{
        /*caso o campo não esteja vazio o erro deve ser limpo */
        erroNome.textContent = ' '
        erroNome.classList.remove('erro-msg')
    }

    //validação do email
    //critério de aceite 1: o campo não pode estar vazio
    //critério de aceite 2: o email digitado precisa ser txto@texto.texto
    if (inputEmail.value.trim() === '') {
        erroEmail.textContent = '* O e-mail é obrigatório'
        erroEmail.classList.add('erro-msg')
        valido = false
    }
    
    else if (!emailRegex.test(inputEmail.value)) {
        erroEmail.textContent = '* Digite um email válido';
        erroEmail.classList.add('erro-msg');
        valido = false;
    }
    
    else{
        /*está tudo ok: email não está vzaio e segue o regex */
        erroEmail.textContent = ' '
        erroEmail.classList.remove('erro-msg')
    }

    return valido;
}

