/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Necessário para GitHub Pages
  images: {
    unoptimized: true, // Necessário pois o GitHub não tem servidor de imagem
  },
  // Se seu repo NÃO for "usuario.github.io", descomente a linha abaixo e ponha o nome dele:
  // basePath: '/portifolio', 
};

export default nextConfig; // ✅ Use isto em vez de module.exports