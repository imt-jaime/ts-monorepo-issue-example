# TS Monorrepo Issue Example

Repository created with the purpose to test a common typescript issue with monorepos.

## Repository Structure

workspace (ts-monorepo-issue-example)

- node_modules
  - module-b (linked)
- src
  - index.js
  - packages
    - module-b (linked globally)
      - node_modules
        - ts-typelib-example (v2.0.0)
        - module-a
          - node_modules
            - ts-typelib-example (v1.0.0)
          - src
          - package.json
      - src
      - package.json
    - ts-typelib-example
      - node_modules
      - src
      - package.json
- package.json

## Issue Description

When 2 [major versions](https://docs.npmjs.com/cli/version) of the same module (which changes a type) are installed in different packages, TypeScript cache does not make distinctions. It will take, the first module found as the only one module in the project ignoring [nodejs dependencies resolution standard](https://nodejs.org/api/modules.html#modules_loading_from_node_modules_folders) also explained in [TypeScript documentation](https://www.typescriptlang.org/docs/handbook/module-resolution.html#how-nodejs-resolves-modules).

This resolution works when the project is a monolith style application (single repository with only 1 package.json) where every dependency will be installed in only 1 version. Actually transpilers (like webpack), npmjs and nodejs also supports monorepos and is helpful while working with npm link.

## Test instructions

1. Clone repository
2. [Link module-b](https://docs.npmjs.com/cli/link) to the project (this step is to simulate we are working with this module in local repository)
3. Execute TypeScript compiler (npm run typescript)

A fail will appear in src/index.ts in the project. This fail is related to https://github.com/microsoft/TypeScript/issues/29221 in TypeScript official github.

## Module repositories

[ts-issue-module-a](https://github.com/imt-jaime/ts-issue-module-a)
[ts-issue-module-b](https://github.com/imt-jaime/ts-issue-module-b)
[ts-typelib-example](https://github.com/imt-jaime/ts-typelib-example)

## tsconfig configurations

Parent project:

```ts
{
  "exclude": ["node_modules"],
  "compilerOptions": {
    "target": "esnext",
    "moduleResolution": "node",
    "skipLibCheck": true,
    "declaration": true,
    "strict": true,
    "isolatedModules": false,
    "esModuleInterop": true,
    "jsx": "preserve",
    "module": "commonjs",
    "preserveSymlinks": true
  }
}
```

Modules:

```ts
{
  "exclude": ["node_modules"],
  "compilerOptions": {
    "target": "esnext",
    "moduleResolution": "node",
    "skipLibCheck": true,
    "declaration": true,
    "strict": true,
    "isolatedModules": false,
    "esModuleInterop": true,
    "jsx": "preserve",
    "module": "commonjs"
  }
}
```
