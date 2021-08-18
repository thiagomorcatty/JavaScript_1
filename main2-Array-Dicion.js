var lista = ["maçã", "pera", "laranja"]
console.log(lista)
console.log(lista[2]) //escolher um da lista
alert(lista[0])
console.log(lista.length)

lista.push("uva") //acrescentar um elemento
console.log(lista)
console.log(lista.length)
console.log(lista.reverse())

lista.pop() //Retirar os a mais da lista
console.log(lista)
console.log(lista.length)
console.log(lista.reverse())

console.log(lista.toString())
console.log(lista.join(" - "))
console.log(lista.join(" ! "))
console.log(lista.toString()[0])
console.log(lista.toString()[1])
console.log(lista.toString()[2])
console.log(lista.toString()[3])
//dicionario
var fruta1 = {nome: "Maçã", cor: "Vermelho"}
var fruta2 = {nome: "Pera", cor: "Amarelo"}
var fruta3 = {nome: "Laranja", cor: "Alaranjado"}
console.log(fruta1)
console.log(fruta1.nome)
console.log(fruta1.cor)
//lista de dicionarios
var varejao = [fruta1, fruta2, fruta3]
console.log(varejao)
console.log(varejao[1])
console.log(varejao[2].cor)