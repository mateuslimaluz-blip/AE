import { Round } from "@/components/RoundCard";

// Rodadas específicas para cada papel

export const attendantRounds: Round[] = [
  {
    id: 1,
    title: "Cliente Cego - Localização de Produto",
    description:
      "Um cliente cego entra na loja procurando um produto específico. A prateleira está em local de difícil acesso. Como você conduz o atendimento?",
    difficulty: 3,
    options: [
      {
        text: "Oferecer auxílio verbal claro, descrevendo o layout e guiando até o produto",
        successThreshold: 4,
        empathyGain: 30,
        satisfactionImpact: 15,
      },
      {
        text: "Pegar o produto rapidamente sem explicar o processo",
        successThreshold: 11,
        empathyGain: 0,
        satisfactionImpact: -10,
      },
      {
        text: "Descrever a localização e perguntar se prefere ser guiado ou buscar sozinho",
        successThreshold: 3,
        empathyGain: 40,
        satisfactionImpact: 20,
      },
    ],
  },
  {
    id: 2,
    title: "Cliente Surdo - Troca de Produto",
    description:
      "Cliente surdo quer trocar um produto com defeito. Ele tenta se comunicar por gestos mas você não entende completamente.",
    difficulty: 5,
    options: [
      {
        text: "Usar papel e caneta para estabelecer comunicação clara",
        successThreshold: 5,
        empathyGain: 35,
        satisfactionImpact: 18,
      },
      {
        text: "Falar mais alto pensando que vai ajudar",
        successThreshold: 12,
        empathyGain: 0,
        satisfactionImpact: -15,
      },
      {
        text: "Buscar colega com conhecimento em Libras e oferecer tablet para comunicação",
        successThreshold: 4,
        empathyGain: 45,
        satisfactionImpact: 22,
      },
    ],
  },
  {
    id: 3,
    title: "Cliente com Mobilidade Reduzida - Pagamento",
    description:
      "Cliente em cadeira de rodas está no caixa, mas a máquina de cartão está muito alta para alcançar confortavelmente.",
    difficulty: 4,
    options: [
      {
        text: "Abaixar a máquina até a altura adequada e perguntar se precisa de ajuda",
        successThreshold: 4,
        empathyGain: 40,
        satisfactionImpact: 20,
      },
      {
        text: "Pegar a máquina e operar você mesmo sem perguntar",
        successThreshold: 10,
        empathyGain: 5,
        satisfactionImpact: -8,
      },
      {
        text: "Perguntar como ele prefere realizar o pagamento e adaptar conforme necessário",
        successThreshold: 3,
        empathyGain: 50,
        satisfactionImpact: 25,
      },
    ],
  },
  {
    id: 4,
    title: "Cliente Autista - Ambiente Estressante",
    description:
      "Cliente com autismo demonstra desconforto com o barulho e movimento da loja lotada. Ele parece ansioso.",
    difficulty: 7,
    options: [
      {
        text: "Oferecer atendimento em área mais tranquila e usar comunicação direta",
        successThreshold: 6,
        empathyGain: 45,
        satisfactionImpact: 20,
      },
      {
        text: "Continuar o atendimento normalmente no local atual",
        successThreshold: 11,
        empathyGain: 0,
        satisfactionImpact: -12,
      },
      {
        text: "Perguntar se prefere ir para local mais calmo e ajustar tom de voz e ritmo",
        successThreshold: 5,
        empathyGain: 55,
        satisfactionImpact: 25,
      },
    ],
  },
  {
    id: 5,
    title: "Cliente com Deficiência Intelectual - Explicação de Promoção",
    description:
      "Cliente com deficiência intelectual não entende os termos da promoção. Você precisa explicar de forma clara.",
    difficulty: 6,
    options: [
      {
        text: "Usar linguagem simples e exemplos práticos, confirmando o entendimento",
        successThreshold: 5,
        empathyGain: 50,
        satisfactionImpact: 22,
      },
      {
        text: "Repetir a mesma explicação técnica mais devagar",
        successThreshold: 10,
        empathyGain: 5,
        satisfactionImpact: -10,
      },
      {
        text: "Simplificar ao máximo, usar gestos e perguntar se ficou claro a cada etapa",
        successThreshold: 4,
        empathyGain: 60,
        satisfactionImpact: 28,
      },
    ],
  },
];

export const supervisorRounds: Round[] = [
  {
    id: 1,
    title: "Avaliação de Atendente - Cliente Cego",
    description:
      "Você observa um atendente ajudando um cliente cego. O atendente está pegando produtos sem descrever nada. Como você intervém?",
    difficulty: 4,
    options: [
      {
        text: "Interromper e mostrar a forma correta na frente do cliente",
        successThreshold: 9,
        empathyGain: 10,
        satisfactionImpact: -5,
      },
      {
        text: "Esperar o atendimento terminar e dar feedback construtivo depois",
        successThreshold: 5,
        empathyGain: 35,
        satisfactionImpact: 15,
      },
      {
        text: "Discretamente chamar o atendente e orientar, depois acompanhar o restante",
        successThreshold: 4,
        empathyGain: 45,
        satisfactionImpact: 20,
      },
    ],
  },
  {
    id: 2,
    title: "Treinamento - Cliente Surdo",
    description:
      "Um novo funcionário pede sua ajuda para atender um cliente surdo. Você precisa orientá-lo rapidamente.",
    difficulty: 5,
    options: [
      {
        text: "Assumir o atendimento para mostrar como se faz",
        successThreshold: 8,
        empathyGain: 15,
        satisfactionImpact: 10,
      },
      {
        text: "Orientar o funcionário a usar papel/celular e acompanhar de perto",
        successThreshold: 5,
        empathyGain: 40,
        satisfactionImpact: 18,
      },
      {
        text: "Ensinar técnicas básicas de comunicação e deixar ele praticar com apoio",
        successThreshold: 4,
        empathyGain: 50,
        satisfactionImpact: 22,
      },
    ],
  },
  {
    id: 3,
    title: "Resolução de Conflito - Acessibilidade",
    description:
      "Cliente cadeirante reclama que produtos acessíveis estão sempre em falta. Sua equipe alega falta de tempo para reposição.",
    difficulty: 6,
    options: [
      {
        text: "Criar escala específica para garantir reposição em áreas prioritárias",
        successThreshold: 6,
        empathyGain: 45,
        satisfactionImpact: 20,
      },
      {
        text: "Pedir à equipe que faça quando possível",
        successThreshold: 11,
        empathyGain: 5,
        satisfactionImpact: -10,
      },
      {
        text: "Reorganizar processos e treinar equipe sobre importância da acessibilidade",
        successThreshold: 5,
        empathyGain: 55,
        satisfactionImpact: 25,
      },
    ],
  },
  {
    id: 4,
    title: "Implementação de Protocolo",
    description:
      "Você precisa criar um protocolo de atendimento para clientes autistas. A equipe resiste dizendo que é 'complicado demais'.",
    difficulty: 7,
    options: [
      {
        text: "Impor o protocolo usando sua autoridade",
        successThreshold: 10,
        empathyGain: 10,
        satisfactionImpact: -8,
      },
      {
        text: "Explicar a importância, treinar com exemplos práticos e acompanhar",
        successThreshold: 6,
        empathyGain: 50,
        satisfactionImpact: 22,
      },
      {
        text: "Realizar workshop prático, envolver a equipe na criação e implementar gradualmente",
        successThreshold: 5,
        empathyGain: 65,
        satisfactionImpact: 28,
      },
    ],
  },
  {
    id: 5,
    title: "Avaliação de Desempenho",
    description:
      "Durante avaliação, você nota que um atendente tem ótimos números mas reclamações de clientes com deficiência. Como abordar?",
    difficulty: 8,
    options: [
      {
        text: "Focar nos números positivos e dar aviso sobre as reclamações",
        successThreshold: 11,
        empathyGain: 5,
        satisfactionImpact: -12,
      },
      {
        text: "Mostrar que atendimento inclusivo é prioridade e oferecer treinamento específico",
        successThreshold: 6,
        empathyGain: 45,
        satisfactionImpact: 20,
      },
      {
        text: "Criar plano de desenvolvimento focado em empatia com acompanhamento próximo",
        successThreshold: 5,
        empathyGain: 60,
        satisfactionImpact: 25,
      },
    ],
  },
];

export const colleagueRounds: Round[] = [
  {
    id: 1,
    title: "Apoio ao Colega - Cliente Cego",
    description:
      "Seu colega está atendendo um cliente cego mas parece inseguro. Ele te olha pedindo ajuda. Como você age?",
    difficulty: 4,
    options: [
      {
        text: "Assumir o atendimento para resolver rápido",
        successThreshold: 9,
        empathyGain: 10,
        satisfactionImpact: 5,
      },
      {
        text: "Discretamente sugerir frases úteis e deixar ele continuar",
        successThreshold: 5,
        empathyGain: 35,
        satisfactionImpact: 18,
      },
      {
        text: "Ficar por perto como apoio e só intervir se ele pedir ajuda direta",
        successThreshold: 4,
        empathyGain: 45,
        satisfactionImpact: 22,
      },
    ],
  },
  {
    id: 2,
    title: "Compartilhar Conhecimento",
    description:
      "Você sabe Libras e vê um colega tentando atender um cliente surdo com dificuldade. O que fazer?",
    difficulty: 3,
    options: [
      {
        text: "Ajudar imediatamente usando Libras para agilizar",
        successThreshold: 4,
        empathyGain: 30,
        satisfactionImpact: 15,
      },
      {
        text: "Oferecer ajuda e depois ensinar sinais básicos ao colega",
        successThreshold: 3,
        empathyGain: 45,
        satisfactionImpact: 22,
      },
      {
        text: "Esperar ser chamado para não parecer invasivo",
        successThreshold: 10,
        empathyGain: 5,
        satisfactionImpact: -5,
      },
    ],
  },
  {
    id: 3,
    title: "Trabalho em Equipe - Urgência",
    description:
      "Loja lotada: você vê colega atendendo cliente cadeirante que precisa de produtos em vários locais. Você tem outros clientes.",
    difficulty: 6,
    options: [
      {
        text: "Focar em seus clientes, cada um com suas responsabilidades",
        successThreshold: 11,
        empathyGain: 0,
        satisfactionImpact: -10,
      },
      {
        text: "Rapidamente ajudar o colega com parte das buscas",
        successThreshold: 6,
        empathyGain: 35,
        satisfactionImpact: 15,
      },
      {
        text: "Organizar com colega: você ajuda ele agora, ele ajuda seus clientes depois",
        successThreshold: 5,
        empathyGain: 50,
        satisfactionImpact: 25,
      },
    ],
  },
  {
    id: 4,
    title: "Iniciativa Própria",
    description:
      "Você nota que produtos acessíveis estão mal organizados. Ninguém pediu, mas você poderia reorganizar. É sua hora de almoço.",
    difficulty: 5,
    options: [
      {
        text: "Reorganizar rapidamente antes do almoço",
        successThreshold: 5,
        empathyGain: 40,
        satisfactionImpact: 20,
      },
      {
        text: "Almoçar normalmente, não é sua função oficial",
        successThreshold: 10,
        empathyGain: 0,
        satisfactionImpact: -8,
      },
      {
        text: "Avisar supervisor sobre o problema e oferecer ajudar depois do almoço",
        successThreshold: 4,
        empathyGain: 45,
        satisfactionImpact: 22,
      },
    ],
  },
  {
    id: 5,
    title: "Defender Colega",
    description:
      "Cliente impaciente reclama que colega está 'demorando demais' atendendo pessoa autista. Você está perto.",
    difficulty: 7,
    options: [
      {
        text: "Ignorar, não quer se envolver em conflito",
        successThreshold: 12,
        empathyGain: 0,
        satisfactionImpact: -15,
      },
      {
        text: "Explicar educadamente ao cliente impaciente sobre atendimento prioritário",
        successThreshold: 6,
        empathyGain: 45,
        satisfactionImpact: 18,
      },
      {
        text: "Oferecer atender o cliente impaciente enquanto colega continua com calma",
        successThreshold: 5,
        empathyGain: 55,
        satisfactionImpact: 25,
      },
    ],
  },
];

export const clientRounds: Round[] = [
  {
    id: 1,
    title: "Você é o Cliente Cego",
    description:
      "Você entra na loja procurando um produto específico. O atendente se aproxima. Como você gostaria de ser abordado?",
    difficulty: 3,
    options: [
      {
        text: "Que ele descreva a localização e ofereça guiar você",
        successThreshold: 4,
        empathyGain: 35,
        satisfactionImpact: 18,
      },
      {
        text: "Que simplesmente pegue o produto sem explicar nada",
        successThreshold: 11,
        empathyGain: 0,
        satisfactionImpact: -10,
      },
      {
        text: "Que pergunte como você prefere ser auxiliado",
        successThreshold: 3,
        empathyGain: 45,
        satisfactionImpact: 22,
      },
    ],
  },
  {
    id: 2,
    title: "Você é o Cliente Surdo",
    description:
      "Você precisa de informações sobre garantia de um produto. O atendente não sabe Libras. Qual atitude te ajudaria mais?",
    difficulty: 4,
    options: [
      {
        text: "Que ele busque papel e caneta ou use o celular para escrever",
        successThreshold: 4,
        empathyGain: 40,
        satisfactionImpact: 20,
      },
      {
        text: "Que ele fale bem devagar movendo muito a boca",
        successThreshold: 10,
        empathyGain: 5,
        satisfactionImpact: -8,
      },
      {
        text: "Que procure um colega que saiba Libras ou use recursos de comunicação",
        successThreshold: 3,
        empathyGain: 50,
        satisfactionImpact: 25,
      },
    ],
  },
  {
    id: 3,
    title: "Você é o Cliente Cadeirante",
    description:
      "Você quer comprar algo na prateleira alta. O atendente se aproxima. Qual comportamento seria ideal?",
    difficulty: 5,
    options: [
      {
        text: "Pegar o produto sem perguntar nada",
        successThreshold: 9,
        empathyGain: 10,
        satisfactionImpact: 5,
      },
      {
        text: "Perguntar qual produto você quer e como prefere receber",
        successThreshold: 4,
        empathyGain: 45,
        satisfactionImpact: 22,
      },
      {
        text: "Baixar vários produtos para você escolher confortavelmente",
        successThreshold: 5,
        empathyGain: 35,
        satisfactionImpact: 18,
      },
    ],
  },
  {
    id: 4,
    title: "Você é o Cliente Autista",
    description:
      "A loja está barulhenta e você está se sentindo sobrecarregado. Precisa de ajuda mas está ansioso. O que te confortaria?",
    difficulty: 6,
    options: [
      {
        text: "Atendente que te leve para local mais calmo e use tom de voz suave",
        successThreshold: 5,
        empathyGain: 50,
        satisfactionImpact: 23,
      },
      {
        text: "Atendente enérgico e falante tentando te animar",
        successThreshold: 11,
        empathyGain: 0,
        satisfactionImpact: -15,
      },
      {
        text: "Atendente que perceba seu desconforto e ofereça alternativas de forma clara",
        successThreshold: 4,
        empathyGain: 55,
        satisfactionImpact: 26,
      },
    ],
  },
  {
    id: 5,
    title: "Você é Cliente com Mobilidade Reduzida",
    description:
      "Você usa muletas e está com sacolas. Precisa pagar no caixa. Como gostaria que o caixa agisse?",
    difficulty: 5,
    options: [
      {
        text: "Que pergunte se você precisa de ajuda com as sacolas",
        successThreshold: 4,
        empathyGain: 45,
        satisfactionImpact: 22,
      },
      {
        text: "Que faça o procedimento normal sem mencionar nada",
        successThreshold: 9,
        empathyGain: 10,
        satisfactionImpact: 5,
      },
      {
        text: "Que adapte o atendimento perguntando suas preferências a cada etapa",
        successThreshold: 3,
        empathyGain: 55,
        satisfactionImpact: 28,
      },
    ],
  },
];

export const getRoundsByRole = (roleId: string): Round[] => {
  switch (roleId) {
    case "attendant":
      return attendantRounds;
    case "supervisor":
      return supervisorRounds;
    case "colleague":
      return colleagueRounds;
    case "client":
      return clientRounds;
    default:
      return attendantRounds;
  }
};
