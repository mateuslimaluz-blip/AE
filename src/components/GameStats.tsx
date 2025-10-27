import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Heart, Sparkles } from "lucide-react";

interface GameStatsProps {
  satisfaction: number;
  empathy: number;
  roundsCompleted: number;
  totalRounds: number;
}

export const GameStats = ({
  satisfaction,
  empathy,
  roundsCompleted,
  totalRounds,
}: GameStatsProps) => {
  return (
    <aside className="space-y-4">
      <Card className="glass-card p-4">
        <h3 className="font-semibold mb-4 text-sm flex items-center gap-2">
          <Heart className="w-4 h-4 text-primary" />
          Satisfação do Grupo
        </h3>
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-2xl font-bold">{satisfaction}%</span>
            <span className="text-xs text-muted-foreground">
              {roundsCompleted}/{totalRounds} rodadas
            </span>
          </div>
          <Progress value={satisfaction} className="h-2" />
        </div>
      </Card>

      <Card className="glass-card p-4">
        <h3 className="font-semibold mb-4 text-sm flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-accent" />
          Empatia (XP)
        </h3>
        <div className="text-3xl font-bold text-gradient">+{empathy}</div>
        <p className="text-xs text-muted-foreground mt-2">
          Pontos de experiência acumulados
        </p>
      </Card>

      <Card className="glass-card p-4">
        <h3 className="font-semibold mb-3 text-sm">Instruções</h3>
        <p className="text-xs text-muted-foreground leading-relaxed">
          Role o dado D12 para determinar a dificuldade de cada situação. 
          Escolha a melhor ação baseada no resultado. Valores mais altos indicam 
          situações mais complexas que exigem maior empatia e preparo.
        </p>
      </Card>

      <Card className="glass-card p-4">
        <h3 className="font-semibold mb-3 text-sm">Objetivos</h3>
        <ul className="space-y-2 text-xs text-muted-foreground">
          <li className="flex items-start gap-2">
            <span className="text-primary mt-0.5">•</span>
            <span>Manter satisfação acima de 60%</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-0.5">•</span>
            <span>Acumular máximo de pontos de empatia</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-0.5">•</span>
            <span>Completar todas as 5 rodadas</span>
          </li>
        </ul>
      </Card>
    </aside>
  );
};
