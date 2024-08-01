// inicializar o status dos jogos
function inicializarStatus() {
if(!localStorage.getItem('statusJogos')) { //!= operador lógico de NEGAÇÃO, if será executado se false
  //localStorage é um armazenamento persistente, enquanto let/const é um armazenamento temporario (dados são perdidos ao carregar a página)
  const statusInicial = 'Disponí­vel, Disponí­vel, Disponível';
    //usar let qnd a variavel possa ser reatribuido ao longo do código, const qnd a variavel nao for mudar
    localStorage.setItem('statusJogos', statusInicial);
  }
  atualizarInterface(); 
}

//Funcão para atualizar a interface dos jogos
function atualizarInterface() {
  let statusJogos = localStorage.getItem('statusJogos'). split(','); // para transformar a string (texto) armazenada em localStorage em um array (lista/ colecoes)
  statusJogos.forEach((status, index) => {
      let gameElement = document.getElementById('game-' + (index + 1)); //seleciona um elemento html específico com base no identificado (id)
      let button = gameElement.querySelector('.dashboard__item__button');

      if (status === 'Disponível') { // == igualdade solta (pode fazer conversao e comparar 5 == `5`), === igualdade estrita (5 diferente de `5`)
          gameElement.querySelector('.dashboard__item__img').classList.remove('dashboard__item__img--rented');
          button.textContent = 'Alugar';
          button.classList.remove('dashboard__item__button--return');
      } else {
          gameElement.querySelector('.dashboard__item__img').classList.add('dashboard__item__img--rented');
          button.textContent = 'Devolver';
          button.classList.add('dashboard__item__button--return');
      }
  });
}

// Função para alterar o status de um jogo
function alterarStatus(gameId) {
  let statusJogos = localStorage.getItem('statusJogos').split(',');
  let statusAtual = statusJogos[gameId - 1];

  if (statusAtual === 'Disponível') {
      statusJogos[gameId - 1] = 'Alugado';
      alert('Você alugou o jogo!');
  } else {
      statusJogos[gameId - 1] = 'DisponÃ­vel';
      alert('Você devolveu o jogo!');
  }

  localStorage.setItem('statusJogos', statusJogos.join(',')); // join converte arrat em string
  atualizarInterface();
}

// Inicializar o status dos jogos quando a pÃ¡gina for carregada
window.onload = inicializarStatus; //diz para o navegador executar a funcao (status do localStorage) quando a pag for totalmente carregada
