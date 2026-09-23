const formDados = document.getElementById("formDados");

function converter(evento) {
    evento.preventDefault();

    let valorPolegadas = Number(document.getElementById("valorPolegadas").value);

    let valorCentimetros = valorPolegadas * 2.54;

    const pResultado = document.getElementById("resultado");

    pResultado.textContent = "O resultado da conversão é: " + valorCentimetros.toFixed(2) + " cm";
}

formDados.addEventListener("submit", converter);
