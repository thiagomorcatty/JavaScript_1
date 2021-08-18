function soma (n1, n2){
    return n1 + n2
}
function setReplace(frase, nome, novo_nome){
   return frase.replace(nome, novo_nome)
}

alert(soma(5, 10))
alert(setReplace("Vai Japão", "Japão", "Brasil"))

var teste
function validaIdade(idade){
    if (idade >= 18){
        teste = true
    }else{
        teste = false
    }
    return teste
}
var idade = prompt ("qual é sua idade? ")
validaIdade(idade)
alert(teste)