// Dados de exemplo (mock) usados nas telas enquanto não existe backend.

export const propostas = [
  {
    id: 1,
    titulo: 'UX/UI Designer - Estágio',
    empresa: 'Nômade Tech',
    local: 'Remoto',
    nivel: 'Estágio',
    quando: 'Há 2 horas',
    logo: 'nomade',
  },
  {
    id: 2,
    titulo: 'Product Designer Júnior',
    empresa: 'Lume Digital',
    local: 'Híbrido (Recife/ PE)',
    nivel: 'Júnior',
    quando: 'Há 5 horas',
    logo: 'lume',
  },
  {
    id: 3,
    titulo: 'Design Gráfico - Estágio',
    empresa: 'Estúdio Soma',
    local: 'Presencial (Recife/ PE)',
    nivel: 'Estágio',
    quando: 'Há 1 dia',
    logo: 'soma',
    poucaVisibilidade: true,
  },
]

export const faixasSalariais = [
  { nivel: 'Estagiário', min: 1200, max: 2000, cor: 'var(--yellow)', label: 'R$ 1.200 a 2.000' },
  { nivel: 'Júnior', min: 2500, max: 4200, cor: 'var(--blue)', label: 'R$ 2.500 a 4.200' },
  { nivel: 'Pleno', min: 4500, max: 7000, cor: 'var(--navy)', label: 'R$ 4.500 a 7.000' },
  { nivel: 'Sênior', min: 7500, max: 12000, cor: 'var(--red)', label: 'R$ 7.500 a 12.000' },
]

export const empresas = [
  {
    id: 1,
    nome: 'Nexa digital',
    setor: 'Tecnologia',
    local: 'Recife, PE',
    descricao: 'Soluções digitais que conectam pessoas e negócios.',
    funcionarios: '201 - 500',
    vagas: 12,
    logo: 'nexa',
    destaque: true,
  },
  {
    id: 2,
    nome: 'Artemis Tech',
    setor: 'Tecnologia',
    local: 'São Paulo, SP',
    descricao: 'Inovação e design para experiências mais humanas.',
    funcionarios: '500 - 600+',
    vagas: 28,
    logo: 'artemis',
    destaque: true,
  },
  {
    id: 3,
    nome: 'Lumen Labs',
    setor: 'Saúde',
    local: 'Campinas, SP',
    descricao: 'Soluções digitais que conectam pessoas e negócios.',
    funcionarios: '201 - 500',
    vagas: 8,
    logo: 'lumen',
    destaque: true,
  },
  {
    id: 4,
    nome: 'Vértice',
    setor: 'Energia',
    local: 'Rio de Janeiro, RJ',
    descricao: 'Energia limpa para o futuro.',
    funcionarios: '600+',
    vagas: 19,
    logo: 'vertice',
  },
  {
    id: 5,
    nome: 'Plana Consultoria',
    setor: 'Serviço',
    local: 'Fortaleza, CE',
    descricao: 'Consultoria em gestão e pessoas.',
    funcionarios: '51 - 200',
    vagas: 5,
    logo: 'plana',
  },
]

export const notificacoes = [
  {
    grupo: 'Hoje',
    itens: [
      { tipo: 'proposta', titulo: 'Nova proposta para você!', texto: 'UI/UX Designer júnior na Artemis Tech.', quando: 'Há 17mins', nova: true },
      { tipo: 'candidatura', titulo: 'Atualização de candidatura', texto: 'A empresa Nexa Digital visualizou seu currículo.', quando: 'Há 45mins', nova: true },
      { tipo: 'atualizacao', titulo: 'Recomendação de vaga', texto: 'Com base no seu perfil, confira: Designer de Produto.', quando: 'Há 1h', nova: true },
    ],
  },
  {
    grupo: 'Ontem',
    itens: [
      { tipo: 'proposta', titulo: 'Oportunidade incrível!', texto: 'Desenvolvedor Front-end na Inova Solutions.', quando: 'Ontem, 16:24' },
      { tipo: 'candidatura', titulo: 'Candidatura enviada!', texto: 'Sua candidatura para UI Designer na Beta Studio foi enviada.', quando: 'Ontem, 10:27' },
    ],
  },
  {
    grupo: 'Essa semana',
    itens: [
      { tipo: 'atualizacao', titulo: 'Novas vagas em destaque', texto: 'Confira oportunidades em Tecnologia na sua região.', quando: 'Há 2 dias' },
      { tipo: 'proposta', titulo: 'Vaga popular na sua área', texto: 'UI/UX Designer Pleno na InovaTech.', quando: 'Há 3 dias' },
      { tipo: 'candidatura', titulo: 'Atualização da candidatura', texto: 'Você avançou para a próxima etapa na Artemis Tech.', quando: 'Há 4 dias' },
    ],
  },
]
