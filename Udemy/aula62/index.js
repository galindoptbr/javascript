const pessoas = [
    {nome: 'Pedro', idade: 64},
    {nome: 'Maria', idade: 72},
    {nome: 'Jose', idade: 20},
    {nome: 'Ramom', idade: 7},
    {nome: 'Luzia', idade: 51},
];

const comId = pessoas.map(function(obj, indice) {
    obj.id = (indice +1);
    return obj;
});

console.log(comId);

const num = [10, 4, 44, 3, 2, 1, 55, 63, 32, 27];

const maisVelha = pessoas.reduce(function(acumulador, valor) {
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
});
console.log(maisVelha);