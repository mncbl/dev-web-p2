const jogadoresMasculinos = jogadores.filter((ele) => ele.elenco === "masculino");
const jogadoresFemininos = jogadores.filter((ele) => ele.elenco === "feminino");

const ele_hom = document.getElementById("homem");
const ele_mul = document.getElementById("mulher");

const createPlayerElement = (player) => {
  const jogadorDiv = document.createElement("div");
  jogadorDiv.className = "jogador-div";

  jogadorDiv.innerHTML = `
    <img src="${player.imagem}">
    <p>${player.nome}</p>
  `;

  jogadorDiv.dataset.nome = player.nome;
  jogadorDiv.dataset.nome_completo = player.nome_completo;
  jogadorDiv.dataset.descricao = player.descricao;
  jogadorDiv.dataset.altura = player.altura;
  jogadorDiv.dataset.nascimento = player.nascimento;
  jogadorDiv.dataset.posicao = player.posicao;
  jogadorDiv.dataset.imagem = player.imagem;

  return jogadorDiv;
};

const appendPlayersToDivision = (jogadores, division) => {
  const jogadorDivs = jogadores.map(createPlayerElement);
  jogadorDivs.forEach((jogadorDiv) => {
    division.appendChild(jogadorDiv);
    jogadorDiv.addEventListener("click", manipularEvento);
  });
};

appendPlayersToDivision(jogadoresMasculinos, ele_hom);
appendPlayersToDivision(jogadoresFemininos, ele_mul);

function manipularEvento(event) {
  const jogadorDiv = event.currentTarget;
  const nome = jogadorDiv.dataset.nome;
  const nome_completo = jogadorDiv.dataset.nome_completo;
  const descricao = jogadorDiv.dataset.descricao;
  const altura = jogadorDiv.dataset.altura;
  const nascimento = jogadorDiv.dataset.nascimento;
  const posicao = jogadorDiv.dataset.posicao;
  const imagem = jogadorDiv.dataset.imagem;

  localStorage.setItem("nome", nome);
  localStorage.setItem("posicao", posicao);
  localStorage.setItem("nascimento", nascimento);
  localStorage.setItem("altura", altura);
  localStorage.setItem("nome_completo", nome_completo);
  localStorage.setItem("descricao", descricao);
  localStorage.setItem("imagem", imagem);

  window.location.href = "detalhes.html";
};
