var add = document.querySelectorAll('.add');
var lanche = document.getElementById('lanche');

var misto = document.getElementById('misto');
var bomba = document.getElementById('bomba');
var xtudo = document.getElementById('xtudo');
var xfrango = document.getElementById('xfrango');
var xbrocado = document.getElementById('xbrocado');
var heineken = document.getElementById('heineken');
var refri = document.getElementById('refri');
var suco = document.getElementById('suco');

var qtdLanche = document.getElementById('qtd-lanche'); 
var addCarrinho = document.getElementById('add-carrinho');
var carrinho = document.getElementById('carrinho');
var txtQuantidade = document.getElementById('quantidade');
var valor = document.getElementById('valor');
var valorTotal = document.getElementById('valorTotal');

var soma = 0;
var totalLanche = 0;

var lanches = [
    {nome: 'Misto Quente', valor: 4.00},
    {nome: 'Bomba', valor: 8.00},
    {nome: 'X-Tudo', valor: 17.00},
    {nome: 'X-Tudo de Frango', valor: 19.00},
    {nome: 'X-Brocado', valor: 25.00},
    {nome: 'Heineken', valor: 8.00},
    {nome: 'Refrigerante Lata', valor: 5.00},
    {nome: 'Sucos Naturais', valor: 6.00}
]