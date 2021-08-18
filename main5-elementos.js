function botao1(){
    alert("Obrigado")
}
function botao2(){
    document.getElementById("clicador").innerHTML = "<b> Obrigado por clicar denovo </b>"
    //console.log(document.getElementById("clicador"))
}
function redirecionar(){
    window.open("https://www.google.com.br/") //abrir outra
    window.location.href = "https://www.americanas.com" //abrir a mesma
}
function mouseDoido(){
    //alert("Alerta Geral")
    document.getElementById("mousemove").innerHTML = "Mudou o texto, hahaha"
}
function mouseDoido2(){
    document.getElementById("mousemove").innerHTML = "Passe o Mouse aqui denovo"
}


//Segunda forma de fazer:
function mouseDoido3(elemento){
    elemento.innerHTML = "Mudou o Texto denovo"
}
function mouseDoido4(elemento){
    elemento.innerHTML = "Passe o Mouse denovo e denovo"
}
function carregar(){
    alert("Pagina Carregada")
}
function escolha(elemento){
    console.log(elemento.value)
}