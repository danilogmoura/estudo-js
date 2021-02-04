/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var var01 = ['array', 1, null, undefined, '', true];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myFunction01(arg) {
    return arg;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log( myFunction01(var01)[1] );

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function myFunction02(array, index) {
    return array[index];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var var02 = ['array', 1, 'casa', undefined, 1.98];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log( );
console.log( myFunction02( var02, 0 ) );
console.log( myFunction02( var02, 1 ) );
console.log( myFunction02( var02, 2 ) );
console.log( myFunction02( var02, 3 ) );
console.log( myFunction02( var02, 4 ) );

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book( nomeLivro ) {
    var biblioteca = {
        'Turma Da Mônica' : {
            quantidadePaginas: 250,
            autor: 'Mauricio de Sousa',
            editora: 'Panini'
        },
        'Game Of Thrones': {
            quantidadePaginas: 612,
            autor: 'George RR Martin',
            editora: 'Bantam'
        },
        'Beco Diagonal': {
            quantidadePaginas: 208,
            autor: 'Revensen, Jody',
            editora: 'Galera Record'
        }
    };

    return nomeLivro ? biblioteca[nomeLivro] : biblioteca;
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log();
console.log( book() );

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var nomeLivro = "Game Of Thrones";
console.log( "O livro " + nomeLivro + " tem " + book(nomeLivro).quantidadePaginas + " páginas!");

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
nomeLivro = "Turma Da Mônica";
console.log( "O livro " + nomeLivro + " é do Autor " + book( nomeLivro ).autor);

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
nomeLivro = "Beco Diagonal";
console.log( "O livro " + nomeLivro + " foi publicado pela editora " + book( nomeLivro ).editora);