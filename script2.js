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

misto.addEventListener(`click`,()=>{
    valorp = 4.00;
    lanche.value = lanche[0].nome;
})
bomba.addEventListener(`click`,()=>{
    valorp = 8.00;
    lanche.value = lanche[1].nome;
})
xtudo.addEventListener(`click`,()=>{
    valorp = 17.00;
    lanche.value = lanche[2].nome;
})
xfrango.addEventListener(`click`,()=>{
    valorp = 19.00;
    lanche.value = lanche[3].nome;
})
xbrocado.addEventListener(`click`,()=>{
    valorp = 25.00;
    lanche.value = lanche[4].nome;
})
heineken.addEventListener(`click`,()=>{
    valorp = 8.00;
    lanche.value = lanche[5].nome;
})
refri.addEventListener(`click`,()=>{
    valorp = 5.00;
    lanche.value = lanche[6].nome;
})
suco.addEventListener(`click`,()=>{
    valorp = 6.00;
    lanche.value = lanche[7].nome;
})