import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, XCircle } from "lucide-react";

export interface Round {
  id: number;
  title: string;
  description: string;
  difficulty: number;
  options: {
    text: string;
    successThreshold: number;
    empathyGain: number;
    satisfactionImpact: number;
  }[];
}

interface RoundCardProps {
  round: Round;
  isActive: boolean;
  isCompleted: boolean;
  diceValue: number | null;
  onChooseOption: (optionIndex: number) => void;
}

export const RoundCard = ({
  round,
  isActive,
  isCompleted,
  diceValue,
  onChooseOption,
}: RoundCardProps) => {
  return (
    <Card
      className={`glass-panel p-4 transition-all duration-300 ${
        isActive ? "ring-2 ring-primary shadow-lg shadow-primary/20" : ""
      } ${isCompleted ? "opacity-60" : ""}`}
    >
      <div className="flex items-start justify-between mb-3">
        <h4 className="font-semibold text-sm">
          Rodada {round.id} — {round.title}
        </h4>
        {isCompleted && (
          <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
        )}
      </div>
      
      <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
        {round.description}
      </p>

      {isActive && diceValue !== null && !isCompleted && (
        <div className="space-y-2 mt-4">
          <p className="text-xs text-accent mb-2">
            Resultado do dado: {diceValue} • Escolha sua ação:
          </p>
          {round.options.map((option, index) => {
            const success = diceValue >= option.successThreshold;
            return (
              <Button
                key={index}
                onClick={() => onChooseOption(index)}
                variant="secondary"
                className="w-full justify-start text-left h-auto py-2 px-3"
                size="sm"
              >
                <span className="flex-1 text-xs">{option.text}</span>
                {success ? (
                  <CheckCircle2 className="w-3 h-3 text-green-400 ml-2 flex-shrink-0" />
                ) : (
                  <XCircle className="w-3 h-3 text-red-400 ml-2 flex-shrink-0" />
                )}
              </Button>
            );
          })}
        </div>
      )}
    </Card>
  );
};
