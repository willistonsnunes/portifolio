
export const profile = {
  name: "Williston Sousa Nunes",
  role: "Engenheiro de Dados",
  tagline: "Construo pipelines de dados confiáveis e escaláveis.",
  about: [
    "Sou engenheiro de dados apaixonado por transformar dados brutos em produtos confiáveis. Meu trabalho vive na interseção entre engenharia de software e análise, criando pipelines que não apenas funcionam, mas são observáveis, testados e fáceis de manter.",
    "Atualmente trabalho com orquestração de pipelines em batch e streaming, modelagem dimensional e otimização de custos em data warehouses na nuvem. Gosto de instrumentar tudo com métricas e alertas para que os dados cheguem corretos e no tempo certo.",
    "Nas horas vagas, escrevo relatórios técnicos, contribuo com projetos open source e experimento novas ferramentas do ecossistema de dados.",
  ],
  location: "São Paulo, Brasil",
  email: "willistonsousanunes@gmail.com",
  resumeUrl: "#",
  socials: {
    github: "https://github.com/willistonsnunes",
    linkedin: "https://linkedin.com/in/williston-sousa-nunes-12986b80/",
    email: "mailto:willistonsousanunes@gmail.com",
  },
}

export const skills = [
  "Python",
  "SQL",
  "Apache Airflow",
  "dbt",
  "Apache Spark",
  "Kafka",
  "Snowflake",
  "BigQuery",
  "Databricks",
  "Docker",
  "Terraform",
  "AWS",
]

export type Project = {
  title: string
  period: string
  description: string
  stack: string[]
  href: string
  metric?: string
}

export const projects: Project[] = [
  {
    title: "Plataforma de Ingestão em Tempo Real",
    period: "2024",
    description:
      "Pipeline de streaming que processa eventos de clickstream com Kafka e Spark Structured Streaming, entregando dados no data lake com latência abaixo de 1 minuto.",
    stack: ["Kafka", "Spark", "Delta Lake", "AWS"],
    href: "#",
    metric: "2M eventos/dia",
  },
  {
    title: "Modernização do Data Warehouse",
    period: "2023",
    description:
      "Migração de um DW legado para Snowflake com modelagem dbt, testes de qualidade automatizados e documentação de linhagem de dados para as áreas de negócio.",
    stack: ["Snowflake", "dbt", "Airflow", "Terraform"],
    href: "#",
    metric: "-40% custo",
  },
  {
    title: "Camada de Qualidade de Dados",
    period: "2023",
    description:
      "Framework de validação que executa checks de qualidade em cada pipeline, com alertas no Slack e dashboards de confiabilidade por domínio de dados.",
    stack: ["Python", "Great Expectations", "Airflow"],
    href: "#",
    metric: "120+ checks",
  },
  {
    title: "Feature Store para ML",
    period: "2022",
    description:
      "Repositório centralizado de features com materialização batch e online, reduzindo o retrabalho entre times de dados e cientistas de dados.",
    stack: ["Python", "Feast", "Redis", "BigQuery"],
    href: "#",
    metric: "30+ modelos",
  },
]

export type Repo = {
  name: string
  description: string
  language: string
  stars: number
  href: string
}

export const repos: Repo[] = [
  {
    name: "airflow-dags-toolkit",
    description: "Utilitários e padrões reutilizáveis para DAGs do Apache Airflow.",
    language: "Python",
    stars: 342,
    href: "https://github.com/",
  },
  {
    name: "dbt-quality-macros",
    description: "Coleção de macros dbt para testes de qualidade de dados.",
    language: "SQL",
    stars: 218,
    href: "https://github.com/",
  },
  {
    name: "spark-streaming-patterns",
    description: "Exemplos de arquiteturas de streaming com Spark Structured Streaming.",
    language: "Scala",
    stars: 156,
    href: "https://github.com/",
  },
]

export type Report = {
  title: string
  description: string
  date: string
  tag: string
  href: string
}

export const reports: Report[] = [
  {
    title: "Reduzindo custos em pipelines Spark",
    description:
      "Um estudo prático sobre particionamento, cache e tuning de jobs Spark para cortar custos de processamento sem perder performance.",
    date: "Mar 2024",
    tag: "Performance",
    href: "#",
  },
  {
    title: "Modelagem dimensional na prática",
    description:
      "Guia sobre como estruturar tabelas fato e dimensão em um data warehouse moderno usando dbt.",
    date: "Jan 2024",
    tag: "Modelagem",
    href: "#",
  },
  {
    title: "Observabilidade de dados do zero",
    description:
      "Como instrumentar pipelines com métricas, logs e alertas para detectar problemas antes dos usuários.",
    date: "Nov 2023",
    tag: "Observabilidade",
    href: "#",
  },
]
