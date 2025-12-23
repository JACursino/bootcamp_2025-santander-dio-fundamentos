// Opcional: Carregar imagem dinamicamente
const cardsData = [
  {
    id: "card-1",
    imagem: "images/viking.jpeg",
  }
];

function renderizarCards() {
  cardsData.forEach(card => {
    const cardElement = document.getElementById(card.id);
    if (cardElement) {
      cardElement.style.backgroundImage = `url('${card.imagem}')`;
    }
  });
}

window.onload = renderizarCards;
