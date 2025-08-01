// @ts-check
import eslint from "@eslint/js";
import prettier from "eslint-config-prettier";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
  {
    ignores: ["eslint.config.mjs"],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  eslintPluginPrettierRecommended,
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
      },
      ecmaVersion: 5,
      sourceType: "module",
      parserOptions: {
        projectService: true,
        tsconfigRootDir: new URL(".", import.meta.url).pathname,
      },
    },
  },
  {
    rules: {
      "no-console": "error",
      semi: ["error", "always"],
      quotes: ["error", "single"],
      "@typescript-eslint/no-floating-promises": "error",
      ...prettier.rules,
    },
  }
);
