import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { RoleSelector } from "@/components/RoleSelector";
import { DiceRoller } from "@/components/DiceRoller";
import { RoundCard, Round } from "@/components/RoundCard";
import { GameStats } from "@/components/GameStats";
import { getRoundsByRole } from "@/data/rounds";
import { Button } from "@/components/ui/button";
import { RotateCcw, Trophy } from "lucide-react";
import { toast } from "sonner";

const Index = () => {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [gameRounds, setGameRounds] = useState<Round[]>([]);
  const [currentRound, setCurrentRound] = useState(0);
  const [diceValue, setDiceValue] = useState<number | null>(null);
  const [satisfaction, setSatisfaction] = useState(80);
  const [empathy, setEmpathy] = useState(0);
  const [completedRounds, setCompletedRounds] = useState<number[]>([]);
  const [gameFinished, setGameFinished] = useState(false);

  useEffect(() => {
    if (selectedRole) {
      const rounds = getRoundsByRole(selectedRole);
      setGameRounds(rounds);
    }
  }, [selectedRole]);

  const handleRoleSelect = (roleId: string) => {
    setSelectedRole(roleId);
    setCurrentRound(0);
    setCompletedRounds([]);
    setDiceValue(null);
    setSatisfaction(80);
    setEmpathy(0);
    setGameFinished(false);
    toast.success("Papel selecionado! Role o dado para começar a primeira rodada.");
  };

  const handleDiceRoll = (value: number) => {
    setDiceValue(value);
    if (currentRound < gameRounds.length) {
      toast.info(`Você rolou ${value}! Escolha sua ação para a rodada ${currentRound + 1}.`);
    }
  };

  const handleOptionChoice = (roundIndex: number, optionIndex: number) => {
    const round = gameRounds[roundIndex];
    const option = round.options[optionIndex];
    const success = diceValue! >= option.successThreshold;

    if (success) {
      // SUCESSO: aplica impacto total
      const newSatisfaction = Math.min(100, satisfaction + option.satisfactionImpact);
      const newEmpathy = empathy + option.empathyGain;
      
      setSatisfaction(newSatisfaction);
      setEmpathy(newEmpathy);
      toast.success(`✓ Ótima escolha! +${option.empathyGain} XP de Empatia`, {
        description: `Satisfação: ${Math.round(newSatisfaction)}% (+${option.satisfactionImpact})`,
      });
    } else {
      // FALHA: aplica impacto negativo
      const satisfactionLoss = Math.abs(option.satisfactionImpact) > 0 
        ? -Math.abs(option.satisfactionImpact) 
        : -10; // penalidade padrão se não houver impacto negativo definido
      const empathyGain = Math.max(0, Math.floor(option.empathyGain / 4)); // apenas 25% do XP
      
      const newSatisfaction = Math.max(0, satisfaction + satisfactionLoss);
      const newEmpathy = empathy + empathyGain;
      
      setSatisfaction(newSatisfaction);
      setEmpathy(newEmpathy);
      toast.error(`✗ Ação inadequada! Resultado do dado insuficiente (${diceValue}/${option.successThreshold})`, {
        description: `Satisfação: ${Math.round(newSatisfaction)}% (${satisfactionLoss}) • XP: +${empathyGain}`,
      });
    }

    setCompletedRounds([...completedRounds, roundIndex]);
    setDiceValue(null);

    if (roundIndex + 1 < gameRounds.length) {
      setCurrentRound(roundIndex + 1);
      toast.info(`Rodada ${roundIndex + 2} liberada! Role o dado novamente.`);
    } else {
      setGameFinished(true);
      const finalScore = satisfaction >= 60 && empathy >= 150 ? "excelente" : satisfaction >= 40 ? "bom" : "regular";
      toast.success(`Jogo finalizado! Desempenho ${finalScore}.`);
    }
  };

  const handleRestart = () => {
    setSelectedRole(null);
    setCurrentRound(0);
    setDiceValue(null);
    setSatisfaction(80);
    setEmpathy(0);
    setCompletedRounds([]);
    setGameFinished(false);
    toast.info("Jogo reiniciado! Escolha seu papel novamente.");
  };

  const getFinalMessage = () => {
    if (satisfaction >= 60 && empathy >= 150) {
      return "Excelente trabalho! Você demonstrou grande empatia e habilidade no atendimento inclusivo.";
    } else if (satisfaction >= 40) {
      return "Bom trabalho! Continue praticando para melhorar ainda mais suas habilidades.";
    }
    return "Continue se esforçando! A prática leva à perfeição no atendimento inclusivo.";
  };

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="flex items-center gap-4 mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center text-2xl font-bold text-primary-foreground shadow-lg">
            AP
          </div>
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-gradient flex items-center gap-2 flex-wrap">
              Atendimento Prioritário
              <span className="text-xs px-3 py-1 rounded-full glass-panel">
                RPG Educacional
              </span>
            </h1>
            <p className="text-sm text-muted-foreground mt-1">
              Treinamento interativo sobre atendimento inclusivo a pessoas com deficiência
            </p>
          </div>
          {selectedRole && (
            <Button onClick={handleRestart} variant="outline" size="sm" className="gap-2">
              <RotateCcw className="w-4 h-4" />
              Reiniciar
            </Button>
          )}
        </header>

        {gameFinished ? (
          <Card className="glass-card p-8 text-center max-w-2xl mx-auto">
            <Trophy className="w-16 h-16 text-accent mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4 text-gradient">Jogo Concluído!</h2>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="glass-panel rounded-lg p-4">
                <div className="text-3xl font-bold text-primary">{satisfaction}%</div>
                <div className="text-sm text-muted-foreground">Satisfação Final</div>
              </div>
              <div className="glass-panel rounded-lg p-4">
                <div className="text-3xl font-bold text-accent">+{empathy}</div>
                <div className="text-sm text-muted-foreground">XP Total</div>
              </div>
            </div>
            <p className="text-muted-foreground mb-6">{getFinalMessage()}</p>
            <Button onClick={handleRestart} size="lg" className="gap-2">
              <RotateCcw className="w-4 h-4" />
              Jogar Novamente
            </Button>
          </Card>
        ) : (
          <div className="grid lg:grid-cols-[1fr_360px] gap-6">
            {/* Main Game Area */}
            <div className="space-y-6">
              <Card className="glass-card p-6">
                <RoleSelector selectedRole={selectedRole} onSelectRole={handleRoleSelect} />
              </Card>

              {selectedRole && (
                <Card className="glass-card p-6">
                  <DiceRoller
                    onRoll={handleDiceRoll}
                    isRolling={diceValue !== null && !completedRounds.includes(currentRound)}
                  />
                </Card>
              )}

              {selectedRole && (
                <Card className="glass-card p-6">
                  <h2 className="text-xl font-semibold mb-4">
                    Rodadas do Jogo ({completedRounds.length}/{gameRounds.length})
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {gameRounds.map((round, index) => (
                      <RoundCard
                        key={round.id}
                        round={round}
                        isActive={index === currentRound}
                        isCompleted={completedRounds.includes(index)}
                        diceValue={index === currentRound ? diceValue : null}
                        onChooseOption={(optionIndex) => handleOptionChoice(index, optionIndex)}
                      />
                    ))}
                  </div>
                </Card>
              )}
            </div>

            {/* Stats Sidebar */}
            {selectedRole && (
              <GameStats
                satisfaction={satisfaction}
                empathy={empathy}
                roundsCompleted={completedRounds.length}
                totalRounds={gameRounds.length}
              />
            )}
          </div>
        )}

        {/* Footer */}
        <footer className="mt-8 text-center text-sm text-muted-foreground">
          <p>
            Desenvolvido para promover conscientização sobre atendimento inclusivo • Role o dado e tome suas decisões
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
