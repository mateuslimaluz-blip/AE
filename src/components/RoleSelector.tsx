import { Card } from "@/components/ui/card";

interface Role {
  id: string;
  title: string;
  description: string;
}

const roles: Role[] = [
  {
    id: "attendant",
    title: "Atendente Principal",
    description: "Você lidera o atendimento e toma decisões-chave.",
  },
  {
    id: "supervisor",
    title: "Supervisor",
    description: "Auxilia e avalia as escolhas dos atendentes.",
  },
  {
    id: "colleague",
    title: "Colega",
    description: "Auxilia o atendente com opções alternativas.",
  },
  {
    id: "client",
    title: "Cliente (NPC/Player)",
    description: "Assuma o papel do cliente para treinar atendimentos.",
  },
];

interface RoleSelectorProps {
  selectedRole: string | null;
  onSelectRole: (roleId: string) => void;
}

export const RoleSelector = ({ selectedRole, onSelectRole }: RoleSelectorProps) => {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-4">Escolha o papel</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {roles.map((role) => (
          <Card
            key={role.id}
            onClick={() => onSelectRole(role.id)}
            className={`p-4 cursor-pointer transition-all duration-200 hover:-translate-y-1.5 hover:shadow-2xl glass-panel ${
              selectedRole === role.id
                ? "ring-2 ring-primary shadow-lg shadow-primary/20"
                : ""
            }`}
          >
            <h3 className="font-semibold text-sm mb-2">{role.title}</h3>
            <p className="text-muted-foreground text-xs leading-relaxed">
              {role.description}
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
};
