# Nota10 - Plataforma Educacional

## Sobre o Projeto

O Nota10 é uma plataforma educacional desenvolvida para facilitar a comunicação e o acompanhamento entre professores, alunos e responsáveis. A aplicação permite que professores criem e gerenciem atividades, acompanhem o progresso dos alunos, enquanto os alunos podem realizar as atividades e os responsáveis podem monitorar o desempenho de seus filhos.

## Tecnologias Utilizadas

- **React 19**: Framework JavaScript para construção de interfaces de usuário
- **TypeScript**: Superset tipado de JavaScript
- **Vite**: Ferramenta de build rápida para desenvolvimento web moderno
- **Tailwind CSS**: Framework CSS utilitário para design responsivo
- **React Router Dom**: Biblioteca para gerenciamento de rotas
- **Recharts**: Biblioteca para criação de gráficos
- **React Icons**: Biblioteca de ícones para React
- **Heroicons**: Conjunto de ícones SVG

## Estrutura do Projeto

```bash
├── public/              # Arquivos públicos
├── src/                 # Código fonte
│   ├── assets/          # Recursos estáticos (imagens, etc)
│   ├── components/      # Componentes reutilizáveis
│   │   ├── charts/      # Componentes de charts (graficos e dashboards)
│   │   ├── layout/      # Componentes de layout (Header, Footer, etc)
│   │   └── ui/          # Componentes de UI (Button, Card, etc)
│   ├── constants        # Variáveis constantes
│   ├── contexts/        # Contextos React (UserContext, etc)
│   ├── hooks/           # Hooks personalizados
│   ├── pages/           # Páginas da aplicação
│   ├── services/        # Serviços (API, autenticação, etc)
│   ├── types/           # Definições de tipos TypeScript
│   ├── App.tsx          # Componente principal
│   ├── main.tsx         # Ponto de entrada da aplicação
│   └── index.css        # Estilos globais
├── .gitignore           # Arquivos ignorados pelo Git
├── index.html           # Arquivo HTML principal
├── package.json         # Dependências e scripts
├── postcss.config.cjs   # Configuração do PostCSS
├── tailwind.config.cjs  # Configuração do Tailwind CSS
├── tsconfig.json        # Configuração do TypeScript
└── vite.config.ts       # Configuração do Vite
```

## Funcionalidades Principais

### Autenticação e Controle de Acesso

O sistema possui três tipos de usuários, cada um com acesso a funcionalidades específicas:

- **Professor**: Pode criar atividades, gerenciar turmas, visualizar o progresso dos alunos e enviar notificações
- **Aluno**: Pode visualizar e realizar atividades, acompanhar seu progresso e receber notificações
- **Responsável**: Pode acompanhar o desempenho do(s) aluno(s), visualizar atividades e receber notificações

### Dashboard Personalizado

Cada tipo de usuário possui um dashboard personalizado com informações relevantes:

- **Dashboard do Professor**: Exibe gráficos de desempenho dos alunos, comparativo entre turmas e progresso das atividades
- **Dashboard do Aluno**: Mostra o progresso do aluno, timeline de participação e ranking na turma
- **Dashboard do Responsável**: Apresenta o desempenho do aluno, gráficos de progresso e histórico de atividades

### Gerenciamento de Atividades

- Criação de atividades pelo professor
- Atribuição de atividades a turmas específicas
- Acompanhamento do status das atividades (pendente, iniciada, concluída)
- Visualização detalhada do progresso de cada aluno

### Sistema de Notificações

- Notificações para alunos sobre novas atividades
- Notificações para responsáveis sobre o desempenho dos alunos
- Comunicação direta entre professores e responsáveis

## Instalação e Execução

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn

### Passos para Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/douglas-yokomizo/nota10.git
   cd nota10
   ```

2. Instale as dependências:

   ```bash
   npm install
   # ou
   yarn
   ```

3. Execute o projeto em modo de desenvolvimento:

   ```bash
   npm run dev
   # ou
   yarn dev
   ```

4. Acesse a aplicação em `http://localhost:5173`

## Credenciais de Acesso (Ambiente de Desenvolvimento)

Para testar a aplicação, utilize as seguintes credenciais:

- **Professor**:

  - Usuário: professor
  - Senha: 123456

- **Aluno**:

  - Usuário: aluno
  - Senha: 123456

- **Responsável**:
  - Usuário: responsavel
  - Senha: 123456

## Scripts Disponíveis

- `npm run dev`: Inicia o servidor de desenvolvimento
- `npm run build`: Compila o projeto para produção
- `npm run lint`: Executa a verificação de linting
- `npm run preview`: Visualiza a versão de produção localmente

## Design

Prototipo desenvolvido em mobile first no Figma.

## Princípios de Desenvolvimento

O projeto segue os princípios SOLID e DRY:

- **S** - Responsabilidade Única: Cada componente tem uma única responsabilidade
- **O** - Aberto/Fechado: Entidades abertas para extensão, fechadas para modificação
- **L** - Substituição de Liskov: Subtipos podem substituir seus tipos base
- **I** - Segregação de Interface: Interfaces específicas são melhores que uma interface geral
- **D** - Inversão de Dependência: Dependa de abstrações, não de implementações concretas
- **DRY** - Don't Repeat Yourself: Evita duplicação de código através de componentes reutilizáveis

## Contribuição

Para contribuir com o projeto, siga os passos abaixo:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Faça commit das suas alterações (`git commit -m 'Adiciona nova feature'`)
4. Faça push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo LICENSE para mais detalhes.

## Contato

Link do Projeto: [https://github.com/douglas-yokomizo/nota10](https://github.com/douglas-yokomizo/nota10)
