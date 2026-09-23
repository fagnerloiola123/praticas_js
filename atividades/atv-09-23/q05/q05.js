const formDados = document.getElementById("formDados");

function calcularSalario(evento) {
    evento.preventDefault();

    let valorHora = Number(document.getElementById("valorHora").value);
    let horasTrabalhadas = Number(document.getElementById("horasTrabalhadas").value);

    let salario = valorHora * horasTrabalhadas;

    const pResultado = document.getElementById("resultado");

    pResultado.textContent = "O salário do professor é: R$ " + salario.toFixed(2);
}

formDados.addEventListener("submit", calcularSalario);
