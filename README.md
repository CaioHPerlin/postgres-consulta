
# postgres-consulta

Este README explica apenas como rodar o projeto localmente.

## Requisitos
- Node.js (recomendado v22+)
- PostgreSQL em execução e acessível, com função de buscar pessoas por CPF já criada.
- pnpm (recomendado) ou npm/yarn

> Observação: o projeto contém `packageManager: "pnpm@..."` no package.json, por isso os exemplos usam `pnpm`. Você pode usar `npm` se preferir.

## Passos para rodar

1. Clone o repositório e entre na pasta:
```bash
git clone https://github.com/CaioHPerlin/postgres-consulta.git
cd postgres-consulta
```

2. Instale as dependências:
```bash
# com pnpm (recomendado)
pnpm install

# ou com npm
npm install
```

3. Crie o arquivo de ambiente a partir do exemplo e preencha os valores:
```bash
cp .env.example .env
```

Edite `.env` e atualize as variáveis com os dados do seu PostgreSQL:

```dotenv
DB_USERNAME=usuario
DB_PASSWORD=senha
DB_HOSTNAME=localhost
DB_PORT=5432
DB_DATABASE=seubanco
```

4. Inicie a aplicação:
```bash
# produção/normal
pnpm start
# ou
npm run start

# modo de desenvolvimento (hot reload conforme script)
pnpm run start:dev
# ou
npm run start:dev
```

O script definido em package.json inicia o arquivo `src/index.js`. Verifique os logs no terminal para a porta e mensagens do servidor.

## Observações e solução de problemas rápidos
- Certifique-se de que o PostgreSQL está rodando e que o usuário/senha/banco permitem conexão do host onde você executa a aplicação.
- Se houver problema com a leitura do `.env` (por exemplo, se a sua versão do Node não aceitar a flag passada no script), você pode:
  - Exportar as variáveis de ambiente manualmente antes de rodar (ex.: `export DB_USERNAME=...` no Linux/macOS) ou
  - Usar uma ferramenta/loader (por exemplo `dotenv`) para carregar `.env` ao iniciar o app.
- Se a porta não estiver explícita nas variáveis de ambiente, verifique `src/index.js` para saber qual porta o servidor usa ou onde ela é logada.
```
