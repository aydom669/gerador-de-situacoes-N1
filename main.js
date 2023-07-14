// Lista

const situacoes = [
  "Cliente relata problemas de conexão com a internet",
  "Cliente está com dificuldades para configurar o roteador",
  "Cliente deseja solicitar a transferência de número para a Claro",
  "Cliente precisa de suporte técnico para resolver problemas de sinal",
  "Cliente quer obter informações sobre os planos e pacotes disponíveis",
  "Cliente recebeu uma fatura com valores incorretos",
  "Cliente está enfrentando dificuldades para ativar um novo chip",
  "Cliente deseja solicitar uma segunda via da fatura",
  "Cliente precisa de ajuda para configurar o serviço de voicemail",
  "Cliente está com problemas no serviço de TV e deseja assistência",
  "Cliente quer cancelar um serviço específico",
  "Cliente está com dificuldades para efetuar chamadas",
  "Cliente recebeu uma cobrança indevida e precisa de reembolso",
  "Cliente precisa de suporte para instalar uma linha telefônica",
  "Cliente quer solicitar um upgrade de velocidade na internet",
  "Cliente está com problemas para acessar o serviço de streaming da Claro",
  "Cliente deseja adquirir um novo smartphone através da Claro",
  "Cliente precisa de ajuda para configurar o serviço de e-mail",
  "Cliente está insatisfeito com o atendimento recebido anteriormente",
  "Cliente quer adicionar um pacote de canais extras à sua assinatura de TV",
  "Cliente recebeu uma oferta promocional da concorrência e está considerando migrar",
  "Cliente deseja transferir a titularidade da conta para outra pessoa",
  "Cliente está enfrentando problemas de cobertura em determinada região",
  "Cliente precisa de suporte para configurar o serviço de chamada em espera",
  "Cliente quer solicitar uma mudança de endereço para a instalação dos serviços",
  "Cliente está com dificuldades para enviar mensagens de texto",
  "Cliente recebeu uma mensagem de phishing e precisa de orientação",
  "Cliente precisa ativar a função de roaming internacional",
  "Cliente está com problemas de lentidão no serviço de internet fixa",
  "Cliente deseja cancelar o serviço de telefonia fixa",
  "Cliente está com dificuldades para configurar o serviço de identificador de chamadas",
  "Cliente quer adicionar um novo dispositivo à rede Wi-Fi",
  "Cliente recebeu um equipamento com defeito e precisa de substituição",
  "Cliente precisa redefinir a senha do serviço de internet",
  "Cliente está com problemas de recepção do sinal de TV",
  "Cliente deseja bloquear chamadas indesejadas",
  "Cliente precisa solicitar um reparo no serviço de internet",
  "Cliente está com dificuldades para configurar o serviço de mensagens de voz",
  "Cliente quer adquirir um plano de telefonia móvel para sua empresa",
  "Cliente recebeu uma cobrança de roaming internacional indevida",
  "Cliente está enfrentando problemas de qualidade nas chamadas",
  "Cliente precisa de suporte para configurar o serviço de chamada em conferência",
  "Cliente quer alterar o plano de dados da internet",
  "Cliente está com dificuldades para acessar a conta online",
  "Cliente recebeu uma oferta de migração para a Claro e está avaliando",
  "Cliente deseja solicitar um pacote promocional da Claro",
  "Cliente precisa de suporte técnico para solucionar problemas de conexão",
  "Cliente está enfrentando dificuldades para realizar recargas em seu celular",
  "Cliente quer adicionar um serviço de telefonia fixa à sua assinatura",
  "Cliente está insatisfeito com o atendimento prestado pelo suporte técnico",
  "Cliente precisa de ajuda para configurar o serviço de chamada em espera",
  "Cliente está com dificuldades para ativar o serviço de roaming internacional",
  "Cliente deseja alterar as informações cadastrais em sua conta",
  "Cliente está enfrentando problemas para utilizar o serviço de mensagens de texto",
  "Cliente quer saber sobre as opções de planos pós-pagos da Claro",
  "Cliente precisa de suporte técnico para configurar o serviço de voicemail",
  "Cliente está com dificuldades para acessar determinados sites com a conexão da Claro",
  "Cliente recebeu uma mensagem de texto suspeita e deseja reportar",
  "Cliente deseja cancelar um serviço adicional que não utiliza mais",
  "Cliente precisa de suporte para configurar o serviço de identificador de chamadas",
  "Cliente está insatisfeito com os termos do contrato e deseja esclarecimentos",
];

// =====================================================

const situacoesContainer = document.getElementById("text");
const situacaoUsadas = [];

function generateRandomWord() {
  if (situacaoUsadas.length === situacoes.length) {
    situacaoUsadas = [];
  }

  const availableWords = situacoes.filter(
    (listaSituacoes) => !situacaoUsadas.includes(listaSituacoes)
  );
  const randomIndex = Math.floor(Math.random() * availableWords.length);
  const randomSituacao = availableSituacaos[randomIndex];
  usedSituacaos.push(randomSituacao);
  situacoesContainer.textContent = randomSituacao;
}
