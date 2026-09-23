const formDados = document.getElementById("formDados");

function calcularQuadrado(evento) {
    evento.preventDefault();

    let valorInteiro = Number(document.getElementById("valorInteiro").value);

    let quadrado = valorInteiro * valorInteiro;

    const pResultado = document.getElementById("resultado");

    pResultado.textContent = "O quadrado do número é: " + quadrado;
}

formDados.addEventListener("submit", calcularQuadrado);
