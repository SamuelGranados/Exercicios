/*var nomes = ["carro", "aviao", "bicicleta"];
console.log(nomes[2]);
console.log(typeof(nomes));

var veiculos = Array("carro", "aviao", "bicicleta");
console.log(veiculos[0]);
console.log(typeof(veiculos));

nomes[3] = "jato";
console.log(nomes);*/

var nomes = ["carro", "aviao", "bicicleta"];
console.log(nomes);
console.log(typeof(nomes));

nomes.push("jato");
nomes.push("moto");
console.log(nomes);

nomes.sort();
console.log(nomes);

/*let veiculo = nomes.pop();
console.log(veiculo);
console.log(nomes);

let veiculo2 = nomes.shift();
console.log(veiculo2);
console.log(nomes);*/


console.log(nomes.length);
nomes[nomes.length] = "patinet";
console.log(nomes);

/*
for(let i=0; i<nomes.length; i++){
    console.log(nomes[i]);
}

let contador = 0;
while (contador < nomes.length){
    console.log(nomes[contador++]);    
}
*/

nomes.map(function(n){
    console.log(n);
})
