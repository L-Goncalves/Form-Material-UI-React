function ValidarCPF(cpf) {
    if(cpf.length != 11){
        return {valido: false, texto: "CPF deve ter 11 Digitos"}
    }
    else{
      return {valido: true, texto: ''}
    }
}


function ValidarSenha(senha) {
    if(senha.length != 4 || senha.length > 20){
        return {valido: false, texto: "Senha deve ter entre 4 e 20 Digitos"}
    }
    else{
      return {valido: true, texto: ''}
    }
}

export {ValidarCPF, ValidarSenha}