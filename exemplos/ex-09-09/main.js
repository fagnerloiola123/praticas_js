let nome = "Fagner Loiola";
let idade = 17;

console.log("O nome do usuário é: " + nome);
console.log("A idade do usuário é: " + idade);

const pNomeUsuario = document.getElementById("nomeUsuario"); // pega um elemento pelo ID
pNomeUsuario.textContent = "O nome do usuário é: " + nome;
const pIdadeUsuario = document.getElementById("idadeUsuario"); // pega um elemento pelo ID
pIdadeUsuario.textContent = "A idade do usuário é: " + idade;