# Changelog

## [1.1.0] - 2026-02-06

### Ajustes de UI
- Botão "Emprestei" renomeado para "Emprestar?" nos cards e "Emprestar para alguém" no modal
- Entalhe de prateleira nos cards visível apenas no modo lista, com texto "PRATELEIRA X"
- Botão "Adicionar Anotações" removido dos cards (acessível pelo modal de edição)
- Badge "xxx livros" com largura uniforme e alinhado à direita
- Headers de prateleira com nomenclatura padronizada

## [1.0.0] - 2026-02-04

### Correções iOS
- scrollIntoView trocado por scroll manual no índice alfabético (fix touch iOS)
- Toast respeita safe-area-inset-top do iOS
- Modais centralizados com scroll lock e índice oculto quando modal aberto
- package-lock.json incluído para npm ci no CI
- Pages source configurado como GitHub Actions
