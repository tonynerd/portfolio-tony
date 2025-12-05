import { LayoutTemplate, Database, Server } from 'lucide-react';

export const projects = [
  {
    title: "OneTv+",
    description: "Plataforma de streaming de vídeo focada em alta disponibilidade e UX premium. Arquitetura escalável para suportar picos de tráfego similares a grandes players.",
    stack: ["React", "Node.js", "AWS", "UX"],
    gradient: "from-blue-600 to-cyan-600",
    iconColor: "text-blue-400",
    icon: <LayoutTemplate size={24} />,
    repoUrl: "#"
  },
  {
    title: "Indicadores Pec e-SUS",
    description: "Data Visualization para saúde pública. Sistema que processa dados governamentais complexos e os transforma em dashboards intuitivos para gestores.",
    stack: ["JavaScript", "Data Viz", "GovTech"],
    gradient: "from-green-600 to-emerald-600",
    iconColor: "text-green-400",
    icon: <Database size={24} />,
    repoUrl: "#"
  },
  {
    title: "Segurezza Redes",
    description: "Dashboard corporativo com sistemas complexos de orçamentação e agendamento. Automação total de fluxo de trabalho para empresa de segurança.",
    stack: ["Firebase", "TypeScript", "React"],
    gradient: "from-purple-600 to-pink-600",
    iconColor: "text-purple-400",
    icon: <Server size={24} />,
    repoUrl: "#"
  }
];
