let nome = document.querySelector('#nome')
let email = document.querySelector('#email')
let mensagem = document.querySelector('#mensagem')

let nomeOk = false
let emailOk = false
let mensagemOk = false

function validarNome() {
    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length < 3) {
        txtNome.innerHTML = 'Nome inválido'
        txtNome.style.color = 'red'
        nomeOk = false
    } else {
        txtNome.innerHTML = ""
        nomeOk = true
    }
}

function validarEmail() {
    let txtEmail = document.querySelector('#txtEmail')
    if ((email.value.indexOf('@') == -1) || (email.value.indexOf('.') == -1)) {
        txtEmail.innerHTML = 'Email inválido'
        txtEmail.style.color = 'red'
        emailOk = false
    } else {
        txtEmail.innerHTML = ''
        emailOk = true
    }
}

function validarMensagem() {
    let txtAssunto = document.querySelector('#txtMensagem')
    let contCaracteres = mensagem.value.length

    txtMensagem.innerHTML = contCaracteres

    if (mensagem.value.length > 250) {
        txtMensagem.innerHTML = contCaracteres + ' - Por favor diminua a quantidade de caracteres.'
        txtMensagem.style.color = 'red'
        mensagemOk = false
    } else {
        txtMensagem.innerHTML = contCaracteres
        txtMensagem.style.color = 'black'
        mensagemOk = true
    }
}

function enviar() {
    if (nomeOk && emailOk && mensagemOk) {
        alert('Mensagem enviada. Obrigade por entrar em contato!')
    } else {
        alert('Preencha o formulário corretamente.')
    }
}