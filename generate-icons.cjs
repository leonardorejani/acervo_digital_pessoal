const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// SVG com letra "A" em fundo azul
function createSVG(size) {
  const fontSize = Math.round(size * 0.65);
  const yOffset = Math.round(size * 0.72);
  const radius = Math.round(size * 0.125);

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
  <rect width="${size}" height="${size}" rx="${radius}" fill="#00407a"/>
  <text x="${size/2}" y="${yOffset}" font-family="Arial, Helvetica, sans-serif" font-size="${fontSize}" font-weight="bold" fill="#ffffff" text-anchor="middle">A</text>
</svg>`;
}

async function generateIcons() {
  const publicDir = path.join(__dirname, 'public');

  // Gerar icon-192.png
  console.log('Gerando icon-192.png...');
  await sharp(Buffer.from(createSVG(192)))
    .png()
    .toFile(path.join(publicDir, 'icon-192.png'));

  // Gerar icon-512.png
  console.log('Gerando icon-512.png...');
  await sharp(Buffer.from(createSVG(512)))
    .png()
    .toFile(path.join(publicDir, 'icon-512.png'));

  // Gerar favicon.ico (32x32 como PNG, depois renomear)
  console.log('Gerando favicon.ico...');
  await sharp(Buffer.from(createSVG(32)))
    .png()
    .toFile(path.join(publicDir, 'favicon.ico'));

  console.log('Ícones gerados com sucesso!');
}

generateIcons().catch(console.error);
