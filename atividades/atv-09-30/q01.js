const livro = {
    titulo: "Diário de um Homem Superflúo",
    autor: "Editora 34",
    paginas: 90,

    resumo: function() {
        return `${this.titulo} foi escrito por ${this.autor} e possui ${this.paginas} páginas.`;
    }
};

console.log(livro.resumo());