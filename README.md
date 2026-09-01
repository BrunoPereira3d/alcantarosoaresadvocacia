# Alcântaro Soares Advocacia

Página institucional da Alcântaro Soares Advocacia, desenvolvida em React, Vite e Tailwind CSS.

## Escopo editorial

O projeto apresenta o escritório como advocacia full service, com especialidade em compliance trabalhista e prevenção de passivos. A página inclui uma apresentação institucional, frentes de atuação, perfil da fundadora Cintia Alves Soares e meios de contato autorizados. Os textos foram construídos a partir de informações confirmadas pelo usuário e de perfis públicos identificados em `content_sources.md`.

## Desenvolvimento local

```bash
pnpm install
pnpm dev
```

Para criar a versão de produção, execute `pnpm build`. A verificação de tipos é feita com `pnpm check`.

## Estrutura relevante

| Caminho | Finalidade |
|---|---|
| `client/src/pages/Home.tsx` | Página institucional e conteúdo da interface |
| `client/src/index.css` | Tokens, tipografia, layout, responsividade e animações |
| `client/index.html` | Metadados, Open Graph, favicon e Schema.org LegalService |
| `client/public/robots.txt` e `client/public/sitemap.xml` | Arquivos básicos de indexação |
| `ideas.md` | Direção de design e decisões de estilo |
| `assets.md` | Mapa de aplicação dos ativos oficiais |
| `content_sources.md` | Registro de fontes e limites editoriais |

## Ativos

As imagens (logo, marca, retrato e imagem de compartilhamento) ficam em `client/public/assets/`, versionadas junto com o código. Não há mais dependência de armazenamento externo do Manus: o build gera um site 100% estático, sem chamadas a serviços de terceiros além dos links de contato (WhatsApp, redes sociais, Google Maps).

## Continuidade e backup

Este repositório é a cópia de continuidade do código-fonte, sem vínculo com o Manus. Antes de alterações relevantes, recomenda-se registrar um commit descritivo. Alterações de conteúdo devem manter a regra de não inserir dados sobre clientes, resultados, equipe, tempo de atuação ou credenciais que não tenham sido aprovados.
