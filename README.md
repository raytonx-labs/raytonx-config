# RaytonX Config

## 1. Prettier + ESLint

```shell
pnpm install
```

## 2. husky + lint-staged

1. Initialize husky and lint-staged

    ```shell
    pnpm add -D husky lint-staged
    pnpm exec husky init
    ```

2. Configure `.husky/pre-commit` to run lint-staged

    ```shell
    // .husky/pre-commit
    pnpm eslint
    ```
