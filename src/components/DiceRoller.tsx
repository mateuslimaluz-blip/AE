import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dices } from "lucide-react";

interface DiceRollerProps {
  onRoll: (value: number) => void;
  isRolling: boolean;
}

export const DiceRoller = ({ onRoll, isRolling }: DiceRollerProps) => {
  const [currentValue, setCurrentValue] = useState<number>(7);
  const [isAnimating, setIsAnimating] = useState(false);

  const rollDice = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    let iterations = 0;
    const maxIterations = 20;

    const interval = setInterval(() => {
      setCurrentValue(Math.floor(Math.random() * 12) + 1);
      iterations++;

      if (iterations >= maxIterations) {
        clearInterval(interval);
        const finalValue = Math.floor(Math.random() * 12) + 1;
        setCurrentValue(finalValue);
        setIsAnimating(false);
        onRoll(finalValue);
      }
    }, 80);
  };

  const getDifficulty = (value: number) => {
    if (value <= 3) return { text: "Simples", color: "text-green-400" };
    if (value <= 6) return { text: "Comunicação", color: "text-yellow-400" };
    if (value <= 9) return { text: "Múltiplas Barreiras", color: "text-orange-400" };
    return { text: "Crítico", color: "text-red-400" };
  };

  const difficulty = getDifficulty(currentValue);

  return (
    <section className="mt-6">
      <h2 className="text-xl font-semibold mb-4">Dado D12</h2>
      <div className="flex flex-col md:flex-row gap-6 items-center">
        <div className="flex flex-col items-center gap-4">
          <div
            className={`relative w-36 h-36 rounded-2xl flex flex-col items-center justify-center font-bold text-5xl glass-card border border-white/5 transition-transform duration-200 ${
              isAnimating ? "animate-spin" : ""
            }`}
            style={{
              background: "linear-gradient(180deg, hsl(var(--die-gradient-start)), hsl(var(--die-gradient-end)))",
            }}
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-conic from-white/5 via-transparent to-transparent opacity-50" />
            {currentValue}
            <small className="text-xs font-semibold text-muted-foreground mt-1">
              {difficulty.text}
            </small>
          </div>
          
          <Button
            onClick={rollDice}
            disabled={isRolling || isAnimating}
            className="gap-2"
            size="lg"
          >
            <Dices className="w-4 h-4" />
            {isAnimating ? "Rolando..." : "Rolar Dado"}
          </Button>
        </div>

        <div className="flex-1 min-w-[220px]">
          <div className="glass-panel rounded-xl p-4">
            <h3 className="font-semibold mb-3 text-sm">Níveis de Dificuldade</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex justify-between">
                <span>1-3:</span>
                <span className="text-green-400">Atendimento simples</span>
              </div>
              <div className="flex justify-between">
                <span>4-6:</span>
                <span className="text-yellow-400">Desafio de comunicação</span>
              </div>
              <div className="flex justify-between">
                <span>7-9:</span>
                <span className="text-orange-400">Múltiplas barreiras</span>
              </div>
              <div className="flex justify-between">
                <span>10-12:</span>
                <span className="text-red-400">Situação crítica</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
