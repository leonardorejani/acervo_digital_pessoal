# Biblioteca Digital - Leonardo Rejani

PWA (Progressive Web App) para gerenciamento de acervo pessoal de livros.

## Instalação

```bash
# Instalar dependências
npm install

# Gerar ícones (abra no navegador e baixe)
# Abra generate-icons.html no navegador

# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

## Gerando os Ícones

Antes de fazer o build, você precisa gerar os ícones PNG:

1. **Opção 1 - Navegador (Recomendado):**
   - Abra o arquivo `generate-icons.html` no navegador
   - Clique nos botões para baixar cada ícone
   - Mova os arquivos para a pasta `public/`

2. **Opção 2 - Node.js:**
   ```bash
   npm install canvas
   node scripts/generate-icons.js
   ```

## Deploy no GitHub Pages

1. Crie um repositório no GitHub chamado `biblioteca-digital`

2. Inicialize o git e faça push:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/SEU-USUARIO/biblioteca-digital.git
   git push -u origin main
   ```

3. No GitHub, vá em **Settings > Pages**:
   - Source: GitHub Actions

4. O deploy será automático a cada push na branch `main`

5. Acesse: `https://SEU-USUARIO.github.io/biblioteca-digital/`

## Instalando no iPhone

1. Acesse a URL do GitHub Pages no Safari
2. Toque no botão **Compartilhar** (ícone de quadrado com seta)
3. Selecione **"Adicionar à Tela de Início"**
4. Confirme o nome e toque em **Adicionar**

O app aparecerá na tela inicial como um app nativo!

## Funcionalidades

- Cadastro completo de livros com múltiplos campos
- Organização por prateleiras e categorias
- Controle de empréstimos com histórico
- Sistema de avaliação (estrelas)
- Favoritos
- Anotações pessoais
- Importação/Exportação CSV
- Modo escuro
- Busca rápida
- Funciona 100% offline (dados salvos no dispositivo)

## Tecnologias

- React 18
- Vite
- Tailwind CSS
- Lucide Icons
- PWA (vite-plugin-pwa)
