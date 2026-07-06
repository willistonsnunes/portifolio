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

/** @type {import('next').NextConfig} 
const nextConfig = {
  output: 'export', // Ativa a exportação estática
  basePath: '/portifolio', // Substitua pelo nome exato do seu repo no GitHub
  assetPrefix: '/portifolio/', // Substitua pelo nome exato do seu repo no GitHub
  images: {
    unoptimized: true, // Necessário pois o GitHub Pages não suporta otimização de imagens do Next.js
  },
};
**/

module.exports = nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Adicione basePath e assetPrefix apenas se o nome do seu repo NÃO for seu-usuario.github.io
   basePath: '/portifolio',
};

export default nextConfig; // ✅ Forma correta para .mjs