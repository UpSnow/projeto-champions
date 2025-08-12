# API de Players e Clubs

## Descrição

Esta API, desenvolvida com **Node.js**, **Express** e **TypeScript**, oferece funcionalidades para gerenciamento de dados de **players** (jogadores) e **clubs** (clubes). Ela disponibiliza um **CRUD completo para players**, permitindo criação, leitura, atualização e exclusão dos dados, além de um endpoint dedicado para listar todos os clubs cadastrados.

Atualmente, os dados são mantidos apenas em **memória volátil**, o que significa que são perdidos a cada reinicialização da aplicação. Apesar disso, a API já oferece uma estrutura organizada, modular e fácil de estender.

### Futuras melhorias planejadas:

- **Integração com banco de dados** para persistência permanente dos dados, utilizando tecnologias como MongoDB, PostgreSQL ou MySQL.
- **Validação e sanitização dos dados recebidos** para garantir a integridade e segurança da aplicação.
- **Implementação de autenticação e autorização**, protegendo os endpoints e garantindo acesso seguro aos recursos.
- **Testes automatizados** para assegurar a qualidade e confiabilidade do sistema.
- **Documentação interativa** usando ferramentas como Swagger, facilitando o consumo da API por outros desenvolvedores.
- **Recursos avançados** como paginação, filtros e ordenação nas listagens, otimizando a experiência do usuário e performance.

Essa estrutura inicial facilita a expansão da API para atender a demandas futuras, mantendo código limpo e escalável.

---

## Tecnologias Utilizadas

- Node.js
- Express 5
- TypeScript
- CORS

---

## Endpoints da API

### Players

| Método | Rota             | Descrição                                  |
|--------|------------------|--------------------------------------------|
| GET    | `/players`       | Retorna todos os players                    |
| GET    | `/players/:id`   | Retorna um player pelo ID                   |
| POST   | `/players`       | Cria um novo player                         |
| PATCH  | `/players/:id`   | Atualiza parcialmente um player existente   |
| DELETE | `/players/:id`   | Remove um player pelo ID                    |

### Clubs

| Método | Rota         | Descrição                 |
|--------|--------------|---------------------------|
| GET    | `/clubs`     | Retorna todos os clubs    |

---

## Scripts disponíveis

- `npm run dist`  
  Compila o código TypeScript para a pasta `dist` usando o `tsup`.

- `npm run start:dev`  
  Inicia o servidor em modo desenvolvimento, usando `tsx` e carregando variáveis de ambiente do arquivo `.env`.

- `npm run start:watch`  
  Inicia o servidor em modo desenvolvimento com watch, reiniciando automaticamente ao detectar mudanças no código.

- `npm run start:dist`  
  Compila o código e inicia o servidor a partir dos arquivos compilados na pasta `dist`.

---

## Como rodar o projeto

1. Clone o repositório:
   ```bash
   git clone <url-do-repositorio>
