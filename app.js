const livros = require('./database')

//pegar o input
//Se for sim, mostra as categorias disponíveis e pergunta qual categoria ela escolhe
//Se não, mostra os livros em ordem crescente pela quantidade de página


const readline = require('readline-sync')
const entradaInicial = readline.question("Deseja buscar um livro?S/N")

if(entradaInicial.toLocaleUpperCase() =='S'){
    console.log("Essas são as categorias disponíveis:")
    console.log("Produtividade e estilo de vida |", "TI |", "Ficção")

    const entradaCategoria = readline.question("Qual categoria você escolhe?")

    const retorno = livros.filter(livro => livro.categoria === entradaCategoria)

    console.table(retorno)
} else{
   const livrosOrdenados = livros.sort((a,b)=>a.paginas -b.paginas)
    console.log("Essas são todos os livros disponíveis:")
    console.table(livrosOrdenados)
}


