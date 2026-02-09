# Acervo Digital Pessoal

# Link da biblioteca: https://leonardorejani.github.io/acervo_digital_pessoal/

PWA (Progressive Web App) para gerenciamento de acervo pessoal de livros. Organize, cataloge e acompanhe suas leituras diretamente do navegador ou como app instalado no celular — funciona 100% offline.

---

## Funcionalidades

### Cadastro completo de livros

Formulario com 20 campos para catalogacao detalhada:

| Campo | Obrigatorio | Descricao |
|-------|:-----------:|-----------|
| Titulo | Sim | Nome do livro |
| Autor | Sim | Autor(es) |
| Editora | Nao | Editora/selo editorial |
| Categoria | Nao | 47 categorias predefinidas (teologia, historia, ficcao, etc.) |
| Prateleira | Nao | Localizacao fisica (Prateleira A-Z) |
| Ano de Edicao | Nao | Ano de publicacao |
| ISBN | Nao | Codigo ISBN |
| Codigo | Nao | Codigo interno personalizado |
| Tombamento | Nao | Numero de tombamento |
| Volume | Nao | Numero do volume |
| Exemplar | Nao | Numero do exemplar |
| Edicao | Nao | Numero da edicao |
| Dono | Nao | Proprietario do livro |
| Status | Nao | Nao Lido / Lendo / Lido / Emprestado |
| Favorito | Nao | Marcacao de favorito |
| Avaliacao | Nao | 1 a 5 estrelas |
| Notas | Nao | Observacoes rapidas |
| Anotacoes | Nao | Texto livre mais extenso |
| Capa | Nao | Upload de imagem (armazenada em base64) |

O sistema impede cadastro de livros duplicados (por titulo, case-insensitive).

---

### 3 modos de visualizacao

**Lista** — Visualizacao padrao com cards completos. Livros agrupados por inicial do titulo (A-Z). Cada card exibe capa, metadados, status, avaliacao e botoes de acao. Headers colapsaveis com contador de livros por letra.

**Grid** — Visualizacao em grade focada nas capas. 3 colunas no mobile, ate 6 no desktop. Agrupado por prateleira com barras separadoras. Mostra capa, titulo, autor, badge de status e icone de favorito.

**Prateleira** — Agrupado por prateleira (A-Z) com headers colapsaveis. Cards em formato retangular otimizados para visualizacao por localizacao fisica.

Todos os modos possuem **indice alfabetico lateral** com suporte a toque e arraste para navegacao rapida.

---

### Busca e filtros

**Busca rapida** — Pesquise por titulo, autor, codigo ou editora. Resultados em tempo real conforme digita.

**Filtros combinados** — Combine multiplos filtros simultaneamente:
- Prateleira
- Categoria
- Status (Nao Lido, Lendo, Lido, Emprestado)
- Autor
- Apenas Favoritos

Indicador visual (icone preenchido) quando ha filtros ativos. Botao "Limpar Filtros" para resetar tudo.

---

### Ordenacao

10 opcoes de ordenacao disponiveis:

- Titulo (A-Z / Z-A)
- Autor (A-Z / Z-A)
- Avaliacao (Melhor / Pior)
- Ano (Mais Recente / Mais Antigo)
- Adicionado (Recentemente / Primeiro)

A ordenacao padrao pode ser configurada nas Configuracoes.

---

### Sistema de emprestimos

- Empreste um livro rapidamente informando o nome da pessoa
- O status muda automaticamente para "Emprestado" com a data registrada
- Devolva com um clique — o status volta ao anterior e a devolucao e registrada
- Historico completo de emprestimos por livro (pessoa, data de emprestimo, data de devolucao)

---

### Avaliacao e favoritos

- Avalie livros de 1 a 5 estrelas
- Marque/desmarque favoritos com um clique
- Filtre para ver apenas seus favoritos

---

### Anotacoes

Editor de anotacoes pessoais por livro, acessivel pelo modal de edicao. Ideal para resumos, citacoes ou lembretes de leitura.

---

### Importacao e exportacao CSV

**Exportar** — Gera arquivo `biblioteca_YYYY-MM-DD.csv` com todos os 20 campos, encoding UTF-8 BOM (compativel com Excel).

**Importar** — Leia arquivos CSV com parsing robusto. Ignora duplicatas automaticamente e mostra contador de livros importados vs. ignorados.

**Template** — Download de template CSV com exemplo preenchido e as 20 colunas na ordem correta.

Ideal para backup periodico e migracao entre dispositivos.

---

### Deletar em massa

Selecione multiplos livros para exclusao com busca integrada e selecao por checkbox. Confirmacao obrigatoria antes de deletar.

---

### Modo escuro

Alternancia entre tema claro e escuro. As cores sao aplicadas em toda a interface (background, cards, textos, bordas, modais).

---

### Configuracoes

Acesse pelo menu hamburger no canto superior direito:

| Configuracao | Opcoes |
|-------------|--------|
| Modo Escuro | Ligado / Desligado |
| Tamanho da Fonte | Pequeno / Medio / Grande |
| Visualizacao Padrao | Lista / Grid / Prateleira |
| Densidade dos Cards | Compacto / Normal / Espacoso |
| Ordenacao Padrao | 10 opcoes de ordenacao |

Tambem inclui:
- Contador de livros e prateleiras cadastrados
- Botao "Apagar Todos os Dados" (dupla confirmacao de seguranca)

---

### PWA — Funciona como app nativo

- Instalavel no celular e desktop (Adicionar a Tela de Inicio)
- Funciona 100% offline apos primeiro acesso
- Cache automatico de assets via Service Worker (Workbox)
- Atualizacao automatica quando nova versao e publicada
- Otimizado para iOS (safe-areas, prevencao de zoom, touch)

---

## Como usar

### Fluxo basico

1. Acesse a URL ou instale o PWA no celular
2. Toque em **+** ou no botao **Adicionar Livro** para cadastrar
3. Preencha titulo, autor e os campos que desejar
4. Use a **busca** e os **filtros** para encontrar livros rapidamente
5. Alterne entre **Lista**, **Grid** e **Prateleira** conforme preferir
6. Use o **indice lateral** para navegar entre letras/prateleiras
7. Toque em um livro para ver detalhes, editar, emprestar ou avaliar
8. Exporte **CSV** periodicamente como backup

### Importar livros de uma planilha

1. Acesse o menu → **Gerenciar CSV**
2. Baixe o **template** de exemplo
3. Preencha a planilha no Excel/Google Sheets seguindo as colunas do template
4. Salve como CSV (UTF-8)
5. Importe o arquivo — duplicatas serao ignoradas automaticamente

### Emprestar um livro

1. No card do livro, toque em **Emprestar?**
2. Digite o nome da pessoa
3. O livro muda para status "Emprestado" com a data
4. Para devolver: toque em **Devolver** no card

### Instalar no celular

**iPhone/iPad (Safari):**
1. Acesse a URL no Safari
2. Toque no icone **Compartilhar** (quadrado com seta)
3. Toque em **Adicionar a Tela de Inicio**

**Android (Chrome):**
1. Acesse a URL no Chrome
2. Toque nos **3 pontos** → **Instalar app** (ou no banner automatico)

---

## Como iniciar (desenvolvimento)

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desenvolvimento
npm run dev
```

O app estara disponivel em `http://localhost:5173/acervo_digital_pessoal/`.

---

## Build e Deploy

```bash
# Build para producao
npm run build

# Preview local do build
npm run preview
```

O deploy e feito automaticamente via **GitHub Actions** a cada push na branch `main`. O app e publicado em GitHub Pages.

---

## Tecnologias

| Tecnologia | Uso |
|-----------|-----|
| React 18 | Interface de usuario |
| Vite 5 | Build tool e dev server |
| Tailwind CSS 3 | Estilizacao utilitaria |
| Lucide React | Biblioteca de icones |
| vite-plugin-pwa | Service Worker e manifesto PWA |
| Workbox | Cache de assets e runtime caching |
| GitHub Actions | CI/CD automatico |
| GitHub Pages | Hospedagem |

---

## Armazenamento

Todos os dados sao salvos no **LocalStorage** do navegador:

- `biblioteca-livros` — array JSON com todos os livros
- `biblioteca-config` — objeto JSON com configuracoes

Nao ha backend ou banco de dados. Os dados persistem entre sessoes, mas sao locais ao dispositivo. Use a exportacao CSV para backup e transferencia entre dispositivos.

---

## Estrutura do projeto

```
├── .github/workflows/
│   └── deploy.yml          # CI/CD GitHub Actions
├── public/
│   ├── favicon.ico
│   ├── icon-192.png         # Icone PWA 192x192
│   ├── icon-512.png         # Icone PWA 512x512
│   └── icon.svg
├── src/
│   ├── App.jsx              # Componente principal (toda a aplicacao)
│   ├── index.css            # Estilos globais, animacoes, safe-areas
│   └── main.jsx             # Entry point React
├── index.html               # HTML principal com meta tags PWA
├── package.json
├── vite.config.js           # Configuracao Vite + PWA manifest
├── tailwind.config.js       # Tema e animacoes customizadas
└── postcss.config.js
```
