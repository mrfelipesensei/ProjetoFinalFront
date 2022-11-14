var add = document.querySelectorAll('.add');
var lanche = document.getElementById('lanche');

var misto = document.getElementById(`misto`);
var bomba = document.getElementById(`bomba`);
var xtudo = document.getElementById(`xtudo`);
var xfrango = document.getElementById(`xfrango`);
var xbrocado = document.getElementById(`xbrocado`);
var heineken = document.getElementById(`heineken`);
var refri = document.getElementById(`refri`);
var suco = document.getElementById(`suco`);

var qtdLanche = document.getElementById('qtd-lanche'); 
var addCarrinho = document.getElementById('add-carrinho');
var carrinho = document.getElementById('carrinho');
var txtQuantidade = document.getElementById('quantidade');
var valor = document.getElementById('valor');
var valorTotal = document.getElementById('valorTotal');
var continuarPed = document.getElementById('continuarPedido');
var limpaPed = document.getElementById('limpaPedido');
var fecharPedido = document.querySelector('#fecharPedido');

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
    lanche.value = lanches[0].nome;
})
bomba.addEventListener(`click`,()=>{
    valorp = 8.00;
    lanche.value = lanches[1].nome;
    toogleModal();
})
xtudo.addEventListener(`click`,()=>{
    valorp = 17.00;
    lanche.value = lanches[2].nome;
    toogleModal();
})
xfrango.addEventListener(`click`,()=>{
    valorp = 19.00;
    lanche.value = lanches[3].nome;
    toogleModal();
})
xbrocado.addEventListener(`click`,()=>{
    valorp = 25.00;
    lanche.value = lanches[4].nome;
    toogleModal();
})
heineken.addEventListener(`click`,()=>{
    valorp = 8.00;
    lanche.value = lanches[5].nome;
    toogleModal();
})
refri.addEventListener(`click`,()=>{
    valorp = 5.00;
    lanche.value = lanches[6].nome;
    toogleModal();
})
suco.addEventListener(`click`,()=>{
    valorp = 6.00;
    lanche.value = lanches[7].nome;
    toogleModal();
})

addCarrinho.addEventListener(`click`,()=>{
    var qtd = Number(qtdLanche.value);
    var opcao = lanche.value;
    totalLanche = qtd * valorp;
    
    carrinho.innerHTML += `<p>${qtd} -- ${opcao} -- R$${totalLanche}</p>`;

    soma += totalLanche;
    valorTotal.innerHTML = `<p> Total: R$${soma}</p>`;

    continuarPed.innerHTML = `<p>Continuar Pedindo</p>`;
    limpaPed.innerHTML = `<a href=pedidos.html><p>Limpar</p></a>`
    fecharPedido.innerHTML = `<a href="finalped.html"><p>Concluir</p></a>`;

    continuarPed.addEventListener("click",()=>{
        toogleModal();
    })
});

var abrirModal = document.querySelector(".add");
var fecharModal = document.querySelector(".fechar-modal");
var fade = document.querySelector("#fade");
var modal = document.querySelector("#modal");
var eventos = [abrirModal,fade,fecharModal];

const toogleModal = ()=>{
    modal.classList.toggle('hide');
    fade.classList.toggle('hide');
}

eventos.map((el)=>{
    el.addEventListener("click",()=>toogleModal());
})


