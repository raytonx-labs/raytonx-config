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

2. Add lint-staged to package.json

    ```json
    // package.json

    ...
    // If you want to check only, you can use the following command
    "lint-staged": {
      "*.ts": "pnpm eslint",
      "*.js": "pnpm eslint",
      "*.tsx": "pnpm eslint",
      "*.jsx": "pnpm eslint"
    },
    // And you need change eslint config in eslint.config.mjs
    // rules: {
    //   "no-console": "error",
    //   semi: ["error", "always"],
    //   quotes: ["error", "single"],
    //   "@typescript-eslint/no-floating-promises": "error",
    //   ...prettier.rules,
    // },

    // If you want to fix automatically, you can use the following command
    "lint-staged": {
      "*.ts": "pnpm eslint --fix",
      "*.js": "pnpm eslint --fix",
      "*.tsx": "pnpm eslint --fix",
      "*.jsx": "pnpm eslint --fix"
    },
    ...
    ```

3. Configure `.husky/pre-commit` to run lint-staged

    ```shell
    // .husky/pre-commit

    // pull latest changes from remote
    git pull

    // fix all files that are staged
    npx lint-staged
    ```
