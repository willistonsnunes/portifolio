/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // O basePath deve ser exatamente o nome do seu repositório no GitHub
  // Exemplo: se o seu repositório é ://github.com, use '/meu-projeto'
  basePath: '/portifolio', 
  images: {
    unoptimized: true,
  },
};

export default nextConfig;