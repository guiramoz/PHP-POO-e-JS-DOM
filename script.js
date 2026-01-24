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
    // habilita o botão
    btnSubmit.disabled = false;
    btnSubmit.style.cursor = 'pointer';
    } else {
    // desabilita o botão
    btnSubmit.disabled = true;
    btnSubmit.style.cursor = 'not-allowed';
    }


    }) 

//função para trocar a cor do texto
function alternarClasse(elemento, estaValido) {
    const icone = elemento.querySelector('i');

    if(estaValido){
        elemento.classList.add('valid');
        elemento.classList.remove('invalid');
        icone.classList.remove('ph-circle');
        icone.classList.add('ph-check-circle');
    } else {
        elemento.classList.remove('valid');
        elemento.classList.add('invalid');
        icone.classList.remove('ph-check-circle');
        icone.classList.add('ph-circle')
    }
    
}

form.addEventListener ('submit', (e) =>{
    e.preventDefault();
    alert('Formúlario enviado com sucesso!')
})

})
