# DevTracker

Dashboard responsivo para pesquisar perfis do GitHub, visualizar estatísticas e explorar os repositórios públicos mais recentes. O projeto foi criado como demonstração de React, Hooks e consumo de API REST sem backend.

## Tecnologias

- React 19 e Vite
- JavaScript (ES Modules)
- CSS moderno e responsivo
- GitHub REST API e Fetch API

## Como executar

```bash
npm install
npm run dev
```

Para gerar uma versão de produção:

```bash
npm run build
npm run preview
```

## Funcionalidades

- Busca por botão ou tecla Enter
- Perfil completo: avatar, bio, localização, blog, datas e contadores
- Até 10 repositórios públicos, ordenados por atualização mais recente
- Estatísticas de repositórios, seguidores, seguindo e stars dos resultados carregados
- Distribuição visual das linguagens principais
- Skeleton de carregamento, estado inicial, repositórios vazios, usuário inexistente e mensagens de erro
- Cancelamento da busca anterior ao iniciar uma nova, evitando resultados defasados e requisições concorrentes desnecessárias

## Estrutura

```text
src/
├── components/       # Blocos reutilizáveis da interface
├── hooks/useGithub.js
├── pages/Home.jsx
├── services/githubApi.js
├── styles/global.css
└── utils/formatters.js
```

## Limitações da API

O projeto usa a API pública do GitHub, sem autenticação. Por isso, há um limite típico de 60 requisições por hora para cada IP. A aplicação identifica quando esse limite é atingido e informa o usuário. Os dados apresentados dependem dos repositórios públicos retornados pela API; as stars representam apenas os até 10 repositórios carregados.
