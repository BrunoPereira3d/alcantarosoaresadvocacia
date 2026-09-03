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

| Caminho                                                  | Finalidade                                                          |
| -------------------------------------------------------- | ------------------------------------------------------------------- |
| `client/src/pages/Home.tsx`                              | Página institucional e conteúdo da interface                        |
| `client/src/index.css`                                   | Tokens, tipografia, layout, responsividade e animações              |
| `client/index.html`                                      | Metadados, Open Graph, favicon e Schema.org LegalService            |
| `client/public/robots.txt` e `client/public/sitemap.xml` | Arquivos básicos de indexação                                       |
| `client/public/404.html`                                 | Página de erro estática; a Netlify a serve com HTTP 404 real        |
| `netlify.toml`                                           | Build, cabeçalhos de segurança (HSTS, CSP, Referrer-Policy) e cache |
| `client/public/assets/fonts/`                            | Arquivos de tipografia auto-hospedados                              |
| `ideas.md`                                               | Direção de design e decisões de estilo                              |
| `assets.md`                                              | Mapa de aplicação dos ativos oficiais                               |
| `content_sources.md`                                     | Registro de fontes e limites editoriais                             |

## Ativos

As imagens (logo, marca, retrato e imagem de compartilhamento) ficam em `client/public/assets/`, versionadas junto com o código. Não há mais dependência de armazenamento externo do Manus: o build gera um site estático.

A tipografia é **auto-hospedada**. As fontes **Cormorant Garamond** (títulos) e **Manrope** (texto) ficam em `client/public/assets/fonts/`, servidas pelo próprio domínio: a renderização não faz nenhuma chamada externa e o IP dos visitantes não é transmitido a terceiros — coerente com a apresentação de conformidade com a LGPD.

São fontes **variáveis**: um arquivo por subconjunto cobre toda a faixa de pesos (Manrope 200–800, Cormorant Garamond 300–700), em vez de um arquivo por peso. Só os subconjuntos latinos são versionados; os `unicode-range` das declarações `@font-face` em `client/src/index.css` garantem que o navegador baixe apenas o necessário. Os arquivos vêm dos pacotes npm `@fontsource-variable/manrope` e `@fontsource-variable/cormorant-garamond`; para atualizá-los, instale os pacotes, copie os `.woff2` latinos de `node_modules/@fontsource-variable/*/files/` e remova os pacotes novamente.

## Continuidade e backup

Este repositório é a cópia de continuidade do código-fonte, sem vínculo com o Manus. Antes de alterações relevantes, recomenda-se registrar um commit descritivo. Alterações de conteúdo devem manter a regra de não inserir dados sobre clientes, resultados, equipe, tempo de atuação ou credenciais que não tenham sido aprovados.

## Indexação e rotas

O site é uma **página única**. Não há roteador de cliente: `client/public/_redirects` foi
esvaziado de propósito, para que endereços inexistentes devolvam **HTTP 404 real** (via
`404.html`) em vez do antigo `/* /index.html 200`, que fazia qualquer URL responder 200 e
produzia soft 404 para os buscadores.

Ao alterar o conteúdo da página, atualize `<lastmod>` em `client/public/sitemap.xml`.

Se algum dia forem criadas rotas de cliente, será preciso reintroduzir a regra de reescrita
SPA em `_redirects` e reavaliar o tratamento de 404.
