# React + TypeScript + Vite + Keycloak + TailwindCSS

Este é um projeto frontend criado com **React** e **TypeScript**, utilizando **Vite** para build e desenvolvimento rápido.  
A aplicação já está configurada com **autenticação via Keycloak**, incluindo funcionalidades de **login e logout**, além de possuir o **TailwindCSS instalado e pronto para uso**.

Este projeto serve como base para aplicações seguras com gerenciamento de autenticação e controle de acesso, com foco em produtividade e escalabilidade.

---

## Stack utilizada

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Keycloak](https://www.keycloak.org/)
- [TailwindCSS](https://tailwindcss.com/)

---

## Sobre o template base

Este template fornece uma configuração mínima para rodar React com Vite, suporte a HMR (Hot Module Replacement) e regras básicas de ESLint.

Atualmente, dois plugins oficiais estão disponíveis:

- `@vitejs/plugin-react` usa Babel para Fast Refresh  
- `@vitejs/plugin-react-swc` usa SWC para Fast Refresh

---

## Expandindo a configuração do ESLint

Se você estiver desenvolvendo uma aplicação para produção, recomenda-se atualizar a configuração para ativar regras de lint com verificação de tipo:

```ts
export default tseslint.config({
  extends: [
    // Remova ...tseslint.configs.recommended e substitua por:
    ...tseslint.configs.recommendedTypeChecked,
    // Opcionalmente, use para regras mais rígidas
    ...tseslint.configs.strictTypeChecked,
    // Adicionalmente, regras estilísticas
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

Você também pode instalar eslint-plugin-react-x e eslint-plugin-react-dom para regras específicas do React:

```ts
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
