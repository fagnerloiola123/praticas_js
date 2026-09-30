const carro = { 
    marca: "Toyota", 
    modelo: "Corola", 
    ano: "2015",
    cor:  "Black",
    velocidade: 0,

    buzinar: function () {
        console.log("Estou buzinando...");
    },
    acelerar: function () {
      this.velocidade = this.velocidade + '10';
    }
}

console.table(carro);

carro.cor = "Verde";

console.table(carro);
console.log(`O ano do carro é: ${carro.ano}`);

carro.buzinar('BI BI BI');
carro.acelerar ();
console.table (carro);
