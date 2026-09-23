const formDados = document.getElementById("formDados");

function calcularNotaFinal(evento) {
    evento.preventDefault();

    let notaN1 = Number(document.getElementById("notaN1").value);
    let notaN2 = Number(document.getElementById("notaN2").value);

    let notaFinal = (notaN1 * 2 + notaN2 * 3) / 5;

    const pResultado = document.getElementById("resultado");

    if (notaFinal >= 6) {
        pResultado.textContent =
            "Sua nota final é: " + notaFinal.toFixed(1) + ". Você está aprovado!";
    } else {
        pResultado.textContent =
            "Sua nota final é: " + notaFinal.toFixed(1) + ". Você está reprovado!";
    }
}

formDados.addEventListener("submit", calcularNotaFinal);
