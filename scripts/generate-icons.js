// Script para gerar ícones PNG a partir do SVG
// Execute com: node scripts/generate-icons.js

const fs = require('fs');
const path = require('path');

// Criar canvas simples com dados PNG mínimos
function createIconPNG(size) {
  // PNG header + IHDR + IDAT com cor sólida #00407a + IEND
  // Este é um PNG mínimo azul (#00407a) para placeholder

  const { createCanvas } = require('canvas');
  const canvas = createCanvas(size, size);
  const ctx = canvas.getContext('2d');

  // Background
  ctx.fillStyle = '#00407a';
  roundRect(ctx, 0, 0, size, size, size * 0.125);
  ctx.fill();

  // Book
  const scale = size / 512;
  ctx.save();
  ctx.translate(96 * scale, 80 * scale);

  // Left page
  ctx.fillStyle = 'rgba(255,255,255,0.9)';
  ctx.beginPath();
  ctx.moveTo(160 * scale, 0);
  ctx.lineTo(160 * scale, 320 * scale);
  ctx.lineTo(0, 280 * scale);
  ctx.lineTo(0, 40 * scale);
  ctx.closePath();
  ctx.fill();

  // Right page
  ctx.fillStyle = 'rgba(255,255,255,0.7)';
  ctx.beginPath();
  ctx.moveTo(160 * scale, 0);
  ctx.lineTo(160 * scale, 320 * scale);
  ctx.lineTo(320 * scale, 280 * scale);
  ctx.lineTo(320 * scale, 40 * scale);
  ctx.closePath();
  ctx.fill();

  // Spine
  ctx.fillStyle = '#4fc3f7';
  ctx.fillRect(155 * scale, 0, 10 * scale, 320 * scale);

  ctx.restore();

  return canvas.toBuffer('image/png');
}

function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

try {
  const publicDir = path.join(__dirname, '..', 'public');

  console.log('Gerando ícones...');
  fs.writeFileSync(path.join(publicDir, 'icon-192.png'), createIconPNG(192));
  fs.writeFileSync(path.join(publicDir, 'icon-512.png'), createIconPNG(512));
  fs.writeFileSync(path.join(publicDir, 'favicon.ico'), createIconPNG(32));

  console.log('Ícones gerados com sucesso em public/');
} catch (e) {
  if (e.code === 'MODULE_NOT_FOUND') {
    console.log('\n⚠️  Módulo "canvas" não encontrado.');
    console.log('\nOpções para gerar os ícones:');
    console.log('1. Instale o canvas: npm install canvas');
    console.log('2. Ou abra generate-icons.html no navegador e baixe os ícones');
    console.log('3. Ou use um serviço online como realfavicongenerator.net\n');
  } else {
    console.error('Erro:', e.message);
  }
}
