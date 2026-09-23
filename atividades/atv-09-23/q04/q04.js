const formDados = document.getElementById("formDados");

function calcularCircunferencia(evento) {
    evento.preventDefault();

    let valorRaio = Number(document.getElementById("valorRaio").value);

    let circunferencia = 2 * Math.PI * valorRaio;

    const pResultado = document.getElementById("resultado");

    pResultado.textContent = "A circunferência do círculo é: " + circunferencia.toFixed(2);
}

formDados.addEventListener("submit", calcularCircunferencia);
