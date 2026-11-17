# LaborHub — Front-end

Implementação das telas do protótipo **LaborHub** (Figma) em React + Vite.

## Como rodar

```bash
npm install
npm run dev
```

Abra http://localhost:5173.

## Telas / rotas

| Rota            | Tela                         | Arquivo                         |
| --------------- | ---------------------------- | ------------------------------- |
| `/`             | Home — Explore o mercado     | `src/pages/Home.jsx`            |
| `/propostas`    | Propostas para você          | `src/pages/Propostas.jsx`       |
| `/salarios`     | Salários                     | `src/pages/Salarios.jsx`        |
| `/empresas`     | Empresas                     | `src/pages/Empresas.jsx`        |
| `/global`       | Mercado de trabalho global   | `src/pages/Global.jsx`          |
| `/perfil`       | Meu perfil                   | `src/pages/Perfil.jsx`          |
| `/notificacoes` | Notificações                 | `src/pages/Notificacoes.jsx`    |

## Estrutura

```
src/
  components/   Header, Footer, Layout, Logo, Petals (formas decorativas), WorldMap
  pages/        uma página por tela, cada uma com seu .css
  data/mock.js  dados de exemplo (propostas, empresas, notificações, salários)
  styles/global.css  cores, fontes e classes compartilhadas (botões, chips, cards)
```

- Cores do Figma ficam em variáveis CSS em `src/styles/global.css` (`--navy`, `--red`, `--yellow`, `--blue`...).
- Fontes: DM Sans (texto) e Lora (logo e títulos serifados), via Google Fonts.
- Ícones: [lucide-react](https://lucide.dev).
- Os dados são mock — quando houver backend, é só trocar os imports de `data/mock.js` por chamadas à API.

## Pendências / ajustes finos

- Mapas (`src/components/WorldMap.jsx`) usam dados geográficos reais (`world-atlas` + `d3-geo`, projeção Mercator).
  Os pontos da Home ficam pré-gerados em `src/data/worldDots.json`; para mudar a densidade, edite `STEP` e rode
  `node scripts/gerar-mapa-pontos.mjs`. Os países destacados na tela Global ficam em `PAISES_DESTAQUE`.
- Logos das empresas fictícias estão redesenhados em SVG em `src/components/CompanyLogo.jsx`.
- Filtros de Salários, Global e Empresas são apenas visuais (os da tela de Propostas e Notificações já funcionam).
