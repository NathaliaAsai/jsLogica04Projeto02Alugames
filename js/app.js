// inicializar o status dos jogos
function inicializarStatus() {
if(!localStorage.getItem('statusJogos')) { //!= operador lÃ³gico de NEGAÃ‡ÃƒO, if serÃ¡ executado se false
  //localStorage Ã© um armazenamento persistente, enquanto let/const Ã© um armazenamento temporario (dados sÃ£o perdidos ao carregar a pÃ¡gina)
  const statusInicial = 'DisponÃ­vel, DisponÃ­vel, DisponÃ­vel';
    //usar let qnd a variavel possa ser reatribuido ao longo do cÃ³digo, const qnd a variavel nao for mudar
    localStorage.setItem('statusJogos', statusInicial);
  }
  atualizarInterface(); 
}

//FuncÃ£o para atualizar a interface dos jogos
function atualizarInterface() {
  let statusJogos = localStorage.getItem('statusJogos'). split(','); // para transformar a string (texto) armazenada em localStorage em um array (lista/ colecoes)
  statusJogos.forEach((status, index) => {
      let gameElement = document.getElementById('game-' + (index + 1)); //seleciona um elemento html especÃ­fico com base no identificado (Ã­d)
      let button = gameElement.querySelector('.dashboard__item__button');

      if (status === 'DisponÃ­vel') { // == igualdade solta (pode fazer conversao e comparar 5 == `5`), === igualdade estrita (5 diferente de `5`)
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

// FunÃ§Ã£o para alterar o status de um jogo
function alterarStatus(gameId) {
  let statusJogos = localStorage.getItem('statusJogos').split(',');
  let statusAtual = statusJogos[gameId - 1];

  if (statusAtual === 'DisponÃ­vel') {
      statusJogos[gameId - 1] = 'Alugado';
      alert('VocÃª alugou o jogo!');
  } else {
      statusJogos[gameId - 1] = 'DisponÃ­vel';
      alert('VocÃª devolveu o jogo!');
  }

  localStorage.setItem('statusJogos', statusJogos.join(',')); // join converte arrat em string
  atualizarInterface();
}

// Inicializar o status dos jogos quando a pÃ¡gina for carregada
window.onload = inicializarStatus; //diz para o navegador executar a funcao (status do localStorage) quando a pag for totalmente carregada
