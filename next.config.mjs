/** @type {import('next').NextConfig} 
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
**/

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Ativa a exportação estática
  basePath: '/nome-do-seu-repositorio', // Substitua pelo nome exato do seu repo no GitHub
  assetPrefix: '/nome-do-seu-repositorio/', // Substitua pelo nome exato do seu repo no GitHub
  images: {
    unoptimized: true, // Necessário pois o GitHub Pages não suporta otimização de imagens do Next.js
  },
};

module.exports = nextConfig;