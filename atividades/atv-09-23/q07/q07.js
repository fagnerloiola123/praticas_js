const formDados = document.getElementById("formDados");

function encontrarImpares(evento) {
    evento.preventDefault();

    let valor1 = Number(document.getElementById("valor1").value);
    let valor2 = Number(document.getElementById("valor2").value);

    let inicio = Math.min(valor1, valor2);
    let fim = Math.max(valor1, valor2);

    let impares = [];

    for (let numero = inicio; numero <= fim; numero++) {
        if (numero % 2 !== 0) {
            impares.push(numero);
        }
    }

    const pResultado = document.getElementById("resultado");

    pResultado.textContent = "Números ímpares: " + impares.join(", ");
}

formDados.addEventListener("submit", encontrarImpares);
