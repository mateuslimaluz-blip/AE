import { Round } from "@/components/RoundCard";

export const gameRounds: Round[] = [
  {
    id: 1,
    title: "Cliente Cego",
    description:
      "Cliente busca um produto em prateleira alta. Como você pode ajudar de forma inclusiva?",
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
        successThreshold: 8,
        empathyGain: 10,
        satisfactionImpact: 5,
      },
      {
        text: "Descrever a localização e perguntar se prefere ser guiado ou ir sozinho",
        successThreshold: 3,
        empathyGain: 40,
        satisfactionImpact: 20,
      },
    ],
  },
  {
    id: 2,
    title: "Cliente Surdo",
    description:
      "Cliente surdo precisa de informações sobre um produto. Como estabelecer comunicação efetiva?",
    difficulty: 5,
    options: [
      {
        text: "Usar escrita, gestos ou Libras básica para se comunicar",
        successThreshold: 5,
        empathyGain: 35,
        satisfactionImpact: 18,
      },
      {
        text: "Falar mais alto e de forma exagerada",
        successThreshold: 11,
        empathyGain: 0,
        satisfactionImpact: -15,
      },
      {
        text: "Buscar colega que saiba Libras e oferecer tablet para escrita",
        successThreshold: 4,
        empathyGain: 45,
        satisfactionImpact: 22,
      },
    ],
  },
  {
    id: 3,
    title: "Cliente Mudo",
    description:
      "Cliente mudo tenta se comunicar através de gestos e celular. Como facilitar o atendimento?",
    difficulty: 4,
    options: [
      {
        text: "Oferecer papel e caneta ou indicar aplicativo de comunicação",
        successThreshold: 5,
        empathyGain: 32,
        satisfactionImpact: 16,
      },
      {
        text: "Tentar adivinhar rapidamente o que quer sem confirmar",
        successThreshold: 9,
        empathyGain: 8,
        satisfactionImpact: -5,
      },
      {
        text: "Ser paciente, usar opções de sim/não e confirmar cada passo",
        successThreshold: 4,
        empathyGain: 42,
        satisfactionImpact: 20,
      },
    ],
  },
  {
    id: 4,
    title: "Cliente Autista",
    description:
      "Cliente com autismo mostra sensibilidade aos estímulos do ambiente. Como adaptar o atendimento?",
    difficulty: 7,
    options: [
      {
        text: "Reduzir ruído, ser direto e objetivo na comunicação",
        successThreshold: 6,
        empathyGain: 38,
        satisfactionImpact: 17,
      },
      {
        text: "Manter atendimento padrão sem ajustes",
        successThreshold: 10,
        empathyGain: 5,
        satisfactionImpact: -10,
      },
      {
        text: "Oferecer ambiente mais calmo, falar clara e pausadamente, evitar contato visual intenso",
        successThreshold: 5,
        empathyGain: 48,
        satisfactionImpact: 23,
      },
    ],
  },
  {
    id: 5,
    title: "Cliente Cadeirante",
    description:
      "Cliente em cadeira de rodas não alcança produtos na prateleira alta. Como garantir acessibilidade?",
    difficulty: 6,
    options: [
      {
        text: "Pegar o produto e entregar diretamente",
        successThreshold: 7,
        empathyGain: 15,
        satisfactionImpact: 8,
      },
      {
        text: "Adaptar a exibição, abaixar produtos e garantir espaço de circulação",
        successThreshold: 5,
        empathyGain: 50,
        satisfactionImpact: 25,
      },
      {
        text: "Perguntar como prefere ser atendido e ajustar conforme necessidade",
        successThreshold: 4,
        empathyGain: 55,
        satisfactionImpact: 28,
      },
    ],
  },
];
