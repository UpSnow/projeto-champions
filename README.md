# 🚀 Technologies

This boilerplate uses the following technologies and libraries:

### 📦 Dependencies

- [TypeScript](https://www.npmjs.com/package/typescript) – Superset for scalable JavaScript development.
- [tsx](https://www.npmjs.com/package/tsx) – TypeScript Execute: run TypeScript directly with Node.js.
- [tsup](https://www.npmjs.com/package/tsup) – Bundle your TypeScript project easily (powered by esbuild).
- [@types/node](https://www.npmjs.com/package/@types/node) – Type definitions for Node.js.

### 📄 Main Files

- `.gitignore` – Ignores common folders like `node_modules`, `dist`, etc.
- `.env` – Environment variable configuration file.
- `tsconfig.json` – TypeScript compiler configuration.
- `package.json` – Dependencies and scripts.
- `tslint.json` – TypeScript linting rules (if you're using TSLint).
- `src/` – Your source code lives here.

---

# ⚡ NPM Scripts

| Script             | Description                                                                 |
|--------------------|-----------------------------------------------------------------------------|
| `npm run dist`     | Compiles TypeScript files to JavaScript into the `dist` folder              |
| `npm run start:dev`| Runs the server in dev mode with `.env` support                             |
| `npm run start:watch` | Runs in dev mode with automatic reload on file changes                  |
| `npm run start:dist`| Compiles the code and runs the version inside the `dist` directory         |

---

# 👨‍💻 How to Use

### Requisitos

- [Git](https://git-scm.com)
- [Node.js v20+](https://nodejs.org/en/)
- [NPM v10+](https://nodejs.org/en/)

### Comandos

```bash
# Clone este repositório
git clone https://github.com/UpSnow/node-upsnow-boilerplate.git

# Acesse o diretório do projeto
cd node-upsnow-boilerplate

# Instale as dependências
npm install

# Execute em modo de desenvolvimento
npm run start:dev


