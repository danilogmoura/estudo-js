# Desafio da semana #4

```js
/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
var isTruthy = function(value) {
    return !!value;
};

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
/*
https://developer.mozilla.org/en-US/docs/Glossary/Falsy

> isTruthy(false);
false
> isTruthy(0);
false
> isTruthy(-0);
false
> isTruthy(0n);
false
> isTruthy('');
false
> isTruthy(null);
false
> isTruthy(undefined);
false
> isTruthy(NaN);
false
*/

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
/*
https://developer.mozilla.org/en-US/docs/Glossary/Truthy

> isTruthy(true);
true
> isTruthy({});
true
> isTruthy([]);
true
> isTruthy(42);
true
> isTruthy("0");
true
> isTruthy("false");
true
> isTruthy(new Date());
true
> isTruthy(-42);
true
> isTruthy(12n);
true
> isTruthy(Infinity);
true
*/

/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padrão
- `quantidadePessoas` - Number - zero por padrão
*/
var carro = {
    marca: 'Chevrolet',
    modelo: 'Montana',
    placa: 'ABD 9518',
    ano: 2020,
    cor: 'Azul',
    quantasPortas: 5,
    assentos: 5,
    quantidadePessoas: 0,
};

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
carro.mudarCor = function(value){
    this.cor = value;
};

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
carro.obterCor = function(){
    return this.cor;
};

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
carro.obterModelo = function(){
    return this.modelo;
};

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
carro.obterMarca = function(){
    return this.marca;
};

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
carro.obterMarcaModelo = function(){
    return "Esse carro é um " + this.obterMarca() + " " + this.obterModelo();
};

/*
Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:
- Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse
número não precisa encher o carro, você poderá acrescentar as pessoas aos
poucos.
- O método deve retornar a frase: "Já temos [X] pessoas no carro!"
- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!"
- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".
*/
carro.entrar = function(value) {
    if(this.quantidadePessoas == this.assentos) {
        return 'O carro já está lotado!';
    } else if((this.assentos - this.quantidadePessoas) < value) {
        return 'Só cabem mais ' + (this.assentos - this.quantidadePessoas) + ' pessoas!';
    } 
    
    this.quantidadePessoas += value;
    return 'Já temos ' + this.quantidadePessoas + ' pessoas no carro!';
};

/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/
/*
> carro.obterCor();
'Azul'
*/

// Mude a cor do carro para vermelho.
/*
> carro.mudarCor('vermelho');
*/

// E agora, qual a cor do carro?
/*
> carro.obterCor();
'vermelho'
*/

// Mude a cor do carro para verde musgo.
/*
> carro.mudarCor('verde musgo');
*/

// E agora, qual a cor do carro?
/*
> carro.obterCor();
'verde musgo'
*/

// Qual a marca e modelo do carro?
/*
> carro.obterMarcaModelo();
'Esse carro é um Chevrolet Montana'
*/

// Adicione 2 pessoas no carro.
/*
> carro.entrar(2);
'Já temos 2 pessoas no carro!'
*/

// Adicione mais 4 pessoas no carro.
/*
> carro.entrar(4);
'Só cabem mais 3 pessoas!'
*/

// Faça o carro encher.
/*
> carro.entrar(3);
'Já temos 5 pessoas no carro!'
*/

// Tire 4 pessoas do carro.
/*
> carro.quantidadePessoas -= 4;
1
*/

// Adicione 10 pessoas no carro.
/*
> carro.entrar(10);
'Só cabem mais 4 pessoas!'
*/

// Quantas pessoas temos no carro?
/*
> carro.quantidadePessoas;
1
*/
```
