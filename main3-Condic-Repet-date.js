var nome = prompt("Qual é o seu nome? ")
var idade = prompt("Qual é a sua idade? ")
if (idade >= 18){
    alert(nome + ", você é maior de idade pois tem " + idade + " anos")
} else {
    alert(nome + ", você é menor de idade pois tem " + idade + " anos")
}

var idade2= 0
while (idade2 <= idade){
    console.log(idade2)
    idade2++ //podia usar idade2 = idade 2 +1
}
var idade3
for (idade3 = idade; idade3>=0; idade3--){
    alert(idade3)
}
var d = new Date()
console.log(d.get)
console.log(d.getDay())
console.log(d.getUTCHours())
console.log(d.setUTCFullYear())