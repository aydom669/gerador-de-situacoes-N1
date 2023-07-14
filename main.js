var situacoes = [
  "Cliente solicita um desconto para continuar com o serviço",
  "Cliente está insatisfeito com a qualidade do atendimento e considera cancelar",
  "Cliente deseja negociar o valor da fatura para evitar o cancelamento",
  "Cliente recebeu uma oferta da concorrência e está considerando migrar",
  "Cliente precisa de mais benefícios para continuar com o serviço",
  "Cliente está descontente com a política de renovação de contrato",
  "Cliente enfrenta problemas frequentes e está pensando em cancelar",
  "Cliente solicita uma revisão do contrato para evitar a migração",
  "Cliente recebeu um aumento no preço do plano e está avaliando outras opções",
  "Cliente está considerando migrar para um plano com mais vantagens",
  "Cliente quer saber sobre possíveis benefícios para permanecer como cliente",
  "Cliente solicita um upgrade de serviço para continuar com a empresa",
  "Cliente precisa de um plano mais personalizado para continuar",
  "Cliente está insatisfeito com o suporte técnico e cogita cancelar",
  "Cliente está avaliando outras opções no mercado antes de renovar",
  "Cliente quer saber sobre programas de fidelidade e recompensas",
  "Cliente precisa de uma solução rápida para um problema crítico",
  "Cliente deseja receber um atendimento prioritário para continuar",
  "Cliente está considerando mudar de operadora por falta de vantagens",
  "Cliente quer renegociar o prazo de fidelidade para evitar o cancelamento",
  "Cliente está insatisfeito com a qualidade do serviço prestado",
  "Cliente precisa de um plano mais flexível para suas necessidades",
  "Cliente quer saber sobre descontos especiais para clientes antigos",
  "Cliente recebeu uma oferta de pacote promocional da concorrência",
  "Cliente enfrenta dificuldades com o serviço e considera cancelar",
  "Cliente precisa de uma solução rápida para um problema de cobertura",
  "Cliente está descontente com a política de suporte da empresa",
  "Cliente solicita uma melhoria nos serviços oferecidos para continuar",
  "Cliente está considerando mudar para uma operadora com melhor reputação",
  "Cliente deseja adicionar serviços extras ao seu pacote atual",
  "Cliente enfrenta problemas recorrentes de cobrança e considera cancelar",
  "Cliente quer saber sobre opções de renovação antecipada com desconto",
  "Cliente está avaliando a relação custo-benefício do serviço atual",
  "Cliente precisa de um atendimento especializado para resolver seu problema",
  "Cliente está insatisfeito com as condições de fidelidade do contrato",
  "Cliente quer saber sobre opções de upgrade sem custo adicional",
  "Cliente recebeu um aumento na mensalidade e está considerando cancelar",
  "Cliente enfrenta dificuldades técnicas constantes e cogita mudar de empresa",
  "Cliente solicita um plano mais econômico para continuar",
  "Cliente está insatisfeito com a qualidade do sinal e considera migrar",
  "Cliente precisa de um pacote personalizado com serviços específicos",
  "Cliente quer saber sobre vantagens exclusivas para clientes retidos",
  "Cliente enfrenta problemas de estabilidade no serviço e avalia outras opções",
  "Cliente está considerando migrar para uma empresa com melhor atendimento",
  "Cliente deseja receber um benefício especial para permanecer com a empresa",
  "Cliente está descontente com as condições contratuais e pensa em cancelar",
  "Cliente solicita uma revisão dos termos do contrato para continuar",
  "Cliente está avaliando ofertas de outras operadoras antes de renovar",
  "Cliente quer saber sobre descontos progressivos para clientes fiéis",
];

var situacoesContainer = document.getElementById("text");
var usedWords = [];

function generateRandomWord() {
  if (usedWords.length === situacoes.length) {
    usedWords = [];
  }

  var availableWords = situacoes.filter((word) => !usedWords.includes(word));
  var randomIndex = Math.floor(Math.random() * availableWords.length);
  var randomWord = availableWords[randomIndex];
  usedWords.push(randomWord);
  situacoesContainer.textContent = randomWord;
}
